import { browser } from '../runtime/platform';
import { writable } from 'svelte/store';
const SESSION_ITEMS_KEY = 'badge-feedback:interacted';
const SESSION_SHOWN_KEY = 'badge-feedback:shown';
let promptLocked = false;
const CONSENT_KEY = 'cookie-consent';
function hasCookieConsent() {
    if (!browser)
        return false;
    try {
        return localStorage.getItem(CONSENT_KEY) === 'accepted';
    }
    catch {
        return false;
    }
}
function loadItems() {
    if (!browser)
        return [];
    try {
        const raw = sessionStorage.getItem(SESSION_ITEMS_KEY);
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed))
            return [];
        // Backwards compatibility: older versions stored a string[] of ids.
        if (parsed.length > 0 && typeof parsed[0] === 'string') {
            return parsed
                .map((v) => ({
                id: String(v),
                label: null,
                render: 'normal',
                variant: 'filled',
                intent: null,
                icon: null,
                bigStyle: null,
                bigVariant: null,
                bigSize: null,
                sealVariant: null,
                sealSize: null,
                sealFontScale: null,
                rotationMs: null
            }))
                .filter((v) => Boolean(v.id));
        }
        return parsed
            .map((v) => {
            const id = v && typeof v.id !== 'undefined' ? String(v.id).trim() : '';
            if (!id)
                return null;
            const label = v && typeof v.label === 'string' ? v.label.trim() : null;
            const render = v && (v.render === 'mini' || v.render === 'normal' || v.render === 'big') ? v.render : 'normal';
            const variant = v && (v.variant === 'filled' || v.variant === 'outlined') ? v.variant : 'filled';
            const intent = v && (v.intent === 'CONFIRMATION' || v.intent === 'INFORMATION' || v.intent === 'WARNING') ? v.intent : null;
            const icon = v && typeof v.icon === 'string' ? v.icon : null;
            const bigStyle = v && (v.bigStyle === 'round' || v.bigStyle === 'seal') ? v.bigStyle : null;
            const bigVariant = v && (v.bigVariant === 'solid' || v.bigVariant === 'ring' || v.bigVariant === 'double-ring' || v.bigVariant === 'stamp' || v.bigVariant === 'glow')
                ? v.bigVariant
                : null;
            const bigSize = v && typeof v.bigSize === 'number' && Number.isFinite(v.bigSize) ? v.bigSize : null;
            const sealVariant = v && (v.sealVariant === 'outlined' || v.sealVariant === 'filled') ? v.sealVariant : null;
            const sealSize = v && typeof v.sealSize === 'number' && Number.isFinite(v.sealSize) ? v.sealSize : null;
            const sealFontScale = v && typeof v.sealFontScale === 'number' && Number.isFinite(v.sealFontScale) ? v.sealFontScale : null;
            const rotationMs = v && typeof v.rotationMs === 'number' && Number.isFinite(v.rotationMs) ? v.rotationMs : null;
            return { id, label: label || null, render, variant, intent, icon, bigStyle, bigVariant, bigSize, sealVariant, sealSize, sealFontScale, rotationMs };
        })
            .filter(Boolean);
    }
    catch {
        return [];
    }
}
function saveItems(items) {
    if (!browser)
        return;
    try {
        sessionStorage.setItem(SESSION_ITEMS_KEY, JSON.stringify(items));
    }
    catch {
        // ignore storage issues
    }
}
function isShown() {
    if (!browser)
        return false;
    try {
        return sessionStorage.getItem(SESSION_SHOWN_KEY) === 'true';
    }
    catch {
        return false;
    }
}
export function markBadgeFeedbackShown() {
    if (!browser)
        return;
    promptLocked = true;
    try {
        sessionStorage.setItem(SESSION_SHOWN_KEY, 'true');
    }
    catch {
        // ignore
    }
}
export const badgeFeedback = writable({
    open: false,
    interactedBadges: [],
    threshold: 3
});
export function recordBadgeInteraction(interaction, threshold = 3) {
    if (!browser)
        return;
    if (!hasCookieConsent())
        return;
    if (promptLocked)
        return;
    const normalized = String(interaction?.id ?? '').trim();
    if (!normalized)
        return;
    if (isShown())
        return;
    const items = loadItems();
    const exists = items.some((x) => x.id === normalized);
    if (exists)
        return;
    const label = typeof interaction.label === 'string' ? interaction.label.trim() : '';
    const next = items.concat([
        {
            id: normalized,
            label: label || null,
            render: interaction.render,
            variant: interaction.variant,
            intent: interaction.intent,
            icon: interaction.icon,
            bigStyle: interaction.bigStyle,
            bigVariant: interaction.bigVariant,
            bigSize: interaction.bigSize,
            sealVariant: interaction.sealVariant,
            sealSize: interaction.sealSize,
            sealFontScale: interaction.sealFontScale,
            rotationMs: interaction.rotationMs
        }
    ]);
    saveItems(next);
    if (next.length >= threshold) {
        promptLocked = true;
        badgeFeedback.set({ open: true, interactedBadges: next, threshold });
    }
    else {
        badgeFeedback.set({ open: false, interactedBadges: next, threshold });
    }
}

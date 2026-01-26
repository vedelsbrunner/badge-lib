export const browser = typeof window !== 'undefined';
export function getPathname() {
    if (!browser)
        return '';
    try {
        return window.location?.pathname ?? '';
    }
    catch {
        return '';
    }
}
/**
 * Best-effort base path for internal links.
 * - Vite/SvelteKit: `import.meta.env.BASE_URL`
 * - Fallback: `<base href="...">` if present
 */
export function getBasePath() {
    const baseUrl = import.meta?.env?.BASE_URL;
    if (typeof baseUrl === 'string') {
        const trimmed = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
        return trimmed === '/' ? '' : trimmed;
    }
    if (!browser)
        return '';
    try {
        const href = document.querySelector('base')?.getAttribute('href') ?? '';
        if (!href)
            return '';
        const withoutTrailing = href.endsWith('/') ? href.slice(0, -1) : href;
        return withoutTrailing === '/' ? '' : withoutTrailing;
    }
    catch {
        return '';
    }
}

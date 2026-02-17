import { SvelteComponent } from "svelte";
export type BadgeIconName = 'Confirmation' | 'Warning' | 'Info' | 'InfoCircle' | 'Interactive' | 'Expand' | 'OpenData' | 'badge-check' | 'Download' | 'ExternalLink';
export type BadgeIconBgShape = 'round' | 'square';
declare const __propDef: {
    props: {
        name: BadgeIconName;
        size?: number;
        bg?: string | null;
        fg?: string | null;
        bgOpacity?: number;
        bgShape?: BadgeIconBgShape;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BadgeIconProps = typeof __propDef.props;
export type BadgeIconEvents = typeof __propDef.events;
export type BadgeIconSlots = typeof __propDef.slots;
export default class BadgeIcon extends SvelteComponent<BadgeIconProps, BadgeIconEvents, BadgeIconSlots> {
}
export {};

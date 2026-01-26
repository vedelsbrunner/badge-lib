import { SvelteComponent } from "svelte";
export type BadgeIconName = 'Confirmation' | 'Warning' | 'Info' | 'Interactive' | 'badge-check';
declare const __propDef: {
    props: {
        name: BadgeIconName;
        size?: number;
        bg?: string | null;
        fg?: string | null;
        bgOpacity?: number;
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

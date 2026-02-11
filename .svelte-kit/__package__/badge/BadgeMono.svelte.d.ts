import { SvelteComponent } from "svelte";
export type MonoVariant = 'filled' | 'outlined';
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        variant?: MonoVariant;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BadgeMonoProps = typeof __propDef.props;
export type BadgeMonoEvents = typeof __propDef.events;
export type BadgeMonoSlots = typeof __propDef.slots;
export default class BadgeMono extends SvelteComponent<BadgeMonoProps, BadgeMonoEvents, BadgeMonoSlots> {
}
export {};

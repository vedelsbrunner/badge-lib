export declare const browser: boolean;
export declare function getPathname(): string;
/**
 * Best-effort base path for internal links.
 * - Vite/SvelteKit: `import.meta.env.BASE_URL`
 * - Fallback: `<base href="...">` if present
 */
export declare function getBasePath(): string;

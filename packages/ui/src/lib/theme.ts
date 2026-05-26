export type ColorMode = 'light' | 'dark';

export const STORAGE_KEY = 'site-color-mode';

/** Modo cuando no hay preferencia guardada */
export const DEFAULT_COLOR_MODE: ColorMode = 'dark';

export const COLOR_SWAP = {
	duration: 200,
	timingFunction: 'cubic-bezier(0.41, 0.1, 0.13, 1)',
} as const;

export function isDarkMode(mode: ColorMode): boolean {
	return mode === 'dark';
}

/** Aplica light/dark usando la clase `.dark` definida en globals.css */
export function applyColorMode(root: HTMLElement, mode: ColorMode): void {
	root.classList.toggle('dark', isDarkMode(mode));
	root.setAttribute('data-color-mode', mode);
	root.style.colorScheme = mode;
}

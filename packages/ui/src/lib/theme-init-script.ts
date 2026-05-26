import { DEFAULT_COLOR_MODE, STORAGE_KEY } from './theme';

/** Synchronous head script: applies theme before first paint (no FOUC). */
export function getThemeInitInlineScript(): string {
	const payload = JSON.stringify({
		sk: STORAGE_KEY,
		defaultMode: DEFAULT_COLOR_MODE,
	});

	return `(function(){var d=${payload};function g(){try{var s=localStorage.getItem(d.sk);if(s==="light"||s==="dark")return s}catch(e){}return d.defaultMode}function a(m){var r=document.documentElement;r.classList.toggle("dark",m==="dark");r.setAttribute("data-color-mode",m);r.style.colorScheme=m}a(g())})();`;
}

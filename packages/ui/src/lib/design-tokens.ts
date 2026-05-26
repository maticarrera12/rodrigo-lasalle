export const SERIF_STACK = {
	ebgaramond: '"EB Garamond", Georgia, serif',
	cormorant: '"Cormorant Garamond", Georgia, serif',
	baskerville: '"Libre Baskerville", Georgia, serif',
} as const;

export type SerifKey = keyof typeof SERIF_STACK;

/** Per-variant default accent + curated palette options (light mode). */
export const VARIANT_ACCENTS = {
	calido: ['#8B5A2B', '#1F3A66', '#6C4A2A', '#A06236'],
	sobrio: ['#2E3A4A', '#1B1F26', '#4A5565', '#5C6470'],
} as const;

/** Accent palette options adjusted for dark backgrounds. */
export const VARIANT_ACCENTS_DARK = {
	calido: ['#C9925E', '#5B7DB8', '#A87850', '#C4885C'],
	sobrio: ['#7A8899', '#525865', '#8B95A3', '#A0A8B4'],
} as const;

export type VariantKey = keyof typeof VARIANT_ACCENTS;

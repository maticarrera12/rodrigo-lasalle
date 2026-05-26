export const SERIF_STACK = {
	ebgaramond: '"EB Garamond", Georgia, serif',
	cormorant: '"Cormorant Garamond", Georgia, serif',
	baskerville: '"Libre Baskerville", Georgia, serif',
} as const;

export type SerifKey = keyof typeof SERIF_STACK;

/** Per-variant default accent + curated palette options (light mode). */
export const VARIANT_ACCENTS = {
	calido: ['#0F1929', '#0D1520', '#8B7149', '#5E6878'],
	sobrio: ['#0F1929', '#0D1520', '#8B7149', '#5E6878'],
} as const;

/** Same palette inverted for dark backgrounds. */
export const VARIANT_ACCENTS_DARK = {
	calido: ['#F5F1E6', '#F5F1E6', '#B8956A', '#8A939E'],
	sobrio: ['#F5F1E6', '#F5F1E6', '#B8956A', '#8A939E'],
} as const;

export type VariantKey = keyof typeof VARIANT_ACCENTS;

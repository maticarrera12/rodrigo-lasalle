export const SERIF_STACK = {
	ebgaramond: '"EB Garamond", Georgia, serif',
	cormorant: '"Cormorant Garamond", Georgia, serif',
	baskerville: '"Libre Baskerville", Georgia, serif',
} as const;

export type SerifKey = keyof typeof SERIF_STACK;

/** gun-powder + magic-mint palette (light mode). */
export const PALETTE = {
	gunPowder: {
		50: '#F5F6F9',
		100: '#E7E9F2',
		200: '#D5D9E8',
		300: '#B8C0D8',
		400: '#96A0C4',
		500: '#7C85B5',
		600: '#6A6FA6',
		700: '#5E6097',
		800: '#51517C',
		900: '#3C3D59',
		950: '#2C2C3F',
	},
	magicMint: {
		50: '#EDFCF6',
		100: '#D4F7E8',
		200: '#A0ECD0',
		300: '#75E0BF',
		400: '#3EC9A3',
		500: '#1AAF8B',
		600: '#0E8D71',
		700: '#0B715D',
		800: '#0B5A4B',
		900: '#0A4A3F',
		950: '#052924',
	},
} as const;

/** Semantic site tokens mapped to the palette (light mode). */
export const SEMANTIC_TOKENS = {
	primary: PALETTE.gunPowder[900],
	surface: PALETTE.gunPowder[950],
	accent: PALETTE.gunPowder[700],
	muted: PALETTE.gunPowder[500],
} as const;

/** Same tokens inverted for dark backgrounds. */
export const SEMANTIC_TOKENS_DARK = {
	primary: PALETTE.gunPowder[50],
	surface: PALETTE.gunPowder[100],
	accent: PALETTE.gunPowder[300],
	muted: PALETTE.gunPowder[400],
} as const;

/** @deprecated Use SEMANTIC_TOKENS — kept for backward compatibility */
export const VARIANT_ACCENTS = {
	calido: [
		SEMANTIC_TOKENS.primary,
		SEMANTIC_TOKENS.surface,
		SEMANTIC_TOKENS.accent,
		SEMANTIC_TOKENS.muted,
	],
	sobrio: [
		SEMANTIC_TOKENS.primary,
		SEMANTIC_TOKENS.surface,
		SEMANTIC_TOKENS.accent,
		SEMANTIC_TOKENS.muted,
	],
} as const;

/** @deprecated Use SEMANTIC_TOKENS_DARK */
export const VARIANT_ACCENTS_DARK = {
	calido: [
		SEMANTIC_TOKENS_DARK.primary,
		SEMANTIC_TOKENS_DARK.surface,
		SEMANTIC_TOKENS_DARK.accent,
		SEMANTIC_TOKENS_DARK.muted,
	],
	sobrio: [
		SEMANTIC_TOKENS_DARK.primary,
		SEMANTIC_TOKENS_DARK.surface,
		SEMANTIC_TOKENS_DARK.accent,
		SEMANTIC_TOKENS_DARK.muted,
	],
} as const;

export type VariantKey = keyof typeof VARIANT_ACCENTS;

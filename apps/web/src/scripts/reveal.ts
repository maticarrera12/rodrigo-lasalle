export function initReveal(): void {
	const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
	if (!elements.length) return;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;

				const el = entry.target as HTMLElement;
				const delay = Number(el.dataset.revealDelay ?? 0);

				window.setTimeout(() => {
					el.classList.add('is-in');
				}, delay);

				observer.unobserve(el);
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
	);

	for (const el of elements) observer.observe(el);
}

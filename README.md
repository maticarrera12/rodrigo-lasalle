# Estudio Lasalle

Marketing site for Estudio Jurídico Lasalle, a law firm in Zona Norte, Buenos Aires. Content is in Spanish.

Built with Astro 5, React 19, Tailwind CSS 4 and shadcn/ui, in a Turborepo + pnpm monorepo.

## Screenshots

![Home, hero](docs/screenshots/hero.jpg)

| Testimonials | FAQ |
| --- | --- |
| ![Testimonials](docs/screenshots/testimonios.jpg) | ![FAQ](docs/screenshots/preguntas.jpg) |
| **Contact** | **Dark mode** |
| ![Contact](docs/screenshots/contacto.jpg) | ![Hero, dark mode](docs/screenshots/hero-dark.jpg) |

### Pages

| Specialties | Specialty detail |
| --- | --- |
| ![Specialties](docs/screenshots/especialidades.jpg) | ![Specialty detail](docs/screenshots/especialidad-detalle.jpg) |
| **Advisory plans** | **Success stories** |
| ![Advisory plans](docs/screenshots/asesoramiento.jpg) | ![Success stories](docs/screenshots/casos-de-exito.jpg) |

![About](docs/screenshots/conocenos.jpg)

### Mobile

<p>
  <img src="docs/screenshots/mobile-hero.jpg" alt="Mobile hero" width="240">
  <img src="docs/screenshots/mobile-especialidades.jpg" alt="Mobile specialties" width="240">
  <img src="docs/screenshots/mobile-asesoramiento.jpg" alt="Mobile advisory plans" width="240">
</p>

## Routes

| Route | Description |
| --- | --- |
| `/` | Hero, testimonials, FAQ and contact |
| `/conocenos` | About the firm |
| `/especialidades` | Practice areas |
| `/especialidades/[slug]` | One page per practice area |
| `/asesoramiento` | Advisory plans, with tabs |
| `/casos-de-exito` | Success stories |

## Structure

- `apps/web`: Astro site (pages, components, content in `src/const.ts`)
- `packages/ui`: shared UI, theme tokens and global styles (`src/styles/globals.css`)

## Getting started

Requires Node 20+ and pnpm.

```bash
pnpm install
pnpm dev        # dev server (Astro defaults to http://localhost:4321)
pnpm build      # production build into apps/web/dist
pnpm typecheck
pnpm lint
```

## Notes

- **Layout:** every page renders through `apps/web/src/layouts/main.astro`, which takes `title` and `description` props.
- **Theme:** light and dark, stored in `localStorage` under `site-color-mode`.
- **Motion:** scroll reveals use `data-reveal` plus the `.reveal` class (`src/scripts/reveal.ts`). All motion respects `prefers-reduced-motion`.
- **Adding shadcn components:** `npx shadcn@latest add <component> -c apps/web`

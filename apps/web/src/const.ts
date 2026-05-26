// Site-wide constants
export const SITE_TITLE = 'Matías Carrera';
export const SITE_DESCRIPTION = 'Desarrollador Full Stack. Diseñador convertido a developer. Construyo aplicaciones web con React, Next.js y Astro.';
export const SITE_URL = 'https://mcarreradev.com';

/** Imagen para Open Graph / Twitter Cards (ruta en public/) */
export const OG_IMAGE = '/images/op-graph.png';
export const OG_IMAGE_WIDTH = 3024;
export const OG_IMAGE_HEIGHT = 1656;

/** Incrementá al cambiar favicon.ico para forzar recarga en navegadores */
export const FAVICON_VERSION = '2';

export const AUTHOR = {
  name: 'Matías Carrera',
  email: 'mcarreradev12@gmail.com',
  location: 'Buenos Aires, Argentina',
  role: 'Full Stack Developer',
  available: true, // controlás el badge de disponibilidad desde acá
  photo: '/images/profile.png',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/maticarrera12',
  linkedin: 'https://www.linkedin.com/in/matias-carrera/',
  twitter: 'https://x.com/mcarreradev',
  email: 'mailto:mcarreradev12@gmail.com',
};

export const NAV_LINKS = [
  { href: '/conoceme', label: 'Conoceme' },
  { href: '/especialidades', label: 'Especialidades' },
  { href: '/casos-de-exito', label: 'Casos de exito' },
];

export const ESTABLISHED_YEAR = 2020;
export const WHATSAPP_URL = 'https://wa.me/';
export const CONSULTATION_URL = '/#contacto';

export const HERO_STATS = [
  {
    label: 'Trayectoria',
    highlight: '10 años',
    description: 'desde 2015, ejercicio independiente',
  },
  {
    label: 'Casos atendidos',
    highlight: '+ 320',
    description: 'familia, laboral, sucesiones',
  },
  {
    label: 'Matrícula',
    highlight: 'CASI Tomo IX',
    description: 'Colegio de Abogados de San Isidro',
  },
  {
    label: 'Forma de trabajo',
    highlight: 'Presencial',
    description: 'y por videollamada · Argentina',
  },
] as const;
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

export const AREAS = [
  {
    n: '01',
    t: 'Derecho de familia',
    d: 'Divorcios, tenencia, cuota alimentaria, régimen de comunicación, uniones convivenciales. Acompañamiento sereno en momentos que rara vez lo son.',
    icon: 'mdi:account-heart-outline',
  },
  {
    n: '02',
    t: 'Sucesiones y herencias',
    d: 'Cuando alguien fallece y hay que ordenar lo que queda: testamentos, sucesiones ab intestato, particiones. Trato humano para una etapa difícil.',
    icon: 'mdi:file-document-outline',
  },
  {
    n: '03',
    t: 'Derecho laboral',
    d: 'Despidos, indemnizaciones, accidentes de trabajo, registración laboral. Defensa de trabajadores y asesoramiento a pequeñas empresas.',
    icon: 'mdi:briefcase-outline',
  },
  {
    n: '04',
    t: 'Derecho civil y contratos',
    d: 'Contratos, daños y perjuicios, locaciones, defensa del consumidor. Revisar antes, no lamentar después. Letra chica explicada en lenguaje claro.',
    icon: 'mdi:file-sign',
  },
  {
    n: '05',
    t: 'Derecho inmobiliario',
    d: 'Compraventas, alquileres, escrituras, conflictos de propiedad. Asesoramiento previo a firmar y representación si las cosas se complican.',
    icon: 'mdi:home-outline',
  },
  {
    n: '06',
    t: 'Mediación y acuerdos',
    d: 'Llegar a un acuerdo bueno suele ser mejor que ganar un juicio largo. Mediación prejudicial, negociación y resolución de conflictos.',
    icon: 'mdi:handshake-outline',
  },
] as const;

export const CASOS = [
  {
    cat: 'Derecho de familia',
    yr: '2024',
    titleHtml: 'Una tenencia que <em>parecía</em> imposible.',
    lede: 'Una madre necesitaba volver a tener contacto con sus hijos después de tres años de bloqueo del otro progenitor. El expediente parecía cerrado.',
    rows: [
      ['Contexto', 'Tres años sin régimen de comunicación efectivo, dos pericias psicológicas vencidas, dos abogados anteriores que habían bajado los brazos. La clienta llegó pensando que ya no había nada por hacer.'],
      ['Desafío', 'Reabrir el caso sin caer en las disputas anteriores. Mostrarle al juzgado que existía una vía de reencuentro gradual, asistida y segura para los chicos.'],
      ['Estrategia', 'Pedido de nueva pericia interdisciplinaria, plan de revinculación con acompañamiento terapéutico, presentación de un cronograma realista de tres etapas. Mediar antes de litigar.'],
      ['Resultado', 'A los siete meses, régimen de comunicación restablecido, sostenido y voluntario. Hoy madre e hijos pasan los fines de semana juntos.'],
    ],
  },
  {
    cat: 'Sucesión compleja',
    yr: '2023',
    titleHtml: 'Cuatro hermanos, una casa, treinta años sin sucesión.',
    lede: 'La casa de los padres estaba inhabitable desde hacía una década. Una sucesión que nadie quería empezar porque ningún hermano se hablaba con los otros.',
    rows: [
      ['Contexto', 'Padre fallecido en 1996, madre en 2003. Cuatro hermanos, conflictos viejos, la casa vacía y deteriorándose. Impuestos atrasados y un comprador interesado que se cansó de esperar.'],
      ['Desafío', 'Lograr un acuerdo entre cuatro personas que no se hablaban desde hacía años, sin convertir la sucesión en otro frente de pelea familiar.'],
      ['Estrategia', 'Reuniones individuales con cada heredero antes de cualquier audiencia. Propuesta de partición con tasación independiente y compensación por el hermano que había mantenido los impuestos al día.'],
      ['Resultado', 'Partición homologada en once meses, venta concretada al año, los cuatro hermanos firmando en la misma escribanía. Volvieron a almorzar juntos en navidad.'],
    ],
  },
  {
    cat: 'Derecho laboral',
    yr: '2024',
    titleHtml: 'Un despido <em>encubierto</em> que terminó en convenio.',
    lede: 'Una empleada con quince años en una pyme empezó a recibir presiones para que renunciara. Decidió no firmar nada y consultar antes.',
    rows: [
      ['Contexto', 'Cambio de turnos sin justificación, traslado de sucursal a 35 km, reducción de comisiones. El típico goteo para forzar una renuncia y ahorrarse la indemnización.'],
      ['Desafío', 'Construir prueba documental antes de que la empleadora formalizara nada. Que la clienta pudiera seguir trabajando sin romper la relación de un día para el otro.'],
      ['Estrategia', 'Intercambio telegráfico ordenado, registro de cada cambio unilateral, intimaciones precisas. Cuando llegó el despido indirecto, el expediente estaba armado.'],
      ['Resultado', 'Acuerdo conciliatorio prejudicial por el equivalente al 92% del reclamo. Cobrado en sesenta días, sin juicio.'],
    ],
  },
] as const;

export const ABOUT = {
  photo: '/images/hero-placeholder.svg',
  photoCaption: ['RL · San Fernando', String(new Date().getFullYear())],
  qa: [
    {
      q: '¿Por qué te dedicás al derecho?',
      aHtml:
        'Porque me interesan las <em>historias</em> de las personas. Cada expediente es alguien tratando de resolver algo que lo desvela. Mi trabajo es traducir eso a un lenguaje que el sistema entienda, sin que pierda lo que tiene de humano.',
    },
    {
      q: '¿Cómo describirías tu forma de trabajar?',
      aHtml:
        'Tranquila. Detallista. Honesta. Si un caso no conviene ir a juicio, te lo digo. Si conviene esperar, también. Trato de no inflar expectativas ni hacerme el que sabe más de lo que sé.',
    },
    {
      q: '¿Qué buscás en la primera consulta?',
      aHtml:
        'Que te vayas con dos o tres cosas claras: qué se puede hacer, qué cuesta, qué tarda. Aunque después decidas no contratarme.',
    },
  ],
  pull:
    'No vendo certezas. Vendo claridad, criterio y la verdad sobre lo que se puede hacer.',
  bio: [
    { k: 'Formación', v: 'UBA — Abogacía', note: '2009 · 2014' },
    { k: 'Especialización', v: 'Derecho de familia', note: 'USAL · posgrado, 2018' },
    { k: 'Matrícula', v: 'CASI · T. IX F. 421', note: 'San Isidro, Buenos Aires' },
  ],
} as const;

export const TESTIMONIOS = [
  {
    q: 'Rodrigo nos explicó la sucesión como si estuviéramos en la cocina. Hacía años que nadie nos hablaba en castellano. Es la primera vez que entendí qué firmaba.',
    n: 'María Inés C.',
    r: 'Cliente · Familia y sucesiones',
    avatar: '/images/avatars/t1.svg',
  },
  {
    q: 'Esperaba un abogado que me hiciera sentir un número. Me encontré con alguien que se acordaba de los detalles del caso entre llamada y llamada. Eso no se compra.',
    n: 'Federico A.',
    r: 'Cliente · Derecho laboral',
    avatar: '/images/avatars/t3.svg',
  },
  {
    q: 'Le consulté antes de firmar un contrato. Me lo trajo marcado a mano, con cinco cosas que no entendía. Me ahorró un problema serio. Y plata.',
    n: 'Lucía V.',
    r: 'Cliente · Civil y contratos',
    avatar: '/images/avatars/t2.svg',
  },
  {
    q: 'Lo que más valoro es que cuando me dijo que no me convenía ir a juicio, le creí. Y tenía razón. Hay abogados que te empujan al juzgado; él no.',
    n: 'Hernán P.',
    r: 'Cliente · Mediación',
    avatar: '/images/avatars/t4.svg',
  },
] as const;
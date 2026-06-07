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
  { href: '/conocenos', label: 'Conocenos' },
  { href: '/especialidades', label: 'Especialidades' },
  // { href: '/casos-de-exito', label: 'Casos de exito' },
  { href: '/asesoramiento', label: 'Asesoramiento' },
];

export const ESTABLISHED_YEAR = 2020;
export const WHATSAPP_URL = 'https://wa.me/';
export const CONSULTATION_URL = '/#contacto';

export const HERO_STATS = [
  {
    label: 'Experiencia',
    highlight: '+25 años',
    description: 'trayectoria profesional',
  },
  {
    label: 'Ámbito',
    highlight: 'Privado',
    description: 'Poder Judicial y Adm. Pública',
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
];

export interface Area {
  n: string;
  t: string;
  d: string;
  icon: string;
  slug: string;
  descripcionLarga: string;
  servicios: string[];
}

export const AREAS: Area[] = [
  {
    n: "01",
    t: "Derecho Inmobiliario",
    d: "Asesoramiento integral en operaciones inmobiliarias, conflictos de propiedad y regularización dominial.",
    icon: "mdi:home-outline",
    slug: "derecho-inmobiliario",
    descripcionLarga: "Asesoramos en la compra, venta, alquiler y regularización de inmuebles, garantizando operaciones seguras y minimizando riesgos legales.",
    servicios: [
      "Boletos de compraventa",
      "Estudios de títulos",
      "Contratos de locación",
      "Cobro de alquileres",
      "Desalojos",
      "Reivindicaciones",
      "Usucapiones",
      "Regularización dominial",
      "Cesiones de derechos",
      "Fideicomisos",
      "Due diligence inmobiliaria",
    ],
  },
  {
    n: "02",
    t: "Derecho de Familia",
    d: "Acompañamos a nuestros clientes en los momentos más importantes de su vida personal y familiar.",
    icon: "mdi:account-heart-outline",
    slug: "derecho-de-familia",
    descripcionLarga: "Acompañamos a nuestros clientes en los momentos más importantes de su vida personal y familiar, brindando soluciones jurídicas sólidas y humanas.",
    servicios: [
      "Divorcios",
      "Liquidación de bienes",
      "Compensaciones económicas",
      "Cuotas alimentarias",
      "Régimen de comunicación",
      "Cuidado personal de hijos",
      "Adopciones",
      "Filiación",
      "Impugnación de paternidad",
      "Violencia familiar",
      "Uniones convivenciales",
      "Restricciones a la capacidad y sistemas de apoyo",
    ],
  },
  {
    n: "03",
    t: "Sucesiones y Planificación Patrimonial",
    d: "Asesoramiento integral en procesos sucesorios y transmisión del patrimonio familiar.",
    icon: "mdi:file-document-outline",
    slug: "sucesiones-y-planificacion-patrimonial",
    descripcionLarga: "Brindamos asesoramiento integral en procesos sucesorios, acompañando a nuestros clientes desde el inicio del trámite hasta la inscripción definitiva de los bienes a nombre de los herederos. Intervenimos en sucesiones testamentarias e intestadas, declaratorias de herederos, inscripción de inmuebles, automotores, acciones y demás bienes registrables.",
    servicios: [
      "Declaratoria de herederos",
      "Sucesiones con y sin testamento",
      "Inscripción de inmuebles y automotores",
      "Cesión de derechos hereditarios",
      "Partición de bienes",
      "Acuerdos entre herederos",
      "Planificación sucesoria y patrimonial",
    ],
  },
  {
    n: "04",
    t: "Daños y Perjuicios",
    d: "Representamos a personas que han sufrido daños personales o patrimoniales y buscan una reparación integral.",
    icon: "mdi:file-sign",
    slug: "danos-y-perjuicios",
    descripcionLarga: "Defendemos los derechos de quienes han sufrido daños personales o patrimoniales como consecuencia de hechos ilícitos, incumplimientos contractuales o accidentes. Trabajamos para obtener una reparación económica integral que contemple todos los perjuicios sufridos.",
    servicios: [
      "Accidentes de tránsito",
      "Mala praxis profesional",
      "Responsabilidad médica",
      "Daños ocasionados por terceros",
      "Accidentes en establecimientos comerciales",
      "Incumplimientos contractuales",
      "Daño moral y psicológico",
    ],
  },
  {
    n: "05",
    t: "Derecho Laboral",
    d: "Brindamos asesoramiento tanto a trabajadores como a empleadores.",
    icon: "mdi:briefcase-outline",
    slug: "derecho-laboral",
    descripcionLarga: "Representamos tanto a trabajadores como a empleadores en conflictos laborales, brindando asesoramiento preventivo y litigioso. Buscamos proteger los derechos de nuestros clientes mediante estrategias jurídicas sólidas y eficientes.",
    servicios: [
      "Despidos con y sin causa",
      "Indemnizaciones laborales",
      "Trabajo no registrado",
      "Diferencias salariales",
      "Accidentes de trabajo",
      "Acoso laboral",
      "Negociaciones y acuerdos",
    ],
  },
  {
    n: "06",
    t: "Mediación y Acuerdos",
    d: "Facilitamos acuerdos entre las partes en conflicto mediante la mediación prejudicial y la negociación directa.",
    icon: "mdi:handshake-outline",
    slug: "mediacion-y-acuerdos",
    descripcionLarga: "Facilitamos acuerdos entre las partes en conflicto mediante la mediación prejudicial y la negociación directa, evitando procesos judiciales largos y costosos.",
    servicios: [
      "Mediación prejudicial obligatoria",
      "Negociación y resolución de conflictos",
      "Acuerdos extrajudiciales",
      "Convenios de pago",
      "Mediación familiar",
      "Mediación en conflictos vecinales y comerciales",
    ],
  },
  {
    n: "07",
    t: "Amparos y Procesos Urgentes",
    d: "Intervenimos en situaciones que requieren una respuesta judicial inmediata.",
    icon: "mdi:alert-circle-outline",
    slug: "amparos",
    descripcionLarga: "Cuando un derecho fundamental se encuentra amenazado o vulnerado, actuamos de manera inmediata mediante acciones de amparo para obtener soluciones rápidas y efectivas. Nuestra experiencia nos permite intervenir con celeridad en situaciones que requieren una respuesta judicial urgente.",
    servicios: [
      "Amparos de salud",
      "Cobertura médica",
      "Medicamentos de alto costo",
      "Discapacidad",
      "Educación",
      "Derechos constitucionales",
      "Actuaciones contra organismos públicos",
    ],
  },
  {
    n: "08",
    t: "Cobro de Deudas y Ejecuciones",
    d: "Desarrollamos estrategias efectivas para la recuperación de créditos.",
    icon: "mdi:cash-multiple",
    slug: "cobro-de-deudas",
    descripcionLarga: "Asistimos a particulares, comerciantes y empresas en la recuperación efectiva de créditos impagos. Implementamos estrategias preventivas y de cobranza que permiten maximizar las posibilidades de recupero, procurando soluciones rápidas y eficientes.",
    servicios: [
      "Intimaciones de pago",
      "Cartas documento",
      "Ejecución de pagarés y cheques",
      "Cobro de facturas impagas",
      "Reconocimientos de deuda",
      "Acuerdos de refinanciación",
      "Ejecuciones judiciales",
    ],
  },
];

export const WHY_CHOOSE_US: string[] = [
  "Atención personalizada",
  "Más de 25 años de experiencia profesional",
  "Estrategias jurídicas diseñadas para cada caso",
  "Comunicación clara y permanente",
  "Defensa firme de los intereses de nuestros clientes",
  "Soluciones rápidas, eficientes y orientadas a resultados",
];

export interface AbonoServicio {
  titulo: string;
  items: string[];
}

export interface Abono {
  id: string;
  label: string;
  bajada: string;
  incluye: AbonoServicio[];
  beneficios: string[];
  cierre: string;
}

export const ABONOS: Abono[] = [
  {
    id: "inmobiliarias",
    label: "Inmobiliarias",
    bajada: "El respaldo legal que su inmobiliaria necesita todos los días. Nos convertimos en el departamento jurídico externo de su inmobiliaria, acompañando cada operación desde la reserva hasta la escrituración, y cada locación desde la firma del contrato hasta su finalización.",
    incluye: [
      { titulo: "Asesoramiento permanente", items: ["Consultas legales ilimitadas sobre cuestiones inmobiliarias, contractuales, sucesorias, societarias y registrales."] },
      { titulo: "Revisión de documentación", items: ["Análisis de títulos de propiedad, informes registrales, autorizaciones de venta, poderes, sucesiones, cesiones de derechos, fideicomisos y demás documentación necesaria."] },
      { titulo: "Contratos y documentación", items: ["Reservas de compra", "Boletos de compraventa", "Contratos de locación", "Convenios de desocupación", "Cesiones de derechos", "Autorizaciones de venta", "Reconocimientos de deuda", "Acuerdos extrajudiciales"] },
      { titulo: "Locaciones y alquileres", items: ["Reclamo de alquileres impagos", "Intimaciones", "Cobro de expensas", "Ejecución de garantías", "Recuperación de inmuebles", "Desalojos"] },
      { titulo: "Operaciones complejas", items: ["Sucesiones", "Usucapiones", "Bienes gananciales", "Divorcios", "Fideicomisos", "Propiedades con conflictos de dominio", "Inmuebles con medidas cautelares o embargos"] },
      { titulo: "Representación judicial", items: ["Desalojos", "Cobro de alquileres", "Ejecuciones", "Reivindicaciones", "Usucapiones", "Conflictos contractuales", "Daños vinculados con operaciones inmobiliarias"] },
    ],
    beneficios: [
      "Mayor seguridad jurídica en cada operación",
      "Reducción de riesgos y contingencias legales",
      "Respuesta rápida ante consultas de corredores y clientes",
      "Mejora de la calidad profesional del servicio brindado",
      "Incremento de la confianza de compradores, vendedores, locadores e inquilinos",
      "Acompañamiento permanente por profesionales especializados en derecho inmobiliario",
    ],
    cierre: "Una inmobiliaria vende propiedades. Nosotros protegemos cada operación.",
  },
  {
    id: "consorcios",
    label: "Consorcios",
    bajada: "Asesoramiento legal permanente para administradores y consorcios. Actuamos como el departamento legal externo del consorcio, acompañando a la administración en la toma de decisiones y en la defensa de los intereses de la comunidad.",
    incluye: [
      { titulo: "Cobro de expensas", items: ["Intimaciones de pago", "Acuerdos extrajudiciales", "Ejecución judicial de expensas", "Seguimiento integral de la cobranza"] },
      { titulo: "Propiedad horizontal", items: ["Interpretación y aplicación del Reglamento de Copropiedad", "Análisis de derechos y obligaciones de propietarios e inquilinos", "Conflictos entre vecinos", "Uso de espacios comunes"] },
      { titulo: "Asistencia a la administración", items: ["Consultas jurídicas permanentes", "Dictámenes legales", "Redacción de comunicaciones e intimaciones", "Asesoramiento preventivo"] },
      { titulo: "Asambleas", items: ["Asesoramiento previo", "Redacción de actas", "Impugnación o defensa de asambleas", "Análisis de validez de decisiones consorciales"] },
      { titulo: "Contratos", items: ["Contratación de proveedores", "Empresas de mantenimiento", "Seguridad", "Limpieza", "Obras y refacciones"] },
      { titulo: "Reclamos y litigios", items: ["Daños ocasionados por filtraciones y humedades", "Responsabilidad del consorcio", "Reclamos de propietarios", "Defensa judicial del consorcio"] },
    ],
    beneficios: [
      "Respuesta inmediata ante consultas legales",
      "Prevención de conflictos y contingencias",
      "Recuperación más eficiente de expensas adeudadas",
      "Mayor seguridad jurídica en la administración",
      "Respaldo profesional permanente",
      "Reducción de costos derivados de litigios evitables",
    ],
    cierre: "Nuestro objetivo es brindar tranquilidad a administradores y propietarios, permitiendo una gestión eficiente, transparente y jurídicamente segura del consorcio.",
  },
  {
    id: "empresas",
    label: "Empresas y PyMES",
    bajada: "Su departamento legal externo, siempre disponible. Nos convertimos en un aliado estratégico para prevenir conflictos y acompañar el crecimiento de cada organización.",
    incluye: [
      { titulo: "Asesoramiento legal permanente", items: ["Consultas sobre cuestiones comerciales, laborales, societarias, contractuales e inmobiliarias", "Respuestas rápidas y personalizadas", "Seguimiento continuo de situaciones jurídicas relevantes"] },
      { titulo: "Derecho laboral", items: ["Contratación de personal", "Auditoría de relaciones laborales", "Prevención de contingencias laborales", "Sanciones disciplinarias", "Intimaciones", "Desvinculaciones", "Negociación de acuerdos", "Defensa ante reclamos laborales"] },
      { titulo: "Contratos y documentación comercial", items: ["Redacción y revisión de contratos", "Contratos de prestación de servicios", "Contratos de distribución y representación", "Acuerdos de confidencialidad", "Condiciones de contratación y documentación interna"] },
      { titulo: "Cobro de créditos y deudas", items: ["Reclamo de facturas impagas", "Intimaciones de pago", "Acuerdos de refinanciación", "Ejecución de cheques, pagarés y títulos ejecutivos", "Recuperación judicial y extrajudicial de créditos"] },
      { titulo: "Asesoramiento societario", items: ["Constitución de sociedades", "Reformas estatutarias", "Transferencia de participaciones", "Conflictos entre socios", "Actas societarias", "Asistencia en reuniones y asambleas"] },
      { titulo: "Defensa del consumidor", items: ["Asesoramiento preventivo", "Contestación de reclamos", "Actuación ante organismos administrativos", "Estrategias de reducción de contingencias"] },
      { titulo: "Asesoramiento inmobiliario empresarial", items: ["Contratos de locación comercial", "Compra y venta de inmuebles", "Garantías", "Negociación contractual", "Conflictos vinculados con establecimientos comerciales"] },
      { titulo: "Representación judicial", items: ["Cobro de deudas", "Ejecuciones", "Conflictos contractuales", "Reclamos laborales", "Daños y perjuicios", "Litigios comerciales"] },
    ],
    beneficios: [
      "Respaldo legal permanente",
      "Prevención de conflictos antes de que se transformen en juicios",
      "Reducción de riesgos y contingencias",
      "Ahorro de tiempo y costos operativos",
      "Acceso directo a profesionales con experiencia",
      "Mayor seguridad en la toma de decisiones",
      "Atención personalizada y seguimiento continuo",
    ],
    cierre: "Mientras usted se ocupa de hacer crecer su negocio, nosotros nos ocupamos de protegerlo.",
  },
];

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
  photoCaption: ['Estudio Lasalle · San Fernando', String(new Date().getFullYear())],
  qa: [
    {
      q: '¿Quiénes somos?',
      aHtml:
        'Somos un estudio jurídico integrado por los abogados <em>Rodrigo Lasalle</em> y <em>Germán Lasalle</em>, profesionales con amplia trayectoria en el ejercicio de la abogacía, tanto en el ámbito privado como en el Poder Judicial y la Administración Pública.',
    },
    {
      q: 'Nuestra forma de trabajar',
      aHtml:
        'Creemos que cada situación legal requiere una <em>solución personalizada</em>. Por ello brindamos un asesoramiento cercano, claro y profesional, acompañando a nuestros clientes en cada etapa del proceso y manteniéndolos informados de manera permanente.',
    },
    {
      q: '¿A quiénes ayudamos?',
      aHtml:
        'Trabajamos tanto para <em>personas y familias</em> como para empresas, comercios, desarrolladores inmobiliarios, consorcios e instituciones.',
    },
  ],
  pull:
    'Seriedad profesional, atención personalizada, transparencia en el trato y búsqueda constante de resultados concretos.',
  bio: [
    { k: 'Ámbito', v: 'Privado · Poder Judicial', note: 'Administración Pública' },
    { k: 'Matrícula', v: 'CASI · San Isidro', note: 'Buenos Aires' },
    { k: 'Clientes', v: 'Personas, familias y empresas', note: 'consorcios e inmobiliarias' },
  ],
};

export const CONTACTO_ITEMS = [
  { key: "WhatsApp", value: "+54 9 11 4444 5555" },
  { key: "Email",    value: "rodrigo@lasalle.legal" },
  { key: "Estudio",  value: "Av. Pte. Perón 1240", sub: "San Fernando, Buenos Aires" },
] as const;

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
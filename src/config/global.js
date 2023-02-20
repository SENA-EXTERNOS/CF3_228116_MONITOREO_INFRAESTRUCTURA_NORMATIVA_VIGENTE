export default {
  global: {
    componenteFormativo:
      'Monitoreo a la infraestructura T.I según normativa vigente',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos necesarios para realizar monitoreo al centro de datos cumpliendo con las normativas vigentes. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Establecer procesos de monitoreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación de causas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Uso de recursos medioambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Manejo de posturas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Buenas prácticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Bitácoras e inventarios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Decreto 284 de 15 febrero de 2018.',
      referencia: 'Ministerio de Ambiente y desarrollo sostenible (2018)',
      tipo: 'Decreto',
      link:
        'http://es.presidencia.gov.co/normativa/normativa/DECRETO%20284%20DEL%2015%20FEBRERO%20DE%202018.pdf ',
    },
    {
      tema:
        'Ley 1672 del 19 de julio de 2013, “Establece los lineamientos para la adopción de una política pública de gestión integral de residuos de aparatos eléctricos y electrónicos RAEE y se dictan otras disposiciones.',
      referencia: 'Congreso De La República Colombia. (2013).',
      tipo: 'Ley',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/ley-1672-2013.pdf',
    },
    {
      tema: 'Infografía. Normatividad Ambiental Vigente en Colombia. ',
      referencia:
        'Normatividad Ambiental Vigente en Colombia 2022 - Biblioteca SST. (2020). Biblioteca Virtual de Seguridad y Salud en el Trabajo; Biblioteca Virtual SST. ',
      tipo: 'Infografía',
      link:
        'https://deseguridadysalud.com/normatividad-ambiental-en-colombia/#:~:text=DECRETO%201443%20DE%202004,a%20la%20normatividad%20ambiental%20Colombiana',
    },
    {
      tema: 'Ergonomía de la Oficina, Universidad de JAÉN.',
      referencia: 'UJAEN. (2022) ',
      tipo: 'Guías',
      link:
        'https://www.ujaen.es/servicios/utecnica/sites/servicio_utecnica/files/uploads/prevencion/ergonomia%20de%20la%20oficina.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Contingencia',
      significado:
        'dispositivo de respaldo que posee iguales características del equipo principal y sirve para reemplazar temporalmente en caso de falla. ',
    },
    {
      termino: 'Decreto',
      significado: 'decisión o resolución que toma una autoridad u organismo. ',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'toda la plataforma física de la infraestructura TI, incluidos los dispositivos, sensores, cámaras, etc. ',
    },
    {
      termino: 'Ley',
      significado:
        'regla o norma establecida para regular con principios de justicia. ',
    },
    {
      termino: 'Monitorear',
      significado:
        'supervisar o controlar un suceso a través de pantallas o monitores. ',
    },
    {
      termino: 'Resiliencia',
      significado:
        'adaptación al cambio. En términos de TI se refiere a la capacidad que tiene un sistema de aceptar los cambios sin ver afectado su funcionamiento y disponibilidad. ',
    },
    {
      termino: 'Simulación',
      significado:
        'creación de un entorno virtual que recrea un evento, suceso o dispositivo con sus características y especificaciones técnicas en <i>hardware</i> y <i>software</i>. ',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'parte lógica que controla el <i>hardware</i> en la infraestructura TI, incluidos sistemas de administración, control y supervisión. ',
    },
    {
      termino: 'EPMS',
      significado:
        'Sistema de monitoreo de energía eléctrica, integra el registro de datos con el fin de permitir la supervisión y ejercer control a la subestación de energía.',
    },
    {
      termino: '<i>Cloud</i>',
      significado:
        'tecnología que permite acceso remoto a <i>softwares</i>, almacenamiento de archivos y procesamiento de datos por medio de Internet.',
    },
  ],
  referencias: [
    {
      referencia:
        'Libro - Barría Huidobro, C. (2020). Nuevos espacios de seguridad nacional: Cómo proteger la información en el ciberespacio.',
      link: '',
    },
    {
      referencia:
        'Libro - Baud, J. (2017). ITIL® V3 : Preparación a la certificación ITIL® Foundation V3 (2ª edición. ed., Certificaciones). Barcelona: Ediciones ENI.',
      link: '',
    },
    {
      referencia:
        'Libro - Cifuentes Olarte, A. et al.(2018). Sistema de gestión y de seguridad y salud en el trabajo: Qué es y cómo aplicarlo en cualquier empresa Lineamientos legales básicos y Guía Técnica (Primera edición. ed., Área. Seguridad y salud en el trabajo)',
      link: '',
    },
    {
      referencia:
        'Libro - Païola, P. (2021). Microsoft Azure: Gestione su Sistema de Información en la Nube (Recursos Informáticos). Barcelona: Ediciones ENI',
      link: '',
    },
    {
      referencia:
        'Libro - Poggioli, Jean-Paul, and Joël Demasson (2021). Gestión De Un Sistema De Información: Método Y Buenas Prácticas. Ediciones ENI.. Recursos Informáticos. Web.',
      link: '',
    },
    {
      referencia:
        'Material legal - Política Nacional: Gestión integral de residuos de aparatos eléctricos y electrónicos. (2017). Bogotá: Ministerio de Ambiente y Desarrollo Sostenible.',
      link: '',
    },
    {
      referencia:
        'Libro - Torres Matiz, A. et al.(2018). Gestión de la seguridad y salud en el trabajo: Manual práctico para la implementación de los estándares mínimos (Primera edición. ed.). Legis Editores.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

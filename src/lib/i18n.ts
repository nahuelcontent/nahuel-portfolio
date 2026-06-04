// ─── TRANSLATIONS ──────────────────────────────────────────────────────────
// Add / edit copy for both languages here. Structure mirrors the page sections.

export type Lang = "en" | "es";

export const t = {
  en: {
    // ── Navbar ──
    nav: {
      about: "About",
      work: "Work",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      getInTouch: "Get in touch",
    },

    // ── Hero ──
    hero: {
      tag: "Creative Strategist · Content Director",
      tagline:
        "Creative Strategist focused on content direction, brand positioning and digital communication systems.",
      intro:
        "I help brands and professionals turn experience, ideas and services into clear, intentional and high-performing content.",
      viewCv: "View CV",
      contactMe: "Contact Me",
      availableFor: "Available for\nremote work",
    },

    // ── About ──
    about: {
      sectionLabel: "About",
      heading1: "WHO",
      heading2: "I AM",
      p1: "I'm a creative strategist and content director based in Buenos Aires, Argentina.",
      p2: "Over the last 4+ years, I've worked with brands, entrepreneurs and professionals to build clearer communication through content strategy, branding, creative direction and social media systems.",
      p3: "My work sits between strategy and execution: defining what a brand needs to say, how it should be perceived, and how that message should translate into content, campaigns and digital presence.",
      quote: '"I don\'t just create content. I design the direction behind it."',
    },

    // ── Services ──
    services: {
      sectionLabel: "What I Do",
      heading: "SERVICES",
      subheading: "Four areas where strategy meets execution.",
      items: [
        {
          number: "01",
          title: "Content Strategy",
          description:
            "Monthly content systems, editorial direction, audience research and platform-specific planning.",
        },
        {
          number: "02",
          title: "Creative Direction",
          description:
            "Concept development, visual direction, storytelling, campaign ideas and content production guidance.",
        },
        {
          number: "03",
          title: "Brand Positioning",
          description:
            "Helping brands clarify their message, tone, perception and digital identity.",
        },
        {
          number: "04",
          title: "Performance Content",
          description:
            "Combining organic content with Meta Ads logic, creative testing and metric-based optimization.",
        },
      ],
    },

    // ── Experience ──
    experience: {
      sectionLabel: "Experience",
      heading1: "WHERE I'VE",
      heading2: "WORKED",
      founderBadge: "Founder",
      items: [
        {
          company: "Alpha Studio",
          role: "Founder & Creative Strategist",
          period: "2020 — Present",
          location: "Buenos Aires, Argentina",
          description:
            "Founded and led Alpha Studio, a creative studio focused on content strategy, branding, social media systems and digital communication for brands in fashion, wellness, services and digital products.",
          bullets: [
            "Led content and communication strategies for multiple brands.",
            "Developed monthly content systems to improve consistency and reduce operational friction.",
            "Directed brand identity, social content and creative campaigns.",
            "Managed clients, monthly planning and performance follow-up.",
            "Integrated organic content with Meta Ads strategy to improve reach and conversion.",
          ],
          featured: true,
        },
        {
          company: "Marketing Consultant & Web Designer",
          role: "",
          period: "2019 — 2022",
          location: "Argentina & United States",
          description:
            "Worked with entrepreneurs and service-based businesses to design conversion-focused websites, landing pages and digital growth strategies.",
          bullets: [
            "Designed responsive websites and landing pages.",
            "Defined visual direction for digital campaigns.",
            "Conducted competitor research and growth analysis.",
            "Helped small businesses structure their online presence.",
          ],
          featured: false,
        },
        {
          company: "Freelance Content Manager & Social Media Designer",
          role: "",
          period: "2018 — 2019",
          location: "",
          description: "",
          bullets: [
            "Managed Instagram and Facebook accounts for small brands.",
            "Designed visual content, templates and brand assets.",
            "Planned content calendars and engagement strategies.",
            "Executed basic Meta Ads campaigns and tracked results.",
          ],
          featured: false,
        },
      ],
    },

    // ── Impact ──
    impact: {
      sectionLabel: "Selected Impact",
      heading1: "BY THE",
      heading2: "NUMBERS",
      items: [
        { value: "4+", label: "years", description: "working in content, branding and digital marketing" },
        { value: "15+", label: "brands", description: "supported across content, identity and communication" },
        { value: "1000+", label: "assets", description: "created across reels, carousels, stories, ads and landing pages" },
        { value: "ARG + USA", label: "", description: "experience studying and working across different creative environments" },
      ],
    },

    // ── Skills ──
    skills: {
      sectionLabel: "Skills",
      heading1: "WHAT I",
      heading2: "KNOW",
      categories: {
        Strategy: [
          "Content strategy",
          "Brand positioning",
          "Creative direction",
          "Social media strategy",
          "Meta Ads creative analysis",
        ],
        Execution: [
          "Video editing",
          "Graphic design",
          "Visual storytelling",
          "Copywriting",
          "Content systems",
        ],
        Tools: [
          "Meta Business Suite",
          "Meta Ads Manager",
          "Notion",
          "Figma",
          "Adobe Illustrator",
          "Adobe Photoshop",
          "Adobe InDesign",
          "CapCut",
          "Premiere Pro",
          "Canva",
        ],
      },
      educationLabel: "Education",
      languagesLabel: "Languages",
      education: [
        {
          school: "Southern Virginia University",
          country: "United States",
          fields: ["Graphic Design", "Marketing", "Photography", "Computer Science"],
        },
      ],
      languages: [
        { language: "Spanish", level: "Native" },
        { language: "English", level: "Advanced / C1" },
      ],
    },

    // ── Manifesto ──
    manifesto: {
      sectionLabel: "How I Think",
      heading1: "THE",
      heading2: "MINDSET",
      lines: [
        "Good content is not about posting more.",
        "It is about building the right perception.",
      ],
      p1: "I believe brands need more than visuals. They need clarity, intention and direction.",
      p2: "My role is to understand what a brand knows, what it offers and how it should be perceived — then turn that into content that feels coherent, strategic and useful.",
      quote: "Creating without direction is just noise.",
    },

    // ── Contact ──
    contact: {
      sectionLabel: "Let's Work Together",
      heading1: "GET IN",
      heading2: "TOUCH",
      description:
        "Available for creative strategy, content direction, brand positioning and remote opportunities.",
      downloadCv: "Download CV",
      emailMe: "Email Me",
      linkedin: "LinkedIn",
      rows: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        linkedin: "LinkedIn",
      },
    },

    // ── Footer ──
    footer: {
      tagline: "Creative Strategy · Content Direction · Brand Positioning",
    },
  },

  // ────────────────────────────────────────────────────────────────────────────
  es: {
    nav: {
      about: "Sobre mí",
      work: "Servicios",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
      getInTouch: "Hablemos",
    },

    hero: {
      tag: "Estratega Creativo · Director de Contenido",
      tagline:
        "Estratega creativo enfocado en dirección de contenido, posicionamiento de marca y sistemas de comunicación digital.",
      intro:
        "Ayudo a marcas y profesionales a convertir experiencia, ideas y servicios en contenido claro, intencional y de alto rendimiento.",
      viewCv: "Ver CV",
      contactMe: "Contactarme",
      availableFor: "Disponible para\ntrabajo remoto",
    },

    about: {
      sectionLabel: "Sobre mí",
      heading1: "QUIÉN",
      heading2: "SOY",
      p1: "Soy un estratega creativo y director de contenido radicado en Buenos Aires, Argentina.",
      p2: "Durante los últimos 4+ años, trabajé con marcas, emprendedores y profesionales para construir una comunicación más clara a través de estrategia de contenido, branding, dirección creativa y sistemas de redes sociales.",
      p3: "Mi trabajo se sitúa entre la estrategia y la ejecución: definir lo que una marca necesita decir, cómo debe ser percibida y cómo ese mensaje se traduce en contenido, campañas y presencia digital.",
      quote: '"No solo creo contenido. Diseño la dirección detrás de él."',
    },

    services: {
      sectionLabel: "Qué hago",
      heading: "SERVICIOS",
      subheading: "Cuatro áreas donde la estrategia se encuentra con la ejecución.",
      items: [
        {
          number: "01",
          title: "Estrategia de Contenido",
          description:
            "Sistemas de contenido mensuales, dirección editorial, investigación de audiencia y planificación por plataforma.",
        },
        {
          number: "02",
          title: "Dirección Creativa",
          description:
            "Desarrollo de conceptos, dirección visual, storytelling, ideas de campaña y guía de producción de contenido.",
        },
        {
          number: "03",
          title: "Posicionamiento de Marca",
          description:
            "Ayudando a las marcas a clarificar su mensaje, tono, percepción e identidad digital.",
        },
        {
          number: "04",
          title: "Contenido de Rendimiento",
          description:
            "Combinando contenido orgánico con lógica de Meta Ads, pruebas creativas y optimización basada en métricas.",
        },
      ],
    },

    experience: {
      sectionLabel: "Experiencia",
      heading1: "DÓNDE",
      heading2: "TRABAJÉ",
      founderBadge: "Fundador",
      items: [
        {
          company: "Alpha Studio",
          role: "Fundador y Estratega Creativo",
          period: "2020 — Presente",
          location: "Buenos Aires, Argentina",
          description:
            "Fundé y lideré Alpha Studio, un estudio creativo enfocado en estrategia de contenido, branding, sistemas de redes sociales y comunicación digital para marcas de moda, bienestar, servicios y productos digitales.",
          bullets: [
            "Lideré estrategias de contenido y comunicación para múltiples marcas.",
            "Desarrollé sistemas de contenido mensuales para mejorar la consistencia y reducir la fricción operativa.",
            "Dirigí identidad de marca, contenido social y campañas creativas.",
            "Gestioné clientes, planificación mensual y seguimiento de rendimiento.",
            "Integré contenido orgánico con estrategia de Meta Ads para mejorar alcance y conversión.",
          ],
          featured: true,
        },
        {
          company: "Consultor de Marketing y Diseñador Web",
          role: "",
          period: "2019 — 2022",
          location: "Argentina y Estados Unidos",
          description:
            "Trabajé con emprendedores y negocios de servicios para diseñar sitios web, landing pages y estrategias de crecimiento digital enfocadas en conversión.",
          bullets: [
            "Diseñé sitios web y landing pages responsivos.",
            "Definí la dirección visual para campañas digitales.",
            "Realicé investigación de competencia y análisis de crecimiento.",
            "Ayudé a pequeños negocios a estructurar su presencia online.",
          ],
          featured: false,
        },
        {
          company: "Community Manager y Diseñador de Redes Freelance",
          role: "",
          period: "2018 — 2019",
          location: "",
          description: "",
          bullets: [
            "Gestioné cuentas de Instagram y Facebook para pequeñas marcas.",
            "Diseñé contenido visual, plantillas y recursos de marca.",
            "Planifiqué calendarios de contenido y estrategias de engagement.",
            "Ejecuté campañas básicas de Meta Ads y seguí resultados.",
          ],
          featured: false,
        },
      ],
    },

    impact: {
      sectionLabel: "Impacto Seleccionado",
      heading1: "EN",
      heading2: "NÚMEROS",
      items: [
        { value: "4+", label: "años", description: "trabajando en contenido, branding y marketing digital" },
        { value: "15+", label: "marcas", description: "acompañadas en contenido, identidad y comunicación" },
        { value: "1000+", label: "piezas", description: "creadas entre reels, carruseles, stories, ads y landing pages" },
        { value: "ARG + USA", label: "", description: "experiencia estudiando y trabajando en distintos entornos creativos" },
      ],
    },

    skills: {
      sectionLabel: "Habilidades",
      heading1: "LO QUE",
      heading2: "SÉ HACER",
      categories: {
        Estrategia: [
          "Estrategia de contenido",
          "Posicionamiento de marca",
          "Dirección creativa",
          "Estrategia en redes sociales",
          "Análisis creativo de Meta Ads",
        ],
        Ejecución: [
          "Edición de video",
          "Diseño gráfico",
          "Storytelling visual",
          "Copywriting",
          "Sistemas de contenido",
        ],
        Herramientas: [
          "Meta Business Suite",
          "Meta Ads Manager",
          "Notion",
          "Figma",
          "Adobe Illustrator",
          "Adobe Photoshop",
          "Adobe InDesign",
          "CapCut",
          "Premiere Pro",
          "Canva",
        ],
      },
      educationLabel: "Educación",
      languagesLabel: "Idiomas",
      education: [
        {
          school: "Southern Virginia University",
          country: "Estados Unidos",
          fields: ["Diseño Gráfico", "Marketing", "Fotografía", "Ciencias de la Computación"],
        },
      ],
      languages: [
        { language: "Español", level: "Nativo" },
        { language: "Inglés", level: "Avanzado / C1" },
      ],
    },

    manifesto: {
      sectionLabel: "Cómo pienso",
      heading1: "LA",
      heading2: "MENTALIDAD",
      lines: [
        "El buen contenido no se trata de publicar más.",
        "Se trata de construir la percepción correcta.",
      ],
      p1: "Creo que las marcas necesitan más que visuales. Necesitan claridad, intención y dirección.",
      p2: "Mi rol es entender qué sabe una marca, qué ofrece y cómo debería ser percibida — y convertir eso en contenido que se sienta coherente, estratégico y útil.",
      quote: "Crear sin dirección es solo ruido.",
    },

    contact: {
      sectionLabel: "Trabajemos juntos",
      heading1: "PONERSE EN",
      heading2: "CONTACTO",
      description:
        "Disponible para estrategia creativa, dirección de contenido, posicionamiento de marca y oportunidades remotas.",
      downloadCv: "Descargar CV",
      emailMe: "Escribirme",
      linkedin: "LinkedIn",
      rows: {
        email: "Email",
        phone: "Teléfono",
        location: "Ubicación",
        linkedin: "LinkedIn",
      },
    },

    footer: {
      tagline: "Estrategia Creativa · Dirección de Contenido · Posicionamiento de Marca",
    },
  },
} as const;

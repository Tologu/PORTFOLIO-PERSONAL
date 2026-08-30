export type Language = 'es' | 'en';

export interface TranslationKeys {
  header: {
    home: string;
    projects: string;
    about: string;
    contact: string;
    menu: string;
    close: string;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    connect: string;
    viewProjects: string;
    imagePending: string;
    imageHint: string;
  };
  projects: {
    title: string;
    moreProjects: string;
    viewPage: string;
    mediaPending: string;
    items: Record<1 | 2 | 3 | 4 | 5, { title: string; description: string }>;
  };
  about: {
    title: string;
    lead: string;
    aiTitle: string;
    aiText: string;
    extraTitle: string;
    b1: string;
    b2: string;
    b3: string;
    skills: string;
    tools: string;
    toolsItems: string[];
  };
  contact: {
    title: string;
    heading: string;
    description: string;
    directEmail: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    subject: (name: string, email: string) => string;
    success: string;
    error: string;
    submitError: string;
  };
  footer: {
    rights: string;
  };
  allProjects: {
    back: string;
    backAria: string;
    title: string;
    subtitle: string;
    viewPage: string;
    status: Record<'completed' | 'in-progress' | 'planned', string>;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  es: {
    header: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
      menu: 'Menú',
      close: 'Cerrar',
    },
    hero: {
      label: 'Disponible para prácticas',
      title: 'Construyo interfaces web claras y funcionales',
      subtitle: 'Desarrollador web y estudiante DAW',
      description:
        'Trabajo con React y TypeScript, apoyándome en agentes de IA para iterar más rápido. Busco un primer rol en tecnología donde aportar criterio y seguir aprendiendo.',
      connect: 'Escribir',
      viewProjects: 'Ver proyectos',
      imagePending: 'Retrato pendiente',
      imageHint: 'Añade portrait.png en public/images/',
    },
    projects: {
      title: 'Proyectos',
      moreProjects: 'Todos los proyectos',
      viewPage: 'Ver sitio',
      mediaPending: 'Captura pendiente',
      items: {
        1: {
          title: 'Mundial 2026',
          description:
            'Porra del Mundial con HTML, CSS, JavaScript y Firebase. Un primer proyecto real, pensado para usarse con familia y amigos.',
        },
        2: {
          title: 'Juego del 31',
          description:
            'Simulador del clásico de baraja española: turnos, puntuación por palos e IA para rivales virtuales.',
        },
        3: {
          title: 'E-commerce de parafarmacia',
          description:
            'Tienda en desarrollo: catálogo, pagos y backend moderno con Next.js, Medusa y Stripe.',
        },
        4: {
          title: 'Portfolio personal',
          description:
            'Este sitio: React, TypeScript, diseño responsive y despliegue en GitHub Pages. Desarrollado con agentes de IA en Cursor.',
        },
        5: {
          title: 'Mazo y Gol',
          description:
            'App de liga estilo Teletexto con Next.js y Supabase: gestión de competición, datos en Postgres y despliegue en Vercel.',
        },
      },
    },
    about: {
      title: 'Sobre mí',
      lead: 'Estudiante de DAW con foco en frontend. Construyo interfaces claras y estoy ampliando backend para poder cerrar productos de punta a punta.',
      aiTitle: 'Desarrollo con agentes de IA',
      aiText:
        'Integro agentes de IA en mi día a día con Cursor, Antigravity y VS Code: prototipado, refactors, pruebas y documentación. Siempre reviso el código y me quedo con lo que realmente entiendo antes de darlo por bueno.',
      extraTitle: 'También aporto',
      b1: 'Organización y gestión, de gestoría a administración pública.',
      b2: 'Trabajo en equipo en Ayuntamiento, TGSS y la Subdelegación del Gobierno en Cádiz.',
      b3: 'Busco crecer en tecnología aportando esa experiencia previa.',
      skills: 'Stack',
      tools: 'Herramientas & IA',
      toolsItems: ['Cursor', 'Antigravity', 'VS Code', 'Agentes IA'],
    },
    contact: {
      title: 'Contacto',
      heading: 'Hablemos',
      description: 'Disponible para prácticas, junior frontend y proyectos puntuales.',
      directEmail: 'Correo',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Cuéntame en qué puedo ayudarte',
      sending: 'Enviando...',
      send: 'Enviar mensaje',
      subject: (name: string, email: string) => `Nuevo mensaje de ${name} (${email})`,
      success: 'Mensaje enviado. Te responderé por correo lo antes posible.',
      error:
        'No se pudo enviar. Prueba de nuevo en unos minutos o escríbeme al correo.',
      submitError: 'No se pudo enviar el mensaje.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    allProjects: {
      back: 'Volver',
      backAria: 'Volver al inicio',
      title: 'Todos los proyectos',
      subtitle: 'Una vista completa de lo que he construido',
      viewPage: 'Ver sitio',
      status: {
        completed: 'Completado',
        'in-progress': 'En desarrollo',
        planned: 'Planificado',
      },
    },
  },
  en: {
    header: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      label: 'Open to internships · Junior frontend',
      title: 'I build clear, functional web interfaces',
      subtitle: 'Web developer and DAW student',
      description:
        'I work with React and TypeScript, using AI agents to iterate faster. I am looking for a first role in tech where I can bring judgement and keep learning.',
      connect: 'Write to me',
      viewProjects: 'View projects',
      imagePending: 'Portrait pending',
      imageHint: 'Add portrait.png in public/images/',
    },
    projects: {
      title: 'Projects',
      moreProjects: 'All projects',
      viewPage: 'View site',
      mediaPending: 'Screenshot pending',
      items: {
        1: {
          title: 'World Cup 2026',
          description:
            'A World Cup pool built with HTML, CSS, JavaScript and Firebase. A first real project, made to be used with family and friends.',
        },
        2: {
          title: '31 Card Game',
          description:
            'Digital take on the Spanish-deck classic: turns, suit-based scoring and AI opponents.',
        },
        3: {
          title: 'Parapharmacy e-commerce',
          description:
            'Store in progress: catalog, payments and a modern backend with Next.js, Medusa and Stripe.',
        },
        4: {
          title: 'Personal portfolio',
          description:
            'This site: React, TypeScript, responsive design and GitHub Pages deploy. Built with AI agents in Cursor.',
        },
        5: {
          title: 'Mazo y Gol',
          description:
            'Teletext-style league app built with Next.js and Supabase: competition management, Postgres data and a Vercel deploy.',
        },
      },
    },
    about: {
      title: 'About',
      lead: 'DAW student focused on frontend. I build clear interfaces and I am expanding into backend so I can ship products end to end.',
      aiTitle: 'AI-assisted development',
      aiText:
        'I work with AI agents day to day in Cursor, Antigravity and VS Code: prototyping, refactors, testing and docs. I always review the code and only ship what I truly understand.',
      extraTitle: 'I also bring',
      b1: 'Organisation and admin skills, from tax advisory to public administration.',
      b2: 'Teamwork at city hall, Social Security Treasury and the Government Sub-delegation in Cádiz.',
      b3: 'I want to grow in tech while carrying that prior experience.',
      skills: 'Stack',
      tools: 'Tools & AI',
      toolsItems: ['Cursor', 'Antigravity', 'VS Code', 'AI agents'],
    },
    contact: {
      title: 'Contact',
      heading: "Let's talk",
      description: 'Open to internships, junior frontend roles and focused projects.',
      directEmail: 'Email',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Tell me how I can help',
      sending: 'Sending...',
      send: 'Send message',
      subject: (name: string, email: string) => `New message from ${name} (${email})`,
      success: 'Message sent. I will reply by email as soon as I can.',
      error:
        'Could not send. Try again in a few minutes or email me directly.',
      submitError: 'Could not send the message.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    allProjects: {
      back: 'Back',
      backAria: 'Back to home',
      title: 'All projects',
      subtitle: 'A full look at what I have built',
      viewPage: 'View site',
      status: {
        completed: 'Completed',
        'in-progress': 'In progress',
        planned: 'Planned',
      },
    },
  },
};

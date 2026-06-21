export type Language = 'es' | 'en';

export interface TranslationKeys {
  header: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
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
    items: Record<1 | 2 | 3, { title: string; description: string }>;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    skills: string;
  };
  contact: {
    title: string;
    heading: string;
    description: string;
    directEmail: string;
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
    items: Record<1 | 2 | 3 | 4, { title: string; description: string }>;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  es: {
    header: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      subtitle: 'Desarrollador Web & Estudiante DAW',
      description:
        'Creo experiencias web modernas, funcionales e innovadoras. Apasionado por React, TypeScript y tecnologías web de vanguardia.',
      connect: 'Conectemos',
      viewProjects: 'Ver mis proyectos',
      imagePending: 'Imagen pendiente',
      imageHint: 'Coloca portrait.png en public/images/',
    },
    projects: {
      title: 'Mis Proyectos',
      moreProjects: 'Más proyectos',
      viewPage: 'Ver página',
      items: {
        1: {
          title: 'Mundial 2026',
          description:
            'Mi primer proyecto de desarrollo web para una "Porra" del Mundial 2026. Diseño sencillo y con las tecnologías básicas de frontend. Fue un proyecto divertido para practicar mis habilidades y compartirlas con familiares y amigos.',
        },
        2: {
          title: 'Juego del 31',
          description:
            'Implementación digital del clásico juego de cartas "31" utilizando la baraja española. El proyecto consiste en un simulador de turnos que gestiona la lógica de juego, el cálculo dinámico de puntuaciones basado en palos y una inteligencia artificial para oponentes virtuales',
        },
        3: {
          title: 'E-commerce de Parafarmacia',
          description:
            'Proyecto en desarrollo de una tienda online de parafarmacia con catálogo de productos, pagos seguros y gestión moderna del backend.',
        },
      },
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy estudiante de Desarrollo de Aplicaciones Web (DAW) con pasión por crear aplicaciones web modernas y funcionales. Tengo experiencia en frontend y estoy expandiendo mis habilidades en backend.',
      p2: 'Además, cuento con una sólida trayectoria en el sector administrativo, habiendo trabajado en Gestoría/Asesoría, Ayuntamiento, Tesorería General de la Seguridad Social y actualmente en la Subdelegación del Gobierno en Cádiz. Esta experiencia me ha permitido desarrollar habilidades organizativas, de gestión y trabajo en equipo.',
      p3: 'Aunque valoro mi recorrido profesional, busco una oportunidad para crecer en el sector tecnológico, donde pueda aportar mi experiencia previa y seguir aprendiendo y desarrollándome como desarrollador.',
      p4: 'Mi objetivo es desarrollar soluciones innovadoras que resuelvan problemas reales y proporcionen una excelente experiencia de usuario.',
      skills: 'Habilidades',
    },
    contact: {
      title: 'Contacto',
      heading: '¡Hablemos!',
      description: 'Estoy disponible para oportunidades y proyectos interesantes.',
      directEmail: 'Correo directo',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu email',
      messagePlaceholder: 'Tu mensaje',
      sending: 'Enviando...',
      send: 'Enviar mensaje',
      subject: (name: string, email: string) => `Nuevo mensaje de ${name} (${email})`,
      success: 'Mensaje enviado correctamente. Te responderé por correo lo antes posible.',
      error:
        'Hubo un problema al enviar el mensaje. Intenta de nuevo en unos minutos o escríbeme directamente al correo.',
      submitError: 'No se pudo enviar el mensaje.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    allProjects: {
      back: 'Volver',
      backAria: 'Volver al inicio',
      title: 'Todos mis proyectos',
      subtitle: 'Una visión completa de todo lo que he construido',
      viewPage: 'Ver página',
      status: {
        completed: 'Completado',
        'in-progress': 'En desarrollo',
        planned: 'Planificado',
      },
      items: {
        1: {
          title: 'Mundial 2026',
          description:
            'Mi primer proyecto de desarrollo web para una "Porra" del Mundial 2026. Diseño sencillo y con las tecnologías básicas de frontend. Fue un proyecto divertido para practicar mis habilidades y compartirlas con familiares y amigos.',
        },
        2: {
          title: 'Juego del 31',
          description:
            'Implementación digital del clásico juego de cartas "31" utilizando la baraja española. El proyecto consiste en un simulador de turnos que gestiona la lógica de juego, el cálculo dinámico de puntuaciones basado en palos y una inteligencia artificial para oponentes virtuales.',
        },
        3: {
          title: 'E-commerce de Parafarmacia',
          description:
            'Proyecto en desarrollo de una tienda online de parafarmacia con catálogo de productos, pagos seguros y gestión moderna del backend.',
        },
        4: {
          title: 'Portfolio Personal',
          description:
            'Este mismo portfolio personal desarrollado con React y TypeScript. Diseño responsive con animaciones CSS, formulario de contacto funcional y despliegue automático en GitHub Pages.',
        },
      },
    },
  },
  en: {
    header: {
      home: 'Home',
      projects: 'Projects',
      about: 'About me',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Web Developer & DAW Student',
      description:
        'I build modern, functional and innovative web experiences. Passionate about React, TypeScript and cutting-edge web technologies.',
      connect: "Let's connect",
      viewProjects: 'View my projects',
      imagePending: 'Image pending',
      imageHint: 'Place portrait.png in public/images/',
    },
    projects: {
      title: 'My Projects',
      moreProjects: 'More projects',
      viewPage: 'View site',
      items: {
        1: {
          title: 'World Cup 2026',
          description:
            'My first web development project for a World Cup 2026 pool. Simple design using core frontend technologies. A fun project to practice my skills and share it with family and friends.',
        },
        2: {
          title: '31 Card Game',
          description:
            'Digital implementation of the classic Spanish card game "31". The project is a turn-based simulator that handles game logic, dynamic suit-based scoring and AI for virtual opponents.',
        },
        3: {
          title: 'Parapharmacy E-commerce',
          description:
            'Work-in-progress online parapharmacy store with product catalog, secure payments and modern backend management.',
        },
      },
    },
    about: {
      title: 'About me',
      p1: 'I am a Web Application Development (DAW) student with a passion for building modern, functional web applications. I have frontend experience and I am expanding my backend skills.',
      p2: 'I also have a solid background in the administrative sector, having worked in tax advisory, city hall, the Social Security Treasury and currently at the Government Sub-delegation in Cádiz. This experience has helped me develop organizational, management and teamwork skills.',
      p3: 'While I value my professional journey, I am looking for an opportunity to grow in the tech sector, where I can bring my prior experience and keep learning and developing as a developer.',
      p4: 'My goal is to build innovative solutions that solve real problems and deliver an excellent user experience.',
      skills: 'Skills',
    },
    contact: {
      title: 'Contact',
      heading: "Let's talk!",
      description: 'I am available for opportunities and interesting projects.',
      directEmail: 'Direct email',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      sending: 'Sending...',
      send: 'Send message',
      subject: (name: string, email: string) => `New message from ${name} (${email})`,
      success: 'Message sent successfully. I will reply by email as soon as possible.',
      error:
        'There was a problem sending the message. Please try again in a few minutes or email me directly.',
      submitError: 'Could not send the message.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    allProjects: {
      back: 'Back',
      backAria: 'Back to home',
      title: 'All my projects',
      subtitle: 'A complete overview of everything I have built',
      viewPage: 'View site',
      status: {
        completed: 'Completed',
        'in-progress': 'In progress',
        planned: 'Planned',
      },
      items: {
        1: {
          title: 'World Cup 2026',
          description:
            'My first web development project for a World Cup 2026 pool. Simple design using core frontend technologies. A fun project to practice my skills and share it with family and friends.',
        },
        2: {
          title: '31 Card Game',
          description:
            'Digital implementation of the classic Spanish card game "31". The project is a turn-based simulator that handles game logic, dynamic suit-based scoring and AI for virtual opponents.',
        },
        3: {
          title: 'Parapharmacy E-commerce',
          description:
            'Work-in-progress online parapharmacy store with product catalog, secure payments and modern backend management.',
        },
        4: {
          title: 'Personal Portfolio',
          description:
            'This very portfolio built with React and TypeScript. Responsive design with CSS animations, a working contact form and automatic deployment on GitHub Pages.',
        },
      },
    },
  },
};

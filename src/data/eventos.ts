// src/data/eventos.ts
export type Evento = {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  tiempo: string;
  estado: string;
  tipo: "proximos" | "pasados";
  fondo: string;
  icono: "brain" | "users";
  fecha: string;
  hora: string;
  organizador: string;
  presentador: string;
  anfitrion: string;
  modalidad: string;
  speakers: {
    nombre: string;
    rol: string;
    foto: string;
    bio: string;
    redes?: {
      linkedin?: string;
      github?: string;
      twitter?: string;
      web?: string;
    };
  }[];
};


export const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Scaling Enterprise AI Through Systems Thinking",
    subtitulo: "DeepStation x Miami Dade College",
    descripcion: "Explora cómo el pensamiento sistémico puede escalar soluciones de IA empresarial.",
    tiempo: "60 min / Online / Gratuito",
    estado: "Live in 5 días",
    tipo: "proximos",
    fondo: "from-purple-300 to-purple-500",
    icono: "brain",
    fecha: "Sábado, 19 de octubre",
    hora: "3:00 PM – 4:00 PM",
    organizador: "DeepStation",
    presentador: "Naimul Zahedi",
    anfitrion: "Gerald Grant",
    modalidad: "Online",
    speakers: [
      {
        nombre: "Grant Kard",
        rol: "Co-founder, DeepStation",
        foto: "/img/1.png",
        bio: "Ingeniero de sistemas con más de 10 años de experiencia en arquitectura de IA empresarial. Cofundador de DeepStation, enfocado en escalar soluciones éticas y sostenibles.",
        redes: {
          linkedin: "https://linkedin.com/in/grantkard",
          github: "https://github.com/grantkard"
        }
      },
      {
        nombre: "Mehdi Zahid",
        rol: "Co-founder, DeepStation",
        foto: "/img/2.png",
        bio: "Especialista en pensamiento sistémico aplicado a inteligencia artificial. Ha liderado proyectos de transformación digital en América Latina y Europa.",
        redes: {
          linkedin: "https://linkedin.com/in/mehdizahid",
          web: "https://mehdizahid.ai"
        }
      }
    ]
  },
  {
    id: 2,
    titulo: "Build a Multi-Agent System",
    subtitulo: "Using OpenAI Agents SDK",
    descripcion: "Descubre cómo construir sistemas multi-agente con el SDK de OpenAI.",
    tiempo: "30 min / Live / Online",
    estado: "Live in 6 días",
    tipo: "proximos",
    fondo: "from-purple-300 to-purple-500",
    icono: "users",
    fecha: "Domingo, 20 de octubre",
    hora: "10:00 AM – 10:30 AM",
    organizador: "DeepStation",
    presentador: "Carlos Méndez",
    anfitrion: "Valentina Ortega",
    modalidad: "Online",
    speakers: [
      {
        nombre: "Carlos Méndez",
        rol: "Systems Architect, DeepStation",
        foto: "/img/3.png",
        bio: "Arquitecto de sistemas con enfoque en agentes inteligentes distribuidos. Ha colaborado con OpenAI en el desarrollo de SDKs para entornos multi-agente.",
        redes: {
          github: "https://github.com/carlosmendez",
          linkedin: "https://linkedin.com/in/carlosmendez"
        }
      },
      {
        nombre: "Valentina Ortega",
        rol: "UX Designer, Cognify",
        foto: "/img/6.png",
        bio: "Diseñadora de experiencia de usuario especializada en interfaces conversacionales y sistemas de IA colaborativa. Cofundadora de Cognify.",
        redes: {
          twitter: "https://twitter.com/valentinaUX",
          web: "https://valentinaortega.design"
        }
      }
    ]
  },
  {
    id: 3,
    titulo: "Exploring GPT-4 Turbo",
    subtitulo: "Advanced capabilities and use cases",
    descripcion: "Explora las capacidades avanzadas de GPT-4 Turbo y sus aplicaciones prácticas.",
    tiempo: "45 min / Grabado / Online",
    estado: "Finalizado",
    tipo: "pasados",
    fondo: "from-gray-300 to-gray-500",
    icono: "brain",
    fecha: "Viernes, 11 de octubre",
    hora: "2:00 PM – 2:45 PM",
    organizador: "DeepStation",
    presentador: "Sofía Rivas",
    anfitrion: "Tomás Herrera",
    modalidad: "Online",
    speakers: [
      {
        nombre: "Sofía Rivas",
        rol: "Ethics Lead, AI Global",
        foto: "/img/7.png",
        bio: "Investigadora en ética de IA con enfoque en transparencia algorítmica y gobernanza digital. Ha publicado en conferencias internacionales sobre IA responsable.",
        redes: {
          linkedin: "https://linkedin.com/in/sofiarivas"
        }
      },
      {
        nombre: "Tomás Herrera",
        rol: "CTO, NeuralScale",
        foto: "/img/4.png",
        bio: "CTO de NeuralScale, experto en escalabilidad de modelos de lenguaje y arquitecturas distribuidas. Lidera equipos de innovación en IA aplicada.",
        redes: {
          github: "https://github.com/tomasherrera"
        }
      }
    ]
  },
  {
    id: 4,
    titulo: "AI Ethics & Responsibility",
    subtitulo: "Panel discussion with experts",
    descripcion: "Un panel con expertos sobre los desafíos éticos de la inteligencia artificial.",
    tiempo: "60 min / Grabado / Online",
    estado: "Finalizado",
    tipo: "pasados",
    fondo: "from-red-300 to-red-500",
    icono: "users",
    fecha: "Miércoles, 9 de octubre",
    hora: "4:00 PM – 5:00 PM",
    organizador: "DeepStation",
    presentador: "Lucía Fernández",
    anfitrion: "Julián Torres",
    modalidad: "Online",
    speakers: [
      {
        nombre: "Lucía Fernández",
        rol: "AI Researcher, OpenAI",
        foto: "/img/8.png",
        bio: "Investigadora en OpenAI con especialización en alineación de modelos y mitigación de sesgos. Ha trabajado en proyectos de IA explicable y seguridad algorítmica.",
        redes: {
          linkedin: "https://linkedin.com/in/luciafernandez"
        }
      },
      {
        nombre: "Julián Torres",
        rol: "Data Strategist, MindMesh",
        foto: "/img/5.png",
        bio: "Estratega de datos con experiencia en ética de datos, privacidad y diseño de políticas de IA. Colabora con ONGs en regulación tecnológica.",
        redes: {
          web: "https://juliantorres.ai"
        }
      }
    ]
  },
  {
    id: 5,
    titulo: "Prompting with Purpose",
    subtitulo: "Best Practices and Techniques for ChatGPT",
    descripcion: "Aprende a diseñar prompts efectivos para obtener mejores resultados con modelos de lenguaje.",
    tiempo: "30 min / Live / Online",
    estado: "Live in 2 meses",
    tipo: "proximos",
    fondo: "from-blue-300 to-blue-500",
    icono: "brain",
    fecha: "Sábado, 23 de noviembre",
    hora: "3:00 PM – 4:00 PM",
    organizador: "DeepStation",
    presentador: "Lucía Fernández",
    anfitrion: "Carlos Méndez",
    modalidad: "Online",
    speakers: [
      {
        nombre: "Lucía Fernández",
        rol: "AI Researcher, OpenAI",
        foto: "/img/8.png",
        bio: "Investigadora en OpenAI con especialización en alineación de modelos y mitigación de sesgos. Ha trabajado en proyectos de IA explicable y seguridad algorítmica.",
        redes: {
          linkedin: "https://linkedin.com/in/luciafernandez"
        }
      },
      {
        nombre: "Carlos Méndez",
        rol: "Systems Architect, DeepStation",
        foto: "/img/3.png",
        bio: "Arquitecto de sistemas con enfoque en agentes inteligentes distribuidos. Ha colaborado con OpenAI en el desarrollo de SDKs para entornos multi-agente.",
        redes: {
          github: "https://github.com/carlosmendez",
          linkedin: "https://linkedin.com/in/carlosmendez"
        }
      }
    ]
  },
  {
    id: 6,
    titulo: "Build a Multi-Agent System",
    subtitulo: "Using OpenAI Agents SDK",
    descripcion: "Descubre cómo construir sistemas multi-agente con el SDK de OpenAI.",
    tiempo: "30 min / Live / Online",
    estado: "Finalizado",
    tipo: "pasados",
    fondo: "from-purple-300 to-purple-500",
    icono: "users",
    fecha: "Sábado, 10 de marzo",
    hora: "11:00 AM – 11:30 AM",
    organizador: "DeepStation",
    presentador: "Valentina Ortega",
    anfitrion: "Mehdi Zahid",
    modalidad: "Online",
    speakers: [
      {
        nombre: "Valentina Ortega",
        rol: "UX Designer, Cognify",
        foto: "/img/6.png",
        bio: "Diseñadora de experiencia de usuario especializada en interfaces conversacionales y sistemas de IA colaborativa. Cofundadora de Cognify, donde lidera el diseño de productos centrados en humanos para entornos inteligentes.",
        redes: {
          twitter: "https://twitter.com/valentinaUX",
          linkedin: "https://linkedin.com/in/valentinaortega",
          web: "https://valentinaortega.design"
        }
      },
      {
        nombre: "Mehdi Zahid",
        rol: "Co-founder, DeepStation",
        foto: "/img/2.png",
        bio: "Especialista en pensamiento sistémico aplicado a inteligencia artificial. Ha liderado proyectos de transformación digital en América Latina y Europa, y es cofundador de DeepStation.",
        redes: {
          linkedin: "https://linkedin.com/in/mehdizahid",
          web: "https://mehdizahid.ai"
        }
      }
    ]
  }
];

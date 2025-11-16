// Definición del tipo de lección
export type Lesson = {
  title: string;
  duration: string;
  description: string;
  completed: boolean;
  locked: boolean;
  index: number;
};

// Lecciones por tema
export const temas: Record<number, Lesson[]> = {
  1: [
    {
      title: "HTML semántico y accesibilidad",
      duration: "20 min",
      description: "En esta lección aprenderemos sobre la importancia del HTML semántico...",
      completed: false,
      locked: false,
      index: 1,
    },
    {
      title: "CSS moderno: Flex, Grid y utilidades",
      duration: "20 min",
      description: "Aprenderás a usar Flexbox y Grid para crear layouts modernos...",
      completed: false,
      locked: true,
      index: 2,
    },
    {
      title: "JavaScript ES6+ imprescindible",
      duration: "30 min",
      description: "Exploraremos las características modernas de ES6+: arrow functions, destructuring, módulos, async/await y más.",
      completed: false,
      locked: true,
      index: 3,
    },
  ],
  2: [
    {
      title: "POO en Java",
      duration: "25 min",
      description: "Conceptos de clases, objetos, herencia y polimorfismo.",
      completed: false,
      locked: false,
      index: 1,
    },
    {
      title: "Colecciones en Java",
      duration: "20 min",
      description: "Uso de listas, mapas y sets en Java.",
      completed: false,
      locked: true,
      index: 2,
    },
  ],
  3: [
    {
      title: "Fundamentos de Python",
      duration: "20 min",
      description: "Sintaxis básica, variables y tipos de datos en Python.",
      completed: false,
      locked: false,
      index: 1,
    },
    {
      title: "Estructuras de control",
      duration: "20 min",
      description: "Condicionales, bucles y control de flujo en Python.",
      completed: false,
      locked: true,
      index: 2,
    },
  ],
  4: [
    {
      title: "Introducción a Bases de Datos",
      duration: "25 min",
      description: "Conceptos básicos de SQL y modelado de datos.",
      completed: false,
      locked: false,
      index: 1,
    },
    {
      title: "Consultas avanzadas",
      duration: "30 min",
      description: "JOINs, subconsultas y optimización de queries.",
      completed: false,
      locked: true,
      index: 2,
    },
  ],
};

// Metadatos de cada módulo
export const temaMetadata: Record<number, { titulo: string; subtitulo: string; modulo: string, tiempo: string, prerequisitos: string }> = {
  0: {
    modulo: "Módulo Introductorio",
    titulo: "Introducción a la ruta de aprendizaje para profesores / Instructores",
    subtitulo: "Propuesta para la Modernización Curricular mediante la Integración de Módulos de Aceptación Universal (UA) desarrollado por el working grupo de UA de LACNOG",
    tiempo: "5 min",
    prerequisitos: "Cuenta en GitHub y roadmap.sh"
  },
  1: {
    modulo: "Modulo 1",
    titulo: "Instructor Guide for Unicode Basics",
    subtitulo: "Provide the basic understanding of Unicode and its applications.",
    tiempo: "180 min",
    prerequisitos: "Data types and data representations. ASCII encoding. ASCII input and output. ASCII files."
  },
  2: {
    modulo: "Modulo 2",
    titulo: "Unicode Advanced Programming",
    subtitulo:
      "Designed to expand your understanding and proficiency in working with Unicode by covering key aspects such as the character-glyph model, Unicode normalization, accessing the Unicode character database, and comparing Unicode strings.",
    tiempo: "300 min",
    prerequisitos: "Module 1, Advanced/ Object OrientedProgramming."
  },
  3: {
    modulo: "Modulo 3",
    titulo: "Unicode in Data Structures and Algorithms",
    subtitulo:
      "Comprehensive introduction to leveraging the power of Unicode in data structures and algorithms.",
    tiempo: "180 min",
    prerequisitos: "Modulo 2, Arrays, Lists, Sets, Queues, Trees, Dictionaries, etc., Sorting and Searching."
  },
  4: {
    modulo: "Modulo 4",
    titulo: "Unicode in Database Systems",
    subtitulo:
      "Concise introduction to the essential concepts and considerations when working with Unicode character data in the context of database systems.",
    tiempo: "120 min",
    prerequisitos: "Modulo 2,Unicode searching. SQL."
  },
};

export const temaMetadataEstudiante: Record<number, { modulo: string; titulo: string; subtitulo: string, prerequisitos: string, tiempo: string }> = {
  1: {
    modulo: "Módulo 1",
    titulo: "Instructor Guide for Unicode Basics",
    subtitulo: "Provide the basic understanding of Unicode and its applications.",
    prerequisitos:"",
    tiempo:""
  },
  2: {
    modulo: "Módulo 2",
    titulo: "Unicode Advanced Programming",
    subtitulo: "Designed to expand your understanding and proficiency in working with Unicode by covering key aspects such as the character-glyph model, Unicode normalization, accessing the Unicode character database, and comparing Unicode strings.",
    prerequisitos:"",
    tiempo:""
  },
  3: {
    modulo: "Módulo 3",
    titulo: "Unicode in Data Structures and Algorithms",
    subtitulo: "Comprehensive introduction to leveraging the power of Unicode in data structures and algorithms",
    prerequisitos:"",
    tiempo:""
  },
  4: {
    modulo: "Módulo 4",
    titulo: "Unicode in Database Systems",
    subtitulo: "Concise introduction to the essential concepts and considerations when working with Unicode character data in the context of database systems",
    prerequisitos:"",
    tiempo:""
  },
};



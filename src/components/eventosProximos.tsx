// src/components/eventosProximos.tsx
export type Evento = {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  tiempo: string;
  estado: string;
  tipo: "proximos" | "pasados";
  fondo: string;
  icono: "brain" | "users" | "chat" | "flow" | "robot";
};

export const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Prompting with Purpose",
    subtitulo: "Best Practices and Techniques for ChatGPT",
    descripcion: "Aprende a diseñar prompts efectivos para obtener mejores resultados con modelos de lenguaje.",
    tiempo: "30 min / Live / Online",
    estado: "Live in 5 días",
    tipo: "proximos",
    fondo: "from-blue-300 to-blue-500",
    icono: "brain",
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
  },
  {
    id: 3,
    titulo: "Prompting with Purpose II",
    subtitulo: "Best Practices and Techniques for ChatGPT",
    descripcion: "Aprende a diseñar prompts efectivos para obtener mejores resultados con modelos de lenguaje.",
    tiempo: "30 min / Live / Online",
    estado: "Live in 2 meses",
    tipo: "proximos",
    fondo: "from-blue-300 to-blue-500",
    icono: "brain",
  },
    {
    id: 4,
    titulo: "Designing AI Workflows",
    subtitulo: "Integrating LLMs into Real-World Applications",
    descripcion: "Aprende a estructurar flujos de trabajo para resolver problemas concretos.",
    tiempo: "45 min / Live / Online",
    estado: "Live in 10 días",
    tipo: "proximos",
    fondo: "from-green-300 to-green-500",
    icono: "flow",
  },
  {
    id: 5,
    titulo: "Conversational UX Masterclass",
    subtitulo: "Crafting Natural Dialogues with AI",
    descripcion: "Explora técnicas para mejorar la experiencia conversacional en interfaces basadas en IA.",
    tiempo: "60 min / Live / Online",
    estado: "Live in 2 semanas",
    tipo: "proximos",
    fondo: "from-yellow-300 to-yellow-500",
    icono: "chat",
  },
  {
    id: 6,
    titulo: "AI Agents in Production",
    subtitulo: "Scaling and Monitoring Autonomous Systems",
    descripcion: "Descubre cómo desplegar y supervisar agentes autónomos en entornos reales.",
    tiempo: "40 min / Live / Online",
    estado: "Live in 3 semanas",
    tipo: "proximos",
    fondo: "from-red-300 to-red-500",
    icono: "robot",
  },
];

// ✅ Exportar solo los eventos próximos
export const eventosProximos: Evento[] = eventos.filter((evento) => evento.tipo === "proximos");

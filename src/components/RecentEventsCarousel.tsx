import React from "react";

const events = [
  {
    title: "Prompting with Purpose",
    subtitle: "Best Practices and Techniques for ChatGPT",
    format: "30 min / Live / Online",
    category: "Prácticas",
    description:
      "Aprende a diseñar prompts efectivos para obtener mejores resultados con modelos de lenguaje.",
  },
  {
    title: "Build a Multi-Agent System",
    subtitle: "Using OpenAI Agents SDK",
    format: "30 min / Live / Online",
    category: "Prácticas",
    description:
      "Descubre cómo construir sistemas multi-agente con el SDK de OpenAI.",
  },
  {
    title: "Prompting with Purpose II",
    subtitle: "Best Practices and Techniques for ChatGPT",
    format: "30 min / Live / Online",
    category: "Prácticas",
    description:
      "Aprende a diseñar prompts efectivos para obtener mejores resultados con modelos de lenguaje.",
  },
];

const RecentEventsCarousel: React.FC = () => {
  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Eventos Recientes</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max">
          {events.map((event, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{event.subtitle}</p>
                <p className="text-xs text-gray-500 mb-1">{event.format}</p>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full mb-2">
                  {event.category}
                </span>
                <p className="text-sm text-gray-700">{event.description}</p>
              </div>
              <a
                href="#"
                className="mt-4 text-sm text-blue-600 hover:underline font-medium"
              >
                Ver más detalles →
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Ver todos los eventos
        </button>
      </div>
    </section>
  );
};

export default RecentEventsCarousel;

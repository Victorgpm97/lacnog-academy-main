import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Lesson } from "../data/temas";
import { temaMetadata } from "../data/temas";

type Props = {
  tema: number;
  onBack: () => void;
  onDeleteTema: (temaId: number) => void;
};

export default function PrepararTemaView({ tema, onBack, onDeleteTema }: Props) {
  const storageKey = `preparar-tema-${tema}`;

  const [titulo, setTitulo] = useState<string | undefined>();
  const [prerequisitos, setPrerequisitos] = useState(
    "1) Crear o tener una cta en https://github.com/ (colocar el icono de github)      2) Crear una cuenta de usuario en https://roadmap.sh"
  );
  const [lessons, setLessons] = useState<Omit<Lesson, "completed" | "locked">[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);

  // Cargar desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setTitulo(parsed.titulo || titulo);
      setPrerequisitos(parsed.prerequisitos || prerequisitos);
      setLessons(parsed.lessons || []);
    } else {
      setLessons([
        {
          title: "HTML semántico y accesibilidad",
          duration: "20 min",
          description: "En esta lección aprenderemos sobre la importancia del HTML semántico…",
          index: 1,
        },
        {
          title: "CSS moderno: Flex, Grid y utilidades",
          duration: "20 min",
          description: "Aprenderás a usar Flexbox y Grid para crear layouts modernos…",
          index: 2,
        },
        {
          title: "JavaScript ES6+ imprescindible",
          duration: "30 min",
          description: "Exploraremos las características modernas de ES6+: arrow functions, destructuring, módulos, async/await y más.",
          index: 3,
        },
      ]);
    }
  }, []);

  // Guardar en localStorage
  const saveAll = () => {
    const data = { titulo, prerequisitos, lessons };
    localStorage.setItem(storageKey, JSON.stringify(data));
    alert("✅ Cambios guardados correctamente");
  };

  // 🔑 Obtener título y subtítulo desde temaMetadata
  const meta = temaMetadata[tema];
  const tituloTexto = meta?.titulo || "Instrucciones para Profesores";
  const subtituloTexto = meta?.subtitulo;

  const toggleLesson = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
      {/* Header */}
      <button
        onClick={onBack}
        className="mb-4 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:text-[#FEA723] transition-colors duration-300 cursor-pointer"
      >
        ← Volver
      </button>

      {/* Título del módulo */}
      <section className="mb-10">
        <div className="bg-[#FEA723] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold text-center">Módulo {tema}</h2>
          <p className="text-3xl font-bold text-center">{tituloTexto}</p>
          <p className="text-md italic text-center text-white opacity-90 mt-2">{subtituloTexto}</p>
        </div>
      </section>

      {/* Pre-requisitos */}
      <section className="mb-6">
        <div className="flex flex-col border-[#FEA723] bg-[#ffbd58] p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pre-requisitos</h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-900">
            <li className="flex items-center gap-2 text-gray-900">
              Crear o tener una cuenta en{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 flex items-center gap-1"
              >
                GitHub
                <svg
                  height="20"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="20"
                  data-view-component="true"
                  className="octicon octicon-mark-github v-align-middle"
                >
                  <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-900">
              Crear una cuenta de usuario en{" "}
              <a
                href="https://roadmap.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900"
              >
                roadmap.sh
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Lecciones en cortina (solo lectura) */}
      <section className="mb-6 hidden">
        <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Instrucciones para conectarse a la ruta de aprendizaje</h2>
          <ul className="space-y-4">
            {lessons.map((lesson) => (
              <li key={lesson.index} className="border-b pb-3">
                {/* Cabecera de la cortina */}
                <div
                  className="flex justify-between items-center p-3 cursor-pointer"
                  onClick={() => toggleLesson(lesson.index)}
                >
                  <h3 className="text-lg font-semibold text-gray-700">
                    {lesson.title}{" "}
                    <span className="text-sm text-gray-500">– {lesson.duration}</span>
                  </h3>
                  {expanded === lesson.index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>

                {/* Contenido de la cortina */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    expanded === lesson.index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden p-3">
                    <div className="overflow-hidden p-3">
                      <p className="text-sm text-gray-600">{lesson.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Botón de guardar y eliminar */}
      <div className="flex justify-end items-center w-80 gap-4">
        <button
          onClick={saveAll}
          className="text-[#FEA723] px-6 py-2 rounded-md font-medium hover:text-[#ffb956] transition-colors duration-300 cursor-pointer hidden"
        >
          Guardar
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(storageKey);
            onDeleteTema(tema);
          }}
          className="text-red-500 px-6 py-2 rounded-md font-medium hover:text-red-300 transition-colors duration-300 cursor-pointer hidden"
        >
          Eliminar
        </button>
      </div>

      {/* Licencia */}
      <section>
        <div className="border border-[#ffb23e] bg-[#eda33e] p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-4">
          <h2 className="text-lg font-semibold text-white mb-2">Licencia</h2>
          <p className="text-sm text-white">
            Creative Commons License – Attribution 4.0 International (CC BY 4.0)
          </p>
        </div>
      </section>
    </div>
  );
}

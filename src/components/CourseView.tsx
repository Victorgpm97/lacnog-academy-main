import React, { useState, useEffect } from "react";
import { Settings, Lightbulb, CheckCircle, Lock, ChevronDown, ChevronUp } from "lucide-react";
import type { Lesson as TemaLesson } from "../data/temas";
import { temaMetadata } from "../data/temas"; // 👈 Importar metadatos

interface Lesson {
  title: string;
  duration: string;
  description?: string;
  completed: boolean;
  locked: boolean;
  index: number;
}

type Props = {
  area: string; // Ej: "Tema 1"
  lessons: TemaLesson[];
  onBack: () => void;
};

export default function CourseView({ area, lessons: initialLessons, onBack }: Props) {
  const temaId = parseInt(area.replace("Tema ", ""), 10);
  const storageKey = `preparar-tema-${temaId}`;

  const [titulo, setTitulo] = useState(area);
  const [prerequisitos, setPrerequisitos] = useState();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);

  // Cargar desde localStorage si existe
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTitulo(parsed.titulo || area);
        setPrerequisitos(parsed.prerequisitos || "Colocar Pre-requisitos en esta área");
        if (parsed.lessons) {
          const enriched = parsed.lessons.map((l: any, i: number) => ({
            ...l,
            completed: l.completed ?? false,
            locked: l.locked ?? (i !== 0),
          }));
          setLessons(enriched);
        }
      } catch (e) {
        console.error("Error leyendo tema desde localStorage", e);
      }
    } else {
      const enriched = initialLessons.map((l, i) => ({
        ...l,
        completed: false,
        locked: i !== 0,
      }));
      setLessons(enriched);
    }
  }, [storageKey, area, initialLessons]);

  // Guardar progreso en localStorage
  useEffect(() => {
    if (lessons.length > 0) {
      const data = { titulo, prerequisitos, lessons };
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
  }, [lessons, titulo, prerequisitos, storageKey]);

  const toggleLesson = (index: number) => {
    setExpanded(expanded === index ? null : index);

    setLessons((prev) =>
      prev.map((lesson) => {
        if (lesson.index === index) {
          return { ...lesson, completed: true, locked: false };
        }
        if (lesson.index === index + 1) {
          return { ...lesson, locked: false };
        }
        return lesson;
      })
    );
  };

  const completedCount = lessons.filter((l) => l.completed).length;
  const total = lessons.length;
  const progress = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  // 🔑 Obtener metadatos del módulo
  const meta = temaMetadata[temaId];
  const moduloTexto = meta?.modulo || `Módulo ${temaId}`;
  const tituloTexto = meta?.titulo || titulo;
  const subtituloTexto = meta?.subtitulo || "";

  return (
    <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
      {/* Botón Volver */}
      <div className="mb-4">
        <button
          onClick={onBack}
          className="mb-4 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:text-[#FEA723] transition-colors duration-300 cursor-pointer"
        >
          ← Volver
        </button>
      </div>

      {/* Encabezado con módulo y título */}
      <section className="mb-6 bg-[#FEA723] rounded-2xl"> 
        <div className="bg-[#FEA723] text-white p-6 rounded-lg flex flex-col items-center gap-2 shadow-md">
          <h2 className="text-xl font-bold text-center">{moduloTexto}</h2>
          <p className="text-2xl font-bold text-center">{tituloTexto}</p>
          {subtituloTexto && (
            <p className="text-md italic text-center text-white opacity-90 mt-2">{subtituloTexto}</p>
          )}
        </div>
      </section>

      {/* Pre-requisitos */}
      <section className="mb-6">
        <div className="border border-[#FEA723] bg-[#ffddba] p-6 rounded-lg shadow-md flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Pre-requisitos</h2>
              <div>
              <ol className="list-decimal list-inside space-y-3 text-sm text-gray-900">
                <li className="flex items-center gap-2 text-gray-900">
                  1) Crear o tener una cuenta en 
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 flex items-center gap-1">
                    GitHub
                    <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                        <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                    </svg>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-900e">
                  2) Crear una cuenta de usuario en 
                  <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer" className="text-gray-900">
                    roadmap.sh
                  </a>
                </li>
              </ol>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de progreso */}
      <section className="hidden">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{completedCount} de {total} completadas</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#FEA723] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      {/* Lecciones */}
      <section className="mb-6 hidden">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto hidden">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Instrucciones del curso</h2>
          <ul className="space-y-4">
            {lessons.map((lesson) => (
              <li key={lesson.index} className="border-b pb-3 hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {lesson.completed ? (
                      <CheckCircle size={22} className="text-green-500" />
                    ) : lesson.locked ? (
                      <Lock size={20} className="text-gray-500" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-400 rounded-full" />
                    )}
                    <h3 className="text-lg font-semibold text-gray-700">
                      {lesson.title}{" "}
                      <span
                        className={`text-sm font-medium ${
                          lesson.completed ? "text-blue-600" : "text-gray-500"
                        }`}
                      >
                        – {lesson.duration}
                      </span>
                    </h3>
                  </div>
                  {!lesson.locked && (
                    <button
                      onClick={() => toggleLesson(lesson.index)}
                      className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    >
                      {expanded === lesson.index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  )}
                </div>

                {/* Cortina */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    expanded === lesson.index
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-600">{lesson.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Licencia */}
      <section>
        <div className="border border-[#ffb23e] bg-[#ffb23e] p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-2">Licencia</h2>
          <p className="text-sm text-white">
            Creative Commons License – Attribution 4.0 International (CC BY 4.0)
          </p>
        </div>
      </section>
    </div>
  );
}

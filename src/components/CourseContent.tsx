import { useState } from "react";

type Props = {
  title: string;
  description: string;
  modules: string[];
};

export default function CourseContent({ title, description, modules }: Props) {
  const [completed, setCompleted] = useState<number[]>([]);

  const handleLessonClick = (index: number) => {
    setCompleted((prev) => [...new Set([...prev, index])]);
    alert(`Abriste el módulo: ${modules[index]}`);
  };

  const isModuleLocked = (index: number) => {
    if (index === 0) return false;
    return !completed.includes(index - 1);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-8 pb-24 space-y-10">
      {/* Header */}
      <header className="space-y-4 border-b border-[#FEA723] pb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#323232] tracking-tight">
          {title}
        </h1>
        <p className="text-[#323232] text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </header>

      {/* Lista de módulos */}
      <section className="space-y-6">
        {modules.map((mod, index) => (
          <div
            key={index}
            className={`border border-[#FEA723] rounded-2xl shadow-md bg-white px-4 py-6 ${
              index === modules.length - 1 ? "mb-8" : ""
            }`}
          >
            {/* Encabezado del módulo */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
              <h2 className="font-semibold text-[#FEA723] text-base sm:text-lg">
                Módulo {index + 1}: {mod}
              </h2>
              {isModuleLocked(index) ? (
                <span className="text-red-500 text-sm">🔒 Bloqueado</span>
              ) : completed.includes(index) ? (
                <span className="text-green-600 text-sm">✅ Completado</span>
              ) : (
                <span className="text-blue-600 text-sm">🟢 Disponible</span>
              )}
            </div>

            {/* Botón para abrir módulo */}
            <button
              onClick={() => handleLessonClick(index)}
              disabled={isModuleLocked(index)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition text-sm sm:text-base ${
                completed.includes(index)
                  ? "bg-green-100 border-green-400"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              } ${
                isModuleLocked(index) ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {completed.includes(index)
                ? "Revisar módulo nuevamente"
                : "Abrir módulo"}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
import React, { useState } from "react";
import { ArcadeEmbed } from "./ArcadeEmbed";

type Props = {
  onBack: () => void;
};

export default function ProfesorIntroCard({ onBack }: Props) {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:text-[#FEA723] transition-colors duration-300 cursor-pointer"
      >
        ← Volver
      </button>

      {/* Título */}
      <section className="mb-6">
        <div className="bg-[#FEA723] text-white p-8 rounded-2xl shadow-md flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold text-center">
            Introducción a la ruta de aprendizaje para profesores / Instructores
          </h2>
        </div>
      </section>

      {/* Pre-requisitos */}
      <section className="mb-6">
        <div className="flex flex-col border-[#FEA723] bg-[#ffbd58] p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pre-requisitos</h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-900">
            <li className="flex items-center gap-2">
              1) Crear o tener una cuenta en{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 flex items-center gap-1"
              >
                GitHub
                <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                  <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center gap-2">
              2) Crear una cuenta de usuario en{" "}
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

      {/* Instrucciones */}
      <section className="mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Instrucciones para conectarse a la ruta de aprendizaje
          </h2>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Ver tutorial</h3>
            <span className="text-sm text-gray-500">(5 Min)</span>
          </div>
        <div className="flex justify-center">
        <button
            onClick={() => setShowTutorial(true)}
            className="bg-[#FEA723] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FE9E1B] hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
            Ver tutorial
        </button>
        </div>


          {showTutorial && <ArcadeEmbed onClose={() => setShowTutorial(false)} />}
        </div>
      </section>
    </div>
  );
}

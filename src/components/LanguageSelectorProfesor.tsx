import React, { useState, useEffect } from "react";
import CourseView from "../components/CourseView";
import TemaView from "../components/TemaView";
import ModalRolSelector from "./ModalRolSelector";
//import PrepararTemaView from "./PrepararTemaView";
import { temas, temaMetadata, temaMetadataEstudiante } from "../data/temas";
import Lacnog from "../logos/Logo-LACNOG-1-300x154.png";
import ProfesorIntroCard from "../components/tutoria/ProfesorIntroCard";



export default function LanguageSelector() {
  const [role, setRole] = useState<"profesor" | "estudiante" | null>(null);
  const [preparandoTema, setPreparandoTema] = useState<{ tema: number } | null>(null);
  const [viewingCourse, setViewingCourse] = useState<number | null>(null);
  const [showRolModal, setShowRolModal] = useState(false);
  const [temasDisponibles, setTemasDisponibles] = useState<number[]>([]);
  const [mostrarIntroProfesor, setMostrarIntroProfesor] = useState(false);


  // Cargar rol y lista de temas desde localStorage
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole")?.trim().toLowerCase();
    if (storedRole === "profesor" || storedRole === "estudiante") {
      setRole(storedRole);
    } else {
      setShowRolModal(true);
    }

    const storedTemas = localStorage.getItem("temasDisponibles");
    if (storedTemas) {
      setTemasDisponibles(JSON.parse(storedTemas));
    } else {
      setTemasDisponibles([1, 2, 3, 4]); // inicial por defecto
    }
  }, []);

  // Guardar lista de temas en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("temasDisponibles", JSON.stringify(temasDisponibles));
  }, [temasDisponibles]);

  const handleSelectRole = (newRole: "profesor" | "estudiante") => {
    setRole(newRole);
    localStorage.setItem("userRole", newRole);
    setShowRolModal(false);
  };

  const handleTemaClick = (tema: number) => {
    if (role === "profesor") {
      setPreparandoTema({ tema });
    } else {
      setViewingCourse(tema);
    }
  };

  const handleAgregarTema = () => {
    const nuevo = temasDisponibles.length > 0 ? Math.max(...temasDisponibles) + 1 : 1;
    setTemasDisponibles([...temasDisponibles, nuevo]);
    setPreparandoTema({ tema: nuevo }); // redirige directo a PrepararTemaView
  };

  // Vista de TemaView (profesor preparando tema)
  if (preparandoTema) {
    return (
      <TemaView
        tema={preparandoTema.tema}
        onBack={() => setPreparandoTema(null)}
        onDeleteTema={(temaId) => {
          setTemasDisponibles((prev) => prev.filter((t) => t !== temaId));
          setPreparandoTema(null);
        }}
      />
    );
  }

  // Vista de CourseView (estudiante)
  if (viewingCourse !== null) {
    return (
      <CourseView
        area={`Tema ${viewingCourse}`}
        lessons={temas[viewingCourse]}
        onBack={() => setViewingCourse(null)}
      />
    );
  }

  if (mostrarIntroProfesor) {
    return <ProfesorIntroCard onBack={() => setMostrarIntroProfesor(false)} />;
  }

    // Seleccionar metadatos según rol
  const metadata = role === "profesor" ? temaMetadata : temaMetadataEstudiante;


  return (
    <>
      <div className="bg-white p-6 rounded-lg max-w-6xl mx-auto mt-10 mb-16">
        {/* Modal de rol */}
        {showRolModal && (
          <ModalRolSelector
            onClose={() => setShowRolModal(false)}
            onSelectRole={handleSelectRole}
          />
        )}

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-amber-100 p-4 rounded-lg shadow-sm">
            <div className="text-[#FEA723] text-5xl font-bold mb-2">
              {temasDisponibles.length}
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Temas Disponibles</h3>
          </div>
          <div className="bg-amber-100 p-4 rounded-lg shadow-sm">
            <div className="flex justify-center items-center py-2 gap-4 mb-2">
              <img src="/logos/java-logo.png" alt="Java" className="w-9 h-9 object-contain" />
              <img src="/logos/python-logo.png" alt="Python" className="w-9 h-9 object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Lenguajes</h3>
          </div>
          <div className="bg-amber-100 p-4 rounded-lg shadow-sm py-8">
            <img src="/icons/books-stack.png" alt="Formato autoasistido" className="w-8 h-8 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-700">Formato autoasistido</h3>
          </div>
        </div>

        {/* Botón para cambiar rol */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowRolModal(true)}
            className="bg-[#FEA723] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FE9E1B] hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            Cambiar Rol
          </button>
        </div>
        {/* Tarjeta especial para profesores */}
        {role === "profesor" && (

        <div className="flex justify-center mt-10 mb-6">
          <div className="bg-amber-100 rounded-xl shadow-md p-6 max-w-3xl w-full text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Introducción para profesores <h3 className="font-semibold">Ruta de aprendizaje sobre Aceptación Universal.</h3> 
            </h3>
            <p className="text-sm font-light text-gray-700 mb-4">
              Propuesta para la Modernización Curricular mediante la Integración de Módulos de Aceptación Universal (UA) desarrollado por el working grupo de UA de LACNOG
            </p>
            <button
              onClick={() => setMostrarIntroProfesor(true)}
              className="bg-[#FEA723] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FE9E1B] hover:scale-102 transition-transform duration-300 cursor-pointer"
            >
              Ver - Introducción para profesores
            </button>
          </div>
        </div>
        )}

        {/* Temas */}
        {(role === "profesor" || role === "estudiante") ? (
          <div className="bg-orange-200 rounded-lg shadow-sm mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              {temasDisponibles.map((tema) => {
                const meta = metadata[tema];
                const titulo = meta?.titulo || `Tema ${tema}`;
                const subtitulo = meta?.subtitulo || "No hay subtítulos.";
                const tiempo = meta?.tiempo || "No hay tiempo";
                const prerequisitos = meta?.prerequisitos || "No hay pre-requisitos";
                const modulo = meta?.modulo;

                return (
                  <div
                    key={tema}
                    className="bg-amber-50 rounded-lg p-4 flex flex-col justify-between hover:scale-102 -translate-y-1 transition-transform animate-slide-up duration-300 cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{titulo}</h3>
                    <p className="text-sm text-gray-600 mb-2 font-light">{subtitulo}</p>
                    {role === "profesor" && (
                      <>
                        <p className="text-sm text-gray-600 mb-1 font-semibold">Tiempo Estimado: <span className="text-blue-500 font-bold">{tiempo}</span></p>
                        <p className="font-light text-sm py-2">{prerequisitos}</p>
                      </>
                    )}
                    <button
                      className="bg-[#FEA723] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FE9E1B] hover:scale-102 transition-transform duration-300 cursor-pointer"
                    >
                      Ver detalles
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-6">Cargando rol…</div>
        )}
      </div>
    <footer className="bg-[#323232] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src={Lacnog.src} alt="" className="w-35 h-20"/>
          </div>
          <p className="text-gray-400 mb-6">Proyecto apoyado por LACNOG - Grupo de operadores de Redes de Latinoamérica y el Caribe</p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500">© 2024 Academy. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
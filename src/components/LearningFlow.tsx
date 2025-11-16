import { useState, useEffect } from "react";
import AreaSelector from "./AreaSelector";
import LanguageSelector from "./LanguageSelector";
import LearningTopics from "./LearningTopics";
import { useAuth } from "../context/AuthContext";

export default function LearningFlow() {
  const { user } = useAuth();
  const [step, setStep] = useState<"area" | "language" | "topics">("area");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [perfilGuardado, setPerfilGuardado] = useState(false);

  useEffect(() => {
    const storedArea = localStorage.getItem("selectedArea");
    const storedLang = localStorage.getItem("selectedLanguage");
    if (storedArea) setSelectedArea(storedArea);
    if (storedLang) setSelectedLanguage(storedLang);
  }, []);

  const handleAreaSelect = (areaId: string) => {
    setSelectedArea(areaId);
    localStorage.setItem("selectedArea", areaId);
    setStep("language");
  };

  useEffect(() => {
    const guardarPerfil = async () => {
      if (!user?.email || !selectedArea || !selectedLanguage || perfilGuardado) return;

      const progresoInicial = {
        tema1: { completado: false, porcentaje: 0 },
        tema2: { completado: false, porcentaje: 0 },
        tema3: { completado: false, porcentaje: 0 },
        tema4: { completado: false, porcentaje: 0 },
      };

      try {
        const res = await fetch("/api/post-profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            area: selectedArea,
            lenguaje: selectedLanguage,
            progreso: progresoInicial,
          }),
        });

        const data = await res.json();
        if (data.success) {
          setPerfilGuardado(true);
        }
      } catch (error) {
        console.error("Error al guardar el perfil:", error);
      }
    };

    if (step === "topics") {
      guardarPerfil();
    }
  }, [step, selectedArea, selectedLanguage, user, perfilGuardado]);

  return (
    <div className="space-y-12">
        <section className="space-y-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Crea tu Ruta de Aprendizaje en <span className="text-[#FEA723]">Academy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Selecciona el área de tu interés y te mostraremos los módulos que necesitas.
            </p>
          </div>
          <AreaSelector onSelect={handleAreaSelect} />
        </section>
      <div className="hidden">
        {step === "language" && selectedArea && (
                <section className="space-y-6">
                  <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                      Crea tu Ruta de Aprendizaje en <span className="text-[#FEA723]">Academy</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                      Selecciona el lenguaje que prefieres para personalizar tu experiencia.
                    </p>
                  </div>
                  <h2 className="text-2xl font-semibold text-center">¿Qué lenguaje de programación prefieres?</h2>
                  <p className="text-center text-gray-600">
                    Personaliza tu ruta de aprendizaje según tu lenguaje favorito.
                  </p>
                  <div className="text-center">
                    <button
                      onClick={() => setStep("area")}
                      className="text-sm text-[#0078D4] hover:underline cursor-pointer"
                    >
                      ← Volver
                    </button>
                  </div>
                  <LanguageSelector />
                </section>
              )}
      </div>
      
    </div>
  );
}
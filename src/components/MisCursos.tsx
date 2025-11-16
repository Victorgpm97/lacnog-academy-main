import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

type ProgresoTema = {
  completado: boolean;
  porcentaje: number;
};

type PerfilUsuario = {
  email: string;
  area: string;
  lenguaje: string;
  progreso: {
    [temaId: string]: ProgresoTema;
  };
};

export default function MisCursos() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<PerfilUsuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfil = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch(`/api/get-profile?email=${user.email}`);
        if (!res.ok) throw new Error("Perfil no encontrado");
        const data = await res.json();
        setPerfil(data);
      } catch (error) {
        console.warn("No se pudo cargar el perfil:", error);
        setPerfil(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfil();
  }, [user]);

  if (loading) {
    return <p className="text-center py-12 text-gray-500">Cargando tus cursos...</p>;
  }

  if (!perfil || !perfil.progreso || Object.keys(perfil.progreso).length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 space-y-4">
        <h2 className="text-2xl font-semibold">Sin cursos disponibles</h2>
        <p className="text-sm text-gray-400">Aún no has creado tu ruta de aprendizaje.</p>
        <a href="/contents" className="text-[#FEA723] hover:underline font-medium">
          Crear mi ruta →
        </a>
      </div>
    );
  }

  const temasPorArea: Record<string, Record<string, string>> = {
    fundamentals: {
      tema1: "Resolución de problemas matemáticos.",
      tema2: "Estructuras de control básicas.",
      tema3: "Funciones y lógica.",
      tema4: "Manipulación de arrays.",
    },
    estadística: {
      tema1: "Explora conceptos fundamentales de la estadística.",
      tema2: "Probabilidad y decisiones informadas.",
      tema3: "Inferencia estadística.",
      tema4: "Interpretación de gráficos.",
    },
    // Puedes agregar más áreas aquí
  };

  const temasInfo = temasPorArea[perfil.area.toLowerCase()] ?? {};

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-[#FEA723]">Todos mis cursos</h1>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <p className="text-gray-700 text-sm"><strong>Área:</strong> {perfil.area}</p>
        <p className="text-gray-700 text-sm"><strong>Lenguaje:</strong> {perfil.lenguaje}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {Object.entries(perfil.progreso).map(([temaId, estado]) => (
          <div key={temaId} className="bg-white rounded-xl shadow-md border border-gray-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold text-[#323232]">Tema {temaId.replace("tema", "")}</h2>
            <p className="text-sm text-gray-600">{temasInfo[temaId]}</p>
            <p className="text-sm font-medium text-[#FEA723]">
              {estado.completado
                ? "✅ Completado"
                : estado.porcentaje > 0
                ? "🚀 En progreso"
                : "🐣 Sin iniciar"}
            </p>

            <div className="w-full bg-gray-100 rounded-full h-4 mt-2">
              <div
                className="bg-[#FEA723] h-4 rounded-full transition-all duration-300"
                style={{ width: `${estado.porcentaje}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 text-right">{estado.porcentaje}% completado</p>

            <button
              className="mt-2 text-sm text-[#FEA723] hover:underline font-medium"
              onClick={() => window.location.href = `/tema/${temaId}`}
            >
              {estado.completado ? "Revisar contenido" : "Continuar tema"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
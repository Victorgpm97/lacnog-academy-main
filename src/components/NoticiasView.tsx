import React, { useState, useEffect } from "react";
import FeaturedSection from "../components/FeaturedSection";

const DashboardPage: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    setUserRole(storedRole);
  }, []);

  const articles = [
    {
      id: 1,
      titulo: "Unveiling ChatGPT for Government: A Prompt Pack for Republic of Singapore GovTech",
      resumen: "Descubre cómo Singapore GovTech está aprovechando ChatGPT para innovar en el sector público.",
      articulo:
        "El gobierno de Singapur, a través de su agencia GovTech, ha lanzado un paquete de prompts diseñado específicamente para mejorar la interacción entre ciudadanos y servicios públicos mediante ChatGPT...",
      imagen: "/img/govtech.jpg",
      tags: ["Privacy Policy", "Ethics and Compliance"],
    },
    {
      id: 2,
      titulo: "Unveiling ChatGPT for Government: A Prompt Pack for Locatrix",
      resumen: "Explora cómo Locatrix integra ChatGPT en sus flujos cívicos.",
      articulo:
        "Locatrix ha incorporado ChatGPT en sus procesos para mejorar la comunicación entre ciudadanos y autoridades locales...",
      imagen: "/img/locatrix.jpg",
      tags: ["Terms", "Cookie Policy"],
    },
    {
      id: 3,
      titulo: "Aligned Procurement Strategy for Government Teams using ChatGPT Integration",
      resumen: "ChatGPT apoya la alineación de compras públicas con herramientas potenciadas por IA.",
      articulo:
        "La estrategia de compras públicas está siendo transformada por la integración de ChatGPT en equipos gubernamentales...",
      imagen: "/img/procurement.jpg",
      tags: ["Intellectual Property Policy", "Ethics and Compliance"],
    },
    {
      id: 4,
      titulo: "Crafting Success with ChatGPT: Listings Law Enforcement Deployment",
      resumen: "Cómo agencias de seguridad están desplegando ChatGPT para mejorar operaciones.",
      articulo:
        "Las fuerzas de seguridad están adoptando ChatGPT como herramienta de apoyo operativo...",
      imagen: "/img/law-enforcement.jpg",
      tags: ["Privacy Policy", "Terms"],
    },
  ];

  const filteredArticles = activeTag
    ? articles.filter((a) => a.tags.includes(activeTag))
    : articles;

  return (
    <main className="bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Sección Destacados */}
        <FeaturedSection />

        {/* Sección Admins */}
        <section className="w-full bg-linear-to-r from-purple-700 via-pink-600 to-orange-500 text-white py-12 px-6 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Admins</h2>
          <p className="max-w-3xl mb-6">
            Audit who's used your GPTs and how in the explore GPTs app. By making
            yourself an admin, you grant users can't use your GPTs if they don't
            agree to your terms. Admins can also view analytics from the explore
            GPTs app to see usage and history.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              "Terms",
              "Privacy Policy",
              "Intellectual Property Policy",
              "Ethics and Compliance",
              "Cookie Policy",
            ].map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setActiveTag(activeTag === tag ? null : tag)
                }
                className={`px-3 py-1 rounded-full font-medium cursor-pointer ${
                  activeTag === tag
                    ? "bg-white text-orange-600"
                    : "bg-white/20 text-blue-200 hover:bg-white/30"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </section>

        {/* Sección Artículos */}
        <section className="w-full py-12 px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#FE9E1B]">Noticias</h2>
            {userRole === "profesor" && (
              <a
                href="/crear-noticias"
                className="bg-[#FE9E1B] text-white px-4 py-2 rounded hover:bg-[#FEA723] transition text-sm font-medium"
              >
                Crear Nueva Noticia
              </a>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col md:flex-row items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <img
                  src={article.imagen}
                  alt={article.titulo}
                  className="w-full md:w-40 h-24 object-cover rounded-md"
                />
                <div>
                  <a href={`/noticias/${article.id}`}>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1 hover:underline cursor-pointer">
                      {article.titulo}
                    </h3>
                  </a>
                  <p className="text-sm text-gray-600 mb-2">{article.resumen}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;

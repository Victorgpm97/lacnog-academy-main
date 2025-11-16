import React, { useState } from "react";

export default function CrearNoticia() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [articulo, setArticulo] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // 🔹 Estados añadidos para feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImagen(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("titulo", titulo);
      formData.append("contenido", contenido);
      formData.append("articulo", articulo); // 🔹 agregado
      if (imagen) formData.append("imagen", imagen);

      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error al publicar la noticia");

      setSuccess(true);
      setTitulo("");
      setContenido("");
      setArticulo("");
      setImagen(null);
      setPreview(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-3xl font-bold text-[#FE9E1B] mb-8 text-center">
        Añadir nueva noticia
      </h2>

      {/* Botón volver */}
      <a
        href="/noticias"
        className="text-[#FE9E1B] px-4 py-2 rounded hover:text-[#FE9E1B] transition text-sm font-medium mb-6 cursor-pointer"
      >
        ← Volver Atrás
      </a>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-md space-y-6"
      >
        {/* Título */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Título:
          </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE9E1B]"
            required
          />
        </div>

        {/* Contenido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resumen:
          </label>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            rows={8}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE9E1B]"
            required
          />
        </div>

        {/* Artículo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Artículo:
          </label>
          <textarea
            value={articulo}
            onChange={(e) => setArticulo(e.target.value)}
            placeholder="Contenido completo"
            className="w-full border p-2 rounded bg-white h-20"
            required
          />
        </div>

        {/* Imagen destacada */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imagen destacada:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagen}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#FE9E1B] file:text-white hover:file:bg-orange-600 cursor-pointer"
          />
          {preview && (
            <img
              src={preview}
              alt="Vista previa"
              className="mt-4 rounded-lg border border-gray-300 w-full object-cover max-h-64"
            />
          )}
        </div>

        {/* Feedback */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && (
          <p className="text-green-600 text-sm">Noticia publicada con éxito ✅</p>
        )}
        {loading && <p className="text-gray-500 text-sm">Publicando...</p>}

        {/* Botón enviar */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#FE9E1B] text-white px-6 py-2 rounded transition cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
            }`}
          >
            {loading ? "Publicando..." : "Publicar noticia"}
          </button>
        </div>
      </form>
    </section>
  );
}

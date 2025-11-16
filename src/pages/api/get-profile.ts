import type { APIRoute } from "astro";
import { obtenerPerfil } from "../../lib/perfilStore";

export const GET: APIRoute = async ({ url }) => {
  const email = url.searchParams.get("email");

  if (!email) {
    return new Response(JSON.stringify({ error: "Email requerido" }), { status: 400 });
  }

  const perfil = obtenerPerfil(email);

  if (!perfil) {
    return new Response(JSON.stringify({ error: "Perfil no encontrado" }), { status: 404 });
  }

  return new Response(JSON.stringify(perfil), { status: 200 });
};
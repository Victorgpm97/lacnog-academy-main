import type { APIRoute } from "astro";
import { guardarPerfil } from "../../lib/perfilStore";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  if (!body.email || !body.area || !body.lenguaje || !body.progreso) {
    return new Response(JSON.stringify({ error: "Datos incompletos" }), { status: 400 });
  }

  guardarPerfil(body);
  return new Response(JSON.stringify({ success: true, perfil: body }), { status: 200 });
};
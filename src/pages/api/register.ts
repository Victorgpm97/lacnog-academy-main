import type { APIRoute } from "astro";
import { registrarUsuario } from "../../lib/userStore";

export const POST: APIRoute = async ({ request }) => {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: "Datos incompletos" }), { status: 400 });
  }

  const success = registrarUsuario({ name, email, password });

  if (!success) {
    return new Response(JSON.stringify({ error: "El usuario ya existe" }), { status: 409 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
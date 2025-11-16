import type { APIRoute } from "astro";
import { validarCredenciales } from "../../lib/userStore";

export const POST: APIRoute = async ({ request }) => {
  const { email, password } = await request.json();

  const user = validarCredenciales(email, password);

  if (!user) {
    return new Response(JSON.stringify({ error: "Credenciales inválidas" }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ name: user.name }), {
    status: 200,
  });
};
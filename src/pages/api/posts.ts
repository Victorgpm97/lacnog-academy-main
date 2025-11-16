import type { APIRoute } from "astro";
import { db } from "../../lib/db";
import { posts } from "../../lib/schema";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const titulo = formData.get("titulo")?.toString() || "";
  const contenido = formData.get("contenido")?.toString() || "";
  const imagen = formData.get("imagen") as File | null;

  let imageUrl = "";
  if (imagen) {
    const buffer = await imagen.arrayBuffer();
    const fileName = `${Date.now()}-${imagen.name}`;
    const uploadDir = join(process.cwd(), "public/uploads");

    // Asegura que la carpeta exista
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = join(uploadDir, fileName);
    writeFileSync(filePath, Buffer.from(buffer));
    imageUrl = `/uploads/${fileName}`;
  }

  await db.insert(posts).values({ titulo, contenido, imagen: imageUrl });
  return new Response("Noticia guardada", { status: 201 });
};

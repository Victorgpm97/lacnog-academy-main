import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  titulo: text("titulo"),
  contenido: text("contenido"),
  imagen: text("imagen"),
});

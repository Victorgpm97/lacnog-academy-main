# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


📄 **Documentación Frontend**📄

🏗️ **Arquitectura general**
El frontend está construido con React + TypeScript + TailwindCSS, siguiendo una arquitectura modular. Cada sección se implementa como un componente o página independiente, con estados controlados y comunicación con el backend (Strapi/Xata) para persistencia de datos.

📌 **Secciones**
**1. Inicio (Welcome.astro)**

Propósito: Página principal del sitio, punto de entrada del usuario.

Contenido:

Encabezado con logo y navegación.

Hero section con mensaje principal.

Secciones destacadas: Contenido, blogs, noticias.

Características técnicas:

Componentes reutilizables para tarjetas de contenido.

Diseño responsive con Tailwind.

Links hacia otras secciones.

**2. Contenido (contents.astro)**

Propósito: Mostrar recursos generales (Cursos que se verá).

Contenido:

Listado de recursos con título, descripción y enlace.

Filtros por categoría o tipo de recurso.

Características técnicas:

Uso de map para renderizar listas dinámicas.

Posible integración con CMS para cargar contenido.

**3. Cursos (LenguajeSelectorProfesor.tsx)**

Propósito: Mostrar cursos disponibles.

Contenido:

Tarjetas de curso con título, descripción, imagen y botón de inscripción.

Sección de cursos destacados.

Características técnicas:

Datos obtenidos desde el CMS (Strapi/Xata).

Componentes de tarjeta reutilizables.

Manejo de estados de carga y error.

**4. Blogs (Blogs.astro)**

Propósito: Mostrar artículos de blog.

Contenido:

Listado de posts con título, resumen, imagen y fecha.

Paginación o scroll infinito.

Características técnicas:

Integración con CMS para obtener posts.

Uso de Link para navegar a detalle de cada blog.

Manejo de estados de carga.

**5. Noticias (noticias.astro)**

Propósito: Mostrar noticias publicadas.

Contenido:

Listado de noticias con título, resumen, imagen y etiquetas.

Filtros por etiquetas.

Características técnicas:

Integración con Xata para obtener noticias.

Renderizado dinámico de chips de etiquetas.

Diseño responsive.

**6. Crear Noticias (CrearNoticia.tsx)**

Propósito: Formulario para crear nuevas noticias.

Contenido:

Inputs para título, resumen y contenido.

Subida de imagen a Cloudinary.

Selección dinámica de etiquetas:

Botón “+ Agregar Tags”.

Select para elegir etiquetas disponibles.

Chips removibles para etiquetas seleccionadas.

Botón de envío.

Características técnicas:

Estados controlados con useState.

Validación: requiere al menos una etiqueta.

Integración con Xata (xata.db.noticias.create).

Manejo de estados de carga (loading).

Feedback visual (preview de imagen, chips de tags).

**🔑 Buenas prácticas aplicadas**

Accesibilidad: uso de aria-label en botones y selects.

UX: feedback visual en subida de imagen y selección de tags.

Reutilización: componentes de tarjeta y chips.

Validación: campos requeridos y alertas en caso de error.

Responsive design: TailwindCSS para adaptabilidad.

**🚀 Posibles mejoras futuras**

Animaciones al mostrar/ocultar selects y chips.

Autocompletado de etiquetas personalizadas.

Paginación avanzada en Blogs y Noticias.

Dashboard para gestión de Cursos y Contenido.

Internacionalización (i18n) para soporte multilenguaje.

        {/* Botón Agregar Tema (solo profesor) */}
        {role === "profesor" && (
          <button
            onClick={handleAgregarTema}
            className="text-[#FEA723] px-6 py-2 mt-6 rounded-md font-medium hover:text-[#FE9E1B] transition cursor-pointer hidden"
          >
            + Agregar Tema
          </button>
        )}


        // Metadatos de cada módulo
        const temaMetadata: Record<number, { titulo: string; subtitulo: string; modulo: string, tiempo: string, prerequisitos: string }> = {
          1: {
            modulo: "Modulo 1",
            titulo: "Instructor Guide for Unicode Basics",
            subtitulo: "Provide the basic understanding of Unicode and its applications.",
            tiempo: "180 min",
            prerequisitos: "Data types and data representations. ASCII encoding. ASCII input and output. ASCII files."
          },
          2: {
            modulo: "Modulo 2",
            titulo: "Unicode Advanced Programming",
            subtitulo:
              "Designed to expand your understanding and proficiency in working with Unicode by covering key aspects such as the character-glyph model, Unicode normalization, accessing the Unicode character database, and comparing Unicode strings.",
            tiempo: "300 min",
            prerequisitos: "Module 1, Advanced/ Object OrientedProgramming."
          },
          3: {
            modulo: "Modulo 3",
            titulo: "Unicode in Data Structures and Algorithms",
            subtitulo:
              "Comprehensive introduction to leveraging the power of Unicode in data structures and algorithms.",
            tiempo: "180 min",
            prerequisitos: "Modulo 2, Arrays, Lists, Sets, Queues, Trees, Dictionaries, etc., Sorting and Searching."
          },
          4: {
            modulo: "Modulo 4",
            titulo: "Unicode in Database Systems",
            subtitulo:
              "Concise introduction to the essential concepts and considerations when working with Unicode character data in the context of database systems.",
            tiempo: "120 min",
            prerequisitos: "Modulo 2,Unicode searching. SQL."
          },
        };
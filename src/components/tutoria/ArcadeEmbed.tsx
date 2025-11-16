export function ArcadeEmbed({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative mt-6 mb-4 border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500 font-bold text-lg z-10"
      >
        ✕
      </button>
      <div style={{ position: "relative", paddingBottom: "calc(49.947916666666664% + 41px)", height: 0 }}>
        <iframe
          src="https://demo.arcade.software/c1grddtVQhHGY9EBFn7K?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
          title="Tutorial para Iniciar Sesión e Ingresar a tu Ruta de Aprendizaje UA"
          frameBorder="0"
          loading="lazy"
          allowFullScreen
          allow="clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            colorScheme: "light",
          }}
        />
      </div>
    </div>
  );
}

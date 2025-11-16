import React from "react";
import { Coffee, Code2, X } from "lucide-react";

type Props = {
  onClose: () => void;
  onSelect: (lang: "Java" | "Python") => void;
  tema: number;
};

export default function ModalPlantillaLenguaje({ onClose, onSelect, tema }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-4">Preparar: Tema {tema}</h2>
        <p className="text-sm text-gray-600 mb-6">Selecciona el lenguaje para la plantilla</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => onSelect("Java")}
            className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-lg hover:bg-orange-200 transition cursor-pointer"
          >
            <Coffee className="text-orange-500" size={20} />
            <span className="text-sm font-medium text-gray-800">Java</span>
          </button>

          <button
            onClick={() => onSelect("Python")}
            className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-lg hover:bg-orange-200 transition cursor-pointer"
          >
            <Code2 className="text-blue-600" size={20} />
            <span className="text-sm font-medium text-gray-800">Python</span>
          </button>

          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700 underline mt-2 cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

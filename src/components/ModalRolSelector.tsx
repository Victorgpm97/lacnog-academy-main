import React from "react";
import { X, UserRoundPen, GraduationCap } from "lucide-react";

type Props = {
  onClose: () => void;
  onSelectRole: (role: "profesor" | "estudiante") => void;
};

export default function ModalRolSelector({ onClose, onSelectRole }: Props) {
  return (
    <>
      {/* Fondo difuminado */}
      <div className="fixed inset-0 backdrop-blur-sm z-40"></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg animate-fadeIn relative">
          {/* Botón de cierre */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* Título */}
          <h2 className="text-2xl font-bold text-center mb-2 text-[#FEA723]">¡Bienvenido!</h2>
          <p className="text-center text-gray-700 mb-6">Selecciona tu rol</p>

          {/* Opciones de rol */}
          <div className="flex flex-col gap-3 p-4">
            <button
              onClick={() => {
                onSelectRole("profesor");
                onClose();
              }}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-[#fde0be] text-[#323232] rounded-lg hover:bg-[#ffb764] hover:scale-110 transition-transform duration-300 text-sm cursor-pointer"
            >
              <UserRoundPen size={20} />
              Profesor o Instructor
              <UserRoundPen size={20} />
            </button>

            <button
              onClick={() => {
                onSelectRole("estudiante");
                onClose();
              }}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-[#fde0be] text-[#323232] rounded-lg hover:bg-[#ffb764] hover:scale-110 transition-transform duration-300 text-sm cursor-pointer"
            >
              <GraduationCap size={20} />
              Estudiante o Profesional
              <GraduationCap size={20} />
            </button>
          </div>

          {/* Cancelar */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:underline cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

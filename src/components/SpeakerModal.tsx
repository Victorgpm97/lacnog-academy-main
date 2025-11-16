import React from "react";
import { X, Linkedin, Github, Twitter, Globe } from "lucide-react";

type Speaker = {
  nombre: string;
  rol: string;
  foto: string;
  bio: string;
  redes?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    web?: string;
  };
};

export default function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: Speaker;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <X size={20} />
        </button>
        <div className="flex flex-col items-center text-center">
          <img
            src={speaker.foto}
            alt={speaker.nombre}
            className="w-24 h-24 rounded-full object-cover mb-3"
          />
          <h2 className="text-xl font-bold text-gray-800">{speaker.nombre}</h2>
          <p className="text-sm text-gray-500 mb-4">{speaker.rol}</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">{speaker.bio}</p>

          {/* Redes sociales */}
          <div className="flex gap-4">
            {speaker.redes?.linkedin && (
              <a href={speaker.redes.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-blue-600 hover:text-blue-800" />
              </a>
            )}
            {speaker.redes?.github && (
              <a href={speaker.redes.github} target="_blank" rel="noopener noreferrer">
                <Github size={20} className="text-gray-800 hover:text-black" />
              </a>
            )}
            {speaker.redes?.twitter && (
              <a href={speaker.redes.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter size={20} className="text-sky-500 hover:text-sky-700" />
              </a>
            )}
            {speaker.redes?.web && (
              <a href={speaker.redes.web} target="_blank" rel="noopener noreferrer">
                <Globe size={20} className="text-green-600 hover:text-green-800" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

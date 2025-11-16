import React, { useState } from "react";
import type { Evento } from "../data/eventos";
import { CalendarDays, Clock, Users, Brain, ArrowLeft } from "lucide-react";
import SpeakerModal from "./SpeakerModal";
type Speaker = Evento["speakers"][number];

export default function EventoDetalle({ evento }: { evento: Evento }) {
const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna principal */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          {/* Encabezado */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${evento.fondo} flex items-center justify-center text-white`}>
              {evento.icono === "brain" ? <Brain size={30} /> : <Users size={30} />}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{evento.titulo}</h1>
              <p className="text-md text-gray-600">{evento.subtitulo}</p>
            </div>
          </div>

          {/* Descripción */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">¿De qué trata?</h2>
            <p className="text-gray-700 leading-relaxed text-[15px]">{evento.descripcion}</p>
          </div>

          {/* Speakers */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Speakers</h2>
            <div className="grid grid-cols-2 gap-6">
              {evento.speakers.map((speaker, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="flex flex-col items-center text-center focus:outline-none"
                >
                  <img
                    src={speaker.foto}
                    alt={speaker.nombre}
                    className="w-24 h-24 rounded-full object-cover mb-2 cursor-pointer"
                  />
                  <p className="text-sm font-medium text-gray-800">{speaker.nombre}</p>
                  <p className="text-xs text-gray-500">{speaker.rol}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Botón volver */}
          <div className="mt-10">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition cursor-pointer"
            >
              <ArrowLeft size={18} />
              Volver atrás
            </button>
          </div>
        </div>

        {/* Columna lateral */}
        <div className={`bg-linear-to-br ${evento.fondo} text-white rounded-2xl shadow-md p-6 flex flex-col justify-between`}>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>📅 {evento.fecha}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>🕒 {evento.hora}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} />
              <span>🎓 Organizado por {evento.organizador}</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain size={18} />
              <span>🤝 Presentado por {evento.presentador}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌐 Modalidad: {evento.modalidad}</span>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full bg-white text-purple-600 font-semibold py-2 rounded-full hover:bg-purple-100 transition">
              Añadir al calendario
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
      )}
    </div>
  );
}

// src/components/EventosView.tsx
import React, { useState } from "react";
import { Wifi, CalendarDays, Clock, Users, Brain, CheckCircle } from "lucide-react";
import { eventos } from "../data/eventos";

export default function EventosView() {
  const [activeTab, setActiveTab] = useState<"todos" | "proximos" | "pasados">("todos");
  const eventosFiltrados = eventos.filter(
    (evento) => activeTab === "todos" || evento.tipo === activeTab
  );

  const tabs: ("todos" | "proximos" | "pasados")[] = ["todos", "proximos", "pasados"];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#FEA723] text-white py-10 flex flex-col items-center justify-center rounded-xl">
        <Wifi size={32} strokeWidth={2.5} className="mb-2" />
        <h1 className="text-4xl font-bold">Eventos</h1>
        <p className="text-lg mt-2">Conecta, colabora y construye</p>
      </section>

      <section className="flex justify-center gap-4 mt-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 flex items-center gap-2 ${
              activeTab === tab
                ? "bg-[#FEA723] text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {activeTab === tab && <CheckCircle size={16} className="text-white" />}
            {tab}
          </button>
        ))}
      </section>

      <section className="flex flex-wrap justify-center mt-10 w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {eventosFiltrados.map((evento) => (
            <a key={evento.id} href={`/eventos/${evento.id}`} className="block">
              <div className="flex flex-col justify-between h-[220px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer">
                <div className={`bg-linear-to-r ${evento.fondo} p-4 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${evento.fondo} flex items-center justify-center`}>
                      {evento.icono === "brain" ? <Brain size={22} /> : <Users size={22} />}
                    </div>
                    <h3 className="text-lg font-bold">{evento.titulo}</h3>
                  </div>
                  <p className="text-sm">{evento.subtitulo}</p>
                  <div className="mt-2 flex gap-4 text-xs text-white/90">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{evento.tiempo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      <span className="capitalize">{evento.tipo}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <p className="text-[#4E5059] leading-relaxed mb-4">{evento.descripcion}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

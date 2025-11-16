// components/LearningTopics.tsx
import React from 'react';
import { Settings, Lightbulb, CheckCircle, Lock } from "lucide-react";

interface Lesson {
  title: string;
  duration: string;
  description?: string;
  completed: boolean;
  index: number;
}

const lessons: Lesson[] = [
  {
    title: "HTML semántico y accesibilidad",
    duration: "20 min",
    description:
      "En esta lección aprenderemos sobre la importancia del HTML semántico para crear sitios web accesibles y bien estructurados. Exploraremos elementos como header, nav, main, article, section y footer.",
    completed: true,
    index: 1,
  },
  {
    title: "CSS moderno: Flex, Grid y utilidades",
    duration: "20 min",
    completed: false,
    index: 2,
  },
  {
    title: "JavaScript ES6+ imprescindible",
    duration: "30 min",
    completed: false,
    index: 3,
  },
];

type Props = {
  area: string;
  lenguaje: string
};

export default function CourseView({ area, lenguaje }: Props) {
  return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <section className="mb-6 bg-amber-500 rounded-2xl text-center justify-center"> 
          <div className="bg-orange-500 text-white p-6 rounded-lg flex justify-center items-center gap-4 shadow-md">
                <Settings size={32} strokeWidth={2.5} className="text-white" />
                <div>
                  <h1 className="text-xl font-bold">{area} - {lenguaje}</h1>
                  <p className="text-sm italic">Bases sólidas de la web y JS</p>
                </div>
              </div>
        </section> 
      <section className="mb-6">
        <div className="border border-yellow-400 bg-yellow-100 p-6 rounded-lg shadow-md flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <Lightbulb size={28} strokeWidth={2.5} className="text-yellow-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Pre-requisitos</h2>
              <p className="text-sm text-gray-600">Colocar Pre-requisitos en esta área</p>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition">
            Astro
          </button>
        </div>
      </section>
      <section className="mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Instrucciones del curso</h2>
          <ul className="space-y-4">
            {lessons.map((lesson) => (
              <li key={lesson.index} className="flex items-start gap-4">
                <div className="mt-1">
                  {lesson.completed ? (
                    <CheckCircle size={24} className="text-green-500" />
                  ) : (
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                      <Lock size={16} className="text-gray-600" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {lesson.title} <span
                  className={`text-sm font-medium ${
                    lesson.completed ? "text-blue-600" : "text-gray-500"
                  }`}
                >– {lesson.duration}</span>
                  </h3>
                  {lesson.description && (
                    <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="border border-yellow-400 bg-yellow-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Licencia</h2>
          <p className="text-sm text-gray-600">
            Creative Commons License – Attribution 4.0 International (CC BY 4.0)
          </p>
        </div>
      </section>
    </div>
  );
}
import { useState, useEffect } from 'react';
import {
  Code2,
  BrainCircuit,
  Coffee,
  MonitorSmartphone,
  Apple,
  Smartphone,
  ShieldCheck,
  Cloud,
} from 'lucide-react';

export const languages = [
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 'Alta',
    description: 'Lenguaje versátil para desarrollo web, móvil y backend.',
    icon: <Code2 size={24} />,
    color: 'bg-yellow-400',
  },
  {
    id: 'python',
    name: 'Python',
    level: 'Alta',
    description: 'Ideal para ciencia de datos, IA y desarrollo web.',
    icon: <BrainCircuit size={24} />,
    color: 'bg-green-500',
  },
  {
    id: 'java',
    name: 'Java',
    level: 'Alta',
    description: 'Robusto para aplicaciones empresariales.',
    icon: <Coffee size={24} />,
    color: 'bg-orange-500',
  },
  {
    id: 'csharp',
    name: 'C#',
    level: 'Alta',
    description: 'Potente para aplicaciones Windows y web.',
    icon: <MonitorSmartphone size={24} />,
    color: 'bg-blue-600',
  },
  {
    id: 'swift',
    name: 'Swift',
    level: 'Media',
    description: 'Nativo para desarrollo iOS y macOS.',
    icon: <Apple size={24} />,
    color: 'bg-pink-500',
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    level: 'Media',
    description: 'Moderno para Android y multiplataforma.',
    icon: <Smartphone size={24} />,
    color: 'bg-purple-500',
  },
  {
    id: 'rust',
    name: 'Rust',
    level: 'Emergente',
    description: 'Seguro y eficiente para sistemas críticos.',
    icon: <ShieldCheck size={24} />,
    color: 'bg-red-500',
  },
  {
    id: 'go',
    name: 'Go',
    level: 'Emergente',
    description: 'Simple y eficiente para servicios web.',
    icon: <Cloud size={24} />,
    color: 'bg-cyan-500',
  },
];

export default function LanguageSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('selectedLanguage');
    if (stored) setSelected(stored);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {languages.map(lang => (
        <div
          key={lang.id}
          className={`group bg-white rounded-xl p-6 shadow-md border transition-all duration-300 cursor-pointer ${
            selected === lang.id
              ? 'border-[#FEA723] ring-2 ring-[#FEA723]'
              : 'border-gray-200 hover:border-[#FEA723] hover:ring-2 hover:ring-[#FEA723]'
          }`}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`w-12 h-12 ${lang.color} rounded-full flex items-center justify-center text-white`}>
              {lang.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#323232] group-hover:text-[#FEA723] transition-colors">
              {lang.name} <span className="text-sm text-gray-500">({lang.level})</span>
            </h3>
            <p className="text-sm text-gray-600">{lang.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
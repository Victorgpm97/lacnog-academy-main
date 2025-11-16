import React, { useEffect, useState } from 'react';
import {
  Code,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Shield,
  Server,
  ChevronDown,
} from 'lucide-react';

type Props = {
  onSelect: (areaId: string) => void;
};

export const areas = [
  {
    id: 'fundamentals',
    title: 'Fundamentals of Programming',
    description: 'Aprende los conceptos básicos de programación y desarrollo',
    icon: <Code size={32} />,
    bg: 'bg-blue-500',
  },
  {
    id: 'algorithms',
    title: 'Data Structures and Algorithms',
    description: 'Domina las estructuras de datos y algoritmos esenciales',
    icon: <BarChart3 size={32} />,
    bg: 'bg-purple-500',
  },
  {
    id: 'databases',
    title: 'Database Fundamentals',
    description: 'Comprende los sistemas de gestión de bases de datos',
    icon: <Database size={32} />,
    bg: 'bg-green-500',
  },
  {
    id: 'networks',
    title: 'Data Communication and Networks',
    description: 'Explora comunicaciones de datos y redes de computadores',
    icon: <Network size={32} />,
    bg: 'bg-indigo-500',
  },
  {
    id: 'mobile',
    title: 'Mobile Application Development',
    description: 'Desarrolla aplicaciones móviles modernas y funcionales',
    icon: <Smartphone size={32} />,
    bg: 'bg-pink-500',
  },
  {
    id: 'security',
    title: 'Computer Security',
    description: 'Especialízate en seguridad informática y ciberseguridad',
    icon: <Shield size={32} />,
    bg: 'bg-red-500',
  },
  {
    id: 'os',
    title: 'Operating System',
    description: 'Entiende el funcionamiento de los sistemas operativos',
    icon: <Server size={32} />,
    bg: 'bg-yellow-500',
  },
];

export default function AreaSelector({ onSelect }: Props) {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('selectedArea');
    if (stored) setSelectedArea(stored);
  }, []);

  const handleSelect = (areaId: string) => {
    localStorage.setItem('selectedArea', areaId);
    setSelectedArea(areaId);
    onSelect(areaId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {areas.map(area => (
        <div
          key={area.id}
          onClick={() => handleSelect(area.id)}
          className={`group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer border ${
            selectedArea === area.id
              ? 'border-[#FEA723] ring-2 ring-[#FEA723] shadow-[0_0_0_4px_rgba(254,167,35,0.2)]'
              : 'border-gray-100 hover:border-[#FEA723] hover:ring-2 hover:ring-[#FEA723] hover:shadow-[0_0_0_4px_rgba(254,167,35,0.2)]'
          } hover:-translate-y-1`}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`w-16 h-16 ${area.bg} rounded-2xl flex items-center justify-center text-white`}>
              {area.icon}
            </div>
            <h3 className="text-xl font-bold text-[#323232] group-hover:text-[#FEA723] transition-colors">
              {area.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{area.description}</p>
            <button
              className=" items-center gap-2 text-[#4E5059] group-hover:text-[#FE9E1B] font-medium group-hover:gap-3 transition-all duration-200 hidden"
            >
              Explorar ruta <ChevronDown size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
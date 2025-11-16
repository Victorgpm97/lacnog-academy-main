// Sidebar.tsx
import {
  BookOpen,
  LayoutGrid,
  Settings,
} from "lucide-react";

const menuItems = [
  { id: "my-courses", label: "Mis Cursos", icon: BookOpen, href: "/mis-cursos" },
  { id: "all-courses", label: "Todos los Cursos", icon: LayoutGrid, href: "/contents" },
  { id: "settings", label: "Ajustes", icon: Settings, href: "/ajustes" },
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-[#FEA723]">Mi Aprendizaje</h2>
      </div>
      <nav className="space-y-2 px-2 py-4">
        {menuItems.map(({ id, label, icon: Icon, href }) => (
          <a
            key={id}
            href={href}
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#F8FAFC] hover:text-[#FEA723] transition-colors font-medium"
          >
            <Icon size={20} />
            <span className="whitespace-nowrap">{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
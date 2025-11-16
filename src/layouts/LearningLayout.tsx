// src/layouts/LearningLayout.tsx
import type { ReactNode } from "react";
import Hearder from "../components/Hearder.astro";
import Sidebar from "../components/Sidebar";

export default function LearningLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Hearder />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

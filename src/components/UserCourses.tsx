// components/UserCourses.tsx
import type { FC } from 'react'
import { useEffect, useState } from 'react'

const UserCourses: FC = () => {
  const [courses, setCourses] = useState<{ lenguaje: string; tema?: string }[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('userCourses')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setCourses(parsed)
        }
      } catch (error) {
        console.error('Error parsing userCourses:', error)
      }
    }
  }, [])

  if (courses.length === 0) {
    return (
      <div className="text-center text-gray-600 py-10">
        <p>Aún no has seleccionado ningún curso.</p>
        <a href="/ruta" className="text-[#FEA723] hover:underline font-medium">
          Comienza tu ruta de aprendizaje →
        </a>
      </div>
    )
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Tus cursos guardados</h2>
      <ul className="space-y-4">
        {courses.map(({ lenguaje, tema }, index) => (
          <li
            key={`${lenguaje}-${tema}-${index}`}
            className="bg-white border-l-4 border-[#FEA723] px-4 py-3 shadow-sm rounded"
          >
            <p className="text-gray-800 font-medium">
              <span className="text-[#FEA723]">{lenguaje.toUpperCase()}</span>
              {tema ? ` → ${tema}` : ' (Lenguaje seleccionado)'}
            </p>
          </li>
        ))}
      </ul>
      <div className="pt-4">
        <a href="/ruta" className="text-sm text-[#0078D4] hover:underline">
          ← Agregar más cursos
        </a>
      </div>
    </section>
  )
}

export default UserCourses
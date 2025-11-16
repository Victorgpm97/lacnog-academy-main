// hooks/useUserCourses.ts
import { useEffect, useState } from 'react'

export function useUserCourses() {
  const [courses, setCourses] = useState<{ lenguaje: string; tema?: string }[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('userCourses')
    if (stored) setCourses(JSON.parse(stored))
  }, [])

  const addCourse = (lenguaje: string, tema?: string) => {
    const exists = courses.some(c => c.lenguaje === lenguaje && c.tema === tema)
    if (!exists) {
      const updated = [...courses, { lenguaje, tema }]
      setCourses(updated)
      localStorage.setItem('userCourses', JSON.stringify(updated))
    }
  }

  return { courses, addCourse }
}
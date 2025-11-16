// components/CourseLayout.tsx
import type { FC } from 'react'

interface Props {
  tema: {
    title: string
    description: string
    content: string[]
  }
}

const CourseLayout: FC<Props> = ({ tema }) => (
  <section className="max-w-3xl mx-auto px-6 py-10">
    <h1 className="text-3xl font-bold mb-4">{tema.title}</h1>
    <p className="text-gray-700 mb-6">{tema.description}</p>
    <ul className="space-y-3">
      {tema.content.map((item, i) => (
        <li key={i} className="bg-white border-l-4 border-orange-500 px-4 py-2 shadow-sm">
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-8">
      <a href="/mis-cursos" className="text-orange-600 hover:underline">← Ver todos mis cursos</a>
    </div>
  </section>
)

export default CourseLayout
/**
 * Experiences.jsx
 * ---------------
 * List of experience cards, driven by src/data/experiences.js
 */

import ExperienceCard from '../components/ExperienceCard/ExperienceCard'
import experiences from '../data/experiences'

export default function Experiences() {
  return (
    <div>
      <h2 className="
        text-[13px] font-bold text-folder-black uppercase tracking-widest
        border-b-2 border-folder-yellow pb-2 mb-6
      ">
        Experiences &amp; Participations
      </h2>

      {experiences.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-16">
          Nenhuma experiência cadastrada ainda. Adicione em <code>src/data/experiences.js</code>.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      )}
    </div>
  )
}

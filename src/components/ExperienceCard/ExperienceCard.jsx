/**
 * ExperienceCard
 * --------------
 * Renders a single experience entry.
 * Props match the shape defined in src/data/experiences.js
 */

import { FiCalendar } from 'react-icons/fi'

export default function ExperienceCard({ emoji, image, title, org, period, description, stack }) {
  return (
    <article className="
      bg-white border border-gray-200 rounded-xl p-5 flex gap-4
      hover:border-folder-yellow transition-all duration-200
    ">
      {/* Icon */}
      <div className="
        w-12 h-12 rounded-xl bg-yellow-50 border-2 border-folder-yellow
        flex items-center justify-center text-2xl flex-shrink-0 self-start
      ">
        {image ? (
          <img src={image} alt={org} className="w-full h-full object-cover rounded-xl" />
        ) : (
          <span role="img" aria-label={org}>{emoji}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-[15px] text-folder-black leading-tight">{title}</h3>
        <p className="text-sm font-semibold text-folder-yellowDark mt-0.5">{org}</p>
        <p className="flex items-center gap-1.5 text-xs text-gray-400 mt-1 mb-2">
          <FiCalendar size={11} />
          {period}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-600 text-[11px] font-medium px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

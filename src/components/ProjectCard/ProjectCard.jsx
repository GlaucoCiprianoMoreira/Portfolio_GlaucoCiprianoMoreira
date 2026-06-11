/**
 * ProjectCard
 * -----------
 * Renders a single project card.
 * Props match the shape defined in src/data/projects.js
 */

import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ emoji, image, title, description, stack, github, demo }) {
  return (
    <article className="
      bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col
      hover:border-folder-yellow hover:shadow-lg transition-all duration-200
    ">
      {/* Cover */}
      <div className="h-32 flex items-center justify-center bg-gray-50 border-b border-gray-100">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-5xl select-none" role="img" aria-label={title}>
            {emoji}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-[15px] text-folder-black mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-3">{description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-600 text-[11px] font-medium px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-folder-yellowDark hover:text-folder-border transition-colors"
            >
              <FiGithub size={13} />
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-folder-yellowDark hover:text-folder-border transition-colors"
            >
              <FiExternalLink size={13} />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

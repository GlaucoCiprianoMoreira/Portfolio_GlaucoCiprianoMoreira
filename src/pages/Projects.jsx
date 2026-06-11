/**
 * Projects.jsx
 * ------------
 * Grid of project cards, driven by src/data/projects.js
 */

import ProjectCard from '../components/ProjectCard/ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <div>
      <h2 className="
        text-[13px] font-bold text-folder-black uppercase tracking-widest
        border-b-2 border-folder-yellow pb-2 mb-6
      ">
        Projects
      </h2>

      {projects.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-16">
          Nenhum projeto cadastrado ainda. Adicione em <code>src/data/projects.js</code>.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </div>
  )
}

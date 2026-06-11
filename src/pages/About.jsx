/**
 * About.jsx
 * ---------
 * Hero section with name, specialties, technical skill blocks,
 * soft skills, and the contact footer.
 */

import SkillBlock from '../components/SkillBlock/SkillBlock'
import ContactFooter from '../components/ContactFooter/ContactFooter'
import { profile } from '../data/profile'

function SectionTitle({ children }) {
  return (
    <h2 className="
      text-[13px] font-bold text-folder-black uppercase tracking-widest
      border-b-2 border-folder-yellow pb-2 mb-4
    ">
      {children}
    </h2>
  )
}

export default function About() {
  return (
    <div>
      {/* ── Hero ── */}
      <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
        {/* Avatar */}
        <div className="
          w-20 h-20 rounded-full flex-shrink-0
          bg-gradient-to-br from-folder-yellow to-folder-yellowDark
          border-[3px] border-folder-border
          flex items-center justify-center
          text-3xl font-bold text-yellow-900
          shadow-md
        ">
          {profile.initials}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold text-folder-black mb-1">{profile.name}</h1>
          <p className="text-sm text-gray-500 mb-3">
            🎓 {profile.university} · {profile.course} · {profile.location}
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.specialties.map((tag) => (
              <span
                key={tag}
                className="
                  bg-folder-black text-folder-yellow
                  text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Technical Skills ── */}
      <section className="mb-8">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.technicalSkills.map((block) => (
            <SkillBlock key={block.id} title={block.title} items={block.items} />
          ))}
        </div>
      </section>

      {/* ── Soft Skills ── */}
      <section className="mb-8">
        <SectionTitle>Soft Skills</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {profile.softSkills.map((skill) => (
            <span
              key={skill}
              className="
                bg-white border border-gray-200 rounded-full
                px-4 py-1.5 text-sm text-gray-600
                hover:border-folder-yellow transition-colors duration-150
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Contact Footer ── */}
      <ContactFooter />
    </div>
  )
}

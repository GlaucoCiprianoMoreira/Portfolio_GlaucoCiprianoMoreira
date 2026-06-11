/**
 * CV.jsx
 * ------
 * Minimal page focused on CV download conversion.
 * CV path is configured in src/data/profile.js
 */

import { FiDownload, FiFileText } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function CV() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[420px] text-center gap-5 px-4 py-8">
      {/* Icon */}
      <div className="text-7xl select-none" role="img" aria-label="Currículo">📋</div>

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-folder-black mb-2">Professional Curriculum Vitae</h1>
        <p className="text-[15px] text-gray-500 max-w-sm leading-relaxed">
          Experience in Data Science, Machine Learning, and Python development.
          Available for internship, research, and collaborative project opportunities.
        </p>
      </div>

      {/* Download button */}
      <a
        href={profile.cvPath}
        download
        className="
          inline-flex items-center gap-3
          bg-folder-black text-folder-yellow
          px-8 py-4 rounded-xl text-[16px] font-bold
          border-2 border-folder-yellow
          hover:bg-[#2A2A2A] transition-colors duration-150
          shadow-md
        "
      >
        <FiDownload size={20} />
        Download Resume (PDF)
      </a>

      <p className="text-xs text-gray-400">
        Last updated: Jun 2026 · PDF · ~120 KB
      </p>

      {/* Recruiter callout */}
      <div className="
        mt-2 px-6 py-4 bg-yellow-50 border-2 border-folder-yellow rounded-xl
        max-w-sm text-sm text-yellow-900
      ">
        <span className="font-bold">👔 Recruiters and teachers:</span>
        <span className="ml-1">
          All experiences, projects, and certifications are detailed in the previous tabs.
        </span>
      </div>
    </div>
  )
}

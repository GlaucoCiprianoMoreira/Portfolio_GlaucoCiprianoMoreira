/**
 * CertificateCard
 * ---------------
 * Clickable card that opens a PDF modal when clicked.
 * Props match the shape defined in src/data/certificates.js
 * onOpen(cert) — callback passed from CertificatesPage
 */

// Category accent colors
const CATEGORY_COLORS = {
  'Inteligência Artificial': { bg: 'bg-purple-50',  text: 'text-purple-700',  badge: 'bg-purple-100 text-purple-700' },
  'Data Science':            { bg: 'bg-blue-50',    text: 'text-blue-700',    badge: 'bg-blue-100 text-blue-700' },
  'Teaching':             { bg: 'bg-amber-50',   text: 'text-amber-700',   badge: 'bg-amber-100 text-amber-700' },
  'English':                  { bg: 'bg-green-50',   text: 'text-green-700',   badge: 'bg-green-100 text-green-700' },
  'Symposium':                { bg: 'bg-teal-50',    text: 'text-teal-700',    badge: 'bg-teal-100 text-teal-700' },
}

const fallback = { bg: 'bg-gray-50', text: 'text-gray-600', badge: 'bg-gray-100 text-gray-600' }

export default function CertificateCard({ cert, onOpen }) {
  const colors = CATEGORY_COLORS[cert.category] ?? fallback

  return (
    <button
      onClick={() => onOpen(cert)}
      className="
        bg-white border border-gray-200 rounded-xl p-4 text-left w-full
        hover:border-folder-yellow hover:shadow-md transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-folder-yellow
      "
      aria-label={`Ver certificado: ${cert.name}`}
    >
      <div className="text-3xl mb-2" role="img" aria-hidden="true">{cert.emoji}</div>
      <h3 className="text-[13px] font-bold text-folder-black leading-snug mb-1">{cert.name}</h3>
      <p className="text-[12px] text-gray-400 mb-2">{cert.issuer}</p>
      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${colors.badge}`}>
        {cert.category}
      </span>
    </button>
  )
}

export { CATEGORY_COLORS, fallback }

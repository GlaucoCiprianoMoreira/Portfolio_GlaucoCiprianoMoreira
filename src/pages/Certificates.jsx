/**
 * Certificates.jsx
 * ----------------
 * Certificate grid grouped by category.
 * Clicking a card opens a modal with PDF preview.
 * Data driven by src/data/certificates.js
 */

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload } from 'react-icons/fi'
import CertificateCard from '../components/CertificateCard/CertificateCard'
import certificates from '../data/certificates'

// ── Group certificates by category ──
function groupByCategory(certs) {
  return certs.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = []
    acc[cert.category].push(cert)
    return acc
  }, {})
}

// ── PDF Modal ──
function CertModal({ cert, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Certificado: ${cert.name}`}
      >
        <motion.div
          className="bg-folder-content rounded-xl w-full max-w-2xl max-h-[88vh] flex flex-col shadow-2xl"
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-folder-black rounded-t-xl px-5 py-4 border-b-2 border-folder-yellow">
            <div>
              <h2 className="text-folder-yellow font-bold text-[15px]">
                {cert.emoji} {cert.name}
              </h2>
              <p className="text-gray-400 text-xs mt-0.5">{cert.issuer}</p>
            </div>
            <div className="flex items-center gap-3">
              {cert.pdfPath && (
                <a
                  href={cert.pdfPath}
                  download
                  className="text-folder-yellow hover:text-white transition-colors"
                  aria-label="Baixar PDF"
                >
                  <FiDownload size={18} />
                </a>
              )}
              <button
                onClick={onClose}
                className="text-folder-yellow hover:text-white transition-colors text-xl leading-none"
                aria-label="Fechar modal"
              >
                <FiX size={22} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{cert.summary}</p>

            {/* PDF Viewer */}
            {cert.pdfPath ? (
              <iframe
                src={`${import.meta.env.BASE_URL}${cert.pdfPath.replace(/^\//, '')}`}
                title={cert.name}
                className="w-full rounded-lg border border-gray-200"
                style={{ height: '420px' }}
              />
            ) : (
              <div className="
                flex flex-col items-center justify-center gap-3
                bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl
                h-64 text-gray-400
              ">
                <span className="text-5xl" role="img" aria-hidden="true">📄</span>
                <p className="text-sm font-medium">PDF não disponível</p>
                <p className="text-xs text-gray-400 text-center px-8">
                  Adicione o arquivo em <code className="bg-gray-100 px-1 rounded">public/assets/certificates/</code>
                  e atualize o campo <code className="bg-gray-100 px-1 rounded">pdfPath</code> em{' '}
                  <code className="bg-gray-100 px-1 rounded">src/data/certificates.js</code>
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Main Page ──
export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null)
  const grouped = groupByCategory(certificates)

  const handleClose = useCallback(() => setActiveCert(null), [])

  return (
    <div>
      <h2 className="
        text-[13px] font-bold text-folder-black uppercase tracking-widest
        border-b-2 border-folder-yellow pb-2 mb-6
      ">
        Certifications
      </h2>

      {Object.entries(grouped).map(([category, certs]) => (
        <section key={category} className="mb-8">
          <h3 className="text-xs font-bold text-folder-yellowDark uppercase tracking-widest mb-3">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {certs.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} onOpen={setActiveCert} />
            ))}
          </div>
        </section>
      ))}

      {activeCert && <CertModal cert={activeCert} onClose={handleClose} />}
    </div>
  )
}

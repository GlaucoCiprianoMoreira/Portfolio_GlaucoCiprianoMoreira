/**
 * certificates.js
 * ---------------
 * Add or remove certificates here without touching any component.
 *
 * Fields:
 *   id       – unique string key
 *   emoji    – cover emoji
 *   category – one of: 'Inteligência Artificial' | 'Data Science' | 'Estatística' | 'Inglês'
 *              (add new categories freely — the UI adapts automatically)
 *   name     – certificate title
 *   issuer   – issuing institution
 *   summary  – 1–2 sentence description
 *   pdfPath  – path to PDF file, e.g. '/assets/certificates/tensorflow-cert.pdf'
 *              Set to null if no PDF is available yet.
 */

const certificates = [
  {
    id: 'python-dc-cjovem',
    emoji: '🐍',
    category: 'Data Science',
    name: 'TIC-20 - Habilidades comportamentais e qualificação ténica em Ciências de Dados',
    issuer: 'Capacita Brasil/C-Jovem',
    summary:
      'Pandas, NumPy, visualização de dados e análise exploratória com Python aplicado a casos reais.',
    pdfPath: '/assets/certificates/C-Jovem.pdf',
  },
  {
    id: 'english-b1',
    emoji: '🌐',
    category: 'English',
    name: 'Curso de Língua Inglesa (B1+)',
    issuer: 'IMPARH - Instituto Municipal de Desenvolvimento de Recursos Humanos',
    summary:
      'English proficiency certification at level B1+ from IMPARH, covering reading, grammar, and listening comprehension.',
    pdfPath: '/assets/certificates/English.pdf',
  },
  {
    id: 'intelligent-agents-hunting-the-wumpus',
    emoji: '🤖',
    category: 'Teaching',
    name: 'Intelligent Agents: Hunting the Wumpus',
    issuer: 'Laura - SECOMP 2025',
    summary: 'A short course on reinforcement learning and intelligent agents, using the game "Hunting the Wumpus" as an example to demonstrate the agents learning process.',
    pdfPath: '/assets/certificates/SECOMP-Agentes-Inteligentes-Wumpus.pdf',
  },
  {
    id: 'time-series-forecasting-methods-and-applications',
    emoji: '📈',
    category: 'Teaching',
    name: 'Time Series Forecasting: Methods and Applications',
    issuer: 'Laura - XXX Semana Universitária da UECE',
    summary:
      'Lecture on time series forecasting methods, including traditional techniques and modern approaches with neural networks, presented at the XXX University Week of UECE. This course was taught by myself and three other students from the LAURA Laboratory, aiming to teach the concept and fundamentals of Time Series in the context of Artificial Intelligence.',
    pdfPath: '/assets/certificates/certificadoMinistranteMinicurso_08-11-2025_14_18_06.pdf',
  },
  {
    id: 'bracis-2025',
    emoji: '📊',
    category: 'Symposium',
    name: 'BRACIS 2025 - Brazilian Conference on Intelligent Systems',
    issuer: 'BRACIS',
    summary:
      'Certificate of participation in the Brazilian Conference on Intelligent Systems (BRACIS) 2025, a major event in the field of Artificial Intelligence in Brazil.',
    pdfPath: '/assets/certificates/Certificado_BRACIS_2025.pdf',
  },
]

export default certificates

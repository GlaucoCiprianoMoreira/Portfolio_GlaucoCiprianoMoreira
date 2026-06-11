/**
 * App.jsx
 * -------
 * Root component. Manages active tab state and renders the Folder shell.
 * To add a new tab: add an entry to TABS and create the corresponding page.
 */

import { useState } from 'react'
import Folder from './components/Folder/Folder'
import About from './pages/About'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Certificates from './pages/Certificates'
import CV from './pages/CV'

/**
 * TABS definition
 * ---------------
 * id         – used as key and aria-controls
 * label      – full label shown on desktop
 * shortLabel – abbreviated label shown on mobile (optional)
 * icon       – emoji icon shown in the tab marker
 * Component  – the page component to render
 */
const TABS = [
  { id: 'about',        icon: '📁', label: 'About',        shortLabel: '',  Component: About },
  { id: 'projects',     icon: '📖',  label: 'Projects',     shortLabel: '',   Component: Projects },
  { id: 'experiences',  icon: '🔎', label: 'Experiences',  shortLabel: '',    Component: Experiences },
  { id: 'certificates', icon: '🎓', label: 'Certificates', shortLabel: '',  Component: Certificates },
  { id: 'cv',           icon: '📄', label: 'CV',           shortLabel: '',     Component: CV },
]

export default function App() {
  // 'about' is the default open tab on load
  const [activeTab, setActiveTab] = useState('about')

  const ActivePage = TABS.find((t) => t.id === activeTab)?.Component ?? About

  return (
    <div className="min-h-screen bg-folder-bg flex justify-center items-start px-4 pt-6 pb-12">
      <div className="w-full max-w-[1100px]">
        <Folder tabs={TABS} active={activeTab} onChange={setActiveTab}>
          <ActivePage />
        </Folder>
      </div>
    </div>
  )
}

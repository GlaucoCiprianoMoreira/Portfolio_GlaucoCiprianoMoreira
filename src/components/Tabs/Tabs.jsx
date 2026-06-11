/**
 * Tabs
 * ----
 * Renders the folder tab markers at the top of the folder.
 * Props:
 *   tabs      – array of { id, label, icon }
 *   active    – currently active tab id
 *   onChange  – (id: string) => void
 */

import { motion } from 'framer-motion'

export default function Tabs({ tabs, active, onChange }) {
  return (
    <nav
      className="flex flex-wrap gap-0 px-5 relative z-10"
      role="tablist"
      aria-label="Seções do portfolio"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={`
              relative flex items-center gap-1.5 px-5 py-2
              text-[13px] font-semibold tracking-wide
              rounded-t-[10px] border-2 border-b-0
              transition-all duration-150 select-none
              focus:outline-none focus-visible:ring-2 focus-visible:ring-folder-yellow
              ml-1 first:ml-0
              ${isActive
                ? 'bg-folder-yellow text-yellow-900 border-folder-border z-20 -mb-0.5 pb-[10px]'
                : 'bg-[#C89A1A] text-yellow-950 border-folder-border hover:bg-folder-yellow hover:text-yellow-900 top-0.5'
              }
            `}
            style={isActive ? { paddingBottom: '12px' } : {}}
          >
            <span aria-hidden="true" className="text-base">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.shortLabel ?? tab.label}</span>

            {/* Active bottom mask — hides the folder border underneath the active tab */}
            {isActive && (
              <span
                className="absolute bottom-[-2px] left-0 right-0 h-[3px] bg-folder-yellow"
                aria-hidden="true"
              />
            )}
          </button>
        )
      })}
    </nav>
  )
}

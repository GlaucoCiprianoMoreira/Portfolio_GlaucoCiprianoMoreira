/**
 * Folder
 * ------
 * The main yellow folder shell that wraps all content.
 * Renders the Tabs row at the top and the white content area inside.
 * Props:
 *   tabs     – passed through to <Tabs>
 *   active   – active tab id
 *   onChange – tab change handler
 *   children – content for the active tab
 */

import { motion, AnimatePresence } from 'framer-motion'
import Tabs from '../Tabs/Tabs'

const contentVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -4, transition: { duration: 0.12 } },
}

export default function Folder({ tabs, active, onChange, children }) {
  return (
    <div className="w-full">
      {/* Tab markers */}
      <Tabs tabs={tabs} active={active} onChange={onChange} />

      {/* Folder body */}
      <div className="
        bg-folder-yellow
        border-2 border-folder-border
        rounded-b-xl rounded-tr-xl rounded-tl-xl
        p-1.5
        shadow-folder
        relative z-[1]
      ">
        {/* White content area */}
        <main
          id={`panel-${active}`}
          role="tabpanel"
          className="
            bg-folder-content rounded-lg min-h-[560px]
            px-8 py-8 overflow-x-hidden
            sm:px-10
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

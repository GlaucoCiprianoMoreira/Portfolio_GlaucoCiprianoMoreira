/**
 * ContactFooter
 * -------------
 * Dark bar at the bottom of the About page with contact links.
 * Data is pulled from profile.js — no props needed.
 */

import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi'
import { profile } from '../../data/profile'

const links = [
  {
    href: `mailto:${profile.contact.email}`,
    icon: <FiMail size={14} />,
    label: profile.contact.email,
  },
  {
    href: profile.contact.linkedin,
    icon: <FiLinkedin size={14} />,
    label: 'LinkedIn',
    external: true,
  },
  {
    href: profile.contact.github,
    icon: <FiGithub size={14} />,
    label: 'GitHub',
    external: true,
  },
  {
    href: `tel:${profile.contact.phone.replace(/\D/g, '')}`,
    icon: <FiPhone size={14} />,
    label: profile.contact.phone,
  },
]

export default function ContactFooter() {
  return (
    <footer className="
      flex flex-wrap gap-3 items-center
      bg-folder-black rounded-lg px-5 py-4 mt-2
    ">
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          className="
            flex items-center gap-2 text-folder-yellow text-sm font-medium
            hover:text-white transition-colors duration-150
          "
        >
          {link.icon}
          {link.label}
        </a>
      ))}
    </footer>
  )
}

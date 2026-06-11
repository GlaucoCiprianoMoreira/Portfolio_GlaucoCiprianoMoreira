/**
 * SkillBlock
 * ----------
 * Renders a single skill category card with a list of items.
 * Props: { title: string, items: string[] }
 */

export default function SkillBlock({ title, items }) {
  return (
    <div className="
      bg-white border border-gray-200 rounded-xl p-4
      hover:border-folder-yellow hover:shadow-md
      transition-all duration-200
    ">
      <h3 className="text-xs font-bold text-folder-yellowDark uppercase tracking-widest mb-3">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
            <span
              className="w-1.5 h-1.5 rounded-full bg-folder-yellow border border-folder-border flex-shrink-0"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

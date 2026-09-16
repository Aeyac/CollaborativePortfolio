export default function SkillsMatrix({ skills }) {
  const categorizedSkills = {}
  skills.forEach((skill) => {
    if (!categorizedSkills[skill.category]) categorizedSkills[skill.category] = []
    categorizedSkills[skill.category].push(skill.name)
  })

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Skills &amp; Tech Stack
          </h3>
          <p className="text-xs text-zinc-500">
            Core competencies, technical frameworks &amp; architectural proficiencies
          </p>
        </div>
        <span className="text-[11px] font-mono text-zinc-400">{skills.length} Technical Proficiencies</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(categorizedSkills).map(([category, categorySkills]) => (
          <div
            key={category}
            className="bg-[#f5f5f7] border border-zinc-200/90 rounded-2xl p-5 shadow-xs"
          >
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-zinc-200">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-950">{category}</span>
              <span className="text-[10px] font-mono text-zinc-500 bg-white px-2 py-0.5 rounded-full border border-zinc-200">
                {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
              </span>
            </div>

            <ul className="space-y-2.5">
              {categorySkills.map((skillName) => (
                <li key={skillName} className="flex items-center space-x-2.5 text-xs text-zinc-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 flex-shrink-0"></span>
                  <span>{skillName}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
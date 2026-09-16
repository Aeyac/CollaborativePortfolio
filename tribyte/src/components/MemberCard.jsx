export default function MemberCard({ member, isActive, onSelect }) {
  const visibleSkills = member.skills.slice(0, 3)
  const remainingCount = member.skills.length - visibleSkills.length

  return (
    <div
      onClick={onSelect}
      className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${isActive
        ? 'bg-white border-2 border-zinc-900 shadow-xl'
        : 'bg-white/90 hover:bg-white border border-zinc-200/90 hover:border-zinc-400 shadow-sm hover:shadow-md'
        }`}
    >
      {isActive && (
        <div className="absolute top-0 right-0">
          <span className="inline-flex items-center px-3 py-1 rounded-bl-xl text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-950 text-white shadow-sm">
            ACTIVE VIEW
          </span>
        </div>
      )}

      <div>
        {/* Avatar & Role Header */}
        <div className="flex items-center space-x-4 mb-5">
          <img
            src={member.avatar}
            alt={member.name}
            className={`w-16 h-16 rounded-2xl object-cover grayscale ring-2 ${isActive ? 'ring-zinc-900' : 'ring-zinc-200'
              }`}
          />
          <div>
            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-black transition-colors">
              {member.name}
            </h3>
            <p className="text-xs font-medium text-zinc-600 font-mono tracking-tight mt-0.5">{member.role}</p>
          </div>
        </div>

        {/* Bio snippet */}
        <p className="text-sm text-zinc-600 line-clamp-3 leading-relaxed mb-6 font-normal">{member.bio}</p>

        {/* Quick Skill Tags (First 3) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {visibleSkills.map((skill) => (
            <span
              key={skill.name}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#f5f5f7] text-zinc-800 border border-zinc-200"
            >
              {skill.name}
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="px-2 py-1 rounded-lg text-xs font-mono text-zinc-500 bg-[#edeef1] border border-zinc-200">
              +{remainingCount} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
        <span className="text-xs text-zinc-500 font-mono">{member.projects.length} Showcase Projects</span>
        <span className="text-xs font-semibold text-zinc-900 group-hover:translate-x-1 transition-transform inline-flex items-center">
          View Profile &rarr;
        </span>
      </div>
    </div>
  )
}

import MemberProfile from './MemberProfile'

export default function MemberDetailSection({ teamMembers, activeMember, activeMemberId, onSelectMember }) {
  return (
    <section id="detailed-member" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
              Profile Details
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">Focused Profile &amp; Credentials</h2>
        </div>

        {/* Sub-section Switcher Tabs */}
        <div className="flex items-center space-x-1.5 bg-white p-1.5 rounded-2xl border border-zinc-200 shadow-sm">
          {teamMembers.map((m) => {
            const isSelected = activeMemberId === m.id
            return (
              <button
                key={m.id}
                onClick={() => onSelectMember(m.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected ? 'bg-zinc-950 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-950 hover:bg-[#f5f5f7]'
                }`}
              >
                <img
                  src={m.avatar}
                  alt={m.name}
                  className={`w-5 h-5 rounded-full object-cover grayscale ${
                    isSelected ? 'ring-1 ring-white/70' : 'ring-1 ring-zinc-300'
                  }`}
                />
                <span>{m.name.split(' ')[0]}</span>
              </button>
            )
          })}
        </div>
      </div>

      <MemberProfile member={activeMember} />
    </section>
  )
}

import MemberCard from './MemberCard'

export default function TeamOverviewGrid({ teamMembers, activeMemberId, onSelectMember }) {
  const handleCardSelect = (memberId) => {
    onSelectMember(memberId)
    const el = document.getElementById('detailed-member')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="team-grid" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
            Collaborative Members
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">Meet the Trio</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            isActive={activeMemberId === member.id}
            onSelect={() => handleCardSelect(member.id)}
          />
        ))}
      </div>
    </section>
  )
}

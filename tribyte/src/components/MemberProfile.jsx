import ProfileCard from './ProfileCard'
import EducationCard from './EducationCard'
import SkillsMatrix from './SkillsMatrix'

export default function MemberProfile({ member }) {
  return (
    <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-10 shadow-lg relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <ProfileCard member={member} />

        <div className="lg:col-span-8 space-y-8">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
              About Me
            </h3>
            <p className="text-zinc-700 leading-relaxed text-base">{member.bio}</p>
          </div>

          <EducationCard education={member.education} />

          <SkillsMatrix skills={member.skills} />
        </div>
      </div>
    </div>
  )
}

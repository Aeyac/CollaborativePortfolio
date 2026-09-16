import { GithubIcon, LinkedinIcon, MailIcon } from './icons'

export default function ProfileCard({ member }) {
  const statTiles = [
    { label: 'Total Projects', value: member.stats.projectsCount },
    { label: 'Commits Last Year', value: member.stats.contributions },
  ]

  return (
    <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
      <div className="relative mb-5">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover grayscale ring-2 ring-zinc-300 shadow-md"
        />
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">{member.name}</h2>
      <p className="text-sm font-semibold text-zinc-700 font-mono mt-1">{member.role}</p>
      <p className="text-xs text-zinc-600 italic mt-3 border-l-2 border-zinc-400 pl-3">
        &ldquo;{member.tagline}&rdquo;
      </p>

      {/* Social Links */}
      <div className="flex items-center space-x-3 mt-6">
        <a
          href={member.socials.github}
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-xl bg-[#f5f5f7] hover:bg-zinc-950 text-zinc-700 hover:text-white border border-zinc-200 transition-colors shadow-sm"
          title="GitHub Profile"
        >
          <GithubIcon />
        </a>
        <a
          href={member.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-xl bg-[#f5f5f7] hover:bg-zinc-950 text-zinc-700 hover:text-white border border-zinc-200 transition-colors shadow-sm"
          title="LinkedIn Profile"
        >
          <LinkedinIcon />
        </a>
        <a
          href={`mailto:${member.socials.email}`}
          className="p-2.5 rounded-xl bg-[#f5f5f7] hover:bg-zinc-950 text-zinc-700 hover:text-white border border-zinc-200 transition-colors shadow-sm"
          title="Direct Email"
        >
          <MailIcon />
        </a>
      </div>

      {/* Personal Quick Stats */}
      <div className="w-full grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-zinc-200">
        {statTiles.map((stat) => (
          <div key={stat.label} className="bg-[#f5f5f7] p-3 rounded-xl border border-zinc-200/80 shadow-xs">
            <div className="text-lg font-bold text-zinc-950 font-mono">{stat.value}</div>
            <div className="text-[11px] text-zinc-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

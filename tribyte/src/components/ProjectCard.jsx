import { GithubIcon } from './icons'

export default function ProjectCard({ project }) {


  return (
    <div className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden hover:border-zinc-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm">
      <div>
        <div className="relative h-48 overflow-hidden bg-zinc-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/20 to-transparent"></div>
        </div>

        <div className="p-6">
          <h4 className="text-lg font-bold text-zinc-950 group-hover:text-black transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-zinc-600 mt-2 line-clamp-3 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f5f5f7] text-zinc-700 border border-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-[#f8f8fa] border-t border-zinc-200">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center space-x-2 py-2 rounded-xl bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
        >
          <GithubIcon />
          <span>View Repository</span>
        </a>
      </div>
    </div >
  )
}
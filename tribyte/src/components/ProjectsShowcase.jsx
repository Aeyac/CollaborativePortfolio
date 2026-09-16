import ProjectCard from './ProjectCard'

export default function ProjectsShowcase({ activeMember}) {
  return (
    <section
      id="projects-showcase"
      className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
            Production Portfolio • {activeMember.name}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">Featured Systems & others</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activeMember.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

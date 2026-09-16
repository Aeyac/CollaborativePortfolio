export default function Hero() {
  return (
    <section
      id="overview"
      className="relative pt-24 pb-20 overflow-hidden border-b border-zinc-200/80 bg-gradient-to-b from-[#f5f5f7] to-[#edeef2]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 max-w-4xl mx-auto leading-tight sm:leading-none">
          Collaborative Portfolio for{' '} <br></br>
          <span className="text-zinc-600 font-light underline decoration-zinc-400 decoration-2 underline-offset-8">
            Web Applications Development II
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
          A collaborative academic portfolio featuring our skills, projects, and experiences in technology, 
          software development, and creative digital solutions.
        </p>

        {/* Quick Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#detailed-member"
            className="px-6 py-3 rounded-xl bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-all shadow-md active:scale-95"
          >
            Explore Member Deep-Dive
          </a>
        </div>


      </div>
    </section>
  )
}

import { navLinks } from '../data/portfolioData'

export default function Footer({ teamMembers }) {
  const currentYear = new Date().getFullYear()


  return (
    <footer className="bg-[#eeeff2] border-t border-zinc-200/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Statement */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-bold text-lg text-zinc-950">
                TriByte
              </span>
            </div>
            <p className="text-sm text-zinc-600 max-w-sm leading-relaxed">
              A collaborative academic portfolio featuring our skills, projects, and experiences 
               in technology, software development, and creative digital solutions.

            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-zinc-950 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Direct Line */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold mb-3">
             Members
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              {teamMembers.map((m) => (
                <li key={m.id}>
                  <span className="text-zinc-950 font-medium">{m.name}</span>
                  <div className="text-xs text-zinc-500 font-mono">{m.role.split('&')[0]}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-300/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {currentYear} TriByte Portfolio. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}

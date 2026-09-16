import { useState } from 'react'
import { navLinks } from '../data/portfolioData'
import { MenuIcon } from './icons'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b bg-[#f5f5f7]/90 border-zinc-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#overview" className="flex items-center group">
            <span className="font-bold text-lg tracking-tight text-zinc-900 group-hover:text-zinc-700 transition-colors">
              TriByte
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors rounded-lg hover:bg-zinc-200/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-600 hover:text-zinc-950 bg-white border border-zinc-300 shadow-sm"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200 space-y-2 bg-[#f5f5f7]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors rounded-lg hover:bg-zinc-200/60"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header >
  )
}
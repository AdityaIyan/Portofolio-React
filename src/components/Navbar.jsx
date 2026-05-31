import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Work', href: 'work' },
    { name: 'Contact', href: 'contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark bg-opacity-95 backdrop-blur-md border-b border-slate-700 border-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-slate-200">Aditya Fieansyah</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item text-sm font-mono group"
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-accent"></span>
            <span className="block w-6 h-0.5 bg-accent"></span>
            <span className="block w-6 h-0.5 bg-accent"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item block text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary block text-center" onClick={() => setIsMenuOpen(false)}>
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

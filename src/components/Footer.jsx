import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-slate-700 border-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-slate-400 mb-2">
              Designed & Built by <span className="text-accent">Aditya Fieansyah</span>
            </p>
            <p className="font-mono text-xs text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/AdityaIyan" className="font-mono text-sm text-slate-400 hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/Adityafieansyah/" className="font-mono text-sm text-slate-400 hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-dark relative overflow-hidden">
      {/* Background image from public/projects */}
      <img src="/projects/tokokomoto.jpg" alt="Hero background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-dark bg-opacity-60"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-sm font-mono text-accent mb-5">Hi, my name is</div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-200 mb-4">
          Aditya Fieansyah.
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 mb-4 max-w-3xl mx-auto">
          I build scalable web applications and reliable data pipelines — transforming data into
          actionable insights and production-ready software.
        </p>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8 mx-auto">
          Saya menggabungkan keahlian Full-Stack Development dan Data Engineering untuk
          menghadirkan solusi end-to-end: backend, frontend, dan pipeline data.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#work"
            className="inline-block border border-accent text-accent px-8 py-3 rounded font-mono text-base hover:bg-accent hover:bg-opacity-10 transition-all duration-300"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="inline-block bg-accent text-white px-8 py-3 rounded font-mono text-base hover:bg-accent-light transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Social icons (center) */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/AdityaIyan" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="bg-white text-accent p-2 rounded shadow hover:bg-accent hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.41-4.03-1.41-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/adityafieansyah/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="bg-white text-accent p-2 rounded shadow hover:bg-accent hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98S6.96 6.58 6.96 5.48 6.08 3.5 4.98 3.5zM3 8.98h4v12H3v-12zm7.5 0h3.84v1.64h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.2v7.86h-4v-6.97c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.67 1.81-2.67 3.67v7.1h-4v-12z" />
            </svg>
          </a>

          <a href="https://www.instagram.com/_adityaiyan?igsh=YzdhdTFmeWMzNDYw&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="bg-white text-accent p-2 rounded shadow hover:bg-accent hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.41.6.22 1.03.48 1.48.93.45.45.71.88.93 1.48.17.46.356 1.26.41 2.43.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.41 2.43-.22.6-.48 1.03-.93 1.48-.45.45-.88.71-1.48.93-.46.17-1.26.356-2.43.41-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.41-.6-.22-1.03-.48-1.48-.93-.45-.45-.71-.88-.93-1.48-.17-.46-.356-1.26-.41-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.97.41-2.43.22-.6.48-1.03.93-1.48.45-.45.88-.71 1.48-.93.46-.17 1.26-.356 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.22a4.02 4.02 0 110-8.04 4.02 4.02 0 010 8.04zm6.4-11.5a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>

        {/* Right-side vertical social buttons */}
        <div className="hidden lg:flex fixed right-6 top-1/2 transform -translate-y-1/2 flex-col gap-3">
          <a href="https://github.com/AdityaIyan" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="bg-white text-accent p-2 rounded shadow hover:bg-accent hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.41-4.03-1.41-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/adityafieansyah/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="bg-white text-accent p-2 rounded shadow hover:bg-accent hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98S6.96 6.58 6.96 5.48 6.08 3.5 4.98 3.5zM3 8.98h4v12H3v-12zm7.5 0h3.84v1.64h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.2v7.86h-4v-6.97c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.67 1.81-2.67 3.67v7.1h-4v-12z"/></svg>
          </a>
          <a href="https://www.instagram.com/_adityaiyan?igsh=YzdhdTFmeWMzNDYw&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="bg-white text-accent p-2 rounded shadow hover:bg-accent hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.41.6.22 1.03.48 1.48.93.45.45.71.88.93 1.48.17.46.356 1.26.41 2.43.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.41 2.43-.22.6-.48 1.03-.93 1.48-.45.45-.88.71-1.48.93-.46.17-1.26.356-2.43.41-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.41-.6-.22-1.03-.48-1.48-.93-.45-.45-.71-.88-.93-1.48-.17-.46-.356-1.26-.41-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.97.41-2.43.22-.6.48-1.03.93-1.48.45-.45.88-.71 1.48-.93.46-.17 1.26-.356 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.22a4.02 4.02 0 110-8.04 4.02 4.02 0 010 8.04zm6.4-11.5a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

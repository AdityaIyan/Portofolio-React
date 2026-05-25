import React from 'react'

export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'Python',
    'SymmetricDS',
    'PostgreSQL',
    'Tailwind CSS',
    'Git',
    'REST APIs',
  ]

  return (
    <section id="about" className="section">
      <h2 className="section-title">
        <span className="text-accent font-mono">01.</span>
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <p className="text-slate-400 mb-4 leading-relaxed">
            I am a passionate Fullstack Developer specializing in modern web technologies, including React, Next.js, NestJS, and REST API development. I enjoy building end-to-end solutions that are robust and easy to maintain.
          </p>

          <p className="text-slate-400 mb-4 leading-relaxed">
            I have experience designing responsive, scalable, and maintainable applications with a strong focus on performance and user experience. I pay attention to writing clean code, testing, and optimizing for real-world usage.
          </p>

          <p className="text-slate-400 mb-8 leading-relaxed">
            I love solving complex problems, collaborating with cross-functional teams, and continuously learning new tools and patterns. Outside of work, I contribute to open-source projects and enjoy exploring new technologies.
          </p>

          <p className="text-slate-400 font-mono text-sm mb-6">
            Here are a few technologies I've been working with recently:
          </p>

          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-accent">▹</span>
                <span className="text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image (from public/projects) */}
        <div className="hidden lg:flex items-center justify-center">
          <img src="public/projects/foto_iyan.jpg" alt="Your Photo" className="w-70 h-70 rounded-lg object-cover shadow-md" />
        </div>
      </div>
    </section>
  )
}

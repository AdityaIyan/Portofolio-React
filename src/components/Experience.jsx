import React from 'react'

export default function Experience() {
  const jobs = [
    {
      company: 'UBS Gold',
      position: 'Intern (Hybrid Replication)',
      period: '7 Oct 2025 - 31 Jan 2026',
      achievements: [
        'Implemented hybrid bidirectional replication using SymmetricDS as the synchronization framework.',
        'Ensured each branch (node) connects only to the central server; replication flow strictly node <-> server, preventing node-to-node direct data exchange.',
        'Configured triggers, routers, and channels in SymmetricDS and validated bidirectional replication between nodes and the central server.',
        'Monitored replication jobs, handled conflict resolution strategies, and verified end-to-end data consistency across Oracle and MySQL backends.',
      ],
    },
    {
      company: 'EdTech Startup (Try-Out Platform)',
      position: 'Contributor / Backend Developer',
      period: 'Project-based',
      achievements: [
        'Collaborated on a paid web-based try-out platform for high-school students with a Golang backend and React frontend (Oracle used in the stack as specified).',
        'Designed the system goals: provide a web-accessible platform, support domain scalability for dozens or hundreds of concurrent students, and offer forms for tutors to upload questions, materials, and explanations.',
        'Focused on scalability and availability to ensure multiple students can use the platform simultaneously with minimal latency.',
      ],
    },
    {
      company: 'Digital Agency',
      position: 'Full Stack Developer',
      period: 'Jan 2021 - Apr 2022',
      achievements: [
        'Built TOKOKOCOMOTO — a premium e-commerce platform for eyewear featuring a complete product catalog, shopping cart, payment integration, and product filtering.',
        'Delivered an intuitive, responsive UI and optimized the checkout flow for better conversion and performance.',
        'Collaborated with designers and backend engineers to ensure a seamless user experience and maintainable codebase.',
      ],
    },
  ]

  const [activeJob, setActiveJob] = React.useState(0)

  return (
    <section id="experience" className="section">
      <h2 className="section-title">
        <span className="text-accent font-mono">02.</span>
        Where I've Worked
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Company tabs */}
        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-l-2 border-slate-600">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-0">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveJob(index)}
                className={`px-4 py-3 lg:px-4 lg:py-3 font-mono text-sm whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-b-0 lg:border-l-2 transition-all duration-300 ${
                  activeJob === index
                    ? 'text-accent border-accent'
                    : 'text-slate-400 border-slate-600 hover:text-accent'
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>
        </div>

        {/* Job details */}
        <div className="lg:col-span-2">
          <div className="animate-fade-in">
            <div className="mb-2">
              <h3 className="text-slate-200 text-lg font-semibold">
                {jobs[activeJob].position}
                <span className="text-accent font-normal"> @ {jobs[activeJob].company}</span>
              </h3>
            </div>

            <p className="font-mono text-sm text-slate-500 mb-6">
              {jobs[activeJob].period}
            </p>

            <ul className="space-y-3">
              {jobs[activeJob].achievements.map((achievement, index) => (
                <li key={index} className="flex gap-3 text-slate-400">
                  <span className="text-accent font-bold mt-1.5">▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

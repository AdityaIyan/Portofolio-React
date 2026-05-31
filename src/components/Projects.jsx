import React, { useState } from 'react'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: 'RSBP Wound Chatbot',
      description:
        'medical chatbot yang membantu memberikan penjelasan dan rekomendasi awal terkait luka berdasarkan gambar dan beberapa pertanyaan sederhana. Menggunakan computer vision dan machine learning untuk analisis luka.',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'OpenCV'],
      image: '/projects/Wound_Treatment.png',
      link: 'https://github.com/AdityaIyan/Wound-Treatment-Recommendation.git',
      github: 'https://github.com/AdityaIyan/Wound-Treatment-Recommendation.git',
      featured: true,
    },
    {
      title: 'TOKOKOMOTO',
      description:
        'Platform e-commerce premium untuk eyewear dengan katalog produk lengkap, shopping cart, dan fitur filtering produk. Dibangun dengan Next.js untuk frontend yang cepat dan responsif, Nest.js untuk backend yang scalable, Supabase sebagai database, dan Tailwind CSS untuk desain modern. Project ini menampilkan kemampuan saya dalam membangun aplikasi web full-stack yang kompleks dan user-friendly.',
      tags: ['Next.js', 'Nest.js', 'Supabase', 'Tailwind CSS'],
      image: '/projects/Tokokocomoto.png',
      link: 'https://tokokocomoto-frontend.vercel.app',
      github: 'https://github.com/AdityaIyan/TOKOKOCOMOTO---e-commerce-Website.git',
      featured: true,
    },
    {
      title: 'Multiplayer Ludo Game',
      description:
        'Game ludo multiplayer yang dapat dimainkan oleh beberapa pemain secara bersamaan melalui jaringan.',
      tags: ['python', 'socket programming', 'Tkinker GUI', 'Real-time Multiplayer'],
      image: '/projects/Multiplayer-Ludo.png',
      link: 'https://github.com/AdityaIyan/Multiplayer-Ludo.git',
      github: 'https://github.com/AdityaIyan/Multiplayer-Ludo.git',
      featured: true,
    },
    {
      title: 'Shortest-Path',
      description: 'Implementasi algoritma Dijkstra dengan antarmuka Flask + HTML. Project utama tersedia di GitHub (Python, Flask, Dijkstra).',
      tags: ['Python', 'Flask', 'Dijkstra', 'HTML'],
      link: 'https://github.com/AdityaIyan/Shortest-Path-Dijkstra.git',
      github: 'https://github.com/AdityaIyan/Shortest-Path-Dijkstra.git',
    },
    {
      title: 'Hybrid Bidirectional Replication',
      description:
        'Solusi replikasi hybrid bidirectional menggunakan SymmetricDS sebagai engine sinkronisasi, berjalan di Docker dengan backend Oracle dan MySQL. Cocok untuk replikasi heterogen antara Oracle <-> MySQL.',
      tags: ['SymmetricDS', 'Docker', 'Oracle', 'MySQL'],
      image: '/public/projects/replication.png',
      link: '#',
      github: '#',
      featured: false,
    },
    {
      title: 'Web Quiz ',
      description: 'Membangun aplikasi kuis berbasis web yang memungkinkan pengguna mengerjakan soal secara interaktif dengan tampilan yang responsif dan mudah digunakan. Sistem menyediakan fitur penilaian otomatis, navigasi soal, serta perhitungan skor secara real-time untuk meningkatkan pengalaman belajar pengguna.',
      tags: ['React', 'CSS', 'Responsive'],
      link: 'https://github.com/AdityaIyan/iyanweb.git',
      github: 'https://github.com/AdityaIyan/iyanweb.git',
    },
    {
      title: 'Demis shoes e-commerce Website',
      description: 'Membangun website e-commerce untuk penjualan produk sepatu yang menyediakan fitur katalog produk, pencarian, manajemen stok, keranjang belanja, serta proses pemesanan secara online. Sistem dirancang untuk mempermudah pengelolaan produk dan meningkatkan pengalaman belanja pelanggan melalui antarmuka yang sederhana dan mudah digunakan.',      tags: ['React', 'CSS', 'Responsive'],
      tags: ['PHP', 'javascript', 'HTML', 'CSS', 'MongoDB'],
      link: '',
      github: '',
    },
    {
      title: 'Penalty Kick Games',
      description: 'Mengembangkan permainan simulasi tendangan penalti dengan mekanisme gameplay yang interaktif dan responsif. Pemain dapat mengontrol arah serta kekuatan tendangan untuk mencetak gol, sementara sistem permainan menangani perhitungan skor, animasi, dan interaksi objek dalam lingkungan permainan 3D.',
      tags: ['Unity', 'C#'],
      tags: ['PHP', 'javascript', 'HTML', 'CSS', 'MongoDB'],
      link: '',
      github: '',
    }
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="section">
      <h2 className="section-title">
        <span className="text-accent font-mono">03.</span>
        Project yang Saya Buat
      </h2>

      {/* Featured Projects */}
      <div className="space-y-24 mb-20">
        {featuredProjects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
              <h3 className="text-slate-200 text-xl sm:text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <div className="bg-dark-light bg-opacity-50 rounded-lg p-6 mb-6 border border-slate-700 border-opacity-50">
                <p className="text-slate-400 leading-relaxed">{project.description}</p>
              </div>

              <ul className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, i) => (
                  <li key={i} className="font-mono text-sm text-slate-400">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <a href={project.github} className="hover:text-accent transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href={project.link} className="flex items-center gap-2 hover:text-accent transition-colors">
                  Lihat Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
              <div className="relative group">
                <div className="bg-gradient-to-br from-accent to-accent-light rounded-lg overflow-hidden opacity-10 group-hover:opacity-20 transition-all duration-300 absolute inset-0"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="relative rounded-lg w-full h-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Notable Projects */}
      {showAll && (
      <div className="mb-12">
        <h3 className="text-slate-200 text-xl sm:text-2xl font-bold mb-10">
          Project Lainnya
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-light bg-opacity-50 border border-slate-700 border-opacity-50 rounded-lg p-6 hover:border-accent hover:border-opacity-100 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <svg className="w-10 h-10 text-accent opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM4 9a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V9z" />
                </svg>
              </div>

              <h4 className="text-slate-200 font-bold text-lg mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h4>

              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <li key={i} className="font-mono text-xs text-slate-400">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-4 text-slate-400">
                <a href={project.github} className="hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href={project.link} className="hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      <div className="text-center mt-12">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="btn-primary"
        >
          {showAll ? 'Sembunyikan' : 'Lihat Selengkapnya'}
        </button>
      </div>
    </section>
  )
}

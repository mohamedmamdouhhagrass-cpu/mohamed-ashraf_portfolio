import { useEffect, useRef } from 'react'
import { FiExternalLink, FiGithub, FiRadio } from 'react-icons/fi'
import { TbBrain, TbHeartRateMonitor, TbAtom } from 'react-icons/tb'
import { GiDna1 } from 'react-icons/gi'

const projects = [
  {
    icon: TbAtom,
    tag: 'Radiation Physics',
    title: 'Radiation Dose Mapping System',
    description:
      'A research study exploring dose distribution models in radiotherapy planning. Analyzed how different tissue densities affect radiation absorption and developed a simplified mapping algorithm to assist in treatment precision.',
    tech: ['Radiation Physics', 'Dosimetry', 'MATLAB', 'Data Analysis'],
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    icon: TbBrain,
    tag: 'Medical Imaging',
    title: 'MRI Signal Analysis Study',
    description:
      'Comparative research into magnetic resonance imaging signal behavior under varying field strengths. Investigated T1/T2 relaxation characteristics to understand contrast differentiation in soft tissue diagnostics.',
    tech: ['MRI Physics', 'Signal Processing', 'Python', 'Research Methods'],
    accent: 'from-teal-400 to-cyan-500',
  },
  {
    icon: GiDna1,
    tag: 'Biophysics',
    title: 'Cell Membrane Biophysics Review',
    description:
      'An in-depth literature review and experimental proposal examining the electrical properties of biological cell membranes. Studied ion channel dynamics and their relevance to medical diagnostics and electrophysiology.',
    tech: ['Biophysics', 'Electrophysiology', 'Academic Writing', 'Literature Review'],
    accent: 'from-violet-400 to-teal-400',
  },
]

function ProjectCard({ icon: Icon, tag, title, description, tech, accent, delay }) {
  return (
    <div
      className="reveal glass glass-hover rounded-2xl overflow-hidden group flex flex-col"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Top bar */}
      <div className={`h-1 bg-gradient-to-r ${accent}`} />

      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Icon + tag */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/15 group-hover:bg-cyan-400/20 transition-colors">
            <Icon className="text-cyan-400" size={22} />
          </div>
          <span className="font-mono text-[10px] text-gray-600 tracking-wider uppercase border border-white/5 rounded-full px-3 py-1">
            {tag}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono text-cyan-400/70 bg-cyan-400/5 border border-cyan-400/10 rounded px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors group/btn">
            <FiGithub size={13} />
            <span>Source</span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors">
            <FiExternalLink size={13} />
            <span>Details</span>
          </button>
          <span className="ml-auto text-[10px] text-gray-700 font-mono">Research Project</span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-[#060f22]/50">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">04 — Projects</span>
          <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
        </div>

        <h2 className="reveal text-3xl md:text-4xl font-bold mb-4 text-white">
          Research & <span className="gradient-text">Projects</span>
        </h2>
        <p className="reveal text-gray-500 mb-12 max-w-lg text-sm leading-relaxed">
          Academic projects applying medical physics principles to real-world
          diagnostic and therapeutic challenges.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

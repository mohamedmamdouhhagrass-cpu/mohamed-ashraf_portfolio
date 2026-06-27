import { useEffect, useRef } from 'react'
import {
  FiUsers, FiMessageSquare, FiCpu, FiClock,
  FiFileText, FiSearch, FiBarChart2
} from 'react-icons/fi'

const skills = [
  {
    icon: FiMessageSquare,
    title: 'Communication',
    desc: 'Clearly conveying complex scientific concepts to diverse audiences, both written and verbal.',
    level: 88,
  },
  {
    icon: FiUsers,
    title: 'Teamwork',
    desc: 'Collaborating effectively within academic teams and research groups toward shared goals.',
    level: 92,
  },
  {
    icon: FiCpu,
    title: 'Problem Solving',
    desc: 'Applying analytical thinking to diagnose challenges and formulate evidence-based solutions.',
    level: 85,
  },
  {
    icon: FiClock,
    title: 'Time Management',
    desc: 'Prioritizing tasks efficiently while balancing coursework, research, and self-development.',
    level: 82,
  },
  {
    icon: FiFileText,
    title: 'Microsoft Office',
    desc: 'Proficient in Word, Excel, and PowerPoint for documentation, analysis, and presentations.',
    level: 90,
  },
  {
    icon: FiSearch,
    title: 'Research Skills',
    desc: 'Conducting systematic literature reviews and applying scientific methodology to research questions.',
    level: 87,
  },
  {
    icon: FiBarChart2,
    title: 'Analytical Thinking',
    desc: 'Interpreting data, identifying patterns, and drawing sound conclusions from complex information.',
    level: 89,
  },
]

function SkillCard({ icon: Icon, title, desc, level, delay }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`
        }
      },
      { threshold: 0.3 }
    )
    if (barRef.current) observer.observe(barRef.current.parentElement)
    return () => observer.disconnect()
  }, [level])

  return (
    <div
      className="reveal glass glass-hover rounded-2xl p-6 group"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-colors">
          <Icon className="text-cyan-400" size={18} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
          <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        />
      </div>
      <p className="text-right font-mono text-[10px] text-gray-600 mt-1">{level}%</p>
    </div>
  )
}

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-24 px-6 bg-[#060f22]/50">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">02 — Skills</span>
          <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
        </div>

        <h2 className="reveal text-3xl md:text-4xl font-bold mb-4 text-white">
          Core <span className="gradient-text">Competencies</span>
        </h2>
        <p className="reveal text-gray-500 mb-12 max-w-lg text-sm leading-relaxed">
          A blend of scientific rigor and interpersonal skills developed through
          academic study and collaborative research environments.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} {...skill} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import {
  FiMessageSquare, FiTrendingUp, FiUsers, FiZap, FiMonitor, FiClock
} from 'react-icons/fi'

const skills = [
  {
    icon: <FiMessageSquare size={28} />,
    name: 'Communication',
    level: 90,
    desc: 'Clear, persuasive communication in both Arabic and English — built through direct daily customer interactions.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: <FiTrendingUp size={28} />,
    name: 'Sales',
    level: 88,
    desc: 'Consistent record of meeting and exceeding targets through consultative selling techniques at Town Team.',
    color: 'from-emerald-400 to-green-500',
  },
  {
    icon: <FiUsers size={28} />,
    name: 'Teamwork',
    level: 92,
    desc: 'Strong collaborator who contributes to team goals and supports colleagues in a fast-paced retail environment.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    icon: <FiZap size={28} />,
    name: 'Problem Solving',
    level: 82,
    desc: 'Quickly identifies issues and implements effective solutions — from customer complaints to inventory challenges.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: <FiMonitor size={28} />,
    name: 'Microsoft Office',
    level: 78,
    desc: 'Proficient in Word, Excel, and PowerPoint for academic work and professional reporting.',
    color: 'from-rose-400 to-pink-500',
  },
  {
    icon: <FiClock size={28} />,
    name: 'Time Management',
    level: 85,
    desc: 'Successfully balances a demanding academic schedule at the Faculty of Agriculture with full-time work commitments.',
    color: 'from-cyan-400 to-teal-500',
  },
]

function SkillCard({ skill, delay }: { skill: typeof skills[0]; delay: number }) {
  return (
    <div
      className="reveal bg-card border border-slate-700 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300`}
        style={{ background: `linear-gradient(135deg, rgba(14,165,233,0.15), rgba(56,189,248,0.05))` }}
      >
        <span className="text-primary">{skill.icon}</span>
      </div>

      {/* Name */}
      <h3 className="font-display font-bold text-lg text-white mb-2">{skill.name}</h3>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-slate-500 text-xs">Proficiency</span>
          <span className="text-primary text-xs font-semibold">{skill.level}%</span>
        </div>
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${skill.color} skill-bar`}
            style={{ '--target-width': `${skill.level}%` } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">{skill.desc}</p>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible')
            })
            // Animate skill bars
            entry.target.querySelectorAll('.skill-bar').forEach((bar) => {
              const target = (bar as HTMLElement).style.getPropertyValue('--target-width')
              ;(bar as HTMLElement).style.width = '0%'
              setTimeout(() => {
                ;(bar as HTMLElement).style.transition = 'width 1s ease'
                ;(bar as HTMLElement).style.width = target
              }, 300)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">What I Do Best</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A blend of academic knowledge and real-world experience that sets me apart.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

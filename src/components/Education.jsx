import { useEffect, useRef } from 'react'
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi'
import { GiAtom } from 'react-icons/gi'
import { TbMicroscope } from 'react-icons/tb'

const courses = [
  'Radiation Physics & Dosimetry',
  'Medical Imaging Principles',
  'Nuclear Medicine Fundamentals',
  'Biophysics & Biomechanics',
  'Scientific Research Methods',
  'Mathematics for Physics',
]

export default function Education() {
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
    <section id="education" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-16">
        <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">03 — Education</span>
        <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
      </div>

      <h2 className="reveal text-3xl md:text-4xl font-bold mb-12 text-white">
        Academic <span className="gradient-text">Background</span>
      </h2>

      {/* Main card */}
      <div className="reveal reveal-delay-1 relative glass rounded-2xl p-8 md:p-10 mb-8 overflow-hidden group hover:border-cyan-400/25 transition-all duration-500">
        {/* Background atom */}
        <GiAtom
          className="absolute -right-8 -top-8 text-cyan-400/5 group-hover:text-cyan-400/10 transition-colors duration-500"
          size={200}
        />

        <div className="relative z-10 grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                <FiBook className="text-cyan-400" size={22} />
              </div>
              <div>
                <p className="font-mono text-xs text-cyan-400 tracking-wider">Currently Enrolled</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <FiCalendar size={11} className="text-gray-600" />
                  <span className="text-xs text-gray-600">Ongoing</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Faculty of Science</h3>
            <p className="text-cyan-400 font-medium mb-1">Department of Medical Physics</p>
            <p className="text-gray-500 text-sm mb-6">Bachelor of Science</p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Pursuing a rigorous scientific education at the intersection of
              physics, biology, and medicine. Focused on understanding how
              physical laws govern biological systems and how that knowledge
              powers modern diagnostic and therapeutic technologies.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <TbMicroscope className="text-cyan-400" size={18} />
              <p className="text-sm font-medium text-gray-300">Core Study Areas</p>
            </div>
            <ul className="space-y-2">
              {courses.map((course, i) => (
                <li
                  key={course}
                  className="flex items-center gap-3 text-sm text-gray-400 group/item"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 flex-shrink-0 group-hover/item:bg-cyan-400 transition-colors" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Achievement badge */}
      <div className="reveal reveal-delay-2 flex items-center gap-4 glass rounded-xl p-5">
        <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex-shrink-0">
          <FiAward className="text-cyan-400" size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Committed to Academic Excellence</p>
          <p className="text-xs text-gray-500 mt-0.5">
            Continuously expanding knowledge through research, coursework, and practical applications in the field of medical physics.
          </p>
        </div>
      </div>
    </section>
  )
}

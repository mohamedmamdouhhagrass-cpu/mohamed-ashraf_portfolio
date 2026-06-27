import { useEffect, useRef } from 'react'
import { FiUser, FiTarget, FiTrendingUp } from 'react-icons/fi'
import { GiAtom } from 'react-icons/gi'

const stats = [
  { icon: FiUser, label: 'Faculty', value: 'Science' },
  { icon: GiAtom, label: 'Department', value: 'Medical Physics' },
  { icon: FiTarget, label: 'Goal', value: 'Research & Innovation' },
  { icon: FiTrendingUp, label: 'Focus', value: 'Med-Tech' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="reveal flex items-center gap-3 mb-16">
        <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">01 — About</span>
        <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Photo column */}
        <div className="reveal reveal-delay-1 flex justify-center">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-2xl border border-cyan-400/15 animate-pulse-slow" />
            <div className="absolute -inset-6 rounded-2xl border border-cyan-400/05" />
            {/* Photo */}
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden glass">
              <img
                src="/profile.png"
                alt="Mohamed Hesham"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback initials */}
              <div
                className="w-full h-full items-center justify-center text-5xl font-bold gradient-text"
                style={{ display: 'none' }}
              >
                MH
              </div>
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a]/40 to-transparent" />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)',
                backgroundSize: '6px 6px'
              }}
            />
          </div>
        </div>

        {/* Text column */}
        <div>
          <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold mb-6 text-white">
            Driven by <span className="gradient-text">Science</span> &{' '}
            <span className="gradient-text">Purpose</span>
          </h2>

          <p className="reveal reveal-delay-2 text-gray-400 leading-relaxed mb-4">
            I'm a Medical Physics student at the Faculty of Science, passionate about
            continuous learning and pushing the boundaries of what physics can do for
            healthcare. My academic journey has sharpened my understanding of how
            physical principles translate into real-world medical applications.
          </p>

          <p className="reveal reveal-delay-3 text-gray-400 leading-relaxed mb-8">
            I thrive at the intersection of science and technology — whether that's
            exploring radiation physics, medical imaging techniques, or data-driven
            research. I'm committed to building practical expertise that contributes
            to a healthier, more technologically advanced world.
          </p>

          {/* Stats */}
          <div className="reveal reveal-delay-4 grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass glass-hover rounded-xl p-4">
                <Icon className="text-cyan-400 mb-2" size={18} />
                <p className="text-xs text-gray-500 font-mono mb-1">{label}</p>
                <p className="text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

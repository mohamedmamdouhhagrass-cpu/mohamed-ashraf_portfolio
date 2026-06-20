import { useEffect, useRef } from 'react'
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.classList.add('visible')
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark bg-grid"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-400/8 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div
        ref={heroRef}
        className="reveal max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col-reverse lg:flex-row items-center gap-16"
      >
        {/* Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for Opportunities
          </div>

          <h1 className="font-display font-bold text-5xl md:text-6xl xl:text-7xl leading-tight text-white">
            Mohamed
            <br />
            <span className="text-gradient">Ashraf</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            Nutrition Systems Student
            <span className="text-primary mx-2">|</span>
            Sales Representative at{' '}
            <span className="text-white font-semibold">Town Team</span>
          </p>

          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Passionate about nutrition science and customer relationships. Combining academic excellence
            in agricultural nutrition with hands-on sales experience to build a future at the
            intersection of health and business.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a
              href="/profile.png"
              download="Mohamed_Ashraf_CV"
              className="inline-flex items-center gap-2 bg-primary hover:bg-sky-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <FiDownload size={18} />
              Download CV
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-transparent border border-primary/40 hover:border-primary text-primary hover:bg-primary/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <FiMail size={18} />
              Contact Me
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
            {[
              { value: '2+', label: 'Years in Sales' },
              { value: '100+', label: 'Happy Clients' },
              { value: 'Top', label: 'Performer' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-2xl text-primary">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 relative">
          {/* Decorative rings */}
          <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-pulse-slow" />
          <div className="absolute inset-0 rounded-full border border-primary/10 scale-125" />

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow">
            <img
              src="/profile.png"
              alt="Mohamed Ashraf"
              className="w-full h-full object-cover object-top"
            />
            {/* Overlay shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface border border-slate-700 rounded-xl px-4 py-2 flex items-center gap-2 shadow-xl whitespace-nowrap">
            <span className="text-lg">🏆</span>
            <span className="text-sm font-semibold text-white">Town Team</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-primary transition-colors animate-bounce"
      >
        <FiArrowDown size={24} />
      </button>
    </section>
  )
}

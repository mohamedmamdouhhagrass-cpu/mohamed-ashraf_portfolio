import { useEffect, useRef } from 'react'
import { FiArrowDown } from 'react-icons/fi'
import { GiAtom } from 'react-icons/gi'
import { TbHeartRateMonitor } from 'react-icons/tb'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.08 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-400/5 via-transparent to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,211,238,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040d1a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <span className="h-px w-10 bg-cyan-400/50" />
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">
            Medical Physics
          </span>
          <span className="h-px w-10 bg-cyan-400/50" />
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-white">Mohamed </span>
          <span className="gradient-text glow-text">Hesham</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-3 font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Abu El-Yazid
        </p>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <TbHeartRateMonitor className="text-cyan-400 text-xl" />
          <p className="text-gray-300 text-base md:text-lg">
            Physics student bridging science & medicine
          </p>
          <GiAtom className="text-cyan-400 text-xl animate-pulse-slow" />
        </div>

        <p className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed text-sm md:text-base animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Faculty of Science · Department of Medical Physics · Driven by curiosity,
          research, and the intersection of technology with human health.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a
            href="#contact"
            className="px-8 py-3 bg-cyan-400 text-[#040d1a] font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] text-sm tracking-wide"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:border-cyan-400/80 hover:bg-cyan-400/5 transition-all duration-300 text-sm tracking-wide"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <FiArrowDown size={20} />
      </a>
    </section>
  )
}

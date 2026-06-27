import { useEffect, useRef, useState } from 'react'
import { FiMail, FiPhone, FiSend, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'mohamed-hesham-315071419',
    href: 'https://www.linkedin.com/in/mohamed-hesham-315071419',
    color: 'hover:text-blue-400',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'Contact via form',
    href: 'mailto:',
    color: 'hover:text-cyan-400',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '01013385044',
    href: 'tel:+201013385044',
    color: 'hover:text-green-400',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+20 101 338 5044',
    href: 'https://wa.me/201013385044',
    color: 'hover:text-green-400',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

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

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open mailto with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">05 — Contact</span>
          <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
        </div>

        <h2 className="reveal text-3xl md:text-4xl font-bold mb-4 text-white">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="reveal text-gray-500 mb-12 max-w-md text-sm leading-relaxed">
          Whether it's a research collaboration, internship opportunity, or just a
          conversation about medical physics — I'd love to connect.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal flex items-center gap-4 glass rounded-xl p-5 group transition-all duration-300 ${color} hover:border-opacity-30`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/20 transition-all">
                  <Icon size={17} />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-mono mb-0.5">{label}</p>
                  <p className="text-sm text-gray-300 font-medium">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="reveal reveal-delay-2">
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

              {sent && (
                <div className="mb-4 p-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm text-center">
                  ✓ Message composed — check your mail app!
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1.5 tracking-wider">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-700 focus:outline-none focus:border-cyan-400/40 focus:bg-cyan-400/3 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1.5 tracking-wider">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-700 focus:outline-none focus:border-cyan-400/40 focus:bg-cyan-400/3 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1.5 tracking-wider">MESSAGE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-700 focus:outline-none focus:border-cyan-400/40 focus:bg-cyan-400/3 transition-all resize-none"
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 bg-cyan-400 text-[#040d1a] font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] text-sm"
                >
                  <FiSend size={14} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

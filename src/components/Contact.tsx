import { useEffect, useRef } from 'react'
import { FiMail, FiPhone, FiLinkedin, FiMessageCircle, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const contacts = [
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    value: 'mo7madashraf59m@gmail.com',
    href: 'mailto:mo7madashraf59m@gmail.com',
    color: 'from-rose-500/20 to-pink-500/10',
    border: 'border-rose-500/20 hover:border-rose-400/50',
    iconBg: 'bg-rose-500/10 text-rose-400',
  },
  {
    icon: <FiPhone size={22} />,
    label: 'Phone',
    value: '+20 101 135 2905',
    href: 'tel:+201011352905',
    color: 'from-emerald-500/20 to-green-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-400/50',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: <FiLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'Mohamed Ashraf',
    href: 'https://www.linkedin.com/in/mohamed-ashraf-97472b37a',
    color: 'from-blue-500/20 to-sky-500/10',
    border: 'border-blue-500/20 hover:border-blue-400/50',
    iconBg: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: <FaWhatsapp size={22} />,
    label: 'WhatsApp',
    value: '+20 101 135 2905',
    href: 'https://wa.me/201011352905',
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/20 hover:border-green-400/50',
    iconBg: 'bg-green-500/10 text-green-400',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
              el.classList.add('visible')
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
    <section id="contact" ref={sectionRef} className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Let's Talk</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Whether you have an opportunity, a question, or just want to connect — I'm always happy to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact cards */}
          <div className="reveal-left grid sm:grid-cols-2 gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group bg-gradient-to-br ${contact.color} border ${contact.border} rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block`}
              >
                <div className={`w-12 h-12 rounded-xl ${contact.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                  {contact.label}
                </div>
                <div className="text-white font-semibold text-sm break-all leading-snug">
                  {contact.value}
                </div>
              </a>
            ))}
          </div>

          {/* Right: CTA message */}
          <div className="reveal-right space-y-6">
            <div className="bg-card border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <FiMessageCircle className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Let's Connect</h3>
                  <p className="text-slate-500 text-sm">I typically respond within 24 hours</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6">
                I'm currently open to new opportunities in sales, nutrition consulting, or any role that combines my skills in communication and health sciences.
                Don't hesitate to reach out — I'd love to have a conversation!
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:mo7madashraf59m@gmail.com"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-sky-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 w-full"
                >
                  <FiSend size={18} />
                  Send Me an Email
                </a>
                <a
                  href="https://wa.me/201011352905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 w-full"
                >
                  <FaWhatsapp size={20} />
                  Chat on WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-ashraf-97472b37a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 w-full"
                >
                  <FiLinkedin size={18} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-5 py-4">
              <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
              <p className="text-emerald-400 text-sm font-medium">
                Currently available for new opportunities and collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

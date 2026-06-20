import { FiMail, FiLinkedin, FiPhone, FiHeart } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/mohamed-ashraf-97472b37a', label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: 'mailto:mo7madashraf59m@gmail.com', label: 'Email' },
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/201011352905', label: 'WhatsApp' },
  { icon: <FiPhone size={18} />, href: 'tel:+201011352905', label: 'Phone' },
]

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-2xl text-gradient mb-3">
              Mohamed Ashraf
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Nutrition Systems Student & Sales Representative at Town Team.
              Passionate about health, people, and making a real difference.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-slate-500 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:mo7madashraf59m@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm transition-colors">
                <FiMail size={14} />
                mo7madashraf59m@gmail.com
              </a>
              <a href="tel:+201011352905" className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm transition-colors">
                <FiPhone size={14} />
                +20 101 135 2905
              </a>
              <a href="https://wa.me/201011352905" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-green-400 text-sm transition-colors">
                <FaWhatsapp size={14} />
                WhatsApp
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 bg-card border border-slate-700 hover:border-primary/50 hover:bg-primary/10 text-slate-400 hover:text-primary rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Mohamed Ashraf. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1">
            Made with <FiHeart className="text-rose-500" size={12} /> in Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}

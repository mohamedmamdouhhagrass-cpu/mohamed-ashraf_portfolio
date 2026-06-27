import { GiAtom } from 'react-icons/gi'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <GiAtom className="text-cyan-400 text-xl" />
          <span className="font-mono text-sm text-gray-500">
            Mohamed Hesham Abu El-Yazid
          </span>
        </div>

        <p className="text-xs text-gray-700 font-mono">
          Medical Physics · Faculty of Science
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/mohamed-hesham-315071419"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition-colors"
          >
            <FaLinkedinIn size={15} />
          </a>
          <a
            href="https://wa.me/201013385044"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp size={15} />
          </a>
          <a
            href="tel:+201013385044"
            className="text-gray-600 hover:text-cyan-400 transition-colors"
          >
            <FiPhone size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}

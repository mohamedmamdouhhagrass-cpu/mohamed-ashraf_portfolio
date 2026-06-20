import { useEffect, useRef } from 'react'
import { FiBriefcase, FiCheckCircle } from 'react-icons/fi'
import { MdStorefront } from 'react-icons/md'

const responsibilities = [
  'Achieving and consistently exceeding monthly sales targets at Town Team branches',
  'Building and maintaining strong, long-lasting customer relationships',
  'Delivering exceptional customer service experiences that drive repeat business',
  'Presenting and promoting Town Team fashion products with deep product knowledge',
  'Handling customer inquiries, complaints, and feedback with professionalism',
  'Collaborating with team members to ensure smooth store operations',
  'Assisting in visual merchandising and store display arrangements',
  'Processing transactions accurately and maintaining point-of-sale operations',
]

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">My Journey</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="reveal max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Experience Card */}
            <div className="relative pl-16 md:pl-20">
              {/* Dot */}
              <div className="absolute left-4 md:left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-dark shadow-lg shadow-primary/50" />

              <div className="bg-card border border-slate-700 hover:border-primary/40 transition-all duration-300 rounded-2xl p-6 md:p-8 glow-sm">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/15 border border-primary/30 rounded-xl flex items-center justify-center">
                      <MdStorefront className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">Sales Representative</h3>
                      <p className="text-primary font-semibold mt-0.5">Town Team</p>
                      <p className="text-slate-500 text-sm mt-1">Fashion Retail Industry</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Current
                    </span>
                  </div>
                </div>

                {/* Achievement chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Sales Excellence', 'Customer Relations', 'Team Collaboration', 'Fashion Retail'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-700 mb-6" />

                {/* Responsibilities */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FiBriefcase className="text-primary" size={16} />
                    <span className="text-white font-semibold text-sm">Key Responsibilities</span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <FiCheckCircle className="text-primary flex-shrink-0 mt-0.5" size={15} />
                        <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills gained */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: '100+', label: 'Customers Served' },
                      { value: 'Top', label: 'Sales Performer' },
                      { value: '2+', label: 'Years Experience' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center bg-dark/50 rounded-xl p-3">
                        <div className="font-display font-bold text-xl text-primary">{stat.value}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

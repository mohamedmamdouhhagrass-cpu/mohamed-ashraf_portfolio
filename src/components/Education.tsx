import { useEffect, useRef } from 'react'
import { FiBook, FiAward, FiCheckCircle } from 'react-icons/fi'
import { GiWheat, GiMicroscope } from 'react-icons/gi'
import { MdScience } from 'react-icons/md'

const courses = [
  'Food Chemistry & Analysis',
  'Human Nutrition Physiology',
  'Dietary Assessment Methods',
  'Clinical Nutrition Principles',
  'Agricultural Food Systems',
  'Microbiology & Food Safety',
  'Biochemistry of Nutrients',
  'Community Nutrition Programs',
]

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            My <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main education card */}
          <div className="reveal-left">
            <div className="bg-card border border-slate-700 hover:border-primary/40 rounded-2xl p-8 transition-all duration-300 glow-sm">
              {/* Header */}
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center">
                  <GiWheat className="text-primary" size={32} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full mb-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    Currently Enrolled
                  </div>
                  <h3 className="font-display font-bold text-xl text-white leading-tight">
                    Bachelor of Science
                  </h3>
                  <p className="text-primary font-semibold mt-0.5">Nutrition Systems</p>
                </div>
              </div>

              {/* Institution */}
              <div className="bg-dark/60 border border-slate-700/50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3">
                  <FiBook className="text-primary flex-shrink-0" size={18} />
                  <div>
                    <div className="text-white font-semibold">Faculty of Agriculture</div>
                    <div className="text-slate-500 text-sm">Department of Nutrition Systems</div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Degree', value: 'Bachelor of Science (B.Sc.)' },
                  { label: 'Department', value: 'Nutrition Systems' },
                  { label: 'Faculty', value: 'Faculty of Agriculture' },
                  { label: 'Focus', value: 'Food Science & Human Nutrition' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-slate-800 last:border-0">
                    <span className="text-slate-500 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Achievement */}
              <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl p-4">
                <FiAward className="text-primary flex-shrink-0" size={20} />
                <p className="text-slate-300 text-sm">
                  Pursuing a comprehensive understanding of nutrition science to complement my professional career in health-related sales.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: courses + skills */}
          <div className="space-y-6 reveal-right">
            {/* Relevant Courses */}
            <div className="bg-card border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <MdScience className="text-primary" size={20} />
                <h4 className="font-display font-bold text-white">Relevant Coursework</h4>
              </div>
              <ul className="grid grid-cols-1 gap-2.5">
                {courses.map((course) => (
                  <li key={course} className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-primary flex-shrink-0" size={14} />
                    <span className="text-slate-400 text-sm">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lab Skills */}
            <div className="bg-card border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <GiMicroscope className="text-primary" size={20} />
                <h4 className="font-display font-bold text-white">Academic Strengths</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Food Analysis', 'Lab Research', 'Dietary Planning',
                  'Scientific Writing', 'Data Interpretation', 'Clinical Skills',
                  'Biochemistry', 'Agricultural Sciences',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate highlight */}
            <div className="bg-gradient-to-br from-primary/10 to-sky-900/20 border border-primary/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiAward className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Effective Selling Skills</h4>
                  <p className="text-primary text-sm font-medium mb-2">Town Team — Mini Town Team</p>
                  <p className="text-slate-400 text-sm">
                    Awarded a certificate for completing professional sales training, demonstrating commitment to excellence in the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { FiUser, FiTarget, FiHeart } from 'react-icons/fi'
import { GiWheat } from 'react-icons/gi'

export default function About() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image + decorative card */}
          <div className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 glow-sm">
              <img
                src="/profile.png"
                alt="Mohamed Ashraf"
                className="w-full h-80 md:h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-surface/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <GiWheat className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Nutrition Systems</div>
                      <div className="text-slate-400 text-xs">Faculty of Agriculture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="reveal-right space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                A Passionate Student & Sales Professional
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm Mohamed Ashraf, a dedicated Nutrition Systems student at the Faculty of Agriculture
                with a strong passion for understanding the science behind food and human health.
                Alongside my studies, I work as a Sales Representative at Town Team, where I've
                developed excellent communication and customer relationship skills.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <FiUser className="text-primary" size={20} />,
                  title: 'Personal Summary',
                  text: 'Driven, communicative, and always eager to learn. I thrive in team environments and love connecting with people to help them find what they need.',
                },
                {
                  icon: <FiTarget className="text-primary" size={20} />,
                  title: 'Career Goals',
                  text: 'My goal is to bridge the gap between nutrition science and the business world — whether through health product sales, nutrition consulting, or food industry management.',
                },
                {
                  icon: <FiHeart className="text-primary" size={20} />,
                  title: 'Passions',
                  text: "Nutrition science, human health, customer experience, continuous learning, and making a real positive impact on people's wellbeing.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-card border border-slate-700 rounded-xl p-4 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

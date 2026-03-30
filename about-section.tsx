"use client"

import { Rocket, FlaskConical, Settings } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const icons = [Rocket, FlaskConical, Settings]

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8F8F8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#64B557] font-medium mb-4">
            {t.about.eyebrow}
          </p>
          <h2 className="font-[var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#091511] mb-6 text-balance">
            {t.about.heading1}{" "}
            <span className="text-[#64B557]">{t.about.heading2}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.about.advantages.map((advantage, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="h-2"
                  style={{
                    background: 'linear-gradient(90deg, #64B557 0%, #091511 100%)',
                  }}
                  aria-hidden="true"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-[#091511] mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pilot Program CTA */}
        <div
          className="mt-16 rounded-2xl p-8 sm:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #091511 0%, #1a2f28 100%)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{
              background: 'radial-gradient(circle at 70% 30%, #64B557 0%, transparent 50%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-[var(--font-orbitron)] text-2xl sm:text-3xl font-bold text-white mb-4">
                {t.about.pilot.heading}
              </h3>
              <p className="text-white/70 mb-8 text-pretty">{t.about.pilot.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {t.about.pilot.steps.map((step, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-[#64B557] flex items-center justify-center text-white font-bold text-sm mb-3">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-white/60">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

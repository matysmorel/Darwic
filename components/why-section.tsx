"use client"

import { Beaker, Cpu, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function WhySection() {
  const { t } = useLanguage()

  const icons = [Cpu, Beaker, Sparkles]

  return (
    <section id="why" className="py-24 sm:py-32 bg-[#F8F8F8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#64B557] font-medium mb-4">
            {t.why.eyebrow}
          </p>
          <h2 className="font-[var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#091511] mb-6 text-balance">
            {t.why.heading1}{" "}
            <span className="text-[#64B557]">{t.why.heading2}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.why.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.why.features.map((feature, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(100, 181, 87, 0.05) 0%, rgba(9, 21, 17, 0.05) 100%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-[#091511] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

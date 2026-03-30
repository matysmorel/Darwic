"use client"

import { Brain, Dna, Target } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function TechnologySection() {
  const { t } = useLanguage()

  const icons = [Brain, Dna, Target]
  const stepNumbers = ["01", "02", "03"]

  return (
    <section
      id="technology"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #091511 0%, #1a2f28 100%)',
      }}
    >
      {/* Decorative gradient overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          background: 'radial-gradient(circle at 30% 50%, #64B557 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#64B557] font-medium mb-4">
            {t.technology.eyebrow}
          </p>
          <h2 className="font-[var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            {t.technology.heading1}{" "}
            <span className="text-[#64B557]">{t.technology.heading2}</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-pretty">
            {t.technology.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.technology.steps.map((item, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="relative group">
                {/* Connecting line for desktop */}
                {index < t.technology.steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#64B557] to-transparent"
                    aria-hidden="true"
                  />
                )}

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-[var(--font-orbitron)] text-4xl font-bold text-[#64B557]/30">
                      {stepNumbers[index]}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#64B557] font-medium">
                      {item.label}
                    </span>
                  </div>

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>

                  <h3 className="font-[var(--font-orbitron)] text-2xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-xl sm:text-2xl text-white/80 italic max-w-3xl mx-auto">
            &ldquo;{t.technology.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}

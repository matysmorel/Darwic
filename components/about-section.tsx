"use client"

import { useLanguage } from "@/context/language-context"
import { useReveal } from "@/hooks/use-reveal"

// SVG icons matching index.html exactly
const advantageIcons = [
  // Strategic Edge (arrow/redirect)
  <svg key="strategic" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14l5-5-5-5"/>
    <path d="M4 20v-7a4 4 0 0 1 4-4h12"/>
  </svg>,
  // Validated Research (open book)
  <svg key="research" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>,
  // Flexible Integration (wifi/signal)
  <svg key="flexible" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
  </svg>,
]

export function AboutSection() {
  const { t } = useLanguage()

  const label   = useReveal<HTMLSpanElement>()
  const heading = useReveal<HTMLHeadingElement>()
  const desc    = useReveal<HTMLParagraphElement>()
  const card0   = useReveal<HTMLDivElement>()
  const card1   = useReveal<HTMLDivElement>()
  const card2   = useReveal<HTMLDivElement>()
  const pilot   = useReveal<HTMLDivElement>()
  const cardRefs = [card0, card1, card2]

  return (
    <section id="about" style={{ padding: "6.5rem 0 7rem", background: "#F8F8F8" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-14">
          <span
            ref={label.ref}
            className={`rv${label.visible ? " on" : ""} block text-[.75rem] uppercase tracking-[.22em] text-[#64B557] font-semibold mb-4`}
          >
            {t.about.eyebrow}
          </span>
          <h2
            ref={heading.ref}
            className={`rv d1${heading.visible ? " on" : ""} font-[var(--font-orbitron)] mb-6`}
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.15, color: "#091511" }}
          >
            {t.about.heading1}{" "}
            <span className="text-[#64B557]">{t.about.heading2}</span>
          </h2>
          <p
            ref={desc.ref}
            className={`rv d2${desc.visible ? " on" : ""} text-[#4a5568] max-w-[36rem] mx-auto text-[1.0625rem]`}
          >
            {t.about.description}
          </p>
        </div>

        {/* Advantage cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {t.about.advantages.map((advantage, index) => {
            const rv = cardRefs[index]
            const delayClass = ` d${index + 1}`
            return (
              <div
                key={index}
                ref={rv.ref}
                className={`rv${delayClass}${rv.visible ? " on" : ""} group bg-white rounded-[1.25rem] overflow-hidden transition-[transform,box-shadow] duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-[7px]`}
                style={{ boxShadow: "0 1px 4px rgba(9,21,17,.05), 0 6px 18px rgba(9,21,17,.04)" }}
              >
                {/* Top gradient bar — 3px, matching .acard__bar */}
                <div
                  className="h-[3px]"
                  style={{ background: "linear-gradient(90deg, #64B557, #1a2f28)" }}
                  aria-hidden="true"
                />
                <div className="p-[2.5rem_2rem]">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-[.75rem] flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, #64B557 0%, #1a2f28 100%)" }}
                  >
                    {advantageIcons[index]}
                  </div>

                  <h3 className="font-[var(--font-orbitron)] text-[1.1rem] font-semibold text-[#091511] mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-[#4a5568] text-[.9375rem] leading-[1.7]">
                    {advantage.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pilot Programme */}
        <div
          ref={pilot.ref}
          className={`rv${pilot.visible ? " on" : ""} relative rounded-[1.5rem] overflow-hidden`}
          style={{ padding: "3rem 2rem", background: "linear-gradient(135deg, #091511 0%, #1a2f28 100%)" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
            style={{ background: "radial-gradient(circle at 72% 28%, rgba(100,181,87,.11) 0%, transparent 55%)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center">
            <h3
              className="font-[var(--font-orbitron)] text-white font-bold mb-3"
              style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
            >
              {t.about.pilot.heading}
            </h3>
            <p className="text-[rgba(255,255,255,.62)] mb-10">{t.about.pilot.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {t.about.pilot.steps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-[1rem] p-6 transition-[background,border-color] duration-[250ms] hover:bg-[rgba(255,255,255,.08)] hover:border-[rgba(100,181,87,.22)]"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#64B557] flex items-center justify-center text-white font-bold text-[.8125rem] mb-[.875rem]">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-white text-[.9375rem] mb-2">{step.title}</h4>
                  <p className="text-[.8125rem] text-[rgba(255,255,255,.52)] leading-[1.55]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

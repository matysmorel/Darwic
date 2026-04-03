"use client"

import { useLanguage } from "@/context/language-context"
import { useReveal } from "@/hooks/use-reveal"

// SVG paths matching index.html exactly
const cardIcons = [
  // chip / platform icon
  <svg key="chip" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="14" height="14" rx="2"/>
    <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>
    <rect x="9" y="9" width="6" height="6" rx="1"/>
  </svg>,
  // flask icon
  <svg key="flask" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6M9 3v7l-4.5 9A1 1 0 0 0 5.4 21h13.2a1 1 0 0 0 .9-1.45L15 10V3"/>
    <path d="M6.5 16h11"/>
  </svg>,
  // sparkle / star icon
  <svg key="sparkle" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>,
]

export function WhySection() {
  const { t } = useLanguage()

  const label   = useReveal<HTMLSpanElement>()
  const heading = useReveal<HTMLHeadingElement>()
  const desc    = useReveal<HTMLParagraphElement>()
  const card0   = useReveal<HTMLDivElement>()
  const card1   = useReveal<HTMLDivElement>()
  const card2   = useReveal<HTMLDivElement>()
  const cardRefs = [card0, card1, card2]

  return (
    <section id="why" className="py-[6.5rem_0_7rem] bg-[#F8F8F8]" style={{ padding: "6.5rem 0 7rem" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-14">
          <span
            ref={label.ref}
            className={`rv${label.visible ? " on" : ""} block text-[.75rem] uppercase tracking-[.22em] text-[#64B557] font-semibold mb-4`}
          >
            {t.why.eyebrow}
          </span>
          <h2
            ref={heading.ref}
            className={`rv d1${heading.visible ? " on" : ""} font-[var(--font-orbitron)] mb-6`}
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.15, color: "#091511" }}
          >
            {t.why.heading1}{" "}
            <span className="text-[#64B557]">{t.why.heading2}</span>
          </h2>
          <p
            ref={desc.ref}
            className={`rv d2${desc.visible ? " on" : ""} text-[#4a5568] max-w-[36rem] mx-auto text-[1.0625rem] leading-[1.75]`}
          >
            {t.why.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.why.features.map((feature, index) => {
            const rv = cardRefs[index]
            const num = String(index + 1).padStart(2, "0")
            const delayClass = ` d${index + 1}`
            return (
              <div
                key={index}
                ref={rv.ref}
                className={`rv${delayClass}${rv.visible ? " on" : ""} group relative bg-white rounded-[1.25rem] p-[2.5rem_2rem] overflow-hidden transition-[transform,box-shadow] duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-[7px] hover:shadow-[0_16px_48px_rgba(9,21,17,.13)]`}
                style={{ boxShadow: "0 1px 4px rgba(9,21,17,.05), 0 6px 18px rgba(9,21,17,.04)" }}
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(100,181,87,.07) 0%, rgba(9,21,17,.04) 100%)" }}
                  aria-hidden="true"
                />

                {/* Background number */}
                <span
                  className="absolute top-5 right-5 font-[var(--font-orbitron)] text-[4rem] font-extrabold leading-none pointer-events-none select-none"
                  style={{ color: "rgba(100,181,87,.07)" }}
                  aria-hidden="true"
                >
                  {num}
                </span>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-[.75rem] flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, #64B557 0%, #1a2f28 100%)" }}
                  >
                    {cardIcons[index]}
                  </div>

                  <h3
                    className="font-[var(--font-orbitron)] text-[1.1rem] font-semibold text-[#091511] mb-3"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#4a5568] text-[.9375rem] leading-[1.7]">
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

"use client"

import { useLanguage } from "@/context/language-context"
import { useReveal } from "@/hooks/use-reveal"

// SVG icons matching index.html exactly
const stepIcons = [
  // brain / cpu (Design)
  <svg key="cpu" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>
  </svg>,
  // DNA strand (Mutation)
  <svg key="dna" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3c2.5 0 5 1 7 3s4.5 3 7 3"/>
    <path d="M3 21c2.5 0 5-1 7-3s4.5-3 7-3"/>
    <path d="M3 9c2 0 4 .5 6 1.5"/>
    <path d="M15 13.5c2 1 4 1.5 6 1.5"/>
    <path d="M3 15c2 0 4-.5 6-1.5"/>
    <path d="M15 10.5c2-1 4-1.5 6-1.5"/>
  </svg>,
  // target (Screening)
  <svg key="target" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>,
]

export function TechnologySection() {
  const { t } = useLanguage()

  const label  = useReveal<HTMLSpanElement>()
  const heading = useReveal<HTMLHeadingElement>()
  const desc   = useReveal<HTMLParagraphElement>()
  const step0  = useReveal<HTMLDivElement>()
  const step1  = useReveal<HTMLDivElement>()
  const step2  = useReveal<HTMLDivElement>()
  const quote  = useReveal<HTMLDivElement>()
  const stepRefs = [step0, step1, step2]

  return (
    <section
      id="technology"
      className="relative overflow-hidden"
      style={{ padding: "7rem 0", background: "#091511" }}
    >
      {/* Background radial gradients (matching .tech__bg) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 22% 55%, rgba(100,181,87,.09) 0%, transparent 55%), " +
            "radial-gradient(ellipse 45% 45% at 82% 18%, rgba(26,47,40,.5) 0%, transparent 50%)",
        }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(100,181,87,.28), transparent)",
          animation: "scanLine 9s linear infinite",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <span
            ref={label.ref}
            className={`rv${label.visible ? " on" : ""} block text-[.75rem] uppercase tracking-[.22em] text-[#64B557] font-semibold mb-4`}
          >
            {t.technology.eyebrow}
          </span>
          <h2
            ref={heading.ref}
            className={`rv d1${heading.visible ? " on" : ""} font-[var(--font-orbitron)] text-white mb-4`}
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.15 }}
          >
            {t.technology.heading1}{" "}
            <span className="text-[#64B557]">{t.technology.heading2}</span>
          </h2>
          <p
            ref={desc.ref}
            className={`rv d2${desc.visible ? " on" : ""} text-[rgba(255,255,255,.6)] max-w-[36rem] mx-auto text-[1.0625rem]`}
          >
            {t.technology.description}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.technology.steps.map((item, index) => {
            const rv = stepRefs[index]
            const delayClass = ` d${index + 1}`
            const isLast = index === t.technology.steps.length - 1
            return (
              <div
                key={index}
                ref={rv.ref}
                className={`rv${delayClass}${rv.visible ? " on" : ""} group relative rounded-[1.25rem] p-9 overflow-hidden transition-[background,border-color,transform] duration-300 hover:-translate-y-[5px]`}
                style={{
                  background: "rgba(255,255,255,.04)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                {/* Top gradient line on hover (::before equivalent) */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, #64B557, transparent)" }}
                  aria-hidden="true"
                />
                {/* Hover border color */}
                <div
                  className="absolute inset-0 rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: "1px solid rgba(100,181,87,.22)", background: "rgba(255,255,255,.03)" }}
                  aria-hidden="true"
                />

                {/* Connector line to next card (desktop) */}
                {!isLast && (
                  <div
                    className="hidden md:block absolute h-px z-10"
                    style={{
                      top: "3.5rem",
                      left: "calc(100% - .5rem)",
                      width: "calc(100% - 2.5rem)",
                      background: "linear-gradient(90deg, rgba(100,181,87,.5), transparent)",
                    }}
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-7">
                    <span
                      className="font-[var(--font-orbitron)] text-[2.5rem] font-extrabold leading-none"
                      style={{ color: "rgba(100,181,87,.18)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[.6rem] uppercase tracking-[.17em] text-[#64B557] font-semibold">
                      {item.label}
                    </span>
                  </div>

                  <div
                    className="w-14 h-14 rounded-[.875rem] flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, #64B557 0%, #1a2f28 100%)" }}
                  >
                    {stepIcons[index]}
                  </div>

                  <h3 className="font-[var(--font-orbitron)] text-[1.4rem] font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,.52)] text-[.9375rem] leading-[1.65]">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quote */}
        <div
          ref={quote.ref}
          className={`rv${quote.visible ? " on" : ""} mt-16 text-center`}
        >
          <blockquote
            className="italic max-w-[44rem] mx-auto leading-[1.75]"
            style={{
              fontSize: "clamp(1.05rem,2.5vw,1.3rem)",
              color: "rgba(255,255,255,.65)",
            }}
            dangerouslySetInnerHTML={{ __html: `&ldquo;${t.technology.quote}&rdquo;` }}
          />
        </div>
      </div>
    </section>
  )
}

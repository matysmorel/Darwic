"use client"

import { useLanguage } from "@/context/language-context"
import { useReveal } from "@/hooks/use-reveal"

// SVG icons matching index.html exactly
const problemIcons = [
  // thermometer
  <svg key="therm" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#64B557" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
  </svg>,
  // warning triangle
  <svg key="warn" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#64B557" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>,
  // clock
  <svg key="clock" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#64B557" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>,
]

export function GapSection() {
  const { t } = useLanguage()

  const left  = useReveal<HTMLDivElement>()
  const right = useReveal<HTMLDivElement>()

  return (
    <section style={{ padding: "6rem 0", background: "#fff" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column */}
          <div
            ref={left.ref}
            className={`rv-l${left.visible ? " on" : ""}`}
          >
            <span className="block text-[.75rem] uppercase tracking-[.22em] text-[#64B557] font-semibold mb-4">
              {t.gap.eyebrow}
            </span>
            <h2
              className="font-[var(--font-orbitron)] mb-6"
              style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.15, color: "#091511" }}
              dangerouslySetInnerHTML={{
                __html: `${t.gap.heading1}<br/><span style="color:#64B557">${t.gap.heading2}</span>`,
              }}
            />
            <p className="text-[#4a5568] leading-[1.75] max-w-[32rem] mb-8">
              {t.gap.description}
            </p>

            <ul className="list-none flex flex-col gap-4" role="list">
              {t.gap.problems.map((problem, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 px-5 py-4 bg-[#F8F8F8] rounded-[.875rem] border-l-[3px] border-[#64B557] transition-[transform,box-shadow] duration-[250ms] hover:translate-x-[5px] hover:shadow-[0_4px_18px_rgba(9,21,17,.07)]"
                >
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-[.625rem] flex items-center justify-center"
                    style={{ background: "rgba(100,181,87,.12)" }}
                  >
                    {problemIcons[index]}
                  </span>
                  <span className="font-medium pt-[.3rem] leading-[1.5] text-[#091511]">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — stat box */}
          <div
            ref={right.ref}
            className={`rv-r${right.visible ? " on" : ""}`}
          >
            <div
              className="relative rounded-[1.5rem] text-center overflow-hidden"
              style={{
                padding: "4.5rem 2rem",
                background: "linear-gradient(135deg, #64B557 0%, #1a2f28 55%, #091511 100%)",
              }}
            >
              {/* Pseudo ::before */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  top: "-35%", right: "-15%", width: "55%", height: "60%",
                  background: "radial-gradient(circle, rgba(255,255,255,.12) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              {/* Pseudo ::after */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  bottom: "-25%", left: "-8%", width: "45%", height: "50%",
                  border: "2px solid rgba(255,255,255,.07)",
                }}
                aria-hidden="true"
              />

              <div
                className="font-[var(--font-orbitron)] font-extrabold text-white leading-none mb-3 relative z-10"
                style={{ fontSize: "clamp(3.5rem,8vw,5.5rem)" }}
              >
                $B+
              </div>
              <p className="relative z-10 text-[rgba(255,255,255,.72)] text-[1.0625rem]">
                {t.gap.statLabel}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

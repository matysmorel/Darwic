"use client"

import { useLanguage } from "@/context/language-context"
import { useReveal } from "@/hooks/use-reveal"

interface CTASectionProps {
  onNewsletterClick: () => void
}

export function CTASection({ onNewsletterClick }: CTASectionProps) {
  const { t } = useLanguage()

  const label       = useReveal<HTMLSpanElement>()
  const heading     = useReveal<HTMLHeadingElement>()
  const sub         = useReveal<HTMLParagraphElement>()
  const contactCard = useReveal<HTMLDivElement>()
  const btns        = useReveal<HTMLDivElement>()

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ padding: "7.5rem 0", background: "linear-gradient(135deg, #091511 0%, #1a2f28 100%)" }}
    >
      {/* Decorative radial gradients (::before / ::after) */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle at 72% 28%, rgba(100,181,87,.1) 0%, transparent 55%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[35%] h-[35%] pointer-events-none"
        style={{ background: "radial-gradient(circle at 28% 72%, rgba(100,181,87,.08) 0%, transparent 55%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-[52rem] mx-auto">

          <span
            ref={label.ref}
            className={`rv${label.visible ? " on" : ""} block text-[.75rem] uppercase tracking-[.22em] text-[#64B557] font-semibold mb-4`}
          >
            {t.cta.eyebrow}
          </span>

          <h2
            ref={heading.ref}
            className={`rv d1${heading.visible ? " on" : ""} font-[var(--font-orbitron)] text-white font-bold mb-6`}
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", lineHeight: 1.15 }}
          >
            {t.cta.heading1}
            <br />
            <span style={{ color: "#64B557" }}>{t.cta.heading2}</span>
          </h2>

          <p
            ref={sub.ref}
            className={`rv d2${sub.visible ? " on" : ""} text-[rgba(255,255,255,.62)] max-w-[36rem] mx-auto mb-10 leading-[1.75]`}
            style={{ fontSize: "1.125rem" }}
          >
            {t.cta.description}
          </p>

          {/* Contact card */}
          <div
            ref={contactCard.ref}
            className={`rv d3${contactCard.visible ? " on" : ""} max-w-[26rem] mx-auto mb-10 text-left rounded-[1.25rem] p-[1.75rem_2rem] transition-[background,border-color] duration-[250ms] hover:bg-[rgba(255,255,255,.09)] hover:border-[rgba(100,181,87,.22)]`}
            style={{
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          >
            <div className="flex items-center gap-4 mb-5">
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #64B557 0%, #1a2f28 100%)" }}
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white text-[1.0625rem]">Michael Rytíř</div>
                <div className="text-[#64B557] text-[.875rem]">{t.cta.businessLead}</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:michael@darwic.com"
                className="flex items-center gap-3 text-[rgba(255,255,255,.58)] text-[.9375rem] transition-colors duration-200 hover:text-[#64B557]"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                michael@darwic.com
              </a>
              <a
                href="https://www.linkedin.com/in/michael-rytir/"
                className="flex items-center gap-3 text-[rgba(255,255,255,.58)] text-[.9375rem] transition-colors duration-200 hover:text-[#64B557]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div
            ref={btns.ref}
            className={`rv d4${btns.visible ? " on" : ""} flex flex-col sm:flex-row items-center justify-center gap-4`}
          >
            {/* btn-w (white button) */}
            <a
              href="mailto:michael@darwic.com"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#091511] font-semibold text-[.9375rem] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(255,255,255,.2)]"
              style={{ padding: ".875rem 2.25rem" }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#091511" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {t.cta.contactUs}
            </a>

            {/* btn-olg (green outline button) */}
            <button
              onClick={onNewsletterClick}
              className="inline-flex items-center justify-center rounded-full font-semibold text-[.9375rem] text-[#64B557] transition-[background,color,transform] duration-200 hover:bg-[#64B557] hover:text-white hover:-translate-y-0.5 focus:outline-none"
              style={{
                padding: ".875rem 2.25rem",
                border: "2px solid #64B557",
                background: "transparent",
              }}
              type="button"
            >
              {t.cta.subscribe}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

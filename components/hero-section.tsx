"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/context/language-context"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const accRef = useRef<HTMLSpanElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Unmask "Accelerated" after a short delay
      setTimeout(() => {
        accRef.current?.classList.add("unmasked")
      }, 300)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="relative min-h-svh flex items-center justify-center pt-[4.5rem] overflow-hidden"
      style={{ background: "#091511" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,181,87,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100,181,87,.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Ambient blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          width: 480,
          height: 480,
          background: "rgba(100,181,87,.09)",
          top: "5%",
          left: "-8%",
          filter: "blur(72px)",
          animation: "hero-float1 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          width: 360,
          height: 360,
          background: "rgba(26,47,40,.7)",
          bottom: "10%",
          right: "2%",
          filter: "blur(72px)",
          animation: "hero-float2 17s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          width: 240,
          height: 240,
          background: "rgba(100,181,87,.06)",
          top: "45%",
          left: "28%",
          filter: "blur(72px)",
          animation: "hero-float1 20s ease-in-out infinite reverse",
        }}
      />

      {/* DNA Helix */}
      <div className="hero-dna" aria-hidden="true">
        <svg
          viewBox="0 0 200 460"
          width="200"
          height="460"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <defs>
            <radialGradient id="ng1" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#91d483" />
              <stop offset="100%" stopColor="#091511" />
            </radialGradient>
            <radialGradient id="ng2" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#64B557" />
              <stop offset="100%" stopColor="#1a2f28" />
            </radialGradient>
            <linearGradient id="stemG" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64B557" stopOpacity=".7" />
              <stop offset="100%" stopColor="#091511" stopOpacity=".2" />
            </linearGradient>
          </defs>

          {/* Spine */}
          <line x1="100" y1="18" x2="100" y2="445" stroke="url(#stemG)" strokeWidth="1.5" opacity=".35" />

          <circle className="dna-n" cx="100" cy="24" r="4"  fill="url(#ng2)" opacity=".5" />
          <circle className="dna-n" cx="88"  cy="36" r="3.5" fill="url(#ng2)" opacity=".4" />

          <circle className="dna-n" cx="70"  cy="60"  r="8"  fill="url(#ng1)" />
          <circle className="dna-n" cx="138" cy="60"  r="6"  fill="url(#ng2)" opacity=".75" />
          <line x1="70" y1="60" x2="138" y2="60" stroke="#64B557" strokeWidth="2.5" opacity=".45" />

          <circle className="dna-n" cx="52"  cy="100" r="11" fill="url(#ng1)" />
          <circle className="dna-n" cx="150" cy="100" r="5"  fill="url(#ng2)" opacity=".8" />
          <line x1="52" y1="100" x2="150" y2="100" stroke="#64B557" strokeWidth="2" opacity=".38" />

          <circle className="dna-n" cx="36"  cy="145" r="13" fill="url(#ng1)" />
          <circle className="dna-n" cx="162" cy="145" r="8"  fill="url(#ng2)" />
          <line x1="36" y1="145" x2="162" y2="145" stroke="#64B557" strokeWidth="3" opacity=".55" />

          <circle className="dna-n" cx="50"  cy="190" r="9"  fill="url(#ng2)" />
          <circle className="dna-n" cx="155" cy="190" r="6"  fill="url(#ng1)" opacity=".8" />
          <line x1="50" y1="190" x2="155" y2="190" stroke="#64B557" strokeWidth="2" opacity=".38" />

          <circle className="dna-n" cx="68"  cy="230" r="7"  fill="url(#ng2)" opacity=".9" />
          <circle className="dna-n" cx="142" cy="230" r="11" fill="url(#ng1)" />
          <line x1="68" y1="230" x2="142" y2="230" stroke="#64B557" strokeWidth="2.5" opacity=".48" />

          <circle className="dna-n" cx="48"  cy="272" r="10" fill="url(#ng1)" />
          <circle className="dna-n" cx="156" cy="272" r="6"  fill="url(#ng2)" opacity=".7" />
          <line x1="48" y1="272" x2="156" y2="272" stroke="#64B557" strokeWidth="2.5" opacity=".48" />

          <circle className="dna-n" cx="34"  cy="315" r="13" fill="url(#ng1)" />
          <circle className="dna-n" cx="164" cy="315" r="7"  fill="url(#ng2)" />
          <line x1="34" y1="315" x2="164" y2="315" stroke="#64B557" strokeWidth="3" opacity=".55" />

          <circle className="dna-n" cx="52"  cy="357" r="9"  fill="url(#ng2)" opacity=".82" />
          <circle className="dna-n" cx="150" cy="357" r="5.5" fill="url(#ng1)" opacity=".72" />
          <line x1="52" y1="357" x2="150" y2="357" stroke="#64B557" strokeWidth="2" opacity=".38" />

          <circle className="dna-n" cx="72"  cy="397" r="7"  fill="url(#ng2)" opacity=".6" />
          <circle className="dna-n" cx="136" cy="397" r="5"  fill="url(#ng2)" opacity=".5" />

          <circle className="dna-n" cx="92"  cy="428" r="5"  fill="url(#ng2)" opacity=".4" />
          <circle className="dna-n" cx="108" cy="444" r="3.5" fill="url(#ng2)" opacity=".3" />
        </svg>
      </div>

      {/* Hero body */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="text-center max-w-[54rem] mx-auto">

          {/* Badge */}
          <p
            className="text-xs uppercase tracking-[.22em] font-semibold mb-6"
            style={{
              color: "#64B557",
              opacity: 0,
              animation: isVisible ? "hero-fade-up .7s cubic-bezier(.22,1,.36,1) .3s forwards" : "none",
            }}
          >
            {t.hero.badge}
          </p>

          {/* H1 */}
          <h1
            className="font-[var(--font-orbitron)] font-extrabold text-white leading-[1.08] mb-6 tracking-tight"
            style={{
              fontSize: "clamp(2.4rem,7vw,5.25rem)",
              opacity: 0,
              animation: isVisible ? "hero-fade-up .75s cubic-bezier(.22,1,.36,1) .5s forwards" : "none",
            }}
          >
            <span className="inline-block mr-[.2em]">{t.hero.word1}</span>
            {/* "Accelerated" with mask reveal */}
            <span
              ref={accRef}
              className="inline-block relative acc-word"
              style={{
                background: "linear-gradient(135deg, #64B557 0%, #91d483 45%, #64B557 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.hero.word2}
            </span>
          </h1>

          {/* Animated underline */}
          <span
            className="block h-[3px] rounded-full mx-auto mb-8"
            style={{
              background: "linear-gradient(90deg, #64B557, #1a2f28)",
              opacity: 0,
              animation: isVisible ? "hero-line-grow 1s cubic-bezier(.22,1,.36,1) 1.3s forwards" : "none",
            }}
            aria-hidden="true"
          />

          {/* Subtitle */}
          <p
            className="max-w-[38rem] mx-auto mb-10 leading-[1.75]"
            style={{
              fontSize: "clamp(1rem,2vw,1.2rem)",
              color: "rgba(255,255,255,.62)",
              opacity: 0,
              animation: isVisible ? "hero-fade-up .7s cubic-bezier(.22,1,.36,1) .9s forwards" : "none",
            }}
          >
            {t.hero.description}
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: 0,
              animation: isVisible ? "hero-fade-up .7s cubic-bezier(.22,1,.36,1) 1.1s forwards" : "none",
            }}
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-9 py-3.5 text-[.9375rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(100,181,87,.4)]"
              style={{
                background: "linear-gradient(135deg, #64B557 0%, #4d9442 100%)",
              }}
            >
              {t.hero.cta}
            </Link>
            <Link
              href="#why"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-9 py-3.5 text-[.9375rem] font-semibold text-white border-2 transition-all hover:-translate-y-0.5 hover:border-[#64B557] hover:bg-[rgba(100,181,87,.1)]"
              style={{ borderColor: "rgba(255,255,255,.3)" }}
            >
              {t.hero.learnMore}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
        style={{
          opacity: 0,
          animation: isVisible ? "hero-fade-in 1s ease 2.2s forwards" : "none",
        }}
      >
        <span
          className="text-[.65rem] uppercase tracking-[.18em]"
          style={{ color: "rgba(255,255,255,.35)" }}
        >
          {t.hero.scroll}
        </span>
        <div
          className="w-5 h-5 border-r-2 border-b-2 rotate-45"
          style={{
            borderColor: "rgba(100,181,87,.55)",
            animation: "hero-bob 1.6s ease-in-out infinite",
          }}
        />
      </div>

      {/* DNA node animation styles */}
      <style>{`
        .dna-n { animation: dna-bob 3.5s ease-in-out infinite; }
        .dna-n:nth-child(3n+1) { animation-duration: 4s;   animation-delay: .4s; }
        .dna-n:nth-child(3n+2) { animation-duration: 4.7s; animation-delay: .9s; }
        .dna-n:nth-child(3n)   { animation-duration: 5.2s; animation-delay: .2s; }

        .acc-word::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #091511;
          transform: scaleX(1);
          transform-origin: right;
          transition: transform 1.1s cubic-bezier(.22,1,.36,1) .3s;
        }
        .acc-word.unmasked::after { transform: scaleX(0); }
      `}</style>
    </section>
  )
}

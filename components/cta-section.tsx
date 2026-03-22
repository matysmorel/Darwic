"use client"

import Link from "next/link"
import { Mail, Linkedin, User } from "lucide-react"

interface CTASectionProps {
  onNewsletterClick: () => void
}

export function CTASection({ onNewsletterClick }: CTASectionProps) {
  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #091511 0%, #1a2f28 100%)',
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #64B557 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10"
        style={{
          background: 'radial-gradient(circle at 30% 70%, #64B557 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#64B557] font-medium mb-4">
          Contact
        </p>
        <h2 className="font-[var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          Stop Fighting Biology.{" "}
          <span className="text-[#64B557]">Start Engineering It.</span>
        </h2>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Let&apos;s talk about how we can stabilize your most critical enzymes.
        </p>

        {/* Contact Person Card */}
        <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 max-w-md mx-auto mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
              }}
            >
              <User className="w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-white text-lg">Michael Rytíř</h3>
              <p className="text-[#64B557] text-sm">Business Lead</p>
            </div>
          </div>
          <div className="space-y-3">
            <a 
              href="mailto:michael@darwic.com"
              className="flex items-center gap-3 text-white/70 hover:text-[#64B557] transition-colors"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span>michael@darwic.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/michael-rytir/"
              className="flex items-center gap-3 text-white/70 hover:text-[#64B557] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="mailto:michael@darwic.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-medium text-[#091511] bg-white hover:bg-white/90 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#091511]"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            Contact Us
          </Link>
          <button
            onClick={onNewsletterClick}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-[#64B557] px-8 py-3 text-base font-medium text-[#64B557] hover:bg-[#64B557] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#64B557] focus:ring-offset-2 focus:ring-offset-[#091511]"
            type="button"
          >
            Subscribe to Updates
          </button>
        </div>

        
      </div>
    </section>
  )
}

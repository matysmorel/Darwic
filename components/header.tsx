"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { lang, t, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#why", label: t.header.navWhy },
    { href: "#technology", label: t.header.navTechnology },
    { href: "#about", label: t.header.navAbout },
    { href: "#contact", label: t.header.navContact },
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "bg-white/80 backdrop-blur-[14px] [backdrop-filter:blur(14px)_saturate(180%)]",
        "border-b border-[rgba(226,232,240,.5)]",
        "transition-[background,box-shadow] duration-300",
        isScrolled ? "bg-white/[.96] shadow-[0_2px_24px_rgba(9,21,17,.08)]" : "",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="flex h-[4.5rem] items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <div className="relative h-[2.4rem] w-[140px]">
              <Image
                src="/images/logo-darwic.png"
                alt="Darwic"
                fill
                sizes="140px"
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[.875rem] font-medium text-[#4a5568] hover:text-[#091511] transition-colors duration-200"
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className="absolute bottom-[-3px] left-0 right-0 h-[2px] rounded-full bg-[#64B557] scale-x-0 origin-left transition-transform duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Toggle (desktop) */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-[.2rem] rounded-full border-2 border-[rgba(100,181,87,.4)] px-[.85rem] py-[.35rem] cursor-pointer font-[inherit] transition-[border-color,background] duration-200 hover:border-[#64B557] hover:bg-[rgba(100,181,87,.08)] focus:outline-none focus:ring-2 focus:ring-[#64B557]"
              aria-label="Toggle language"
            >
              <span className={`text-[.75rem] font-bold leading-none transition-colors ${lang === "en" ? "text-[#64B557]" : "text-[#4a5568]"}`}>
                EN
              </span>
              <span className="text-[.75rem] text-[rgba(100,181,87,.45)] mx-[.15rem] leading-none">|</span>
              <span className={`text-[.75rem] font-bold leading-none transition-colors ${lang === "cs" ? "text-[#64B557]" : "text-[#4a5568]"}`}>
                CS
              </span>
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex rounded-full bg-[#64B557] px-5 py-2 text-[.875rem] font-semibold text-white border-none cursor-pointer transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(100,181,87,.35)]"
            >
              {t.header.cta}
            </a>

            {/* Mobile Burger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col gap-[5px] bg-none bg-transparent border-none cursor-pointer p-2"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? t.header.closeMenu : t.header.openMenu}
            >
              <span
                className="block w-6 h-[2px] bg-[#091511] rounded-[2px] transition-transform duration-300"
                style={isMobileMenuOpen ? { transform: "translateY(7px) rotate(45deg)" } : undefined}
              />
              <span
                className="block w-6 h-[2px] bg-[#091511] rounded-[2px] transition-opacity duration-300"
                style={isMobileMenuOpen ? { opacity: 0 } : undefined}
              />
              <span
                className="block w-6 h-[2px] bg-[#091511] rounded-[2px] transition-transform duration-300"
                style={isMobileMenuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : undefined}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`md:hidden flex-col bg-white/[.97] backdrop-blur-[14px] border-t border-[#e2e8f0] px-4 py-4 ${isMobileMenuOpen ? "flex" : "hidden"}`}
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobileMenu}
            className="px-4 py-[.875rem] font-medium rounded-[.75rem] transition-[background,color] duration-200 hover:bg-[#F8F8F8] hover:text-[#64B557]"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMobileMenu}
          className="mx-2 mt-2 text-center bg-[#64B557] text-white rounded-full py-[.875rem] font-semibold"
        >
          {t.header.cta}
        </a>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-[.2rem] mx-2 mt-2 rounded-full border-2 border-[rgba(100,181,87,.4)] px-[1.1rem] py-[.6rem] cursor-pointer font-[inherit] transition-[border-color,background] duration-200 hover:border-[#64B557] hover:bg-[rgba(100,181,87,.08)] w-fit"
          aria-label="Toggle language"
        >
          <span className={`text-[.75rem] font-bold leading-none ${lang === "en" ? "text-[#64B557]" : "text-[#4a5568]"}`}>EN</span>
          <span className="text-[.75rem] text-[rgba(100,181,87,.45)] mx-[.15rem] leading-none">|</span>
          <span className={`text-[.75rem] font-bold leading-none ${lang === "cs" ? "text-[#64B557]" : "text-[#4a5568]"}`}>CS</span>
        </button>
      </nav>
    </header>
  )
}

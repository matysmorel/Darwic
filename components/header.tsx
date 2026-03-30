"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, t, toggleLanguage } = useLanguage()

  const navLinks = [
    { href: "#why", label: t.header.navWhy },
    { href: "#technology", label: t.header.navTechnology },
    { href: "#about", label: t.header.navAbout },
    { href: "#contact", label: t.header.navContact },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-[140px]">
              <Image
                src="/images/logo-darwic.png"
                alt="Darwic Logo"
                fill
                sizes="140px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-0.5 rounded-full border-2 border-[#64B557]/40 bg-[#64B557]/5 px-3 py-1.5 text-xs font-semibold transition-colors hover:border-[#64B557] hover:bg-[#64B557]/10 focus:outline-none focus:ring-2 focus:ring-[#64B557]"
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-[#64B557]" : "text-muted-foreground"}>
                EN
              </span>
              <span className="mx-1 text-[#64B557]/40">|</span>
              <span className={lang === "cs" ? "text-[#64B557]" : "text-muted-foreground"}>
                CS
              </span>
            </button>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="hidden md:inline-flex rounded-full bg-[#64B557] px-4 py-2 text-sm font-medium text-white hover:bg-[#64B557]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#64B557] focus:ring-offset-2"
            >
              {t.header.cta}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-[#64B557]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? t.header.closeMenu : t.header.openMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-4 space-y-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#64B557]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={closeMobileMenu}
            className="block mx-4 mt-4 text-center rounded-full bg-[#64B557] px-4 py-3 text-base font-medium text-white hover:bg-[#64B557]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#64B557] focus:ring-offset-2"
          >
            {t.header.cta}
          </Link>
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 mx-4 mt-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-[#64B557] focus:outline-none focus:ring-2 focus:ring-[#64B557]"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-[#64B557] font-bold" : "text-muted-foreground"}>
              EN
            </span>
            <span className="text-muted-foreground mx-1">|</span>
            <span className={lang === "cs" ? "text-[#64B557] font-bold" : "text-muted-foreground"}>
              CS
            </span>
          </button>
        </nav>
      </div>
    </header>
  )
}

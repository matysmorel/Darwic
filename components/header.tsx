"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#why", label: "Why Darwic" },
    { href: "#technology", label: "Technology" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
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
          
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="hidden md:inline-flex rounded-full bg-[#64B557] px-4 py-2 text-sm font-medium text-white hover:bg-[#64B557]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#64B557] focus:ring-offset-2"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-[#64B557]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
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
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}

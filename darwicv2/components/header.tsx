"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-darwic.png"
              alt="Darwic Logo"
              width={140}
              height={40}
              className="h-8 sm:h-10"
              style={{ width: 'auto', height: 'auto', maxHeight: '2.5rem' }}
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link 
              href="#why" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Darwic
            </Link>
            <Link 
              href="#technology" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Technology
            </Link>
            <Link 
              href="#markets" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Markets
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          
          <Link
            href="#contact"
            className="rounded-full bg-[#64B557] px-4 py-2 text-sm font-medium text-white hover:bg-[#64B557]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#64B557] focus:ring-offset-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

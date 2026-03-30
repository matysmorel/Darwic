"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 bg-[#F8F8F8] border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-[120px]">
              <Image
                src="/images/logo-darwic.png"
                alt="Darwic Logo"
                fill
                sizes="120px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          <nav className="flex items-center gap-8" aria-label="Footer navigation">
            <Link
              href="#why"
              className="text-sm text-muted-foreground hover:text-[#64B557] transition-colors"
            >
              {t.footer.navWhy}
            </Link>
            <Link
              href="#technology"
              className="text-sm text-muted-foreground hover:text-[#64B557] transition-colors"
            >
              {t.footer.navTechnology}
            </Link>
            <Link
              href="#markets"
              className="text-sm text-muted-foreground hover:text-[#64B557] transition-colors"
            >
              {t.footer.navMarkets}
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-[#64B557] transition-colors"
            >
              {t.footer.navContact}
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Darwic. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

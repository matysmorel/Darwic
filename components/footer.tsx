"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="border-t border-[#e2e8f0]"
      style={{ padding: "3rem 0", background: "#F8F8F8" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <a href="#home" className="flex-shrink-0">
            <div className="relative h-[2rem] w-[120px]">
              <Image
                src="/images/logo-darwic.png"
                alt="Darwic"
                fill
                sizes="120px"
                className="object-contain object-left"
              />
            </div>
          </a>

          <nav
            className="flex items-center gap-8 flex-wrap justify-center"
            aria-label="Footer"
          >
            <a href="#why"        className="text-[.875rem] text-[#4a5568] transition-colors duration-200 hover:text-[#64B557]">{t.footer.navWhy}</a>
            <a href="#technology" className="text-[.875rem] text-[#4a5568] transition-colors duration-200 hover:text-[#64B557]">{t.footer.navTechnology}</a>
            <a href="#about"      className="text-[.875rem] text-[#4a5568] transition-colors duration-200 hover:text-[#64B557]">{t.footer.navAbout}</a>
            <a href="#contact"    className="text-[.875rem] text-[#4a5568] transition-colors duration-200 hover:text-[#64B557]">{t.footer.navContact}</a>
          </nav>

          <p className="text-[.875rem] text-[#4a5568]">
            © 2025 Darwic. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

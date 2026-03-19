"use client"

import { useState, useEffect, useCallback } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { GapSection } from "@/components/gap-section"
import { TechnologySection } from "@/components/technology-section"
import { AboutSection } from "@/components/about-section"
import { IPSection } from "@/components/ip-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { NewsletterPopup } from "@/components/newsletter-popup"

export default function HomePage() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)
  const [hasShownAutoPopup, setHasShownAutoPopup] = useState(false)

  // Auto-show popup after 30 seconds
  useEffect(() => {
    if (hasShownAutoPopup) return

    const timer = setTimeout(() => {
      // Only show if user hasn't already interacted with the popup
      if (!hasShownAutoPopup) {
        setIsNewsletterOpen(true)
        setHasShownAutoPopup(true)
      }
    }, 30000) // 30 seconds

    return () => clearTimeout(timer)
  }, [hasShownAutoPopup])

  const openNewsletter = useCallback(() => {
    setIsNewsletterOpen(true)
    setHasShownAutoPopup(true) // Prevent auto-popup if user manually opened
  }, [])

  const closeNewsletter = useCallback(() => {
    setIsNewsletterOpen(false)
  }, [])

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <GapSection />
        <TechnologySection />
        <AboutSection />
        <IPSection />
        <CTASection onNewsletterClick={openNewsletter} />
      </main>
      <Footer />
      <NewsletterPopup isOpen={isNewsletterOpen} onClose={closeNewsletter} />
    </>
  )
}

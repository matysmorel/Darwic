"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations, Language } from "@/lib/translations"

interface LanguageContextType {
  lang: Language
  t: typeof translations.en
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: translations.en,
  toggleLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("darwic-lang") as Language | null
    if (saved === "en" || saved === "cs") {
      setLang(saved)
    }
  }, [])

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === "en" ? "cs" : "en"
      localStorage.setItem("darwic-lang", next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

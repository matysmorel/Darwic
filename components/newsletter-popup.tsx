"use client"

import { useState, useEffect, useRef } from "react"
import { X, Mail, User, Loader2, CheckCircle } from "lucide-react"

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const dialogRef = useRef<HTMLDialogElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      dialog.showModal()
      // Focus first input after animation
      setTimeout(() => {
        firstInputRef.current?.focus()
      }, 100)
    } else {
      dialog.close()
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xlgpojyw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
          // Reset form after close
          setTimeout(() => {
            setName("")
            setEmail("")
            setIsSuccess(false)
          }, 300)
        }, 2000)
      } else {
        throw new Error("Submission failed")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-auto w-full max-w-md rounded-2xl bg-transparent p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      aria-labelledby="newsletter-title"
      aria-describedby="newsletter-description"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Gradient accent top */}
        <div 
          className="h-1.5"
          style={{
            background: 'linear-gradient(90deg, #64B557 0%, #091511 100%)',
          }}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-6 rounded-full p-2 text-muted-foreground hover:bg-[#F8F8F8] hover:text-[#091511] transition-colors focus:outline-none focus:ring-2 focus:ring-[#64B557]"
          aria-label="Close newsletter popup"
          type="button"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div 
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
                }}
              >
                <CheckCircle className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-[#091511] mb-2">
                Welcome Aboard!
              </h3>
              <p className="text-muted-foreground">
                You&apos;re now part of the evolution. We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div 
                  className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
                  }}
                >
                  <Mail className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h2 
                  id="newsletter-title" 
                  className="font-[var(--font-orbitron)] text-2xl font-bold text-[#091511] mb-2"
                >
                  Stay in the Loop
                </h2>
                <p id="newsletter-description" className="text-muted-foreground text-sm">
                  Get exclusive updates on our biotech breakthroughs, funding milestones, and partnership opportunities.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-name" className="sr-only">
                    Your name
                  </label>
                  <div className="relative">
                    <User 
                      className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" 
                      aria-hidden="true" 
                    />
                    <input
                      ref={firstInputRef}
                      type="text"
                      id="newsletter-name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-border bg-[#F8F8F8] py-3 pl-12 pr-4 text-[#091511] placeholder:text-muted-foreground focus:border-[#64B557] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#64B557]/20 transition-all"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail 
                      className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" 
                      aria-hidden="true" 
                    />
                    <input
                      type="email"
                      id="newsletter-email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-xl border border-border bg-[#F8F8F8] py-3 pl-12 pr-4 text-[#091511] placeholder:text-muted-foreground focus:border-[#64B557] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#64B557]/20 transition-all"
                      aria-required="true"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-500" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl py-3 px-6 text-base font-medium text-white transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#64B557] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      <span>Subscribing...</span>
                    </span>
                  ) : (
                    "Subscribe to Newsletter"
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          )}
        </div>
      </div>
    </dialog>
  )
}

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Gradient background accent */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
        }}
        aria-hidden="true"
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#64B557] font-medium mb-6">
            Biotech Platform
          </p>
          
          <h1 className="font-[var(--font-orbitron)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#091511] mb-6 tracking-tight text-balance">
            Evolution,{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
              }}
            >
              Accelerated.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            We take the reins of evolution where nature stops. A new era of engineered biology begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#64B557] focus:ring-offset-2"
              style={{
                background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
              }}
            >
              Partner With Us
            </Link>
            <Link
              href="#why"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-[#091511] px-8 py-3 text-base font-medium text-[#091511] hover:bg-[#091511] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#091511] focus:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #64B557, transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}

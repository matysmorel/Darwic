import { Shield, Lock, Database } from "lucide-react"

export function IPSection() {
  const moats = [
    {
      icon: Shield,
      title: "Patents",
      description: "Filed patents on unique enzyme sequences that define our competitive edge.",
    },
    {
      icon: Lock,
      title: "Methodology",
      description: "Protected 'forging' process — the way we engineer enzymes is proprietary IP.",
    },
    {
      icon: Database,
      title: "Data Library",
      description: "Millions of tested variants in our database — our most valuable asset.",
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#64B557] font-medium mb-4">
              The Moat
            </p>
            <h2 className="font-[var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#091511] mb-6 text-balance">
              Proprietary Intelligence{" "}
              <span className="text-[#64B557]">& Legal Shield</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Our IP strategy ensures you won&apos;t be copied by a corporate giant tomorrow.
            </p>

            <ul className="space-y-6" role="list">
              {moats.map((moat, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
                    }}
                  >
                    <moat.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-orbitron)] text-lg font-semibold text-[#091511] mb-1">
                      {moat.title}
                    </h3>
                    <p className="text-muted-foreground">{moat.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div 
                className="rounded-2xl p-6 h-40"
                style={{
                  background: 'linear-gradient(180deg, #64B557 0%, #4a9043 100%)',
                }}
              >
                <p className="text-white/80 text-sm mb-2">Revenue Model</p>
                <p className="font-[var(--font-orbitron)] text-3xl font-bold text-white">85%+</p>
                <p className="text-white/70 text-sm">License margins</p>
              </div>
              <div className="rounded-2xl p-6 bg-[#F8F8F8]">
                <p className="text-muted-foreground text-sm mb-2">Upfront Fees</p>
                <p className="font-[var(--font-orbitron)] text-2xl font-bold text-[#091511]">$200K-1M</p>
                <p className="text-muted-foreground text-sm">Per project</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl p-6 bg-[#F8F8F8]">
                <p className="text-muted-foreground text-sm mb-2">Licensing Royalties</p>
                <p className="font-[var(--font-orbitron)] text-2xl font-bold text-[#64B557]">2-5%</p>
                <p className="text-muted-foreground text-sm">Per ton manufactured</p>
              </div>
              <div 
                className="rounded-2xl p-6 h-40"
                style={{
                  background: 'linear-gradient(180deg, #091511 0%, #1a2f28 100%)',
                }}
              >
                <p className="text-white/80 text-sm mb-2">Seed Round</p>
                <p className="font-[var(--font-orbitron)] text-3xl font-bold text-white">$2.5M</p>
                <p className="text-white/70 text-sm">Closing Q2 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

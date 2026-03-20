import { AlertTriangle, Thermometer, Clock } from "lucide-react"

export function GapSection() {
  const problems = [
    {
      icon: Thermometer,
      text: "Thermal instability causes production shutdowns",
    },
    {
      icon: AlertTriangle,
      text: "pH sensitivity limits process conditions",
    },
    {
      icon: Clock,
      text: "Short enzyme lifespan drives up costs",
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#64B557] font-medium mb-4">
              The Gap
            </p>
            <h2 className="font-[var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#091511] mb-6 text-balance">
              Nature is Slow.{" "}
              <span className="text-[#64B557]">Industry is Demanding.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Industrial processes, drug manufacturing, plastic degradation, are hitting their limits. Natural enzymes are fragile, unstable, and expensive to maintain.
            </p>

            <ul className="space-y-4" role="list">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#64B557]/10 flex items-center justify-center">
                    <problem.icon className="w-5 h-5 text-[#64B557]" aria-hidden="true" />
                  </div>
                  <span className="text-[#091511] font-medium pt-2">{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div 
              className="rounded-3xl p-12 text-center"
              style={{
                background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
              }}
            >
              <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-2">$B+</p>
              <p className="text-white/80 text-lg">
                Lost annually due to enzyme thermal instability
              </p>
            </div>
            {/* Decorative elements */}
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{
                background: 'linear-gradient(135deg, #64B557 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
            <div 
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20"
              style={{
                background: 'linear-gradient(135deg, #091511 0%, transparent 100%)',
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

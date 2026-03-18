import { Pill, Recycle, Leaf } from "lucide-react"

export function MarketsSection() {
  const markets = [
    {
      icon: Pill,
      category: "PHARMA",
      title: "Cleaner Drug Synthesis",
      description: "Enzymes that enable more efficient, sustainable pharmaceutical manufacturing with fewer byproducts.",
      marketPotential: "$4.2B",
    },
    {
      icon: Recycle,
      category: "WASTE MGMT",
      title: "Plastic-Eating Enzymes",
      description: "Real-time biodegradation of plastics using engineered enzymes that work in industrial conditions.",
      marketPotential: "$2.8B",
    },
    {
      icon: Leaf,
      category: "FOOD TECH",
      title: "Stable Catalysts",
      description: "Heat-stable enzymes for plant-based food production and alternative protein processing.",
      marketPotential: "$3.1B",
    },
  ]

  return (
    <section id="markets" className="py-24 sm:py-32 bg-[#F8F8F8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#64B557] font-medium mb-4">
            Case Studies
          </p>
          <h2 className="font-[var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#091511] mb-6 text-balance">
            Multidisciplinary{" "}
            <span className="text-[#64B557]">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Where Darwic changes the game across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="h-2"
                style={{
                  background: 'linear-gradient(90deg, #64B557 0%, #091511 100%)',
                }}
                aria-hidden="true"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #64B557 0%, #091511 100%)',
                    }}
                  >
                    <market.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#64B557] font-semibold">
                    {market.category}
                  </span>
                </div>
                
                <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-[#091511] mb-3">
                  {market.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {market.description}
                </p>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">Market potential</p>
                  <p className="font-[var(--font-orbitron)] text-3xl font-bold text-[#64B557]">
                    {market.marketPotential}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market size overview */}
        <div className="mt-16 rounded-2xl p-8 sm:p-12 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total Enzyme Market (TAM)</p>
              <p className="font-[var(--font-orbitron)] text-4xl font-bold text-[#091511]">$12B</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Specialized Enzymes (SAM)</p>
              <p className="font-[var(--font-orbitron)] text-4xl font-bold text-[#64B557]">$3.5B</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">5-Year Ambition (SOM)</p>
              <p className="font-[var(--font-orbitron)] text-4xl font-bold text-[#091511]">$120M</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6">
            Growing at 8% CAGR — A $12B Opportunity
          </p>
        </div>
      </div>
    </section>
  )
}

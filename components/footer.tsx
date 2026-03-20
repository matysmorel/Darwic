import Image from "next/image"
import Link from "next/link"

export function Footer() {
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
              Why Darwic
            </Link>
            <Link 
              href="#technology" 
              className="text-sm text-muted-foreground hover:text-[#64B557] transition-colors"
            >
              Technology
            </Link>
            <Link 
              href="#markets" 
              className="text-sm text-muted-foreground hover:text-[#64B557] transition-colors"
            >
              Markets
            </Link>
            <Link 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-[#64B557] transition-colors"
            >
              Contact
            </Link>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Darwic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

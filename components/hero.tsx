import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-event.jpg"
          alt="Beautifully decorated event venue by Viable Events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center md:py-40">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-secondary/80">
          Nairobi, Kenya
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-secondary md:text-6xl lg:text-7xl xl:text-8xl text-balance">
          Creating Unforgettable
          <br />
          <span className="italic font-light">Experiences</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary/80 md:text-xl">
          We transform ordinary gatherings into extraordinary, memorable events.
          From concept to execution, every detail reflects your vision.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base"
          >
            <Link href="/contact">
              Start Planning Your Event
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-secondary/30 bg-transparent px-8 text-base text-secondary hover:bg-secondary/10 hover:text-secondary"
          >
            <Link href="/gallery">View Our Work</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-secondary/60">Scroll</span>
          <div className="h-12 w-px bg-secondary/30" />
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Palette, Armchair, CalendarCheck, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Palette,
    title: "Event Decoration",
    description:
      "Customized decorative designs tailored to meet each client's vision. From concept creation to final execution, we create visually stunning setups.",
    image: "/images/wedding.jpg",
    imageAlt: "Beautiful wedding ceremony decoration",
  },
  {
    icon: Armchair,
    title: "Equipment Rentals",
    description:
      "High-quality chairs, tables, canopies, lighting systems, sound equipment, and stage setups available for all types of events.",
    image: "/images/corporate.jpg",
    imageAlt: "Corporate event with professional equipment setup",
  },
  {
    icon: CalendarCheck,
    title: "Full Event Planning",
    description:
      "End-to-end event management from concept to completion. Our team works closely with you to ensure every detail is perfect.",
    image: "/images/birthday.jpg",
    imageAlt: "Birthday celebration with complete event planning",
  },
  {
    icon: Mic,
    title: "Professional Coordination",
    description:
      "Seamless on-the-day coordination ensuring your event runs smoothly. We handle logistics so you can enjoy every moment.",
    image: "/images/gallery-2.jpg",
    imageAlt: "Event stage with professional coordination",
  },
]

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Our Services
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From intimate celebrations to large-scale events, we provide comprehensive
            solutions that bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/30 transition-opacity group-hover:bg-foreground/20" />
                <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-accent">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="absolute top-4 right-4 text-sm font-medium text-secondary/80 tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-8">
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
            <Link href="/contact">
              Discuss Your Event
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

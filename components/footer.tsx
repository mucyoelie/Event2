import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = [
  {
    heading: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Event Decoration", href: "/services" },
      { label: "Equipment Rentals", href: "/services" },
      { label: "Event Planning", href: "/services" },
      { label: "Coordination", href: "/services" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Viable
              </span>
              <span className="font-serif text-2xl font-light italic text-accent">
                Events
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm mb-6">
              Creating unforgettable experiences in Nairobi, Kenya. We transform ordinary
              gatherings into extraordinary events with precision, beauty, and flawless execution.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-border pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Viable Events. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Nairobi, Kenya &mdash; Creating Unforgettable Experiences
          </p>
        </div>
      </div>
    </footer>
  )
}

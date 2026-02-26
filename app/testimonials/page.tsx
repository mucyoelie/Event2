import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Testimonials | Viable Events",
  description:
    "Read what our clients say about their experience working with Viable Events. 98% client satisfaction across 500+ events delivered.",
}

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <Testimonials />
    </main>
  )
}

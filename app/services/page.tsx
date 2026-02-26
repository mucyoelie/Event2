import type { Metadata } from "next"
import { Services } from "@/components/services"

export const metadata: Metadata = {
  title: "Our Services | Viable Events",
  description:
    "From event decoration and equipment rentals to full event planning and professional coordination, we provide comprehensive solutions for your events.",
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Services />
    </main>
  )
}

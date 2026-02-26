import type { Metadata } from "next"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact Us | Viable Events",
  description:
    "Get in touch with Viable Events to start planning your event. We would love to hear about your vision and bring it to life.",
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  )
}

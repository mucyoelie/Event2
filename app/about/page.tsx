import type { Metadata } from "next"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"

export const metadata: Metadata = {
  title: "About Us | Viable Events",
  description:
    "Learn about Viable Events, a dynamic event decoration and planning company based in Nairobi, Kenya, founded with a passion for excellence.",
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <About />
      <Stats />
    </main>
  )
}

import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Testimonials } from "@/components/testimonials"
export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
       <About />
      <Services />
      <Gallery />
      <Testimonials/>
      <Contact />
    </main>
  )
}

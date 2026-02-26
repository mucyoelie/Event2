"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mwangi",
    role: "Bride",
    text: "Viable Events turned our wedding into a fairy tale. Every detail was perfect, from the floral arch to the reception lighting. Our guests are still talking about how beautiful everything was!",
    rating: 5,
  },
  {
    name: "James Ochieng",
    role: "Corporate Event Manager",
    text: "We have worked with Viable Events for three consecutive company galas, and they never disappoint. Their professionalism and attention to detail are unmatched. Highly recommend for corporate events.",
    rating: 5,
  },
  {
    name: "Grace Wanjiru",
    role: "Birthday Celebrant",
    text: "My 30th birthday party was everything I dreamed of and more. The team listened to my vision and executed it flawlessly. The balloon arch and dessert table were absolutely stunning!",
    rating: 5,
  },
  {
    name: "Dr. Peter Kamau",
    role: "Medical Conference Organizer",
    text: "From the stage setup to the sound equipment, everything was top-notch. Viable Events handled all the logistics seamlessly, allowing us to focus on our conference content.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            What Our Clients <span className="italic font-light">Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-border bg-background p-8 md:p-12">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-accent/15 md:h-14 md:w-14" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-8 font-serif text-xl leading-relaxed text-foreground md:text-2xl italic">
                {`"${testimonials[current].text}"`}
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-base font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? "w-8 bg-accent" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

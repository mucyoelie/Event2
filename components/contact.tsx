"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance mb-6">
              {"Let's Create Something "}
              <span className="italic font-light">Beautiful</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              Ready to start planning your event? We would love to hear from you.
              Tell us about your vision, and we will bring it to life.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    +254 700 000 000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    hello@viableevents.co.ke
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We have received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                      className="rounded-lg border-border bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                      className="rounded-lg border-border bg-background"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="rounded-lg border-border bg-background"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+254 700 000 000"
                    className="rounded-lg border-border bg-background"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="eventType" className="text-sm font-medium text-foreground">
                    Event Type
                  </Label>
                  <select
                    id="eventType"
                    className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    defaultValue=""
                  >
                    <option value="" disabled>Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="cultural">Traditional/Cultural Ceremony</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Tell Us About Your Event
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your vision, expected date, number of guests..."
                    rows={4}
                    className="rounded-lg border-border bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full mt-2"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

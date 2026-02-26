import { Sparkles, Heart, Clock, Users } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "Creativity",
    description: "We combine modern design trends with timeless elegance to deliver setups that are visually stunning.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Every event represents a special moment — a milestone that deserves precision, beauty, and flawless execution.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Timely delivery and attention to detail have built our reputation for memorable, stress-free experiences.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description: "We listen, we plan carefully, and we execute with excellence, ensuring every detail reflects your vision.",
  },
]

export function About() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              We Do More Than
              <br />
              <span className="italic font-light">Decorate Spaces</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Viable Events is a dynamic and creative event decoration and planning company based in Nairobi, Kenya. Founded with a passion for excellence and attention to detail, we transform ordinary gatherings into extraordinary and unforgettable experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We understand that every event represents a special moment — a wedding that marks a new beginning, a birthday that celebrates life, a corporate function that strengthens partnerships, or a traditional ceremony that honors culture and heritage.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

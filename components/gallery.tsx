"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/hero-event.jpg",
    alt: "Luxurious wedding reception venue with golden lighting",
    category: "Wedding",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Elegant table setting with gold accents and floral centerpiece",
    category: "Decoration",
  },
  {
    src: "/images/wedding.jpg",
    alt: "Outdoor wedding ceremony with floral arch",
    category: "Wedding",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Dramatic event stage with drapery and uplighting",
    category: "Stage",
  },
  {
    src: "/images/corporate.jpg",
    alt: "Corporate gala event with sophisticated setup",
    category: "Corporate",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Outdoor canopy tent setup with string lights",
    category: "Outdoor",
  },
  {
    src: "/images/birthday.jpg",
    alt: "Birthday celebration with balloon arch",
    category: "Birthday",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Traditional ceremony with cultural decorations",
    category: "Cultural",
  },
]

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Our Work Speaks <span className="italic font-light">for Itself</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A glimpse into the memorable events we have had the pleasure of creating.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 || index === 4
                  ? "sm:col-span-2 sm:row-span-2 aspect-square"
                  : "aspect-[4/3]"
              }`}
              onClick={() => setLightbox(index)}
              aria-label={`View ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/40" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground">
                  {image.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-6 right-6 text-secondary hover:text-secondary/80 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-h-[85vh] max-w-[85vw] aspect-video">
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

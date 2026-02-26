import type { Metadata } from "next"
import { Gallery } from "@/components/gallery"

export const metadata: Metadata = {
  title: "Gallery | Viable Events",
  description:
    "Browse our portfolio of beautifully decorated events, from weddings and corporate galas to birthday celebrations and cultural ceremonies.",
}

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <Gallery />
    </main>
  )
}

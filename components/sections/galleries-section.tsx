"use client"

import { useState } from "react"
import { X, Folder } from "lucide-react"
import Image from "next/image"

export default function GalleriesSection() {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null)

  const galleries = {
    synch: {
      name: "Synch",
      images: [
        "/galleries/synch/1.jpg",
        "/galleries/synch/2.jpg",
        "/galleries/synch/3.jpg",
        "/galleries/synch/4.jpg",
        "/galleries/synch/5.jpg",
      ],
    },
    sew: {
      name: "SEW",
      images: [
        "/galleries/sew/1.jpg",
        "/galleries/sew/2.jpg",
        "/galleries/sew/3.jpg",
        "/galleries/sew/4.jpg",
        "/galleries/sew/5.jpg",
      ],
    },
    dhanak: {
      name: "Dhanak",
      images: [
        "/galleries/dhanak/1.jpg",
        "/galleries/dhanak/2.jpg",
        "/galleries/dhanak/3.jpg",
        "/galleries/dhanak/4.jpg",
        "/galleries/dhanak/5.jpg",
      ],
    },
  }

  return (
    <section id="galleries" className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-barlow font-bold text-primary mb-6 text-center">Project Galleries</h2>

        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {Object.entries(galleries).map(([key, gallery]) => (
            <button
              key={key}
              onClick={() => setSelectedGallery(key)}
              className="group flex flex-col items-center gap-4 focus:outline-none"
            >
              <div className="p-6 rounded-lg bg-primary/10 border-2 border-primary group-hover:bg-primary/20 group-hover:shadow-lg transition-all">
                <Folder className="w-16 h-16 md:w-20 md:h-20 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-barlow font-bold text-primary text-center">{gallery.name}</h3>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedGallery && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="sticky top-0 flex items-center justify-between p-4 border-b border-border bg-card">
                <h3 className="text-2xl font-barlow font-bold text-primary">
                  {galleries[selectedGallery as keyof typeof galleries].name}
                </h3>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  aria-label="Close gallery"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {galleries[selectedGallery as keyof typeof galleries].images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
                  >
                    <Image
                      src={image || "/placeholder.svg?height=300&width=300&query=gallery image"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

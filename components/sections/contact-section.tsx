"use client"

import { Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-4 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-barlow font-bold text-primary mb-8 text-center">Get In Touch</h2>

        <div className="bg-card border-2 border-primary rounded-lg p-8">
          <div className="flex flex-col items-center gap-6">
            <Mail className="w-12 h-12 text-primary" />
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Email me at:</p>
              <a
                href="mailto:hasanfarooq.edu@gmail.com"
                className="text-2xl md:text-3xl font-barlow font-bold text-primary hover:text-accent transition-colors break-all"
              >
                hasanfarooq.edu@gmail.com
              </a>
            </div>
            <p className="text-center text-foreground mt-4">
              Feel free to reach out for collaborations, projects, or just a friendly chat!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { Github, Instagram, Linkedin } from "lucide-react"

export default function ProfileSection() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/hadbierox196",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/hf.mayb.19?igsh=MXV3MDJycjU5bzBwMQ==",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ]

  return (
    <section id="profile" className="flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary overflow-hidden">
            <Image
              src="https://i.postimg.cc/9FnT580R/1000060469.jpg"
              alt="Hassan Farooq"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-barlow font-bold text-primary">Hassan Farooq</h1>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent transition-colors text-foreground"
                  aria-label={link.label}
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>

          {/* Bio */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              I'm Hassan Farooq, currently pursuing MBBS at Sargodha Medical College. Along with my medical studies, I'm
              actively engaged in research work, web development projects, and graphic designing, where I blend
              creativity with technical skills. My goal is to integrate medicine, technology, and design to develop
              innovative and visually impactful solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

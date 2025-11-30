"use client"

import ProfileSection from "@/components/sections/profile-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import GalleriesSection from "@/components/sections/galleries-section"
import ContactSection from "@/components/sections/contact-section"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-16">
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
        <GalleriesSection />
        <ContactSection />
      </div>
    </main>
  )
}

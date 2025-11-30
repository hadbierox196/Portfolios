"use client"

import { Code2, Palette, BookOpen } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Development",
      skills: ["HTML", "CSS", "JS", "REACT JS"],
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["Adobe Photoshop", "Canva", "Figma"],
    },
    {
      icon: BookOpen,
      title: "Research",
      skills: ["Case Report", "Meta-analysis", "Survey Based"],
    },
  ]

  return (
    <section id="skills" className="flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-barlow font-bold text-primary mb-6 text-center flex items-center justify-center gap-3">
          <span className="text-3xl">⭐</span>
          SKILLS
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="bg-card border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-barlow font-bold text-primary">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-foreground text-sm">
                      ✓ {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

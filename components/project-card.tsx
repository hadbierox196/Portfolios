"use client"

import { ArrowUpRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Project {
  title: string
  icon: LucideIcon
  type: string
  link: string
  description: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <Icon className="w-8 h-8 text-primary" />
        <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <h3 className="text-xl font-barlow font-bold text-primary mb-1">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{project.type}</p>
      <p className="text-sm text-foreground leading-relaxed">{project.description}</p>
    </a>
  )
}

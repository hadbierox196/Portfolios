"use client"

import { Globe, Gamepad2 } from "lucide-react"
import ProjectCard from "@/components/project-card"

export default function ProjectsSection() {
  const projects = [
    {
      title: "SRC",
      icon: Globe,
      type: "Website",
      link: "https://src-smc.vercel.app/",
      description:
        "Welcome to SRC, where Sargodha Medical College students unite to explore, research, and revolutionize medical science.",
    },
    {
      title: "SEW",
      icon: Globe,
      type: "Website",
      link: "https://sew-beta.vercel.app/",
      description:
        "SEW is a mental health platform where you can share your feelings and ideas without revealing your identity because every voice matters.",
    },
    {
      title: "Hand Cricket",
      icon: Gamepad2,
      type: "Game",
      link: "https://github.com/hadbierox196/HandCricket",
      description: "Hand Cricket brings the excitement of real cricket to your fingertips. Play, score, and win",
    },
    {
      title: "Daily Task",
      icon: Globe,
      type: "Website",
      link: "https://dailytask-omega.vercel.app/",
      description: "A simple productivity app to plan, track, and complete your daily goals effortlessly.",
    },
    {
      title: "Mishu",
      icon: Gamepad2,
      type: "Game",
      link: "https://mishu-theta.vercel.app/",
      description: "Mishu brings football fun to your screen with fast-paced mini games and endless challenges!",
    },
    {
      title: "Todo-List",
      icon: Globe,
      type: "Website",
      link: "https://todo-psi-peach-40.vercel.app/",
      description: "Stay focused and organized — manage all your daily tasks in one clean, easy-to-use To-Do List.",
    },
    {
      title: "CBT-effects",
      icon: Globe,
      type: "Website",
      link: "https://cbt-effects.vercel.app/",
      description:
        "Explore clear graphics and insights on how Cognitive Behavioral Therapy supports breast cancer treatment.",
    },
    {
      title: "VL Imposter",
      icon: Gamepad2,
      type: "Game",
      link: "https://github.com/hadbierox196/Vl_imposter",
      description: "A fun guessing game where one player is the imposter. Can you spot who didn't get the word?",
    },
    {
      title: "Save Assassin",
      icon: Gamepad2,
      type: "Game",
      link: "https://github.com/hadbierox196/save-assassin",
      description: "Save Assassin is a game of choice: protect or eliminate, it's all up to you.",
    },
  ]

  return (
    <section id="projects" className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-barlow font-bold text-primary mb-6 text-center">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

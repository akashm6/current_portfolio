"use client";

import { motion } from "framer-motion";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    name: "codebaser",
    description:
      "Navigate unfamiliar codebases by asking questions in natural language! Support for Python, Java, JavaScript, TypeScript, and Go.",
    tools: [
      "Chroma",
      "Tree-sitter",
      "AWS S3",
      "TypeScript",
      "OpenAI",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "Docker",
    ],
    github: "https://github.com/akashm6/codebaser",
    external_link: "https://codebaser.vercel.app/",
  },
  {
    name: "GeoSynth",
    description:
      "Explore and track global crisis events visually in real-time. Complete with real-time update, natural language LLM queries, geospatial trend analysis, and interactive Mapbox.",
    tools: [
      "LangChain",
      "Celery",
      "TypeScript",
      "FastAPI",
      "PostGIS",
      "PostgreSQL",
      "Mapbox",
      "Next.js",
      "Redis",
      "ReliefWeb API",
    ],
    github: "https://github.com/akashm6/GeoSynth",
    external_link: "https://geosynth-five.vercel.app/",
  },
  {
    name: "OSMatch",
    description: "Tinder for open source GitHub projects!",
    tools: [
      "Spring Boot",
      "Spring Security",
      "Next.js",
      "MySQL",
      "Scikit-learn",
      "Redis",
      "FastAPI",
      "Hibernate",
      "GitHub API",
    ],
    github: "https://github.com/akashm6/recallio/",
    external_link: "https://recallio-five.vercel.app/",
  },
  {
    name: "recallio",
    description:
      "Personalize your spaced-repetition studying based on the SM-2 algorithm! Create or import your own study decks and get scheduled reviews based on your performance.",
    tools: [
      "Express.js",
      "Node.js",
      "MongoDB",
      "React.js",
      "Zustand",
      "TypeScript",
    ],
    github: "https://github.com/akashm6/recallio",
    external_link: "https://recallio-five.vercel.app/",
  },
  {
    name: "Riffr",
    description:
      "Full-stack web app that takes a user's top Spotify artists and centralizes upcoming concert information.",
    tools: [
      "Python",
      "PostgreSQL",
      "React.js",
      "Flask",
      "JavaScript",
      "Google Maps API",
      "SpotiPy",
    ],
    github: "https://github.com/akashm6/riffr",
  },
  {
    name: "Automated Highlight Generation",
    description:
      "Automates the process of highlight clip generation for Twitch streams based on chat activity and sentiment analysis.",
    tools: ["Python", "Selenium", "NLTK", "NumPy", "Matplotlib"],
    github: "https://github.com/akashm6/highlight-generation",
  },
  {
    name: "StudioSift",
    description:
      "Full-stack app that details video game studios, with dynamic searching and news aggregation.",
    tools: [
      "MongoDB",
      "JavaScript",
      "Python",
      "Flask",
      "React.js",
      "News API",
      "RAWG API",
    ],
    github: "https://github.com/akashm6/studio-sift",
  },
  {
    name: "Coordinate Weather Report",
    description:
      "Terminal Java script that fetches weather data from Wunderground via coordinate-based scraping.",
    tools: ["Java", "HTMLUnit"],
    github: "https://github.com/akashm6/weather-app",
  },
  {
    name: "Custom Heap Allocator",
    description:
      "Best-fit strategy heap allocator written in C, with immediate adjacent coalescing.",
    tools: ["C", "Posix"],
    github: "https://github.com/akashm6/heap-allocator",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group transition-transform hover:-translate-y-1 duration-300"
          >
            <Card className="h-full flex flex-col justify-between transition-shadow duration-300 ease-in-out group-hover:shadow-[0_0_18px_rgba(168,85,247,0.4)]">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <div className="flex items-center justify-between gap-8">
                    {project.external_link && (
                      <Link href={project.external_link} target="_blank">
                        <SquareArrowOutUpRight className="h-5 w-5 text-muted-foreground hover:text-purple-400 transition-colors" />
                      </Link>
                    )}
                    <Link href={project.github} target="_blank">
                      <Github className="h-5 w-5 text-muted-foreground hover:text-purple-400 transition-colors" />
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tools.map((tool, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

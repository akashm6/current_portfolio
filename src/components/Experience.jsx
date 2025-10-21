"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Code2, Router, FilePlus, CircuitBoard } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Quasar",
    logo: "/quasarlogo.png",
    timeframe: "Oct 2025 – Present",
    icon: CircuitBoard,
    description: "Python GUI development for EEG & EKG hardware.",
    details: [<>Just started! Will update soon.</>],
    skills: ["Python", "NiceGUI", "FastAPI"],
  },
  {
    title: "Software Engineer Intern",
    company: "LawBandit",
    logo: "/lawbandit_logo.jpeg",
    timeframe: "Sep 2025 – Present",
    icon: FilePlus,
    description:
      "Shipping legal educational tools with TypeScript and LLMs to streamline document navigation for thousands of users.",
    details: [
      <>
        Selected from <strong>2,500+ submissions</strong> in a competitive
        coding challenge to build legal educational tools for{" "}
        <strong>3,000+</strong> students.
      </>,
      <>
        Shipping LLM-powered PDF navigation and interactive document
        visualization with TypeScript, Node.js, React Flow, and PostgreSQL,
        implementing <strong>batch-processing</strong> pipelines to accelerate
        parsing and improve responsiveness.
      </>,
      <>
        Collaborating in a fast-paced Agile team to design, test, and iterate on
        user feedback loops to streamline learning experiences and drive
        engagement.
      </>,
    ],
    skills: ["TypeScript", "Node.js", "Next.js", "FastAPI", "OpenAI", "Agile"],
  },
  {
    title: "Help Desk Support Agent",
    company: "UW-Madison Division of Information Technology",
    logo: "/wisconsin3.png",
    timeframe: "Aug 2025 – Present",
    icon: Router,
    description:
      "Providing IT services and support to over 2,000 faculty, 16,000 campus staff, and 43,000 students.",
    details: ["Currently working! Will be updated soon."],
    skills: [
      "Troubleshooting",
      "Hardware Support",
      "Networking",
      "Next.js",
      "Microsoft Suite",
      "SQL",
    ],
  },
  {
    title: "Software & Data Engineer Intern",
    company: "Caterpillar",
    logo: "/caterpillar.png",
    timeframe: "May 2024 – Dec 2024",
    icon: Database,
    description:
      "Built backend APIs for a full-stack prototype and optimized ETL for Tableau and Alteryx workflows.",
    details: [
      <>
        Engineered a full-stack rental app prototype (Flask, Next.js) with AWS
        SES email workflows and geolocation mapping; load-tested APIs with{" "}
        <strong>1,500+</strong> simulated concurrent users, maintaining{" "}
        <strong>sub-400ms</strong> latency.
      </>,
      <>
        Enhanced Tableau dashboards for <strong>800+</strong> daily users by
        integrating Python (TabPy) scripts, automating refresh pipelines and
        reducing manual interventions by <strong>30%.</strong>
      </>,
      <>
        Refactored Alteryx workflows and Snowflake migration scripts, cutting
        data transfer times by <strong>12%</strong> and improving pipeline
        throughput.
      </>,
    ],
    skills: [
      "Next.js",
      "Flask",
      "Python",
      "Tableau",
      "Alteryx",
      "SQL",
      "AWS",
      "Snowflake",
      "TabPy",
      "Google Maps API",
      "UI/UX",
    ],
  },
  {
    title: "Data Engineering Intern",
    company: "Skills for Chicago",
    logo: "/scf.png",
    timeframe: "May 2023 – Aug 2023",
    icon: Code2,
    description:
      "Built automation microservices to streamline workforce data analysis and reporting workflows.",
    details: [
      <>
        Automated updates for <strong>10,000+</strong> client records via
        Selenium, Pandas, and PostgreSQL; implemented a no-code scheduling
        solution (Zapier) to cut manual work by <strong>80%</strong>.
      </>,
      <>
        Built a geocoding + commute-distance microservice (PyXLL, Nominatim) for
        internal datasets, achieving <strong>96%</strong> location-matching
        accuracy and powering retention rate analytics.
      </>,
      <>
        Conducted research on unemployment and labor market trends across 5
        major cities in Illinois; Analyzed <strong>50+</strong> reports and
        datasets to drive business decisions regarding regional disparities.
      </>,
    ],
    skills: [
      "Selenium",
      "Pandas",
      "PostgreSQL",
      "Zapier",
      "PyXLL",
      "Nominatim",
      "Data Analysis",
    ],
  },
];

export default function Experience() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 py-14 scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        experience
      </h2>

      <div className="relative border-l border-border pl-6 space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative group will-change-transform"
          >
            <Card
              onClick={() => setOpenModalIndex(i)}
              className="cursor-pointer transition-all duration-300 group-hover:shadow-[0_0_0.5rem_#a855f7]/30 border border-border bg-muted/30 hover:border-purple-500/60"
            >
              <CardHeader className="flex items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-3">
                  <exp.icon className="w-5 h-5 text-muted-foreground" />
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                </div>
                <span className="text-sm text-muted-foreground">
                  {exp.timeframe}
                </span>
              </CardHeader>
              <CardContent className="pt-0">
                <span className="text-sm font-semibold text-foreground block mb-1 tracking-tight">
                  {exp.company}
                </span>
                <CardDescription>
                  {exp.description && (
                    <p className="text-sm text-muted-foreground leading-snug">
                      {exp.description}
                    </p>
                  )}
                </CardDescription>
              </CardContent>
            </Card>

            <AnimatePresence>
              {openModalIndex === i && (
                <Dialog open onOpenChange={() => setOpenModalIndex(null)}>
                  <DialogContent
                    className="max-w-lg cursor-default [&>button]:cursor-pointer"
                    forceMount
                  >
                    <motion.div
                      key="modal"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="bg-background text-foreground rounded-lg shadow-lg p-6"
                    >
                      <DialogHeader>
                        <DialogTitle className="text-xl mb-2">
                          {exp.title}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="flex items-center gap-3 mb-2">
                        {exp.logo && (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-8 h-8 object-contain"
                          />
                        )}
                        <span className="text-sm font-medium text-foreground">
                          {exp.company}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        {exp.timeframe}
                      </p>

                      <ul className="list-disc pl-5 space-y-2 text-sm mb-4">
                        {exp.details.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.skills.map((skill, j) => (
                          <span
                            key={j}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </DialogContent>
                </Dialog>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

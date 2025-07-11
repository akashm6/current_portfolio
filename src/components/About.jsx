"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-6 py-28 text-center"
    >
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">about me</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          I'm a backend-focused developer passionate about building clean,
          scalable systems and solving real-world problems with data.
        </p>
        <p className="text-muted-foreground text-base italic">
          Currently refining my craft through personal projects, internships,
          and deep dives into architecture and machine learning.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm text-muted-foreground">
          <span>📍 Madison, WI</span>
          <span>🧠 Curious about distributed systems</span>
          <span>🛠️ Fluent in JS, Python, SQL, Spring Boot</span>
        </div>
      </Reveal>
    </motion.section>
  );
}

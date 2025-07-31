"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = {
  Languages: [
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "C",
    "HTML5/CSS3",
    "SQL",
    "Bash",
    "R",
  ],
  "Web/App Dev": [
    "React.js",
    "Next.js",
    "Spring Boot",
    "FastAPI",
    "Flask",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "D3.js",
    "Mapbox",
  ],
  "ML/Data": [
    "Scikit-Learn",
    "PyTorch",
    "LangChain",
    "Celery",
    "OpenAI",
    "NLTK",
    "Chroma",
    "Tree-sitter",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Selenium",
    "Tableau",
    "Alteryx",
  ],
  Tools: [
    "Git",
    "AWS",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "SQLite",
    "GraphQL",
    "Linux",
    "cURL",
    "Docker",
    "Redis",
    "Kafka",
    "Supabase",
    "Cron Jobs",
    "FFmpeg",
    "JUnit",
    "Locust",
    "Firebase",
    "CI/CD",
    "Railway",
    "Postman",
  ],
};

const categoryColors = {
  Languages: "from-purple-500 to-indigo-500",
  "Web/App Dev": "from-teal-500 to-emerald-500",
  "ML/Data": "from-pink-500 to-rose-500",
  Tools: "from-yellow-500 to-orange-500",
};

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        skills & tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            className="relative flex flex-col items-center justify-center text-center"
            onHoverStart={() => setHovered(category)}
            onHoverEnd={() => setHovered(null)}
          >
            <div
              className={`w-32 h-32 rounded-full bg-gradient-to-br ${categoryColors[category]} flex items-center justify-center text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105`}
            >
              {category}
            </div>

            <AnimatePresence>
              {hovered === category && (
                <motion.div
                  className="absolute z-10 top-[120%] w-[16rem] flex flex-wrap justify-center gap-2 p-4 bg-background border border-border rounded-xl shadow-xl"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  {items.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

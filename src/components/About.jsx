"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Terminal, Flame, Info } from "lucide-react";
import Reveal from "./Reveal";

const sections = [
  {
    icon: <Info className="w-5 h-5 text-purple-500 shrink-0" />,
    title: "Me",
    content: (
      <>
        • I'm a full-stack developer and ML enthusiast studying computer science
        and data science at UW-Madison. <br />• I love to <strong>build</strong>{" "}
        and <strong>ship</strong>. Nothing beats tackling new tools and watching
        your ideas come to life! <br />• Originally from Naperville, IL!
      </>
    ),
  },
  {
    icon: <Brain className="w-5 h-5 text-purple-500 shrink-0" />,
    title: "My Intellectual Passions",
    content: `• full-stack development with an emphasis on low-latency backend systems.
     • model interpretability and ML-integrations with real-world systems.
     • data ethics!
     • scalable cloud architecture.
     • video and audio processing.
     • data visualization tools and database optimization.`,
  },
  {
    icon: <Terminal className="w-5 h-5 text-purple-500 shrink-0" />,
    title: "Current Fixations",
    content: `• Currently working as a Software Engineer Intern at Quasar, writing real-time signal processing and visualization pipelines for EEG hardware.
    • Learning some CI/CD stuff (Github Actions, Jenkins, getting better at Docker, etc.)
    • Enjoying my last semester of college!`,
  },
  {
    icon: <Flame className="w-5 h-5 text-purple-500 shrink-0" />,
    title: "My Other Passions",
    content: `Outside of tech, I'm all about:
    • basketball,
    • volleyball,
    • playing the piano (both jazz and classically),
    • video editing, cinematography, & graphic design,
    • traveling with friends,
    • and going down Wikipedia rabbit holes. `,
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-6 pt-8 pb-20 scroll-mt-24"
    >
      <Reveal>
        <div className="flex justify-center mb-6">
          <img
            src="/linkedinpfp.jpg"
            alt="Akash Mohan"
            className="w-30 h-30 rounded-full object-cover border border-border shadow-sm"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          about me
        </h2>

        <div className="flex flex-col gap-4">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-muted/40 border border-border rounded-lg overflow-hidden w-full"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-4 py-4 focus:outline-none min-h-[56px]"
              >
                <div className="flex items-center gap-3 mr-auto pl-2">
                  {section.icon}
                  <span className="font-medium text-sm">{section.title}</span>
                </div>
                <span className="text-muted-foreground text-sm ml-4">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 800 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Reveal>
    </motion.section>
  );
}

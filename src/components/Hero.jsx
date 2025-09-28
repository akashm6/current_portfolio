"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  const letters = "akash".split("");

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative text-center max-w-3xl px-4 py-40 sm:py-48 scroll-mt-24"
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
        hi! i'm{" "}
        <span className="text-purple-500 inline-flex">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </h1>

      <p className="text-muted-foreground text-lg sm:text-xl font-medium mb-8 max-w-xl mx-auto">
        i'm a full-stack engineer studying computer science & data science @
        uw-madison.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <Button
          variant="default"
          className="px-6 py-2 text-base font-medium"
          asChild
        >
          <a href="#contact">get in touch</a>
        </Button>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/akashm6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/amohan7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="/AkashMohanResume2025_09_28.pdf"
            target="_blank"
            className="hover:text-purple-500 transition-colors"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 w-full flex justify-center"
        >
          <div className="animate-bounce text-muted-foreground text-sm">
            ↓ scroll to learn more
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

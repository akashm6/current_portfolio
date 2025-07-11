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
          aboutp1
        </p>
        <p className="text-muted-foreground text-base italic">aboutp2</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm text-muted-foreground">
          <span>blah</span>
          <span>blah</span>
          <span>blah</span>
        </div>
      </Reveal>
    </motion.section>
  );
}

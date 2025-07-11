"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, PhoneCallIcon } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("akmohan0303@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto px-6 py-34 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">get in touch</h2>

      <p className="text-muted-foreground mb-6">
        Whether you're interested in collaborating, have questions, or just want
        to say hi, feel free to reach out!
      </p>
      <div className="mb-6">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted text-sm hover:bg-muted/70 transition-all mr-2"
        >
          <Mail className="w-4 h-4" />
          <a href="mailto:akmohan0303@gmail.com">akmohan0303@gmail.com</a>
        </button>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted text-sm hover:bg-muted/70 transition-all">
          <PhoneCallIcon className="w-4 h-4" />
          <span>+1 (630) 605-1391</span>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/akashm6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/amohan7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </motion.section>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-col items-center justify-center px-6 pt-24 gap-16">
        <Hero />
        <About />
      </main>
    </>
  );
}

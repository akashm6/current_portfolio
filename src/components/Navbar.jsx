"use client";

import { Button } from "../components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur border-b border-border bg-background/70">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">akash.m</h1>
        <div className="flex items-center gap-4">
          {["home", "about", "experience", "projects", "skills", "contact"].map(
            (section) => (
              <a key={section} href={`#${section}`}>
                <Button variant="outline" className="capitalize cursor-pointer">
                  {section}
                </Button>
              </a>
            )
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

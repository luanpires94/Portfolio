"use client";

import { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full bg-background">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

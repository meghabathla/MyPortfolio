import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden  mx-auto  text-neutral-300 antialiased selection:bg-cyan-200 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full ">
        <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>{" "}
      </div>

      <div className="container mx-auto px-8 relative">
        <Navbar />
      </div>
      <div className="mx-10">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

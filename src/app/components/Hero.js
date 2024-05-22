"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Offerings from "./Offerings";
import About from "./About";

import Vision from "./Vision";
import Footer from "./Footer";

export function Hero() {
  return (
    <>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <Highlight className=" text-white px-8">RAVIAN AI</Highlight>
          <br />
          <span className="p-5">
            Turn Data into Decisions, with our AI Data Scientist.
          </span>
        </motion.h1>
      </HeroHighlight>

      <Offerings />
      <About/>

      <Vision/>

      <Footer/>

 

    </>
  );
}

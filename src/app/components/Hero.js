"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Offerings from "./Offerings";
import About from "./About";

import Vision from "./Vision";
import Footer from "./Footer";
import Contact from "./Contact";

import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



export function Hero() {

  useEffect(() => {
    AOS.init({
         duration: 900,
         once: false,
       })
 }, [])
  return (



    <>
      <HeroHighlight id="#">
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
          <span className="p-5" >
            Turn Data into Decisions, with our AI Data Scientist.
          </span>

          <br />
          <br />
        

          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full  cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
         TRY RAVIAN
        </span>
      </button>

        </motion.h1>

    
      </HeroHighlight>

      <br />

      <Offerings />
      <br />

      <Vision />

      <About />

      <br />

      <Contact />

      <Footer />
    </>
  );
}

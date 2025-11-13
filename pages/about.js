// pages/about.js
"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen font-sans relative overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]">
        {/* Floating Light Effect */}
        <motion.div
          animate={{ y: [0, 50, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute w-64 h-64 bg-gradient-to-r from-[#FF8A00]/40 to-[#FF4E00]/40 rounded-full blur-3xl top-1/3 left-1/4"
        />
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] bg-clip-text text-transparent z-10"
        >
          The Vision Behind Takouri
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-2xl max-w-3xl z-10 text-gray-300 leading-relaxed"
        >
          Misunderstood today, legendary forever. <br />
          Takouri Spotlight was born from the loneliness of building, the fire of ambition, and the refusal to quit.
        </motion.p>
      </section>

      {/* JOURNEY SECTION */}
      <section className="py-24 px-6 bg-[#141414] text-white max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-orange-400">
          Our Journey
        </h2>

        <div className="space-y-24">
          {/* Story 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/2 relative"
            >
              <img
                src="/images/number1.jpeg"
                alt="Founder Story"
                className="rounded-2xl shadow-[0_0_25px_rgba(255,138,0,0.3)] grayscale hover:grayscale-0 transition duration-500"
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm md:text-base px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                Where it all began — the day pain turned into purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/2 space-y-4 text-gray-300"
            >
              <p>
                Every visionary knows the grind — the late nights, the doubts, the feeling of building alone.
                I started <span className="text-orange-400 font-semibold">Takouri Spotlight</span> because I knew
                there had to be a space where dreamers, builders, and creators could rise together —
                without judgment, without compromise.
              </p>
              <p>
                This is my story, but it’s also yours. Every setback, every misunderstood idea, every sleepless
                night — it fuels the stage where visionaries shine. Takouri Spotlight isn’t just a platform;
                it’s a movement.
              </p>
            </motion.div>
          </div>

          {/* Story 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/2"
            >
              <img
                src="/images/visionary-path.jpg"
                alt="Visionary Path"
                className="rounded-2xl shadow-[0_0_25px_rgba(255,138,0,0.3)]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/2 space-y-4 text-gray-300"
            >
              <p>
                From my first attempts at pitching ideas to building a small community of visionaries,
                <span className="text-orange-400 font-semibold"> Takouri</span> has always been about
                connection — bridging the lonely path of entrepreneurship.
              </p>
              <p>
                We’re here to empower the misunderstood, amplify the unheard, and show the world what
                it looks like to persevere. The mission is simple: <span className="text-orange-400">Build a stage. Shine a light. Transform lives.</span>
                One day, we’ll be the platform where every visionary can pitch, learn, grow, and connect
                with mentors and investors who truly get it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] text-white text-center relative overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"
        />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 z-10 relative">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg md:text-xl text-white/90 z-10 relative">
          To bridge the gap between ambition and opportunity. <br />
          To give every visionary a stage where they can be seen, heard, and celebrated. <br />
          To prove that the misunderstood today can be legendary tomorrow.
        </p>
        <p className="italic font-semibold text-white/80 z-10 relative">
          “For those who keep going, even when no one understands.”
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-400 relative z-10 bg-[#0D0D0D]">
        <p className="tracking-wide">
          #TakouriSpotlight —{" "}
          <span className="text-orange-400 font-semibold">
            Where Visionaries Rise
          </span>
        </p>
      </footer>
    </div>
  );
}

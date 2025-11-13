// pages/index.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import {
  InstagramEmbed,
  YouTubeEmbed,
  FacebookEmbed,
} from "react-social-media-embed";

const ParticleBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Subtle cinematic floating lights */}
    <motion.div
      animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
      transition={{ repeat: Infinity, duration: 14 }}
      className="absolute w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full opacity-40 top-20 left-16 blur-sm"
    />
    <motion.div
      animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
      transition={{ repeat: Infinity, duration: 10 }}
      className="absolute w-3 h-3 bg-orange-400 rounded-full opacity-30 top-60 left-1/2 blur-sm"
    />
    <motion.div
      animate={{ y: [0, 80, 0], x: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 16 }}
      className="absolute w-1.5 h-1.5 bg-amber-300 rounded-full opacity-50 top-80 left-1/3 blur-[1px]"
    />
  </div>
);

export default function Home() {
  const router = useRouter();

  const testimonials = [
    {
      text: "Takouri Spotlight gave me the courage to pitch publicly.",
      author: "Jane Doe, Entrepreneur",
    },
    {
      text: "Finally, a space where visionaries like me are understood.",
      author: "John Smith, Creative Founder",
    },
    {
      text: "The energy and authenticity here is unmatched.",
      author: "Priya K., Filmmaker",
    },
  ];

  const teaserVideos = ["/videos/teaser1.mp4", "/videos/teaser2.mp4", "/videos/teaser3.mp4"];

  return (
    <div className="bg-[#0D0D0D] text-[#F5F5F5] font-sans relative overflow-x-hidden">
      <Navbar />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] bg-clip-text text-transparent"
        >
          Takouri Spotlight
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed"
        >
          The stage for visionaries who refuse to give up. <br />
          <span className="text-orange-400">Misunderstood today, legendary forever.</span>
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 50px rgba(255,138,0,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] px-10 py-4 rounded-full font-semibold text-lg shadow-lg text-white"
          onClick={() => router.push("/apply")}
        >
          Step Into the Spotlight
        </motion.button>
      </section>

      {/* Teaser Section */}
      <section className="py-24 px-6 bg-[#0D0D0D] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-orange-400">
          Spotlight Teasers
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teaserVideos.map((video, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,138,0,0.3)]"
            >
              <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#1A1A1A] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-orange-400">
          What People Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 25px rgba(255,138,0,0.4)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-[#141414] p-8 rounded-3xl shadow-lg border border-[#2A2A2A]"
            >
              <p className="mb-4 text-gray-300 italic">"{t.text}"</p>
              <span className="font-semibold text-orange-400">{t.author}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Social Embeds */}
      <section className="py-24 px-6 bg-[#0D0D0D] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-orange-400">
          Live From The Stage
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#1A1A1A] rounded-3xl shadow-lg p-4 flex items-center justify-center"
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/C3example"
              width={328}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#1A1A1A] rounded-3xl shadow-lg p-4 flex items-center justify-center"
          >
            <YouTubeEmbed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width={328} />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#1A1A1A] rounded-3xl shadow-lg p-4 flex items-center justify-center"
          >
            <FacebookEmbed
              url="https://www.facebook.com/example/videos/10153231379946729/"
              width={328}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] text-white text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Stage Awaits</h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-white/90">
          Connect with visionaries, mentors, and creators across the world.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => router.push("/apply")}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition"
          >
            Apply Now
          </button>
          <a
            href="https://www.facebook.com/share/g/1XNcW1K8hd/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Join Facebook Group
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 relative z-10">
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

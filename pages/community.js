"use client";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import {
  FacebookEmbed,
  InstagramEmbed,
  YouTubeEmbed,
  XEmbed,
} from "react-social-media-embed";

export default function Community() {
  const socials = [
    {
      name: "Facebook Group",
      url: "https://www.facebook.com/share/g/1BfPVYrPaq/",
      description:
        "Join the home for visionaries. Weekly spotlights, mentorship, and raw stories from entrepreneurs who keep going.",
      icon: "/icons/facebook_Logo.png",
      type: "facebook",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/takourispotlight",
      description:
        "Cinematic clips, behind-the-scenes, and daily inspiration for visionaries.",
      icon: "/icons/Instagram_Glyph_Gradient.svg",
      type: "instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/UCmG3xMWhYSVR2zHmTXN3wvw",
      description:
        "Full Spotlight episodes, clips, and educational content — the stage comes alive here.",
      icon: "/icons/youtube-logo.png",
      type: "youtube",
    },
    {
      name: "X / Twitter",
      url: "https://twitter.com/@takourispotligh",
      description:
        "Short updates, micro-stories, and sparks of motivation — daily dose for the ambitious.",
      icon: "/icons/x-black.png",
      type: "x",
    },
    {
      name: "Facebook Page",
      url: "https://www.facebook.com/takourispotlight",
      description:
        "Professional connections, investor updates, and mentor highlights for our community.",
      icon: "/icons/facebook_Logo.png",
      type: "facebook",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen relative overflow-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-16 px-6 text-center relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] bg-clip-text text-transparent">
          Join the Takouri Spotlight Community
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Step onto the stage where visionaries meet, learn, and grow together.
          Connect with mentors, investors, and fellow dreamers who understand the grind.
        </p>
      </motion.section>

      {/* Live Social Snippets */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="py-12 px-6 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">
          Spotlight in Action
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {socials.slice(0, 2).map((snip, i) => (
            <motion.div
              key={snip.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-[#141414] rounded-2xl p-6 shadow-[0_0_25px_rgba(255,138,0,0.3)]"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#FF8A00]">
                {snip.name}
              </h3>
              <p className="text-gray-300 mb-4">{snip.description}</p>
              <div className="w-full rounded-lg overflow-hidden">
                {snip.type === "facebook" && (
                  <FacebookEmbed url={snip.url} width="100%" />
                )}
                {snip.type === "instagram" && (
                  <InstagramEmbed url={snip.url} width="100%" />
                )}
                {snip.type === "youtube" && (
                  <YouTubeEmbed url={snip.url} width="100%" />
                )}
                {snip.type === "x" && <XEmbed url={snip.url} width="100%" />}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Social Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="py-12 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">
          Connect & Follow
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {socials.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#141414] rounded-3xl p-8 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,138,0,0.4)] transition-all shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-[#FF8A00]">
                {social.name}
              </h3>
              <p className="text-gray-300">{social.description}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 1 }}
        className="py-20 px-6 text-center bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] relative overflow-hidden"
      >
        {/* Optional floating light effect */}
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-[#FF8A00]/40 to-[#FF4E00]/40 top-1/4 left-1/4 filter blur-3xl animate-bounce-slow pointer-events-none"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Your Stage Awaits
        </h2>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-8">
          Be part of the movement. Pitch your vision. Connect with the tribe of
          visionaries. And rise together.
        </p>
        <div className="space-x-4">
          <a
            href="/apply"
            className="inline-block bg-black text-white hover:bg-gray-900 px-8 py-4 rounded-full font-semibold transition"
          >
            Apply Now
          </a>
          <a
            href="/events"
            className="inline-block bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition"
          >
            View Events
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400">
        <p>#TakouriSpotlight — Where Visionaries Rise</p>
      </footer>
    </div>
  );
}

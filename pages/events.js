"use client";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Spotlight 001 — The First Stage",
      date: "November 22, 2025",
      description:
        "The inaugural Takouri Spotlight — 5 visionaries, 1 stage, limitless possibilities. Watch raw talent and grit meet the spotlight.",
      media: "/media/spotlight001.mp4",
      status: "Past",
    },
    {
      id: 2,
      title: "Spotlight 002 — Bigger, Bolder",
      date: "December 15, 2025",
      description:
        "Our next stage. More visionaries, more mentors, more stories. Be ready — the spotlight is where dreams get real.",
      media: "/media/spotlight002-teaser.jpg",
      status: "Upcoming",
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
          Takouri Spotlight Events
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Witness visionaries take the stage. Past highlights, upcoming stages,
          and stories that ignite ambition.
        </p>
      </motion.section>

      {/* Events List */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="py-12 px-6 max-w-6xl mx-auto space-y-12 relative z-10"
      >
        {events.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="bg-[#141414] rounded-3xl shadow-[0_0_25px_rgba(255,138,0,0.3)] overflow-hidden flex flex-col md:flex-row items-center hover:scale-105 transition-transform"
          >
            <div className="md:w-1/2 h-72 md:h-auto relative">
              {event.media.endsWith(".mp4") ? (
                <video
                  src={event.media}
                  controls
                  className="w-full h-full object-cover rounded-l-3xl"
                />
              ) : (
                <img
                  src={event.media}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-l-3xl"
                />
              )}
              {event.status === "Upcoming" && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] px-4 py-1 rounded-full text-black font-bold text-sm shadow-lg">
                  Upcoming
                </span>
              )}
            </div>
            <div className="md:w-1/2 p-8 space-y-4">
              <h2 className="text-3xl font-bold text-orange-400">{event.title}</h2>
              <p className="text-purple-500 font-semibold">{event.date}</p>
              <p className="text-gray-300">{event.description}</p>
              {event.status === "Upcoming" && (
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="/apply"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-3 rounded-full font-bold transition shadow-lg"
                  >
                    Apply to Join
                  </a>
                  <a
                    href="/community"
                    className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition shadow-lg"
                  >
                    Join Community
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA / Stage Invitation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="py-20 px-6 text-center bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] relative overflow-hidden"
      >
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-[#FF8A00]/40 to-[#FF4E00]/40 top-1/4 left-1/4 filter blur-3xl animate-bounce-slow pointer-events-none"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Ready to Step Into the Spotlight?
        </h2>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-8">
          Don’t wait for opportunity — create it. Apply, connect, and rise with a tribe of visionaries.
        </p>
        <div className="space-x-4">
          <a
            href="/apply"
            className="inline-block bg-black text-white hover:bg-gray-900 px-8 py-4 rounded-full font-semibold transition shadow-lg"
          >
            Apply Now
          </a>
          <a
            href="/community"
            className="inline-block bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition shadow-lg"
          >
            Join Community
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400">
        <p>#TakouriSpotlight — The Stage for Visionaries.</p>
      </footer>
    </div>
  );
}

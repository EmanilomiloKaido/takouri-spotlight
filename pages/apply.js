"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
    stage: "",
    motivation: "",
    inspiration: "",
    challenge: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate API: email, Airtable, or Google Sheets
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0D0D0D] text-white font-sans flex flex-col items-center justify-start">
      {/* Cinematic background video with gradient overlay */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/videos/spotlight-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#1A1A1A]/60 to-black/80 z-10 pointer-events-none"></div>

      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center mt-16 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] bg-clip-text text-transparent">
          
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300">
          Every visionary starts somewhere. This is your stage. Share your
          story, your dream, and why you refuse to quit. The world is watching,
          and Takouri Spotlight is ready to amplify your voice.
        </p>
      </motion.div>

      {/* Form */}
      {submitted ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 text-center space-y-4 px-6 mt-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
            Thank You!
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Your application has been received. Keep your fire burning — the
            spotlight is coming for those who are relentless.
          </p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative z-20 bg-[#141414]/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl max-w-3xl w-full space-y-6 border border-[#FF8A00]/40"
        >
          {/* Name */}
          <label className="block">
            <span className="text-sm font-semibold mb-1 text-orange-400">
              Full Name
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-[#FF8A00]/40 focus:outline-none focus:border-[#FF8A00] text-white shadow-sm focus:shadow-[#FF8A00]"
            />
          </label>

          {/* Email */}
          <label className="block">
            <span className="text-sm font-semibold mb-1 text-orange-400">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-[#FF8A00]/40 focus:outline-none focus:border-[#FF8A00] text-white shadow-sm focus:shadow-[#FF8A00]"
            />
          </label>

          {/* Vision Story */}
          <label className="block">
            <span className="text-sm font-semibold mb-1 text-orange-400">
              Your Story / Vision
            </span>
            <textarea
              name="story"
              value={formData.story}
              onChange={handleChange}
              rows={5}
              placeholder="Why you’re here. What drives you. What you dream to build."
              required
              className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-[#FF8A00]/40 focus:outline-none focus:border-[#FF8A00] text-white resize-none shadow-sm focus:shadow-[#FF8A00]"
            />
          </label>

          {/* Stage */}
          <label className="block">
            <span className="text-sm font-semibold mb-1 text-orange-400">
              Stage / Experience Level
            </span>
            <select
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-[#FF8A00]/40 focus:outline-none focus:border-[#FF8A00] text-white shadow-sm focus:shadow-[#FF8A00]"
            >
              <option value="">Select Stage</option>
              <option value="idea">Idea / Early</option>
              <option value="prototype">Prototype / Beta</option>
              <option value="scaling">Scaling / Growth</option>
            </select>
          </label>

          {/* Motivation, Inspiration, Challenge */}
          {["motivation", "inspiration", "challenge"].map((field, i) => (
            <label key={field} className="block">
              <span className="text-sm font-semibold mb-1 text-orange-400">
                {field === "motivation"
                  ? "What drives you?"
                  : field === "inspiration"
                  ? "Who inspires you most and why?"
                  : "What’s the biggest challenge you’ve overcome?"}
              </span>
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                rows={3}
                placeholder={
                  field === "motivation"
                    ? "Describe what fuels your passion or purpose."
                    : field === "inspiration"
                    ? "A person, creator, or moment that shaped your journey."
                    : "Share a moment that tested your resilience."
                }
                required
                className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-[#FF8A00]/40 focus:outline-none focus:border-[#FF8A00] text-white resize-none shadow-sm focus:shadow-[#FF8A00]"
              />
            </label>
          ))}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,138,0,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-[#FF8A00] to-[#FF4E00] px-6 py-5 rounded-full font-bold text-lg md:text-xl transition-all shadow-lg"
          >
            Apply & Step Into The Spotlight
          </motion.button>
        </motion.form>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-20 text-center text-gray-300 mt-12 max-w-xl"
      >
        Takouri Spotlight is a stage for those who refuse to quit. Every story
        matters. Every dream counts.
      </motion.p>
    </div>
  );
}

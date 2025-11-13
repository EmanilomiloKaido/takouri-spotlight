// components/navbar.js
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About", "Apply", "Events", "Community"];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md px-8 py-4 flex justify-between items-center text-white shadow-[0_0_20px_rgba(255,138,0,0.3)]">
      
      {/* Logo + Brand */}
      <div className="flex items-center space-x-3 relative">
        {/* Animated Glow behind logo + text */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF8A00]/50 via-[#FF4E00]/50 to-[#FF8A00]/50 blur-3xl z-0"
        />

        {/* Logo Image */}
        <img
          src="/images/logo.png" // replace with your cropped logo
          alt="Takouri Logo"
          className="h-10 w-auto md:h-12 relative z-10"
        />

        {/* Brand Text with shimmer */}
        <motion.h1
          className="font-extrabold text-2xl md:text-3xl tracking-wide uppercase relative z-10"
          animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{
            backgroundImage: "linear-gradient(90deg, #FF8A00, #FF4E00, #FF8A00)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Takouri Spotlight
        </motion.h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-10 text-lg font-semibold tracking-wider">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="hover:text-[#FF8A00] transition-all"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden flex flex-col space-y-1 cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-8 h-1 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-8 h-1 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-8 h-1 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gradient-to-b from-black/90 via-[#1A1A1A]/80 to-black/90 flex flex-col text-center py-6 space-y-6 font-semibold text-xl">
          {links.map((link) => (
            <li key={link}>
              <Link
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

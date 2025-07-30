"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll for entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Scrollspy & shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 100;
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      let currentSection = "";
      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = (section as HTMLElement).offsetTop;
          const offsetHeight = (section as HTMLElement).offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = navLinks[index].href;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 backdrop-blur-md border-b transition-all ${
        scrolled ? "bg-white/90 shadow-md" : "bg-white/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo (no scroll to top) */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ADmyBRAND
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className={`transition ${
                activeSection === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={`transition text-lg ${
                    activeSection === link.href
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

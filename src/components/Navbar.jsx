"use client";

import { useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "আমাদের সম্পর্কে", href: "#about" },
  { label: "কার্যক্রম",       href: "#activities" },
  { label: "ইভেন্ট",         href: "#events" },
  { label: "যোগাযোগ",        href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadow    = useTransform(scrollY, [0, 80], ["0 0 0 0 transparent", "0 1px 0 0 rgba(0,0,0,0.08)"]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: `rgba(250,250,250,${bgOpacity.get()})`, boxShadow: shadow }}
        className="fixed top-0 inset-x-0 z-50 transition-colors"
      >
        <motion.div
          style={{ backgroundColor: `rgba(250,250,250,${bgOpacity})` }}
          className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between"
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">UBF</span>
            </span>
            <span
              className="font-bold text-sm text-[#0a0a0a] tracking-tight"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              উত্তরা ব্লাড ফাউন্ডেশন
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[#0a0a0a]/60 hover:text-red-600 text-xs tracking-wide transition-colors"
                style={{ fontFamily: "var(--font-hind)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.facebook.com/uttarabloodfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              রক্ত দিন
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-[#0a0a0a] rounded-full origin-center transition-transform"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[1.5px] bg-[#0a0a0a] rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-[#0a0a0a] rounded-full origin-center transition-transform"
            />
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 inset-x-0 z-40 bg-white border-b border-black/8 shadow-lg flex flex-col px-5 py-4 gap-4 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#0a0a0a]/70 text-sm py-1 border-b border-black/5"
                style={{ fontFamily: "var(--font-hind)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.facebook.com/uttarabloodfoundation"
              className="mt-1 px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold text-center"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              রক্ত দিন →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

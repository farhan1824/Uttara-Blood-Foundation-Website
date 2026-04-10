"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#0f0f0f] text-white">
      {/* CTA Band */}
      <div className="py-24 px-6 flex flex-col items-center justify-center text-center border-b border-white/8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-red-500 uppercase text-xs tracking-[0.3em] mb-4 font-medium"
          style={{ fontFamily: "var(--font-hind)" }}
        >
          এখনই পদক্ষেপ নিন
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-2xl mx-auto leading-tight"
          style={{ fontFamily: "var(--font-hind)" }}
        >
          আপনার রক্ত কাউকে নতুন জীবন দিতে পারে।
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-white/50 max-w-md mx-auto text-base font-light mb-10"
          style={{ fontFamily: "var(--font-hind)" }}
        >
          আজই একজন ডোনার হন অথবা জরুরি রক্তের সন্ধান করুন —
          আমাদের নেটওয়ার্ক সবসময় আপনার পাশে।
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://www.facebook.com/uttarabloodfoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-ring inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-semibold text-sm tracking-wide hover:bg-red-500 transition-colors"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            রক্ত দিন / ডোনার খুঁজুন →
          </a>
          <a
            href="tel:01707509461"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/70 text-sm tracking-wide hover:border-red-500/50 hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            জরুরি: 01707509461
          </a>
        </motion.div>
      </div>

      {/* Contact info */}
      <div className="py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">UBF</span>
            </span>
            <span
              className="font-semibold text-sm text-white"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              উত্তরা ব্লাড ফাউন্ডেশন
            </span>
          </div>

          {/* Contact details */}
          <div
            className="text-xs text-white/35 text-center space-y-1"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            <p>contact1.ubf@gmail.com · 01707509461 · 01633032605</p>
            <p>উত্তরা মডেল টাউন, ঢাকা</p>
          </div>

          {/* Copyright */}
          <p
            className="text-[10px] text-white/20 uppercase tracking-widest text-center"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            © {new Date().getFullYear()} UBF
          </p>
        </div>
      </div>
    </footer>
  );
}

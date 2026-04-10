"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#fafafa] z-10 overflow-hidden text-center px-5 pt-20 pb-12">
      {/* Subtle red radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_65%,rgba(220,38,38,0.07),transparent)] pointer-events-none" />
      {/* Faint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-3xl mx-auto"
      >
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-red-200 bg-red-50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
          <p
            className="text-red-600 text-[11px] tracking-[0.18em] font-medium"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            উত্তরা মডেল টাউন, ঢাকা
          </p>
        </motion.div>

        {/* Main heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tighter text-[#0a0a0a] mb-4"
          style={{ fontFamily: "var(--font-hind)" }}
        >
          উত্তরা ব্লাড
          <br />
          <span className="shimmer-text">ফাউন্ডেশন</span>
        </h1>

        {/* Tagline */}
        <p
          className="mt-3 text-base sm:text-lg md:text-xl text-[#0a0a0a]/60 max-w-md mx-auto font-light leading-relaxed px-2"
          style={{ fontFamily: "var(--font-hind)" }}
        >
          রক্তের অভাবে কেউ যেন মারা না যায় —{" "}
          <span className="text-red-600 font-medium">এটাই আমাদের প্রতিশ্রুতি।</span>
        </p>

        {/* PDF quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-6 max-w-sm sm:max-w-md mx-auto border-l-2 border-red-500 pl-4 text-left"
        >
          <p
            className="text-[#0a0a0a]/50 text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            &ldquo;যা ছোট্ট উদ্যোগ হিসেবে শুরু হয়েছিল, তা আজ করুণা, সেবা এবং জীবন বাঁচানোর
            প্রতিশ্রুতিতে গড়া এক শক্তিশালী যুব আন্দোলনে পরিণত হয়েছে।&rdquo;
          </p>
          <cite
            className="block mt-1.5 text-[10px] text-red-500/80 not-italic tracking-widest uppercase"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            — UBF পোর্টফোলিও
          </cite>
        </motion.blockquote>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="https://www.facebook.com/uttarabloodfoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-ring w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-red-600 text-white font-semibold text-sm tracking-wide hover:bg-red-700 transition-colors"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            রক্ত দিন →
          </a>
          <a
            href="tel:01707509461"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#0a0a0a]/15 text-[#0a0a0a]/70 text-sm hover:border-red-400 hover:text-red-600 transition-colors"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            জরুরি: 01707509461
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — hide on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        className="hidden sm:flex absolute bottom-8 flex-col items-center gap-3"
      >
        <span
          className="uppercase tracking-[0.25em] text-[10px] text-[#0a0a0a]/35"
          style={{ fontFamily: "var(--font-hind)" }}
        >
          স্ক্রল করুন
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-red-500 via-red-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}

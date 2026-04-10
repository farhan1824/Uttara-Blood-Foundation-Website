"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "আমরা বিশ্বাস করি, সঠিক সময়ে রক্তের অভাবে কেউ জীবন হারাবে না।",
    source: "UBF মিশন বিবৃতি",
  },
  {
    text: "প্রতিদিন নতুন ডোনার যোগ দিচ্ছেন — জীবন বাঁচানোর আমাদের পরিবার ক্রমশ বাড়ছে।",
    source: "UBF অর্জন",
  },
  {
    text: "আমরা একটি এমন বাংলাদেশ গড়তে চাই যেখানে প্রতিটি রোগী সময়মতো রক্ত পায়।",
    source: "UBF দর্শন",
  },
];

const upcomingEvents = [
  "শিশু পুষ্টি সচেতনতা ক্যাম্পেইন",
  "স্কুলে বিনামূল্যে ডেন্টাল চেকআপ",
  "পথশ্রমিকদের জন্য ফ্রি মেডিকেল ক্যাম্প",
  "স্থানীয় পার্কে কমিউনিটি স্বাস্থ্য ক্যাম্পেইন",
  "কিশোরী মেয়েদের জন্য স্বাস্থ্য সেমিনার",
  "ডায়াবেটিস সচেতনতা কর্মসূচি",
];

const pastEvents = [
  {
    date: "২২ এপ্রিল ২০২৫",
    title: "রক্তের গ্রুপ নির্ণয় ও সচেতনতা ক্যাম্পেইন",
    location: "ঢাকা মহিলা কলেজ",
    desc: "১০০+ শিক্ষার্থী বিনামূল্যে তাদের রক্তের গ্রুপ জানেন। সাথে ছিল কুইজ প্রতিযোগিতা, Q&A সেশন এবং ছোট ফ্রি মেডিকেল ক্যাম্প।",
  },
  {
    date: "২০ অক্টোবর ২০২৫",
    title: "পরিষ্কার হাতে রঙিন ভবিষ্যৎ",
    location: "মুক্ত আকাশ পাঠশালা",
    desc: "পথশিশুদের স্কুলে হাত ধোয়ার সচেতনতা কর্মশালা। ৫০+ শিক্ষার্থী অংশগ্রহণ করে, সাথে মজার খেলাধুলা ও যৌথ রাতের খাবার।",
  },
];

const partners = [
  "A1 কমিউনিকেশন", "ট্যালেন্ট কেয়ার", "বাংলাদেশ স্কাউটস",
  "ডে লাইফ সিল্ক", "ক্রিয়েটিভ", "হলো ফ্রেম অ্যালায়েন্স", "অ্যাস্ট্রো ওয়ার্ল্ড ফাউন্ডেশন",
];

const visionItems = [
  "প্রতিটি রোগী সময়মতো রক্ত পাবে।",
  "স্বেচ্ছামূলক রক্তদানের সচেতনতা প্রতিটি সমাজে ছড়িয়ে পড়বে।",
  "তরুণরা মানবিক সেবায় নেতৃত্ব দেবে।",
  "রক্তের অভাবে কেউ কষ্ট পাবে না।",
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-[2px] bg-red-600" />
      <p
        className="text-red-600 uppercase text-xs tracking-[0.25em] font-semibold"
        style={{ fontFamily: "var(--font-hind)" }}
      >
        {children}
      </p>
    </div>
  );
}

function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, margin: "-60px" },
  };
}

export default function Mission() {
  return (
    <section id="about" className="w-full bg-[#fafafa] text-[#0a0a0a]">

      {/* ── About ── */}
      <div className="relative py-28 px-6 md:px-12 lg:px-24 border-t border-black/8">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn(0)}>
            <SectionLabel>আমাদের সম্পর্কে — ২৭ এপ্রিল ২০২৪</SectionLabel>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-[#0a0a0a] mb-6"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              একটি যুব-নেতৃত্বাধীন আন্দোলন,
              <br />
              <span className="text-red-600">রক্তদানেই পরিবর্তন।</span>
            </h2>
          </motion.div>

          <motion.p {...fadeIn(0.1)}
            className="text-[#0a0a0a]/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-14"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            উত্তরা ব্লাড ফাউন্ডেশন (UBF) একটি অলাভজনক, যুব-নেতৃত্বাধীন সংস্থা যা স্বেচ্ছামূলক
            রক্তদানের মাধ্যমে জীবন বাঁচাতে নিবেদিত। ঢাকার উত্তরায় হাসপাতাল থাকলেও রক্তের সংকট
            প্রায়ই জীবনঘাতী হয়ে ওঠে — বিশেষত ডেঙ্গু মৌসুমে।
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeIn(0.2)}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { val: "২০০+",    label: "রক্তের ব্যাগ দান" },
              { val: "১,০০০+",  label: "সক্রিয় ডোনার" },
              { val: "২টি",     label: "সফল ক্যাম্পেইন" },
              { val: "৩টি",     label: "আসন্ন ইভেন্ট" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center gap-2 py-8 rounded-2xl bg-white border border-black/6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300"
              >
                <span
                  className="text-4xl font-bold text-red-600"
                  style={{ fontFamily: "var(--font-hind)" }}
                >
                  {s.val}
                </span>
                <span
                  className="text-[11px] uppercase tracking-widest text-[#0a0a0a]/45"
                  style={{ fontFamily: "var(--font-hind)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Quotes from PDF ── */}
      <div id="activities" className="py-20 px-6 md:px-12 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>UBF পোর্টফোলিও থেকে</SectionLabel>
          <div className="grid md:grid-cols-3 gap-5 mt-2">
            {quotes.map((q, i) => (
              <motion.blockquote
                key={i}
                {...fadeIn(i * 0.12)}
                className="relative p-6 rounded-2xl bg-white border border-black/6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col"
              >
                <div className="text-red-500 text-3xl leading-none mb-3 font-serif">&ldquo;</div>
                <p
                  className="text-[#0a0a0a]/70 text-sm font-light leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-hind)" }}
                >
                  {q.text}
                </p>
                <div className="mt-4 pt-3 border-t border-black/6">
                  <cite
                    className="text-[10px] text-red-600/70 uppercase tracking-[0.2em] not-italic"
                    style={{ fontFamily: "var(--font-hind)" }}
                  >
                    — {q.source}
                  </cite>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>

      {/* ── Past Events ── */}
      <div id="events" className="py-24 px-6 md:px-12 lg:px-24 border-t border-black/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>আমাদের গল্প</SectionLabel>
          <h3
            className="text-2xl md:text-4xl font-bold text-[#0a0a0a] mb-12 tracking-tight"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            আমাদের পূর্ববর্তী ইভেন্ট
          </h3>
          <div className="space-y-5">
            {pastEvents.map((e, i) => (
              <motion.div
                key={i}
                {...fadeIn(i * 0.1)}
                className="grid md:grid-cols-[auto_1fr] gap-6 p-6 rounded-2xl bg-white border border-black/6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300"
              >
                {/* Left accent */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-[2px] flex-1 bg-red-200" />
                  <div className="w-3 h-3 rounded-full bg-red-600 flex-shrink-0" />
                  <div className="w-[2px] flex-1 bg-red-200" />
                </div>
                <div>
                  <p
                    className="text-red-600 text-xs tracking-widest uppercase mb-2 font-medium"
                    style={{ fontFamily: "var(--font-hind)" }}
                  >
                    {e.date} · {e.location}
                  </p>
                  <h4
                    className="text-lg font-semibold text-[#0a0a0a] mb-2"
                    style={{ fontFamily: "var(--font-hind)" }}
                  >
                    {e.title}
                  </h4>
                  <p
                    className="text-[#0a0a0a]/55 text-sm font-light leading-relaxed"
                    style={{ fontFamily: "var(--font-hind)" }}
                  >
                    {e.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Vision & Upcoming ── */}
      <div className="py-24 px-6 md:px-12 lg:px-24 bg-[#f5f5f5] border-t border-black/8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
          {/* Vision */}
          <motion.div {...fadeIn(0)}>
            <SectionLabel>আমাদের দর্শন</SectionLabel>
            <h3
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              আমরা এমন একটি বাংলাদেশ চাই যেখানে—
            </h3>
            <ul className="space-y-3">
              {visionItems.map((v, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#0a0a0a]/65 text-sm font-light"
                  style={{ fontFamily: "var(--font-hind)" }}
                >
                  <span className="text-red-500 mt-0.5 flex-shrink-0">◆</span>
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Upcoming events */}
          <motion.div {...fadeIn(0.15)}>
            <SectionLabel>আসন্ন কার্যক্রম</SectionLabel>
            <h3
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              আগামীর পরিকল্পনা
            </h3>
            <ul className="space-y-2">
              {upcomingEvents.map((ev, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[#0a0a0a]/60 text-sm font-light py-2.5 border-b border-black/6"
                  style={{ fontFamily: "var(--font-hind)" }}
                >
                  <span className="w-6 h-6 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-600 text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {ev}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* ── Partners ── */}
      <div className="py-14 px-6 md:px-12 lg:px-24 border-t border-black/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>আমাদের সঙ্গী সংস্থাসমূহ</SectionLabel>
          <div className="flex flex-wrap gap-2.5 mt-3">
            {partners.map((p, i) => (
              <span
                key={i}
                className="px-4 py-2 text-xs border border-black/10 rounded-full text-[#0a0a0a]/55 hover:border-red-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200 cursor-default"
                style={{ fontFamily: "var(--font-hind)" }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

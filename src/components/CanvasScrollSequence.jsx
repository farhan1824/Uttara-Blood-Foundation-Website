"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

const FRAME_COUNT = 240;

function currentFrame(index) {
  return `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;
}

// ─── Stage Data: 4 scroll stages, each with left card, right card, center title ───
const stages = [
  {
    range: [0, 0.25],
    title: "একটি ফোঁটা।",
    left: {
      icon: "💧",
      heading: "জানেন কি?",
      body: "এক ইউনিট রক্ত তিনজন রোগীর জীবন বাঁচাতে পারে। একটি ছোট্ট সিদ্ধান্ত — তিনটি নতুন জীবন।",
      tag: "তথ্য",
    },
    right: {
      icon: "🩸",
      heading: "রক্তের গ্রুপ",
      body: null,
      groups: ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"],
      tag: "সব গ্রুপ চাই",
    },
  },
  {
    range: [0.25, 0.5],
    title: "অসীম প্রভাব।",
    left: {
      icon: "❤️",
      heading: "আপনার অবদান",
      body: "মাত্র ১৭ মিনিট সময় দিন। একজন ডোনার প্রতি তিন মাস অন্তর রক্ত দিতে পারেন — বছরে চারবার।",
      tag: "অনুপ্রেরণা",
    },
    right: {
      icon: "📊",
      heading: "আমাদের অর্জন",
      body: null,
      stats: [
        { val: "২০০+", label: "ব্যাগ রক্ত" },
        { val: "১০০০+", label: "সক্রিয় ডোনার" },
        { val: "২টি", label: "সফল ক্যাম্পেইন" },
      ],
      tag: "পরিসংখ্যান",
    },
  },
  {
    range: [0.5, 0.75],
    title: "উত্তরাকে সংযুক্ত করুন।",
    left: {
      icon: "🏥",
      heading: "আমাদের নেটওয়ার্ক",
      body: "ঢাকাজুড়ে ৬টি সেক্টরে সক্রিয় সদস্য। প্রতিটি হাসপাতালে নিশ্চিত রক্তের সরবরাহ আমাদের লক্ষ্য।",
      tag: "বিস্তার পরিকল্পনা",
    },
    right: {
      icon: "🗺️",
      heading: "ভবিষ্যৎ পরিকল্পনা",
      body: null,
      bullets: [
        "দেশব্যাপী ডোনার নেটওয়ার্ক",
        "ডিজিটাল ডোনার ডেটাবেস",
        "জরুরি হটলাইন সেবা",
        "জাতীয় ব্লাড ব্যাংক সিস্টেম",
      ],
      tag: "রোডম্যাপ",
    },
  },
  {
    range: [0.75, 1],
    title: "প্রতিটি গ্রুপই গুরুত্বপূর্ণ।",
    left: {
      icon: "✅",
      heading: "কেন UBF বেছে নেবেন?",
      body: null,
      bullets: [
        "যাচাইকৃত ও সক্রিয় ডোনার",
        "জরুরি প্রতিক্রিয়া দল",
        "সম্প্রদায়ভিত্তিক পদ্ধতি",
      ],
      tag: "আমাদের প্রতিশ্রুতি",
    },
    right: {
      icon: "📞",
      heading: "এখনই যোগাযোগ করুন",
      body: null,
      contacts: [
        { label: "ফোন", val: "01707509461" },
        { label: "হোয়াটসঅ্যাপ", val: "01633032605" },
        { label: "ইমেইল", val: "contact1.ubf@gmail.com" },
      ],
      tag: "জরুরি যোগাযোগ",
    },
  },
];

// ─── Individual Card Components ───────────────────────────────────────────────
function InfoCard({ data, side, visible }) {
  const variants = {
    hidden:  { opacity: 0, x: side === "left" ? -40 : 40, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit:    { opacity: 0, x: side === "left" ? -30 : 30, scale: 0.95,
      transition: { duration: 0.35 } },
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={data.heading}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="glass-card rounded-2xl p-5 w-full max-w-[220px]"
        >
          {/* Tag */}
          <span
            className="inline-block px-2 py-0.5 text-[10px] bg-red-50 text-red-600 rounded-full border border-red-100 tracking-wide mb-3"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            {data.tag}
          </span>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{data.icon}</span>
            <h3
              className="font-semibold text-sm text-[#0a0a0a] leading-snug"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              {data.heading}
            </h3>
          </div>

          {/* Text body */}
          {data.body && (
            <p
              className="text-[#0a0a0a]/60 text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              {data.body}
            </p>
          )}

          {/* Blood groups grid */}
          {data.groups && (
            <div className="grid grid-cols-4 gap-1.5">
              {data.groups.map((g) => (
                <span
                  key={g}
                  className="flex items-center justify-center h-8 rounded-lg bg-red-600 text-white text-xs font-bold"
                >
                  {g}
                </span>
              ))}
            </div>
          )}

          {/* Stats */}
          {data.stats && (
            <div className="space-y-2 mt-1">
              {data.stats.map((s) => (
                <div key={s.label} className="flex justify-between items-center">
                  <span
                    className="text-xs text-[#0a0a0a]/55"
                    style={{ fontFamily: "var(--font-hind)" }}
                  >
                    {s.label}
                  </span>
                  <span className="text-sm font-bold text-red-600">{s.val}</span>
                </div>
              ))}
            </div>
          )}

          {/* Bullet list */}
          {data.bullets && (
            <ul className="space-y-1.5 mt-1">
              {data.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-xs text-[#0a0a0a]/60"
                  style={{ fontFamily: "var(--font-hind)" }}
                >
                  <span className="text-red-500 mt-0.5 flex-shrink-0">◆</span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {/* Contacts */}
          {data.contacts && (
            <div className="space-y-2 mt-1">
              {data.contacts.map((c) => (
                <div key={c.label}>
                  <p
                    className="text-[9px] text-[#0a0a0a]/40 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-hind)" }}
                  >
                    {c.label}
                  </p>
                  <p className="text-xs font-medium text-[#0a0a0a]">{c.val}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Center title overlay ─────────────────────────────────────────────────────
function CenterTitle({ stage, visible }) {
  const variants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } },
    exit:    { opacity: 0, y: -16, transition: { duration: 0.3 } },
  };
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={stage.title}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute bottom-[10%] inset-x-0 flex flex-col items-center pointer-events-none px-4 z-20"
        >
          <div className="w-8 h-[2px] bg-red-600 mx-auto mb-3" />
          <h2
            className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)] leading-tight tracking-tight text-center"
            style={{ fontFamily: "var(--font-hind)" }}
          >
            {stage.title}
          </h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CanvasScrollSequence() {
  const canvasRef    = useRef(null);
  const containerRef = useRef(null);
  const [imagesArray, setImagesArray]   = useState([]);
  const [loaded, setLoaded]             = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeStage, setActiveStage]   = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Track which stage is active based on scroll
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = stages.findIndex(
        (s) => v >= s.range[0] && v < s.range[1]
      );
      setActiveStage(idx === -1 ? stages.length - 1 : idx);
    });
  }, [scrollYProgress]);

  // Preload all frames
  useEffect(() => {
    const images = [];
    let loadedImages = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedImages++;
        setLoadProgress(Math.floor((loadedImages / FRAME_COUNT) * 100));
        if (loadedImages === FRAME_COUNT) setLoaded(true);
      };
      images.push(img);
    }
    setImagesArray(images);
  }, []);

  // RAF canvas rendering
  useEffect(() => {
    if (!loaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      paint(frameIndex.get());
    };

    const paint = (val) => {
      const idx = Math.min(Math.max(Math.floor(val) - 1, 0), FRAME_COUNT - 1);
      const img = imagesArray[idx];
      if (!img || !ctx) return;
      const hr = canvas.width / img.width;
      const vr = canvas.height / img.height;
      const r  = Math.max(hr, vr);
      const cx = (canvas.width  - img.width  * r) / 2;
      const cy = (canvas.height - img.height * r) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height, cx, cy, img.width * r, img.height * r);
    };

    resize();
    window.addEventListener("resize", resize);

    const unsub = frameIndex.on("change", (val) => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => paint(val));
    });

    return () => {
      unsub();
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [loaded, frameIndex, imagesArray]);

  const stage = stages[activeStage];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#fafafa]">
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#fafafa]">
            <p
              className="text-[#0a0a0a]/40 uppercase tracking-[0.3em] text-xs mb-5"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              অ্যানিমেশন লোড হচ্ছে
            </p>
            <div className="w-48 h-[2px] bg-[#0a0a0a]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600 transition-all duration-150 rounded-full"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="mt-3 text-red-600 text-xs font-medium">{loadProgress}%</p>
          </div>
        )}

        {/* Canvas */}
        <canvas ref={canvasRef} className="block w-full h-full" />

        {/* Vignette for text legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_50%_50%,transparent_35%,rgba(10,10,10,0.55)_100%)] pointer-events-none" />

        {/* ── DESKTOP: Left & Right cards ── */}
        {loaded && (
          <>
            {/* Left card */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 xl:left-10 hidden md:flex z-30">
              <InfoCard data={stage.left} side="left" visible={true} />
            </div>

            {/* Right card */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 xl:right-10 hidden md:flex z-30">
              <InfoCard data={stage.right} side="right" visible={true} />
            </div>
          </>
        )}

        {/* Center title */}
        {loaded && <CenterTitle stage={stage} visible={true} />}

        {/* ── MOBILE: Cards stacked below title ── */}
        {loaded && (
          <div className="absolute bottom-4 inset-x-0 flex md:hidden justify-center gap-3 px-4 z-30 pb-2">
            <div className="w-[48%]">
              <InfoCard data={stage.left} side="left" visible={true} />
            </div>
            <div className="w-[48%]">
              <InfoCard data={stage.right} side="right" visible={true} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

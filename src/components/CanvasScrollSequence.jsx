"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

const FRAME_COUNT = 240;

function currentFrame(index) {
  return `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;
}

const stages = [
  {
    range: [0, 0.25],
    title: "একটি ফোঁটা।",
    left: {
      icon: "💧",
      heading: "জানেন কি?",
      body: "এক ইউনিট রক্ত তিনজন রোগীর জীবন বাঁচাতে পারে।",
      tag: "তথ্য",
    },
    right: {
      icon: "🩸",
      heading: "রক্তের গ্রুপ",
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
      body: "মাত্র ১৭ মিনিট — বছরে চারবার রক্ত দিন।",
      tag: "অনুপ্রেরণা",
    },
    right: {
      icon: "📊",
      heading: "আমাদের অর্জন",
      stats: [
        { val: "২০০+", label: "ব্যাগ রক্ত" },
        { val: "১০০০+", label: "ডোনার" },
        { val: "২টি", label: "ক্যাম্পেইন" },
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
      body: "ঢাকাজুড়ে ৬টি সেক্টরে সক্রিয় সদস্য।",
      tag: "বিস্তার",
    },
    right: {
      icon: "🗺️",
      heading: "পরিকল্পনা",
      bullets: ["দেশব্যাপী ডোনার নেটওয়ার্ক", "ডিজিটাল ডেটাবেস", "জরুরি হটলাইন"],
      tag: "রোডম্যাপ",
    },
  },
  {
    range: [0.75, 1],
    title: "প্রতিটি গ্রুপই গুরুত্বপূর্ণ।",
    left: {
      icon: "✅",
      heading: "কেন UBF?",
      bullets: ["যাচাইকৃত ডোনার", "জরুরি প্রতিক্রিয়া দল", "সম্প্রদায়ভিত্তিক"],
      tag: "আমাদের প্রতিশ্রুতি",
    },
    right: {
      icon: "📞",
      heading: "যোগাযোগ",
      contacts: [
        { label: "ফোন", val: "01707509461" },
        { label: "ইমেইল", val: "contact1.ubf@gmail.com" },
      ],
      tag: "জরুরি",
    },
  },
];

// ─── Info Card ────────────────────────────────────────────────────────────────
function InfoCard({ data, compact = false }) {
  return (
    <div className={`glass-card rounded-xl ${compact ? "p-3" : "p-4"} w-full`}>
      <span
        className="inline-block px-2 py-0.5 text-[9px] bg-red-50 text-red-600 rounded-full border border-red-100 tracking-wide mb-2"
        style={{ fontFamily: "var(--font-hind)" }}
      >
        {data.tag}
      </span>

      <div className="flex items-center gap-2 mb-2">
        <span className={compact ? "text-base" : "text-lg"}>{data.icon}</span>
        <h3
          className={`font-semibold ${compact ? "text-xs" : "text-sm"} text-[#0a0a0a] leading-snug`}
          style={{ fontFamily: "var(--font-hind)" }}
        >
          {data.heading}
        </h3>
      </div>

      {data.body && (
        <p
          className={`text-[#0a0a0a]/60 ${compact ? "text-[10px]" : "text-xs"} leading-relaxed`}
          style={{ fontFamily: "var(--font-hind)" }}
        >
          {data.body}
        </p>
      )}

      {data.groups && (
        <div className="grid grid-cols-4 gap-1">
          {data.groups.map((g) => (
            <span
              key={g}
              className={`flex items-center justify-center ${compact ? "h-6 text-[9px]" : "h-7 text-[10px]"} rounded-md bg-red-600 text-white font-bold`}
            >
              {g}
            </span>
          ))}
        </div>
      )}

      {data.stats && (
        <div className="space-y-1.5">
          {data.stats.map((s) => (
            <div key={s.label} className="flex justify-between items-center">
              <span
                className="text-[10px] text-[#0a0a0a]/50"
                style={{ fontFamily: "var(--font-hind)" }}
              >
                {s.label}
              </span>
              <span className={`${compact ? "text-xs" : "text-sm"} font-bold text-red-600`}>
                {s.val}
              </span>
            </div>
          ))}
        </div>
      )}

      {data.bullets && (
        <ul className="space-y-1">
          {data.bullets.map((b) => (
            <li
              key={b}
              className={`flex items-start gap-1.5 ${compact ? "text-[10px]" : "text-xs"} text-[#0a0a0a]/60`}
              style={{ fontFamily: "var(--font-hind)" }}
            >
              <span className="text-red-500 mt-0.5 flex-shrink-0 text-[8px]">◆</span>
              {b}
            </li>
          ))}
        </ul>
      )}

      {data.contacts && (
        <div className="space-y-1.5">
          {data.contacts.map((c) => (
            <div key={c.label}>
              <p
                className="text-[9px] text-[#0a0a0a]/40 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-hind)" }}
              >
                {c.label}
              </p>
              <p className={`${compact ? "text-[10px]" : "text-xs"} font-medium text-[#0a0a0a] break-all`}>
                {c.val}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Animated side card wrapper ────────────────────────────────────────────────
function SideCard({ data, side, stageKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stageKey + side}
        initial={{ opacity: 0, x: side === "left" ? -24 : 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: side === "left" ? -16 : 16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-52 xl:w-60"
      >
        <InfoCard data={data} />
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Center title overlay ─────────────────────────────────────────────────────
function CenterTitle({ title, stageKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stageKey}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center pointer-events-none text-center px-4"
      >
        <div className="w-6 h-[2px] bg-red-500 mx-auto mb-3" />
        <h2
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight drop-shadow-[0_2px_30px_rgba(0,0,0,0.95)]"
          style={{ fontFamily: "var(--font-hind)" }}
        >
          {title}
        </h2>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
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

  // Track which stage is active
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = stages.findIndex((s) => v >= s.range[0] && v < s.range[1]);
      setActiveStage(idx === -1 ? stages.length - 1 : idx);
    });
  }, [scrollYProgress]);

  // Preload all frames
  useEffect(() => {
    const images = [];
    let count = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        count++;
        setLoadProgress(Math.floor((count / FRAME_COUNT) * 100));
        if (count === FRAME_COUNT) setLoaded(true);
      };
      images.push(img);
    }
    setImagesArray(images);
  }, []);

  // RAF canvas paint — uses the ONE canvas ref for all screen sizes
  const paint = useCallback((val, canvas, ctx, imgs) => {
    const idx = Math.min(Math.max(Math.floor(val) - 1, 0), FRAME_COUNT - 1);
    const img = imgs[idx];
    if (!img || !ctx) return;
    const hr = canvas.width / img.width;
    const vr = canvas.height / img.height;
    const r  = Math.max(hr, vr);
    const cx = (canvas.width  - img.width  * r) / 2;
    const cy = (canvas.height - img.height * r) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, cx, cy, img.width * r, img.height * r);
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const syncSize = () => {
      // Use logical CSS pixels — no DPR scaling, keeps drawing math simple & centered
      canvas.width  = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      paint(frameIndex.get(), canvas, ctx, imagesArray);
    };

    syncSize();
    window.addEventListener("resize", syncSize);

    const unsub = frameIndex.on("change", (val) => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => paint(val, canvas, ctx, imagesArray));
    });

    return () => {
      unsub();
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", syncSize);
    };
  }, [loaded, frameIndex, imagesArray, paint]);

  const stage = stages[activeStage];

  return (
    <section ref={containerRef} className="relative h-[300vh]">

      {/* ── Single sticky viewport — one canvas for ALL screen sizes ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">

        {/* ── Loading overlay ── */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#fafafa]">
            <p
              className="text-[#0a0a0a]/40 uppercase tracking-[0.3em] text-xs mb-5"
              style={{ fontFamily: "var(--font-hind)" }}
            >
              লোড হচ্ছে
            </p>
            <div className="w-40 h-[2px] bg-[#0a0a0a]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600 transition-all duration-150 rounded-full"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="mt-2 text-red-600 text-xs font-medium">{loadProgress}%</p>
          </div>
        )}

        {/* ── THE single canvas — absolutely fills the container ── */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
          style={{ objectFit: "cover" }}
        />

        {/* Vignette for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_25%,rgba(5,5,5,0.6)_100%)] pointer-events-none" />

        {/* ── Desktop: Left card — shown md+ ── */}
        {loaded && (
          <div className="hidden md:flex absolute left-5 xl:left-10 top-1/2 -translate-y-1/2 z-20">
            <SideCard data={stage.left} side="left" stageKey={activeStage} />
          </div>
        )}

        {/* ── Desktop: Right card — shown md+ ── */}
        {loaded && (
          <div className="hidden md:flex absolute right-5 xl:right-10 top-1/2 -translate-y-1/2 z-20">
            <SideCard data={stage.right} side="right" stageKey={activeStage} />
          </div>
        )}

        {/* ── Center title — shown on ALL screen sizes ── */}
        {loaded && (
          <div className="absolute bottom-[22%] md:bottom-[15%] inset-x-0 flex justify-center z-20">
            <CenterTitle title={stage.title} stageKey={activeStage} />
          </div>
        )}

        {/* ── Mobile: compact card strip at bottom ── */}
        {loaded && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex md:hidden absolute bottom-0 inset-x-0 z-20 bg-white/90 backdrop-blur-sm border-t border-black/8"
            >
              <div className="grid grid-cols-2 gap-2 p-3 w-full">
                <InfoCard data={stage.left} compact />
                <InfoCard data={stage.right} compact />
              </div>
            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </section>
  );
}

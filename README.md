# উত্তরা ব্লাড ফাউন্ডেশন — Uttara Blood Foundation Website

> **"রক্তের অভাবে কেউ যেন মারা না যায়"** — এটাই আমাদের প্রতিশ্রুতি।

A high-end **Scrollytelling** landing page for Uttara Blood Foundation, built with Next.js 14, Framer Motion, and an HTML5 Canvas image sequence. As the user scrolls, a blood droplet disassembles into an explosion of blood groups — symbolizing the foundation's life-saving reach across Uttara, Dhaka.

---

## 🌐 Live Features

- **240-frame Canvas Scroll Sequence** — butter-smooth blood drop animation tied to scroll position
- **4-Stage Side Info Cards** — contextual left & right cards appear at each scroll stage
- **Full Bengali (Bangla) Language** — entire UI in বাংলা with Hind Siliguri font
- **Sticky Navbar** — transparent → white on scroll, mobile hamburger drawer
- **White Theme** — clean `#FAFAFA` background with crimson red accents
- **Dark Footer** — intentional dark anchor with pulsing red CTA
- **Mobile Responsive** — side cards stack below canvas on smaller screens

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | JavaScript (React) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Canvas Rendering | HTML5 Canvas + `requestAnimationFrame` |
| Font | Hind Siliguri (Bengali), Geist Sans |

---

## 🚀 Getting Started on a New Device

### Prerequisites
Make sure the device has **Node.js (v18+)** and **Git** installed.
- Download Node.js: https://nodejs.org
- Download Git: https://git-scm.com

### Step 1 — Clone the repository
```bash
git clone https://github.com/farhan1824/Uttara-Blood-Foundation-Website.git
```

### Step 2 — Move into the project folder
```bash
cd Uttara-Blood-Foundation-Website
```

### Step 3 — Install dependencies
```bash
npm install
```
> `node_modules` is excluded from Git via `.gitignore`. This command rebuilds it from `package.json`.

### Step 4 — Start the development server
```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. ✅

---

## 📦 Production Build (Optional)

```bash
npm run build    # Build optimized production output
npm run start    # Serve the production build locally
```

---

## 🔄 Pushing Future Updates

```bash
git add .
git commit -m "your commit message"
git push
```

---

## 📁 Project Structure

```
Uttara-Blood-Foundation-Website/
├── public/
│   └── sequence/          # 240 blood drop animation frames (ezgif-frame-001.jpg … 240.jpg)
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles, white theme, animations
│   │   ├── layout.js      # Root layout, Bengali font, metadata
│   │   └── page.js        # Page assembly
│   └── components/
│       ├── Navbar.jsx             # Sticky navbar with mobile drawer
│       ├── Hero.jsx               # Hero section with tagline and CTAs
│       ├── CanvasScrollSequence.jsx  # Core canvas scroll + side cards
│       ├── Mission.jsx            # About, stats, events, vision
│       └── Footer.jsx             # Dark footer with CTA
├── .gitignore
├── next.config.mjs
├── package.json
└── tailwind.config.js
```

---

## 📞 Contact

| Channel | Details |
|---|---|
| 📧 Email | contact1.ubf@gmail.com |
| 📞 Phone | 01707509461 / 01633032605 |
| 📘 Facebook | [facebook.com/uttarabloodfoundation](https://www.facebook.com/uttarabloodfoundation) |
| 📍 Address | উত্তরা মডেল টাউন, ঢাকা |

---

© 2026 Uttara Blood Foundation. All Rights Reserved.

import localFont from "next/font/local";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata = {
  title: "উত্তরা ব্লাড ফাউন্ডেশন | জীবন বাঁচাই, একসাথে",
  description:
    "রক্তের অভাবে কেউ যেন মারা না যায়। উত্তরা ব্লাড ফাউন্ডেশন — রক্তদাতা ও রোগীদের সংযুক্ত করে এবং ঢাকার উত্তরায় জীবন রক্ষাকারী ক্যাম্প পরিচালনা করে।",
  keywords: ["রক্তদান", "উত্তরা", "ব্লাড ফাউন্ডেশন", "Uttara Blood Foundation", "blood donation", "Dhaka"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${hindSiliguri.variable} font-sans antialiased bg-[#fafafa] text-[#0a0a0a]`}
      >
        {children}
      </body>
    </html>
  );
}

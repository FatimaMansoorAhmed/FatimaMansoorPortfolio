import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Fatima Mansoor — Portfolio",
  description: "Software Engineer & AI/ML Specialist based in Karachi, Pakistan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} scroll-smooth`}>
      <body className="bg-portfolio-bg text-portfolio-text font-sans antialiased text-[15px] leading-relaxed min-h-screen">
        {children}
      </body>
    </html>
  );
}
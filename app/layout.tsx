import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Build03 | 지능형 AI 및 모바일 엔지니어링 스튜디오',
  description: 'Next-Generation AI Applications & Mobile Software Engineering Studio',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
  lang="ko"
  suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

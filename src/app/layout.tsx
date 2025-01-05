import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chetan Singalreddy",
  description: "My personal website and blog :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-center">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            chetanrs.dev
          </code>
        </header>
        <div className="flex ml-8 mt-8 mr-8 mb-8 justify-center">
          {children}
        </div>
        <footer className="flex justify-center">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://chetanrs.dev/" className="hover:underline">
                Chetan Singalreddy
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}

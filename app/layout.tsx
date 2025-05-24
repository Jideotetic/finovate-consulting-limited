import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NextProgressBarProvider from "@/components/progress-bar-provider";
import * as motion from "motion/react-client";
import NavBar from "@/components/nav-bar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finovate Consulting Limited",
  description: "Finovate Consulting Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased text-base md:text-lg`}
      >
        <NextProgressBarProvider>
          <header>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-xl fixed left-0 right-0 top-0 z-50"
            >
              <NavBar />
            </motion.div>
          </header>

          {children}
        </NextProgressBarProvider>
      </body>
    </html>
  );
}

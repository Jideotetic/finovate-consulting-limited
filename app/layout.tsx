import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NextProgressBarProvider from "@/components/progress-bar-provider";

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
        className={`${montserrat.variable} antialiased text-gray-700 text-base md:text-lg`}
      >
        <NextProgressBarProvider>{children}</NextProgressBarProvider>
      </body>
    </html>
  );
}

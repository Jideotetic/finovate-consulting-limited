import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NextProgressBarProvider from "@/components/progress-bar-provider";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

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
    <html lang="en" className="scroll-smooth scroll-pt-[80px]">
      <body
        className={`${montserrat.variable} antialiased text-base md:text-lg`}
      >
        <NextProgressBarProvider>
          <Header />
          {children}
          <Footer />
        </NextProgressBarProvider>
      </body>
    </html>
  );
}

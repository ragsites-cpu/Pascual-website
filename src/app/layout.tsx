import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "----sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonathan Drain Cleaning - 24/7 Jetting Service",
  description: "Professional drain cleaning and jetting services in Los Angeles. Serving Beverly Hills, Calabasas, Thousand Oaks, Pasadena, Santa Clarita, Pacific Palisades & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

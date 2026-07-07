import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Wild Card Project | Turning Wild Cards into Aces",
  description:
    "A youth-focused nonprofit in Ghana working across Education, Wellbeing, and Empowerment. We help overlooked young people become aces.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${crimson.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

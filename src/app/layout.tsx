import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


const roboto = Roboto({
  weight: ["500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const theBoldFont = localFont({
  src: "../../public/fonts/THE_BOLD_FONT.ttf",
  variable: "--font-bold-font",
});

export const metadata: Metadata = {
  title: {
    default: "TechHOUNDS",
    template: "TechHOUNDS - %s",
  },
  description: "FRC teams 868 and 761: the TechHOUNDS and TechPUPS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${bebasNeue.variable} ${theBoldFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

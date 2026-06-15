import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import { Inter, Playfair_Display } from "next/font/google";
import WhatsAppWidget from "../components/WhatsAppWidget";


export const metadata: Metadata = {
  title: "MyRide Transit | Independent Transport Providers",
  description: "Focus on the road. We handle the calls.",
};


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], style: "italic", variable: "--font-playfair" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#F7F7F7]`}>      
      <div className="fixed top-0 left-0 w-full h-20 z-40 pointer-events-none backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]" />       
        <SmoothScroll>
          {children}
          <WhatsAppWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
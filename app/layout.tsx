import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "The Stay Adda | Premium Boys PG in Indirapuram, Ghaziabad",
  description: "Experience luxury living at The Stay Adda. Safe, comfortable, and affordable boys PG with high-speed WiFi, hygienic food, and 24/7 security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(poppins.variable, "font-poppins antialiased bg-white text-navy-900")}>
        {children}
      </body>
    </html>
  );
}

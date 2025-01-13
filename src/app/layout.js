import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  styles: ["normal", "italic"],
});
export const metadata = {
  title: "Wolt - Modern E-Commerce Platform",
  description:
    "Experience the next generation of online shopping with Wolt. Discover a wide range of products, seamless checkout, and fast delivery.",
  keywords: [
    "e-commerce",
    "online shopping",
    "Wolt",
    "buy online",
    "modern shopping platform",
    "fast delivery",
  ],
  icons: {
    icon: "/favicon.avif",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}  bg-bodyColor`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

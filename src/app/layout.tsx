import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "IVA Logistics – Same-Day Pickup & Delivery in Owerri",
    template: "%s | IVA Logistics",
  },
  description:
    "Book fast, reliable delivery for packages, errands, food orders, and business dispatch across Owerri, Imo State.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

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
        {/* Scroll-triggered reveal — observes .reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var selectors = '.reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger';
  function observe(){
    var els = document.querySelectorAll(selectors);
    if(!els.length) return;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    },{ threshold: 0.12 });
    els.forEach(function(el){ io.observe(el); });
  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',observe); }
  else { observe(); }
  // re-observe on client-side navigation (Next.js)
  var _pushState = history.pushState.bind(history);
  history.pushState = function(){ _pushState.apply(history,arguments); setTimeout(observe,120); };
})();
            `,
          }}
        />
      </body>
    </html>
  );
}

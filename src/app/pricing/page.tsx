import type { Metadata } from "next";
import Image from "next/image";
import PricingCalculator from "@/components/PricingCalculator";

export const metadata: Metadata = { title: "Pricing Calculator" };

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", color: "#fff" }}>
        <Image src="/images/hero-pricing.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.72)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "3rem 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Pricing</h1>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
        <PricingCalculator />
        </div>
      </section>

      {/* Visual CTA */}
      <section style={{ background: "#111", padding: "0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "center" }}>
          <div className="reveal-left" style={{ overflow: "hidden", maxHeight: 420 }}>
            <Image
              src="/images/booking-pricing-still-life.png"
              alt="IVA Logistics packages, clipboard, and helmet on a desk"
              width={700}
              height={420}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div className="reveal-right" style={{ padding: "3rem 2rem" }}>
            <p className="section-label" style={{ color: "#ff6b6b" }}>No Hidden Fees</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem", lineHeight: 1.2 }}>
              What you see is what you pay
            </h2>
            <p style={{ color: "#ccc", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Our pricing is straightforward — base price by zone, plus package type and urgency fees. No surprises at the door.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/booking" style={{ display: "inline-block", background: "var(--brand-red)", color: "#fff", fontWeight: 600, padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none" }}>Book Now</a>
              <a href="https://wa.me/2349137960145" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#25d366", color: "#fff", fontWeight: 600, padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none" }}>Ask on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

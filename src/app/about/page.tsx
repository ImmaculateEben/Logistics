import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "About Us" };

const reasons = [
  {
    title: "Fast & Reliable",
    desc: "We pick up and deliver on time, every time. Your package is our priority.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
        <path d="M7 3 4 6" />
        <path d="m17 3 3 3" />
      </svg>
    ),
  },
  {
    title: "Local Knowledge",
    desc: "We know Owerri inside out — every street, area, and shortcut.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </svg>
    ),
  },
  {
    title: "Easy Booking",
    desc: "Book via our website or WhatsApp in under 2 minutes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M10 7h4" />
        <path d="m9 14 2 2 4-5" />
      </svg>
    ),
  },
  {
    title: "Live Tracking",
    desc: "Track your delivery progress with a unique tracking ID.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
        <path d="M3 20h6" />
        <path d="M15 20h6" />
      </svg>
    ),
  },
  {
    title: "Vendor Support",
    desc: "Built for businesses — fast repeat bookings, order history, and dedicated service.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 10h16" />
        <path d="M5 10l1-5h12l1 5" />
        <path d="M6 10v9h12v-9" />
        <path d="M9 19v-5h6v5" />
      </svg>
    ),
  },
  {
    title: "Friendly Team",
    desc: "Our riders are professional, courteous, and careful with your items.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 10h.01" />
        <path d="M16 10h.01" />
        <path d="M8.5 15c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", color: "#fff" }}>
        <Image src="/images/hero-about.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.72)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "3rem 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fff", margin: 0 }}>About Us</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div className="reveal-left">
            <p className="section-label">Our Mission</p>
            <h2 className="section-title">Making delivery simple for Owerri</h2>
            <p style={{ color: "var(--brand-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
              We believe everyone in Owerri deserves access to fast, trustworthy delivery — whether you are an individual sending a package across town or a business running daily dispatch operations.
            </p>
            <p style={{ color: "var(--brand-muted)", lineHeight: 1.8 }}>
              Our mission is to reduce the back-and-forth, cut delivery times, and give customers and vendors a reliable logistics partner they can count on every day.
            </p>
          </div>
          <div className="reveal-right" style={{ background: "var(--brand-gray)", borderRadius: "1rem", padding: "2rem", border: "1px solid var(--brand-border)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[
                { num: "500+", label: "Deliveries completed" },
                { num: "200+", label: "Happy customers" },
                { num: "50+", label: "Vendor partners" },
                { num: "2hr", label: "Average delivery time" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--brand-red)", margin: 0 }}>{s.num}</p>
                  <p style={{ color: "var(--brand-muted)", fontSize: "0.85rem", margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section" style={{ background: "var(--brand-gray)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">The IVA Logistics difference</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {reasons.map((r, i) => (
              <div key={r.title} className="reveal" style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.5rem", border: "1px solid var(--brand-border)", transitionDelay: `${i * 0.08}s` }}>
                <div style={{ width: 48, height: 48, background: "rgba(224, 32, 32, 0.1)", color: "var(--brand-red)", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  {r.icon}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.4rem" }}>{r.title}</h3>
                <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating info */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
          <div className="reveal" style={{ background: "var(--brand-gray)", borderRadius: "0.75rem", padding: "2rem", border: "1px solid var(--brand-border)" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Operating Hours</h3>
              <p style={{ color: "var(--brand-muted)", marginBottom: "0.4rem" }}>Monday – Saturday: 8:00 AM – 8:00 PM</p>
              <p style={{ color: "var(--brand-muted)" }}>Sunday: Available for scheduled bookings</p>
            </div>
          <div className="reveal" style={{ background: "var(--brand-gray)", borderRadius: "0.75rem", padding: "2rem", border: "1px solid var(--brand-border)", transitionDelay: "0.1s" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Service Location</h3>
              <p style={{ color: "var(--brand-muted)", marginBottom: "0.4rem" }}>Owerri, Imo State</p>
              <p style={{ color: "var(--brand-muted)" }}>All major areas and neighborhoods within Owerri municipality.</p>
            </div>
          <div className="reveal" style={{ background: "var(--brand-gray)", borderRadius: "0.75rem", padding: "2rem", border: "1px solid var(--brand-border)", transitionDelay: "0.2s" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Get in Touch</h3>
              <a href="tel:+2349137960145" style={{ color: "var(--brand-red)", display: "block", marginBottom: "0.4rem", textDecoration: "none", fontWeight: 600 }}>+234 913 796 0145</a>
              <a href="https://wa.me/2349137960145" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand-muted)", textDecoration: "none" }}>WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--brand-red)", color: "#fff", padding: "3.5rem 1rem", textAlign: "center" }}>
        <div className="container reveal" style={{ maxWidth: 560 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.75rem" }}>Start your first delivery today</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.75rem" }}>Book online or contact us on WhatsApp.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/booking" className="btn-white">Book Delivery</Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "2px solid #fff", color: "#fff", fontWeight: 600, padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

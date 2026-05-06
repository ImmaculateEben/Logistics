import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Services" };

const services = [
  {
    title: "Same-Day Pickup & Delivery",
    image: "/images/service-same-day-delivery.png",
    desc: "Need something delivered today? We pick up from your location and deliver to the receiver the same day. Perfect for urgent items, documents, or time-sensitive packages.",
    features: ["Pickup within the hour", "Delivered same day", "WhatsApp updates"],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    title: "Package Delivery",
    image: "/images/service-package-delivery.png",
    desc: "Send packages, documents, parcels, and everyday items anywhere across Owerri. We handle your items with care and deliver safely to the right person.",
    features: ["All package sizes", "Documents & parcels", "Careful handling"],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  },
  {
    title: "Food Delivery Support",
    image: "/images/service-food-delivery.png",
    desc: "We partner with food vendors and restaurants to deliver fresh food orders to customers. Keep your food business running smoothly with our reliable dispatch service.",
    features: ["Fast food delivery", "Restaurant support", "Insulated handling"],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  },
  {
    title: "Errands",
    image: "/images/service-errands.png",
    desc: "Need us to pick something up on your behalf? We run errands — collect items from shops, pharmacies, markets, and more — and bring them to you.",
    features: ["Market pickups", "Shop collections", "Pharmacy runs"],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
  },
  {
    title: "Business / Vendor Deliveries",
    image: "/images/service-vendor-deliveries.png",
    desc: "Built for businesses that need daily or weekly dispatch. Register as a vendor, save your pickup address, and create bookings faster with our vendor dashboard.",
    features: ["Saved pickup address", "Order history", "Priority support"],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  },
  {
    title: "Scheduled Deliveries",
    image: "/images/service-scheduled-deliveries.png",
    desc: "Plan your deliveries ahead of time. Choose a preferred pickup date and time and we will be there. Great for businesses planning their logistics in advance.",
    features: ["Choose pickup time", "Advance planning", "Booking confirmation"],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", color: "#fff" }}>
        <Image src="/images/hero-services.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.72)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "3rem 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Our Services</h1>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem" }}>
            {services.map((s, i) => (
              <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="service-card" style={{ border: "1px solid var(--brand-border)", borderRadius: "0.75rem", overflow: "hidden", background: "#fff", height: "100%" }}>
                <div className="service-card-img" style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover", transition: "transform 0.45s ease" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
                </div>
                <div style={{ padding: "1.5rem" }}>
                    <h2 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>{s.title}</h2>
                    <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {s.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", color: "var(--fg)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
          border-color: var(--brand-red) !important;
        }
        .service-card:hover .service-card-img img {
          transform: scale(1.06);
        }
        .service-card:hover h2 {
          color: var(--brand-red);
        }
      `}</style>

      {/* CTA */}
      <section style={{ background: "var(--brand-red)", color: "#fff", padding: "3.5rem 0", textAlign: "center" }}>
        <div className="container reveal" style={{ maxWidth: 560 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.75rem" }}>Ready to get started?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.75rem" }}>Book a delivery now or calculate your price first.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/booking" className="btn-white">Book Delivery</Link>
            <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "2px solid #fff", color: "#fff", fontWeight: 600, padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none" }}>
              Calculate Price
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVA Logistics – Same-Day Pickup & Delivery in Owerri",
};

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    ),
    title: "Same-Day Delivery",
    image: "/images/service-same-day-delivery.png",
    desc: "Fast pickup and delivery within Owerri for urgent personal and business items.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
    ),
    title: "Package Delivery",
    image: "/images/service-package-delivery.png",
    desc: "Send documents, parcels, and everyday packages safely across Owerri.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    title: "Vendor Deliveries",
    image: "/images/service-vendor-deliveries.png",
    desc: "Reliable dispatch support for online sellers, food vendors, and local stores.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: "Scheduled Deliveries",
    image: "/images/service-scheduled-deliveries.png",
    desc: "Plan ahead and book deliveries at your preferred time.",
  },
];

const steps = [
  { num: "01", title: "Book Online", desc: "Fill our simple booking form with pickup and delivery details." },
  { num: "02", title: "We Confirm", desc: "IVA Logistics confirms your booking and assigns a rider." },
  { num: "03", title: "Pickup", desc: "Our rider picks up your package from your location." },
  { num: "04", title: "Delivered", desc: "Your package is delivered safely. Track progress with your tracking ID." },
];

const reviews = [
  { name: "Adaeze O.", text: "Super fast! My package was delivered within 2 hours. Will use again." },
  { name: "Chukwuemeka N.", text: "IVA Logistics is my go-to for all my dispatch needs. Very reliable." },
  { name: "Ugochi M.", text: "As a vendor, the repeat delivery service saves me so much time every day." },
  { name: "Tochukwu I.", text: "Excellent customer service and the WhatsApp updates are very convenient." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        position: "relative",
        minHeight: 680,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
      }}>
        {/* Background image */}
        <Image
          src="/images/hero-delivery-rider.png"
          alt=""
          fill
          className="hero-bg-img"
          style={{ objectFit: "cover", objectPosition: "right 30%" }}
          priority
        />
        {/* Dark overlay — strong on left, fades right; fully dark on mobile */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.85) 42%, rgba(8,8,8,0.35) 70%, rgba(8,8,8,0.0) 100%)" }} className="hero-overlay" />

        {/* Content */}
        <div className="hero-content" style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>

          {/* Location pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "0.4rem 1rem", marginBottom: "1.75rem" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#e02020"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span style={{ fontSize: "0.88rem", color: "#ddd" }}>Owerri, Imo State</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline" style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem", color: "#fff", maxWidth: 600 }}>
            Same-Day Pickup<br className="hero-mobile-br" /> &amp; Delivery in{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              Owerri
              <span style={{ position: "absolute", bottom: "-5px", left: 0, right: 0, height: "4px", background: "#e02020", borderRadius: "2px" }} />
            </span>
          </h1>

          <p className="hero-desc" style={{ fontSize: "1.05rem", color: "#bbb", marginBottom: "1.5rem", lineHeight: 1.7, maxWidth: 480 }}>
            Book fast, reliable delivery for packages, errands, food orders, and business dispatch across Owerri.
          </p>

          {/* CTA buttons */}
          <div className="hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
            <Link href="/booking" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#e02020", color: "#fff", fontWeight: 700, fontSize: "0.95rem", padding: "0.8rem 1.6rem", borderRadius: "0.5rem", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              Book Delivery
            </Link>
            <Link href="/track" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#e02020", fontWeight: 700, fontSize: "0.95rem", padding: "0.8rem 1.6rem", borderRadius: "0.5rem", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              Track Order
            </Link>
          </div>
          <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", color: "#aaa", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/></svg>
            Calculate Price
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>

        </div>
      </section>

      <style>{`
        .hero-mobile-br { display: none; }
        @media (max-width: 768px) {
          .hero-bg-img { object-position: 65% 30% !important; }
          .hero-overlay { background: linear-gradient(to bottom, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.78) 55%, rgba(8,8,8,0.55) 100%) !important; }
          .hero-mobile-br { display: block; }
          .hero-content { padding: 2.5rem 1.25rem !important; }
          .hero-headline { font-size: 2.5rem !important; line-height: 1.12 !important; }
          .hero-desc { font-size: 0.98rem !important; margin-bottom: 1.25rem !important; }
          .hero-cta a { font-size: 0.95rem !important; padding: 0.78rem 1.35rem !important; }
        }
      `}</style>

      {/* Services highlights */}
      <section className="section" style={{ background: "var(--brand-gray)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Delivery services for everyone</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              From personal parcels to business dispatch, we cover all your logistics needs in Owerri.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.5rem" }}>
            {services.map((s, i) => (
              <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="home-service-card" style={{ background: "#fff", borderRadius: "0.75rem", border: "1px solid var(--brand-border)", overflow: "hidden", height: "100%" }}>
                <div className="home-service-card-img" style={{ position: "relative", height: 180, overflow: "hidden" }}>
                  <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover", transition: "transform 0.45s ease" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" }} />
                </div>
                <div style={{ padding: "1.4rem" }}>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "1.05rem" }}>{s.title}</h3>
                  <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: "var(--brand-gray)", overflow: "hidden" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Simple Process</p>
            <h2 className="section-title">How delivery works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", position: "relative" }}>
            {/* Connector: gray base + animated red fill + moving dot */}
            <div className="steps-connector" style={{ position: "absolute", top: 28, left: "12.5%", right: "12.5%", height: 2, background: "#e5e5e5", zIndex: 0 }}>
              <div className="connector-fill" style={{ position: "absolute", inset: 0, background: "var(--brand-red)", transformOrigin: "left center" }} />
              <div className="connector-dot" style={{ position: "absolute", top: "50%", left: 0, width: 14, height: 14, borderRadius: "50%", background: "var(--brand-red)", border: "2px solid #fff", boxShadow: "0 0 0 3px rgba(224,32,32,0.3)", transform: "translate(-50%, -50%)" }} />
            </div>
            {steps.map((step, i) => (
              <div key={step.num} className={`step-card step-card-${i}`} style={{ textAlign: "center", padding: "0 1rem 2rem", position: "relative", zIndex: 1 }}>
                {/* Number bubble */}
                <div style={{
                  width: 56, height: 56,
                  borderRadius: "50%",
                  background: "var(--brand-red)",
                  color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: "1.1rem",
                  margin: "0 auto 1.25rem",
                  boxShadow: "0 0 0 6px rgba(224,32,32,0.12), 0 4px 16px rgba(224,32,32,0.25)",
                  position: "relative",
                }}>
                  {step.num}
                  {/* Pulse ring */}
                  <span className={`pulse-ring pulse-ring-${i}`} style={{
                    position: "absolute", inset: -8,
                    borderRadius: "50%",
                    border: "2px solid rgba(224,32,32,0.4)",
                  }} />
                </div>
                {/* Card */}
                <div className="step-inner" style={{
                  background: "#fff",
                  borderRadius: "0.85rem",
                  padding: "1.25rem 1rem",
                  border: "1px solid var(--brand-border)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.4rem", fontSize: "1rem" }}>{step.title}</h3>
                  <p style={{ color: "var(--brand-muted)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .step-card { opacity: 0; transform: translateY(28px); animation: stepFadeUp 0.5s ease forwards; }
        .step-card-0 { animation-delay: 0.1s; }
        .step-card-1 { animation-delay: 0.25s; }
        .step-card-2 { animation-delay: 0.4s; }
        .step-card-3 { animation-delay: 0.55s; }
        @keyframes stepFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .connector-fill { animation: fillLine 2.4s ease forwards; animation-delay: 0.3s; transform: scaleX(0); }
        @keyframes fillLine {
          to { transform: scaleX(1); }
        }
        .connector-dot { animation: moveDot 2.4s ease forwards; animation-delay: 0.3s; }
        @keyframes moveDot {
          0%   { left: 0%; }
          100% { left: 100%; }
        }
        .pulse-ring { animation: pulseRing 2s ease-out infinite; }
        .pulse-ring-1 { animation-delay: 0.5s; }
        .pulse-ring-2 { animation-delay: 1s; }
        .pulse-ring-3 { animation-delay: 1.5s; }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .step-inner:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(0,0,0,0.12) !important; }
        @media (max-width: 768px) {
          .steps-connector { display: none; }
        }
        .home-service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .home-service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
          border-color: var(--brand-red) !important;
        }
        .home-service-card:hover .home-service-card-img img {
          transform: scale(1.06);
        }
        .home-service-card:hover h3 {
          color: var(--brand-red);
        }
        @media (max-width: 768px) {
          .vendor-img-wrap { width: 100% !important; left: 0 !important; }
          .vendor-img-wrap img { object-position: center top !important; }
          .vendor-overlay { background: linear-gradient(to bottom, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.72) 50%, rgba(8,8,8,0.45) 100%) !important; }
        }
      `}</style>

      {/* Pricing CTA */}
      <section className="section" style={{ background: "var(--brand-gray)" }}>
        <div className="container reveal" style={{ textAlign: "center" }}>
          <p className="section-label">Transparent Pricing</p>
          <h2 className="section-title">Know your delivery cost upfront</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 2rem" }}>
            Use our pricing calculator to estimate your delivery fee before booking. No hidden charges.
          </p>
          <Link href="/pricing" className="btn-primary">Calculate Price</Link>
        </div>
      </section>

      {/* Vendor CTA */}
      <section style={{ position: "relative", minHeight: 520, display: "flex", alignItems: "center", background: "#111", color: "#fff", overflow: "hidden" }}>
        {/* Image anchored to the right, smaller than full width */}
        <div className="vendor-img-wrap" style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "75%" }}>
          <Image src="/images/service-vendor-deliveries.png" alt="Vendor delivery" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        {/* Gradient fades the image into the dark left side */}
        <div className="vendor-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,8,1) 0%, rgba(8,8,8,0.97) 30%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.0) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="reveal-left" style={{ maxWidth: 520 }}>
            <p className="section-label" style={{ color: "#ff6b6b" }}>For Businesses</p>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "1rem", lineHeight: 1.2 }}>
              Are you a vendor or business owner?
            </h2>
            <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
              Register as a vendor and get faster bookings, order history, saved pickup addresses, and dedicated dispatch support for your business.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/vendors" className="btn-primary">Register as Vendor</Link>
              <Link href="/vendors#login" className="btn-white">Vendor Login</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Customer Reviews</p>
            <h2 className="section-title">What our customers say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {reviews.map((r, i) => (
              <div key={r.name} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="card-hover" style={{ background: "var(--brand-gray)", borderRadius: "0.75rem", padding: "1.5rem", border: "1px solid var(--brand-border)", height: "100%" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.75rem" }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--brand-red)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ color: "var(--fg)", marginBottom: "0.75rem", fontStyle: "italic", fontSize: "0.95rem" }}>&ldquo;{r.text}&rdquo;</p>
                <p style={{ fontWeight: 700, fontSize: "0.9rem", margin: 0, color: "var(--brand-red)" }}>{r.name}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ background: "var(--brand-red)", color: "#fff", padding: "3.5rem 0", textAlign: "center" }}>
        <div className="container reveal" style={{ maxWidth: 640 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.75rem" }}>Ready to book a delivery?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.75rem" }}>
            Contact us on WhatsApp or book directly online. We deliver across Owerri.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/booking" className="btn-white">Book Delivery</Link>
            <a
              href="https://wa.me/2349137960145?text=Hi%20IVA%20Logistics%2C%20I%20want%20to%20book%20a%20delivery"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#25d366", color: "#fff", fontWeight: 600, padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none" }}
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", color: "#fff" }}>
        <Image src="/images/hero-contact.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.72)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "3rem 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Contact Us</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}>
          {/* Contact options */}
          <div className="reveal-left">
            <h2 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.75rem" }}>How to reach us</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <a
                href="https://wa.me/2349137960145?text=Hi%20IVA%20Logistics%2C%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row"
                style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "0.75rem", padding: "1.25rem", textDecoration: "none" }}
              >
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#25d366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#166534", margin: "0 0 0.2rem" }}>WhatsApp</p>
                  <p style={{ color: "#16a34a", fontSize: "0.9rem", margin: 0 }}>+234 913 796 0145 – Chat with us instantly</p>
                </div>
              </a>

              <a
                href="tel:+2349137960145"
                className="contact-row"
                style={{ display: "flex", alignItems: "center", gap: "1rem", background: "var(--brand-gray)", border: "1px solid var(--brand-border)", borderRadius: "0.75rem", padding: "1.25rem", textDecoration: "none" }}
              >
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--brand-red)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.15 6.15l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "var(--fg)", margin: "0 0 0.2rem" }}>Phone Call</p>
                  <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem", margin: 0 }}>+234 913 796 0145</p>
                </div>
              </a>

              <a
                href="https://instagram.com/ivalogistics"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row"
                style={{ display: "flex", alignItems: "center", gap: "1rem", background: "var(--brand-gray)", border: "1px solid var(--brand-border)", borderRadius: "0.75rem", padding: "1.25rem", textDecoration: "none" }}
              >
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "var(--fg)", margin: "0 0 0.2rem" }}>Instagram</p>
                  <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem", margin: 0 }}>@ivalogistics</p>
                </div>
              </a>

              <div style={{ background: "var(--brand-gray)", border: "1px solid var(--brand-border)", borderRadius: "0.75rem", padding: "1.25rem" }}>
                <p style={{ fontWeight: 700, margin: "0 0 0.4rem" }}>Business Hours</p>
                <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem", margin: "0 0 0.2rem" }}>Monday – Saturday: 8:00 AM – 8:00 PM</p>
                <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem", margin: 0 }}>Location: Owerri, Imo State</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal-right">
            <h2 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.75rem" }}>Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

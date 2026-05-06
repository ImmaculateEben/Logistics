import Link from "next/link";
import Image from "next/image";

const services = [
  "Same-Day Delivery",
  "Package Delivery",
  "Food Delivery Support",
  "Errands",
  "Vendor Deliveries",
  "Scheduled Deliveries",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/track", label: "Track Order" },
  { href: "/booking", label: "Book Delivery" },
  { href: "/vendors", label: "Vendors" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#ccc", paddingTop: "3rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", paddingBottom: "2.5rem" }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ background: "#fff", display: "inline-block", borderRadius: "0.5rem", padding: "0.4rem 0.6rem" }}>
                <Image
                  src="/iva-logo.jpg"
                  alt="IVA Logistics — Swift & Reliable Delivery"
                  width={150}
                  height={75}
                  style={{ objectFit: "contain", display: "block" }}
                />
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
              Fast, reliable pickup and delivery across Owerri, Imo State.
            </p>
            <p style={{ fontSize: "0.85rem" }}>
              <strong style={{ color: "#fff" }}>Hours:</strong> Mon–Sat, 8am–8pm<br />
              <strong style={{ color: "#fff" }}>Location:</strong> Owerri, Imo State
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "#ccc", textDecoration: "none", fontSize: "0.9rem" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {services.map((s) => (
                <li key={s} style={{ color: "#ccc", fontSize: "0.9rem" }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              <a
                href="https://wa.me/2349137960145"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4ade80", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="tel:+2349137960145" style={{ color: "#ccc", textDecoration: "none" }}>+234 913 796 0145</a>
              <a
                href="https://instagram.com/ivalogistics"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ccc", textDecoration: "none" }}
              >
                @ivalogistics
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #333", padding: "1.25rem 0", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem" }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} IVA Logistics. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <Link href="/privacy" style={{ color: "#999", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "#999", textDecoration: "none" }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

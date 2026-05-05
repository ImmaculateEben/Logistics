"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/track", label: "Track Order" },
  { href: "/vendors", label: "Vendors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid var(--brand-border)", position: "sticky", top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{
            background: "var(--brand-red)",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1.1rem",
            padding: "0.25rem 0.6rem",
            borderRadius: "0.35rem",
            letterSpacing: "-0.02em",
          }}>IVA</span>
          <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--fg)" }}>Logistics</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ textDecoration: "none", color: "var(--fg)", fontWeight: 500, fontSize: "0.95rem" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/booking" className="btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.9rem" }}>
            Book Delivery
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.25rem" }}
          className="mobile-menu-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ borderTop: "1px solid var(--brand-border)", background: "#fff", padding: "1rem" }} className="mobile-menu">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ display: "block", padding: "0.75rem 0", textDecoration: "none", color: "var(--fg)", fontWeight: 500, borderBottom: "1px solid var(--brand-border)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/booking" className="btn-primary" onClick={() => setOpen(false)} style={{ marginTop: "1rem", display: "inline-flex" }}>
            Book Delivery
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}

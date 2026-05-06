import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Vendor Partners" };

const benefits = [
  {
    title: "Faster Bookings",
    desc: "Your business pickup address is saved. Creating new delivery orders takes seconds.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>),
  },
  {
    title: "Order History",
    desc: "View all your past and active deliveries in one place. Filter by date or status.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>),
  },
  {
    title: "Priority Dispatch",
    desc: "Vendor accounts get priority handling during busy hours.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>),
  },
  {
    title: "Dedicated Support",
    desc: "Direct WhatsApp line for vendor queries, updates, and escalations.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>),
  },
  {
    title: "Flexible Billing",
    desc: "Track spending and manage payments across multiple deliveries.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>),
  },
  {
    title: "Live Tracking",
    desc: "Track every delivery in real time using unique tracking IDs.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
  },
];

const vendorTypes = [
  "Online Sellers", "Food Vendors", "Pharmacies", "Boutiques",
  "Supermarkets", "Electronics Stores", "Bakeries", "Restaurants",
];

const steps = [
  { num: "01", title: "Register", desc: "Create a vendor account with your business details." },
  { num: "02", title: "Get Approved", desc: "IVA Logistics reviews and activates your vendor account." },
  { num: "03", title: "Book Deliveries", desc: "Log in and create delivery orders with just receiver details." },
  { num: "04", title: "Track & Manage", desc: "Monitor all your deliveries from the vendor dashboard." },
];

export default function VendorsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", color: "#fff" }}>
        <Image src="/images/hero-vendors.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.75)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "3rem 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fff", margin: 0 }}>For Vendors</h1>
        </div>
      </section>

      {/* Vendor types */}
      <section className="section" style={{ background: "var(--brand-gray)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label">Who Is This For?</p>
            <h2 className="section-title">Perfect for all types of businesses</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {vendorTypes.map((v) => (
              <span key={v} className="hover-lift" style={{ background: "#fff", border: "1px solid var(--brand-border)", borderRadius: "999px", padding: "0.5rem 1.25rem", fontWeight: 600, fontSize: "0.9rem", display: "inline-block" }}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ background: "var(--brand-gray)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center", marginBottom: "3rem" }}>
            <div className="reveal-left">
              <p className="section-label">Vendor Benefits</p>
              <h2 className="section-title">Everything your business needs</h2>
              <p className="section-subtitle">From faster bookings to full order history, IVA Logistics gives your business the tools to scale deliveries effortlessly.</p>
            </div>
            <div className="reveal-right" style={{ borderRadius: "1rem", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}>
              <Image
                src="/images/vendor-pickup.png"
                alt="Vendor picking up packages at store for IVA Logistics dispatch"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {benefits.map((b, i) => (
              <div key={b.title} className="reveal" style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.5rem", border: "1px solid var(--brand-border)", transitionDelay: `${i * 0.07}s` }}>
                <div style={{ width: 40, height: 40, background: "var(--brand-red)", borderRadius: "50%", marginBottom: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{b.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.4rem" }}>{b.title}</h3>
                <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: "var(--brand-gray)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Start in 4 simple steps</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {steps.map((s, i) => (
              <div key={s.num} className="reveal" style={{ textAlign: "center", transitionDelay: `${i * 0.1}s` }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--brand-red)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, margin: "0 auto 1rem" }}>
                  {s.num}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.4rem" }}>{s.title}</h3>
                <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register form */}
      <section className="section" id="register">
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label">Get Started</p>
            <h2 className="section-title">Register as a Vendor</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Fill in your business details to apply for a vendor account.
            </p>
          </div>
          <div className="reveal" style={{ background: "#fff", border: "1px solid var(--brand-border)", borderRadius: "1rem", padding: "2rem" }}>
            <div style={{ display: "grid", gap: "1.25rem" }}>
              {[
                { label: "Business Name *", id: "bname", placeholder: "Your business name" },
                { label: "Contact Person *", id: "contact", placeholder: "Full name" },
                { label: "Phone Number *", id: "phone", placeholder: "080xxxxxxxx", type: "tel" },
                { label: "Email Address *", id: "email", placeholder: "business@example.com", type: "email" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id}>{f.label}</label>
                  <input id={f.id} type={f.type || "text"} placeholder={f.placeholder} />
                </div>
              ))}
              <div>
                <label htmlFor="btype">Business Type *</label>
                <select id="btype">
                  <option value="">Select type</option>
                  {["Online Store", "Food Vendor", "Pharmacy", "Boutique", "Supermarket", "Restaurant", "Other"].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="pickupAddr">Pickup Address *</label>
                <input id="pickupAddr" placeholder="Your main business / pickup address" />
              </div>
              <div>
                <label htmlFor="instagram">Instagram Handle (optional)</label>
                <input id="instagram" placeholder="@yourbusiness" />
              </div>
              <div>
                <label htmlFor="password">Password *</label>
                <input id="password" type="password" placeholder="Create a password" />
              </div>
              <p style={{ color: "var(--brand-muted)", fontSize: "0.82rem", margin: 0 }}>
                By registering, your account will be reviewed and activated within 24 hours. You will be contacted via WhatsApp or phone.
              </p>
              <a
                href="https://wa.me/2349137960145?text=Hi%20IVA%20Logistics%2C%20I%20want%20to%20register%20as%20a%20vendor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ justifyContent: "center", display: "flex" }}
              >
                Register via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Login section */}
      <section className="section" id="login" style={{ background: "var(--brand-gray)" }}>
        <div className="container" style={{ maxWidth: 480 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p className="section-label">Existing Vendors</p>
            <h2 className="section-title">Vendor Login</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Log in to access your delivery dashboard.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid var(--brand-border)", borderRadius: "1rem", padding: "2rem" }}>
            <div style={{ display: "grid", gap: "1.25rem" }}>
              <div>
                <label htmlFor="loginEmail">Email or Phone</label>
                <input id="loginEmail" placeholder="Email or phone number" />
              </div>
              <div>
                <label htmlFor="loginPassword">Password</label>
                <input id="loginPassword" type="password" placeholder="Your password" />
              </div>
              <button
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", border: "none", cursor: "pointer", fontSize: "1rem" }}
              >
                Log In
              </button>
              <p style={{ textAlign: "center", color: "var(--brand-muted)", fontSize: "0.85rem" }}>
                Not a vendor yet? <a href="#register" style={{ color: "var(--brand-red)", fontWeight: 600 }}>Register above</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

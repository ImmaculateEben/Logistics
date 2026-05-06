import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1 style={{ fontWeight: 800, fontSize: "2rem", marginBottom: "0.5rem" }}>Privacy Policy</h1>
        <p style={{ color: "var(--brand-muted)", marginBottom: "2rem", fontSize: "0.9rem" }}>Last updated: May 2026</p>

        {[
          {
            title: "1. Information We Collect",
            body: "When you book a delivery, we collect your name, phone number, pickup and delivery addresses, and item details. If you register as a vendor, we also collect your business name, email, and business type. We do not collect payment card details.",
          },
          {
            title: "2. How We Use Your Information",
            body: "We use your information to process and complete delivery bookings, generate tracking IDs, communicate delivery updates via WhatsApp or phone, and manage vendor accounts.",
          },
          {
            title: "3. Information Sharing",
            body: "We do not sell or share your personal information with third parties, except as required to complete your delivery (e.g., sharing receiver details with our riders).",
          },
          {
            title: "4. Data Security",
            body: "We take reasonable steps to protect your information from unauthorized access. Booking data is stored securely and accessible only to IVA Logistics staff.",
          },
          {
            title: "5. Contact",
            body: "For privacy questions, contact us on WhatsApp at +234 913 796 0145 or on Instagram @ivalogistics.",
          },
        ].map((s) => (
          <div key={s.title} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem" }}>{s.title}</h2>
            <p style={{ color: "var(--brand-muted)", lineHeight: 1.8 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

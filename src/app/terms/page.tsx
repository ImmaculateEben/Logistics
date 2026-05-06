import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1 style={{ fontWeight: 800, fontSize: "2rem", marginBottom: "0.5rem" }}>Terms of Use</h1>
        <p style={{ color: "var(--brand-muted)", marginBottom: "2rem", fontSize: "0.9rem" }}>Last updated: May 2026</p>

        {[
          {
            title: "1. Service Coverage",
            body: "IVA Logistics provides pickup and delivery services within Owerri, Imo State. Services are available Monday to Saturday, 8:00 AM to 8:00 PM. Availability outside these hours is subject to confirmation.",
          },
          {
            title: "2. Booking",
            body: "Bookings are accepted through our website or WhatsApp. A booking is confirmed only after IVA Logistics has acknowledged it. We reserve the right to cancel or reschedule bookings in exceptional circumstances.",
          },
          {
            title: "3. Pricing",
            body: "Prices displayed on the website are estimates. Final pricing is confirmed by IVA Logistics based on the actual pickup and delivery addresses, package details, and availability. Payment is accepted as cash or bank transfer.",
          },
          {
            title: "4. Prohibited Items",
            body: "We do not transport illegal items, hazardous materials, flammable goods, live animals, or items prohibited by law. IVA Logistics reserves the right to refuse any booking.",
          },
          {
            title: "5. Liability",
            body: "IVA Logistics takes care of all packages. In cases of damage or loss caused by our riders, we will work to resolve the issue. Liability is limited to the declared value of the item at the time of booking.",
          },
          {
            title: "6. Vendor Accounts",
            body: "Vendor accounts are subject to approval. IVA Logistics may suspend or disable vendor accounts that violate these terms or misuse the platform.",
          },
          {
            title: "7. Contact",
            body: "For questions about these terms, contact us on WhatsApp at +234 913 796 0145.",
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

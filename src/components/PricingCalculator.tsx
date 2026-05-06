"use client";
import { useState } from "react";
import Link from "next/link";

const areas = [
  "Ikenegbu", "World Bank", "New Owerri", "GRA", "Aladinma", "Uratta",
  "Orlu Road", "Nekede", "Naze", "Egbu", "Obibi", "Wetheral", "Okigwe Road",
];

const packageTypes = [
  { value: "document", label: "Document / Envelope", fee: 0 },
  { value: "small", label: "Small Package (fits in a bag)", fee: 200 },
  { value: "medium", label: "Medium Package (shoebox size)", fee: 400 },
  { value: "large", label: "Large Package (carry-on size)", fee: 700 },
  { value: "food", label: "Food / Perishable", fee: 300 },
];

const urgencyTypes = [
  { value: "standard", label: "Standard (within the day)", fee: 0 },
  { value: "same_day", label: "Same-Day (3–4 hours)", fee: 300 },
  { value: "express", label: "Express (1–2 hours)", fee: 600 },
];

function getBasePrice(pickup: string, delivery: string): number {
  if (!pickup || !delivery || pickup === delivery) return 800;
  // Simple zone pricing
  const zones: Record<string, number> = {
    "Ikenegbu": 1, "Wetheral": 1, "Uratta": 2, "GRA": 2, "Aladinma": 2,
    "World Bank": 3, "New Owerri": 3, "Orlu Road": 3, "Okigwe Road": 3,
    "Nekede": 4, "Naze": 4, "Egbu": 3, "Obibi": 4,
  };
  const diff = Math.abs((zones[pickup] ?? 2) - (zones[delivery] ?? 2));
  return 800 + diff * 400;
}

export default function PricingClient() {
  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [pkgType, setPkgType] = useState("small");
  const [urgency, setUrgency] = useState("standard");
  const [calculated, setCalculated] = useState(false);

  const basePrice = getBasePrice(pickup, delivery);
  const pkgFee = packageTypes.find((p) => p.value === pkgType)?.fee ?? 0;
  const urgencyFee = urgencyTypes.find((u) => u.value === urgency)?.fee ?? 0;
  const total = basePrice + pkgFee + urgencyFee;

  const bookingParams = new URLSearchParams({ pickup, delivery, pkgType, urgency, price: String(total) }).toString();

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 1rem" }}>
      <div style={{ background: "#fff", border: "1px solid var(--brand-border)", borderRadius: "1rem", padding: "2rem" }}>
        <h2 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.75rem" }}>Estimate Your Delivery Cost</h2>

        <div style={{ display: "grid", gap: "1.25rem" }}>
          <div>
            <label htmlFor="pickup">Pickup Area</label>
            <select id="pickup" value={pickup} onChange={(e) => { setPickup(e.target.value); setCalculated(false); }}>
              <option value="">Select pickup area</option>
              {areas.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="delivery">Delivery Area</label>
            <select id="delivery" value={delivery} onChange={(e) => { setDelivery(e.target.value); setCalculated(false); }}>
              <option value="">Select delivery area</option>
              {areas.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="pkg">Package Type</label>
            <select id="pkg" value={pkgType} onChange={(e) => { setPkgType(e.target.value); setCalculated(false); }}>
              {packageTypes.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="urgency">Delivery Urgency</label>
            <select id="urgency" value={urgency} onChange={(e) => { setUrgency(e.target.value); setCalculated(false); }}>
              {urgencyTypes.map((u) => <option key={u.value} value={u.value}>{u.label}</option>)}
            </select>
          </div>

          <button
            onClick={() => { if (pickup && delivery) setCalculated(true); }}
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", cursor: "pointer", border: "none", fontSize: "1rem" }}
          >
            Calculate Price
          </button>
        </div>

        {calculated && pickup && delivery && (
          <div style={{ marginTop: "1.75rem", background: "var(--brand-gray)", borderRadius: "0.75rem", padding: "1.5rem", border: "1px solid var(--brand-border)" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Price Estimate</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem" }}>
                <span style={{ color: "var(--brand-muted)" }}>Base delivery fee</span>
                <span style={{ fontWeight: 600 }}>₦{basePrice.toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem" }}>
                <span style={{ color: "var(--brand-muted)" }}>Package fee</span>
                <span style={{ fontWeight: 600 }}>₦{pkgFee.toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem" }}>
                <span style={{ color: "var(--brand-muted)" }}>Urgency fee</span>
                <span style={{ fontWeight: 600 }}>₦{urgencyFee.toLocaleString()}</span>
              </div>
              <div style={{ borderTop: "1px solid var(--brand-border)", paddingTop: "0.6rem", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700 }}>Estimated Total</span>
                <span style={{ fontWeight: 800, color: "var(--brand-red)", fontSize: "1.25rem" }}>₦{total.toLocaleString()}</span>
              </div>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--brand-muted)", marginBottom: "1.25rem" }}>
              * Final price may be confirmed by IVA Logistics based on exact pickup and delivery addresses.
            </p>
            <Link
              href={`/booking?${bookingParams}`}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", display: "flex" }}
            >
              Continue to Booking
            </Link>
          </div>
        )}

        {calculated && (!pickup || !delivery) && (
          <p style={{ color: "var(--brand-red)", marginTop: "1rem", fontSize: "0.9rem" }}>
            Please select both a pickup and delivery area.
          </p>
        )}
      </div>

      {/* Pricing notes */}
      <div style={{ marginTop: "2rem", background: "var(--brand-gray)", borderRadius: "0.75rem", padding: "1.5rem", border: "1px solid var(--brand-border)" }}>
        <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>Pricing Notes</h3>
        <ul style={{ color: "var(--brand-muted)", fontSize: "0.9rem", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
          <li>Prices shown are estimates based on standard conditions.</li>
          <li>Extra-heavy or fragile items may have additional handling fees.</li>
          <li>Express delivery is subject to rider availability.</li>
          <li>Payment can be made on pickup or delivery (cash or transfer).</li>
          <li>Contact us on WhatsApp for custom pricing on bulk orders.</li>
        </ul>
      </div>
    </div>
  );
}

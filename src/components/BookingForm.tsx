"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const areas = [
  "Ikenegbu", "World Bank", "New Owerri", "GRA", "Aladinma", "Uratta",
  "Orlu Road", "Nekede", "Naze", "Egbu", "Obibi", "Wetheral", "Okigwe Road",
];

const packageTypes = [
  { value: "document", label: "Document / Envelope" },
  { value: "small", label: "Small Package (fits in a bag)" },
  { value: "medium", label: "Medium Package (shoebox size)" },
  { value: "large", label: "Large Package (carry-on size)" },
  { value: "food", label: "Food / Perishable" },
];

const urgencyTypes = [
  { value: "standard", label: "Standard (within the day)" },
  { value: "same_day", label: "Same-Day (3–4 hours)" },
  { value: "express", label: "Express (1–2 hours)" },
];

function generateTrackingId() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `IVA-${date}-${rand}`;
}

function BookingForm() {
  const params = useSearchParams();

  const [form, setForm] = useState({
    senderName: "",
    senderPhone: "",
    pickupAddress: "",
    pickupArea: params.get("pickup") || "",
    receiverName: "",
    receiverPhone: "",
    deliveryAddress: "",
    deliveryArea: params.get("delivery") || "",
    itemDescription: "",
    packageType: params.get("pkgType") || "small",
    urgency: params.get("urgency") || "standard",
    preferredPickupTime: "",
    notes: "",
    instagramHandle: "",
    paymentMethod: "cash",
  });

  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const prefilledPrice = params.get("price");

  function validate() {
    const e: Record<string, string> = {};
    if (!form.senderName.trim()) e.senderName = "Sender name is required";
    if (!form.senderPhone.trim()) e.senderPhone = "Sender phone is required";
    if (!form.pickupAddress.trim()) e.pickupAddress = "Pickup address is required";
    if (!form.pickupArea) e.pickupArea = "Select a pickup area";
    if (!form.receiverName.trim()) e.receiverName = "Receiver name is required";
    if (!form.receiverPhone.trim()) e.receiverPhone = "Receiver phone is required";
    if (!form.deliveryAddress.trim()) e.deliveryAddress = "Delivery address is required";
    if (!form.deliveryArea) e.deliveryArea = "Select a delivery area";
    if (!form.itemDescription.trim()) e.itemDescription = "Item description is required";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const id = generateTrackingId();
    setTrackingId(id);
    setSubmitted(true);
  }

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  const whatsappMsg = encodeURIComponent(
    `Hi IVA Logistics! I just booked a delivery.\n\nTracking ID: ${trackingId}\nFrom: ${form.pickupAddress} (${form.pickupArea})\nTo: ${form.deliveryAddress} (${form.deliveryArea})\nItem: ${form.itemDescription}\nSender: ${form.senderName} – ${form.senderPhone}\nReceiver: ${form.receiverName} – ${form.receiverPhone}`
  );

  if (submitted) {
    return (
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 style={{ fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.75rem" }}>Booking Received!</h2>
        <p style={{ color: "var(--brand-muted)", marginBottom: "1.25rem" }}>
          Your booking has been received. IVA Logistics will confirm your delivery shortly.
        </p>
        <div style={{ background: "var(--brand-gray)", borderRadius: "0.75rem", padding: "1.25rem", border: "1px solid var(--brand-border)", marginBottom: "1.5rem" }}>
          <p style={{ color: "var(--brand-muted)", fontSize: "0.85rem", margin: "0 0 0.4rem" }}>Your Tracking ID</p>
          <p style={{ fontWeight: 800, fontSize: "1.4rem", color: "var(--brand-red)", margin: 0 }}>{trackingId}</p>
          <p style={{ color: "var(--brand-muted)", fontSize: "0.8rem", margin: "0.4rem 0 0" }}>Save this ID to track your delivery</p>
        </div>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/2349137960145?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#25d366", color: "#fff", fontWeight: 600, padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none" }}
          >
            Share on WhatsApp
          </a>
          <Link href="/track" className="btn-outline">Track Order</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem" }}>
      {prefilledPrice && (
        <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "0.5rem", padding: "0.75rem 1rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
          Estimated price from calculator: <strong>₦{Number(prefilledPrice).toLocaleString()}</strong>. Final price confirmed by IVA Logistics.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Sender */}
        <fieldset style={{ border: "none", padding: 0, marginBottom: "2rem" }}>
          <legend style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-red)", width: "100%" }}>
            Sender Details
          </legend>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label htmlFor="senderName">Full Name *</label>
              <input id="senderName" value={form.senderName} onChange={(e) => set("senderName", e.target.value)} placeholder="Your name" />
              {errors.senderName && <p style={{ color: "var(--brand-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.senderName}</p>}
            </div>
            <div>
              <label htmlFor="senderPhone">Phone Number *</label>
              <input id="senderPhone" type="tel" value={form.senderPhone} onChange={(e) => set("senderPhone", e.target.value)} placeholder="080xxxxxxxx" />
              {errors.senderPhone && <p style={{ color: "var(--brand-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.senderPhone}</p>}
            </div>
            <div>
              <label htmlFor="pickupAddress">Pickup Address *</label>
              <input id="pickupAddress" value={form.pickupAddress} onChange={(e) => set("pickupAddress", e.target.value)} placeholder="Street / landmark" />
              {errors.pickupAddress && <p style={{ color: "var(--brand-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.pickupAddress}</p>}
            </div>
            <div>
              <label htmlFor="pickupArea">Pickup Area *</label>
              <select id="pickupArea" value={form.pickupArea} onChange={(e) => set("pickupArea", e.target.value)}>
                <option value="">Select area</option>
                {areas.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              {errors.pickupArea && <p style={{ color: "var(--brand-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.pickupArea}</p>}
            </div>
          </div>
        </fieldset>

        {/* Receiver */}
        <fieldset style={{ border: "none", padding: 0, marginBottom: "2rem" }}>
          <legend style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-red)", width: "100%" }}>
            Receiver Details
          </legend>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label htmlFor="receiverName">Full Name *</label>
              <input id="receiverName" value={form.receiverName} onChange={(e) => set("receiverName", e.target.value)} placeholder="Receiver name" />
              {errors.receiverName && <p style={{ color: "var(--brand-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.receiverName}</p>}
            </div>
            <div>
              <label htmlFor="receiverPhone">Phone Number *</label>
              <input id="receiverPhone" type="tel" value={form.receiverPhone} onChange={(e) => set("receiverPhone", e.target.value)} placeholder="080xxxxxxxx" />
              {errors.receiverPhone && <p style={{ color: "var(--brand-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.receiverPhone}</p>}
            </div>
            <div>
              <label htmlFor="deliveryAddress">Delivery Address *</label>
              <input id="deliveryAddress" value={form.deliveryAddress} onChange={(e) => set("deliveryAddress", e.target.value)} placeholder="Street / landmark" />
              {errors.deliveryAddress && <p style={{ color: "var(--brand-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.deliveryAddress}</p>}
            </div>
            <div>
              <label htmlFor="deliveryArea">Delivery Area *</label>
              <select id="deliveryArea" value={form.deliveryArea} onChange={(e) => set("deliveryArea", e.target.value)}>
                <option value="">Select area</option>
                {areas.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              {errors.deliveryArea && <p style={{ color: "var(--brand-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.deliveryArea}</p>}
            </div>
          </div>
        </fieldset>

        {/* Package */}
        <fieldset style={{ border: "none", padding: 0, marginBottom: "2rem" }}>
          <legend style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-red)", width: "100%" }}>
            Package Details
          </legend>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="itemDescription">Item Description *</label>
              <input id="itemDescription" value={form.itemDescription} onChange={(e) => set("itemDescription", e.target.value)} placeholder="e.g. Clothing, documents, food items..." />
              {errors.itemDescription && <p style={{ color: "var(--brand-red)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.itemDescription}</p>}
            </div>
            <div>
              <label htmlFor="packageType">Package Type</label>
              <select id="packageType" value={form.packageType} onChange={(e) => set("packageType", e.target.value)}>
                {packageTypes.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="urgency">Delivery Urgency</label>
              <select id="urgency" value={form.urgency} onChange={(e) => set("urgency", e.target.value)}>
                {urgencyTypes.map((u) => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="preferredPickupTime">Preferred Pickup Time</label>
              <input id="preferredPickupTime" type="datetime-local" value={form.preferredPickupTime} onChange={(e) => set("preferredPickupTime", e.target.value)} />
            </div>
            <div>
              <label htmlFor="paymentMethod">Payment Method</label>
              <select id="paymentMethod" value={form.paymentMethod} onChange={(e) => set("paymentMethod", e.target.value)}>
                <option value="cash">Cash on pickup/delivery</option>
                <option value="transfer">Bank Transfer</option>
              </select>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="notes">Additional Notes (optional)</label>
              <textarea id="notes" rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Landmark, instructions for rider, fragile items..." style={{ resize: "vertical" }} />
            </div>
            <div>
              <label htmlFor="instagram">Instagram Handle (optional)</label>
              <input id="instagram" value={form.instagramHandle} onChange={(e) => set("instagramHandle", e.target.value)} placeholder="@yourhandle" />
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center", cursor: "pointer", border: "none", fontSize: "1rem", padding: "0.9rem" }}
        >
          Submit Booking
        </button>

        <p style={{ fontSize: "0.8rem", color: "var(--brand-muted)", textAlign: "center", marginTop: "0.75rem" }}>
          A tracking ID will be generated immediately after submission.
        </p>
      </form>
    </div>
  );
}

export default function BookingClient() {
  return (
    <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Loading form...</div>}>
      <BookingForm />
    </Suspense>
  );
}

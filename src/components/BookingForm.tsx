"use client";
import { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import BookingReceipt, { type BookingReceiptData } from "./BookingReceipt";

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
  const [submittedAt, setSubmittedAt] = useState<Date>(new Date());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sharing, setSharing] = useState<"image" | "pdf" | null>(null);
  const receiptRef = useRef<HTMLDivElement>(null);

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
    setSubmittedAt(new Date());
    setSubmitted(true);
  }

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  const whatsappMsg = encodeURIComponent(
    `Hi IVA Logistics! I just booked a delivery.\n\nTracking ID: ${trackingId}\nFrom: ${form.pickupAddress} (${form.pickupArea})\nTo: ${form.deliveryAddress} (${form.deliveryArea})\nItem: ${form.itemDescription}\nSender: ${form.senderName} – ${form.senderPhone}\nReceiver: ${form.receiverName} – ${form.receiverPhone}`
  );

  const receiptData: BookingReceiptData = {
    trackingId,
    senderName: form.senderName,
    senderPhone: form.senderPhone,
    receiverName: form.receiverName,
    receiverPhone: form.receiverPhone,
    pickupAddress: form.pickupAddress,
    pickupArea: form.pickupArea,
    deliveryAddress: form.deliveryAddress,
    deliveryArea: form.deliveryArea,
    itemDescription: form.itemDescription,
    packageType: form.packageType,
    urgency: form.urgency,
    paymentMethod: form.paymentMethod,
    preferredPickupTime: form.preferredPickupTime,
    submittedAt,
  };

  async function shareAsImage() {
    if (!receiptRef.current) return;
    setSharing("image");
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(receiptRef.current, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), "image/png"));
      const file = new File([blob], `IVA-Booking-${trackingId}.png`, { type: "image/png" });
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({ title: "IVA Logistics Booking", text: `Booking ${trackingId}`, files: [file] });
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `IVA-Booking-${trackingId}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } finally {
      setSharing(null);
    }
  }

  async function shareAsPDF() {
    if (!receiptRef.current) return;
    setSharing("pdf");
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");
      const canvas = await html2canvas(receiptRef.current, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      const pxToMm = (px: number) => px * 0.264583;
      const w = pxToMm(canvas.width / 2);
      const h = pxToMm(canvas.height / 2);
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: [w, h] });
      pdf.addImage(imgData, "PNG", 0, 0, w, h);
      pdf.save(`IVA-Booking-${trackingId}.pdf`);
    } finally {
      setSharing(null);
    }
  }

  if (submitted) {
    return (
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 0 2rem" }}>
        {/* Success banner */}
        <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "1.4rem", marginBottom: "0.4rem" }}>Booking Confirmed!</h2>
          <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem" }}>
            IVA Logistics will be in touch shortly to confirm your rider.
          </p>
        </div>

        {/* Receipt card */}
        <BookingReceipt ref={receiptRef} data={receiptData} />

        {/* Share buttons — OPay style */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "1.25rem" }}>
          <button
            onClick={shareAsImage}
            disabled={sharing !== null}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              background: sharing === "image" ? "#ccc" : "#111", color: "#fff",
              fontWeight: 600, fontSize: "0.9rem", padding: "0.85rem 1rem",
              borderRadius: "0.6rem", border: "none", cursor: sharing !== null ? "not-allowed" : "pointer",
              transition: "background 0.2s",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            {sharing === "image" ? "Saving…" : "Share as Image"}
          </button>
          <button
            onClick={shareAsPDF}
            disabled={sharing !== null}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              background: sharing === "pdf" ? "#ccc" : "var(--brand-red)", color: "#fff",
              fontWeight: 600, fontSize: "0.9rem", padding: "0.85rem 1rem",
              borderRadius: "0.6rem", border: "none", cursor: sharing !== null ? "not-allowed" : "pointer",
              transition: "background 0.2s",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
            {sharing === "pdf" ? "Generating…" : "Share as PDF"}
          </button>
        </div>

        {/* Secondary actions */}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
          <a
            href={`https://wa.me/2349137960145?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#25d366", color: "#fff", fontWeight: 600, padding: "0.65rem 1.25rem", borderRadius: "0.5rem", textDecoration: "none", fontSize: "0.9rem" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Send to WhatsApp
          </a>
          <Link href="/track" className="btn-outline" style={{ padding: "0.65rem 1.25rem", fontSize: "0.9rem" }}>Track Order</Link>
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

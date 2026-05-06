"use client";
import React from "react";
import Image from "next/image";

export interface BookingReceiptData {
  trackingId: string;
  senderName: string;
  senderPhone: string;
  receiverName: string;
  receiverPhone: string;
  pickupAddress: string;
  pickupArea: string;
  deliveryAddress: string;
  deliveryArea: string;
  itemDescription: string;
  packageType: string;
  urgency: string;
  paymentMethod: string;
  preferredPickupTime?: string;
  submittedAt: Date;
}

const urgencyLabels: Record<string, string> = {
  standard: "Standard (within the day)",
  same_day: "Same-Day (3–4 hours)",
  express: "Express (1–2 hours)",
};

const packageLabels: Record<string, string> = {
  document: "Document / Envelope",
  small: "Small Package",
  medium: "Medium Package",
  large: "Large Package",
  food: "Food / Perishable",
};

const paymentLabels: Record<string, string> = {
  cash: "Cash on Pickup/Delivery",
  transfer: "Bank Transfer",
};

function formatDate(d: Date) {
  return d.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const BookingReceipt = React.forwardRef<HTMLDivElement, { data: BookingReceiptData }>(
  function BookingReceipt({ data }, ref) {
    const rows = [
      { label: "Pickup Details", value: `${data.pickupAddress}, ${data.pickupArea}` },
      { label: "Delivery Details", value: `${data.deliveryAddress}, ${data.deliveryArea}` },
      { label: "Item", value: data.itemDescription },
      { label: "Package Type", value: packageLabels[data.packageType] || data.packageType },
      { label: "Delivery Speed", value: urgencyLabels[data.urgency] || data.urgency },
      { label: "Payment", value: paymentLabels[data.paymentMethod] || data.paymentMethod },
      { label: "Booking No.", value: data.trackingId },
    ];

    return (
      <div
        ref={ref}
        style={{
          position: "relative",
          background: "#fff",
          borderRadius: "1rem",
          padding: "2rem 1.75rem",
          maxWidth: 480,
          margin: "0 auto",
          border: "1px solid #e5e5e5",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Watermark */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            opacity: 0.045,
            pointerEvents: "none",
            padding: "1rem",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image
                src="/iva-logo.jpg"
                alt=""
                width={80}
                height={40}
                style={{ objectFit: "contain", width: 70, height: "auto" }}
              />
            </div>
          ))}
        </div>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", position: "relative" }}>
          <Image
            src="/iva-logo.jpg"
            alt="IVA Logistics"
            width={90}
            height={44}
            style={{ objectFit: "contain" }}
          />
          <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#555" }}>Booking Receipt</span>
        </div>

        {/* Status */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem", position: "relative" }}>
          <p style={{ fontSize: "clamp(1.6rem, 5vw, 2rem)", fontWeight: 800, color: "#e02020", margin: "0 0 0.25rem", letterSpacing: "-0.5px" }}>
            {data.trackingId}
          </p>
          <p style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0 0 0.25rem", color: "#111" }}>Confirmed</p>
          <p style={{ color: "#888", fontSize: "0.82rem", margin: 0 }}>{formatDate(data.submittedAt)}</p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e5e5e5", margin: "0 0 1.25rem" }} />

        {/* Sender / Receiver */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem", position: "relative" }}>
          <div>
            <p style={{ fontSize: "0.75rem", color: "#888", margin: "0 0 0.2rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Sender
            </p>
            <p style={{ fontWeight: 700, fontSize: "0.9rem", margin: "0 0 0.1rem", color: "#111" }}>{data.senderName}</p>
            <p style={{ fontSize: "0.83rem", color: "#555", margin: 0 }}>{data.senderPhone}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "0.75rem", color: "#888", margin: "0 0 0.2rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Receiver
            </p>
            <p style={{ fontWeight: 700, fontSize: "0.9rem", margin: "0 0 0.1rem", color: "#111" }}>{data.receiverName}</p>
            <p style={{ fontSize: "0.83rem", color: "#555", margin: 0 }}>{data.receiverPhone}</p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e5e5e5", margin: "0 0 1.25rem" }} />

        {/* Detail rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", position: "relative" }}>
          {rows.map((r) => (
            <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
              <span style={{ fontSize: "0.82rem", color: "#888", flexShrink: 0 }}>{r.label}</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#111", textAlign: "right", wordBreak: "break-word" }}>
                {r.value}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e5e5e5", margin: "1.25rem 0 1rem" }} />

        {/* Footer */}
        <p style={{ fontSize: "0.73rem", color: "#aaa", lineHeight: 1.6, margin: 0, position: "relative" }}>
          IVA Logistics delivers across Owerri with speed and reliability. Save your Booking No. to track your delivery at any time. Contact us on WhatsApp: +2349137960145
        </p>
      </div>
    );
  }
);

export default BookingReceipt;

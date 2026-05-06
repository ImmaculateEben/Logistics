"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TimelineEntry = { status: string; message: string; time: string };
type TrackingResult = { trackingId: string; status: string; pickupArea: string; deliveryArea: string; timeline: TimelineEntry[] };

// Mock data for demo purposes
const MOCK_ORDERS: Record<string, TrackingResult> = {
  "IVA-20260505-1234": {
    trackingId: "IVA-20260505-1234",
    status: "in_transit",
    pickupArea: "Ikenegbu",
    deliveryArea: "World Bank",
    timeline: [
      { status: "Booking Received", message: "Your booking has been received.", time: "8:00 AM" },
      { status: "Rider Assigned", message: "A rider has been assigned to your delivery.", time: "8:30 AM" },
      { status: "Picked Up", message: "Your package has been picked up.", time: "9:15 AM" },
      { status: "In Transit", message: "Your package is on the way to the receiver.", time: "9:45 AM" },
    ],
  },
  "IVA-20260505-5678": {
    trackingId: "IVA-20260505-5678",
    status: "delivered",
    pickupArea: "GRA",
    deliveryArea: "New Owerri",
    timeline: [
      { status: "Booking Received", message: "Your booking has been received.", time: "10:00 AM" },
      { status: "Rider Assigned", message: "A rider has been assigned.", time: "10:20 AM" },
      { status: "Picked Up", message: "Package picked up.", time: "11:00 AM" },
      { status: "In Transit", message: "Package in transit.", time: "11:30 AM" },
      { status: "Delivered", message: "Your package has been delivered successfully.", time: "12:15 PM" },
    ],
  },
};

const statusColors: Record<string, string> = {
  "Booking Received": "#3b82f6",
  "Rider Assigned": "#f59e0b",
  "Picked Up": "#8b5cf6",
  "In Transit": "#f97316",
  "Delivered": "#22c55e",
  "Cancelled": "#ef4444",
};

export default function TrackPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [searched, setSearched] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const id = query.trim().toUpperCase();
    setSearched(true);
    if (MOCK_ORDERS[id]) {
      setResult(MOCK_ORDERS[id]);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  }

  const lastStatus = result?.timeline[result.timeline.length - 1];

  return (
    <>
      <section style={{ position: "relative", minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", color: "#fff" }}>
        <Image src="/images/hero-track.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.80)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "3rem 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fff", margin: 0 }}>Track Your Order</h1>
        </div>
      </section>

      <section className="section">
        <div className="container reveal" style={{ maxWidth: 640 }}>
          <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.75rem", maxWidth: 560, marginBottom: "2rem", flexWrap: "wrap" }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. IVA-20260505-1234"
              style={{ flex: 1, minWidth: 200, background: "#f5f5f5", border: "1px solid var(--brand-border)", borderRadius: "0.5rem", padding: "0.75rem 1rem" }}
              aria-label="Tracking ID"
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ border: "none", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Track Order
            </button>
          </form>
          {result && (
            <div>
              {/* Status card */}
              <div style={{ background: "#fff", border: "1px solid var(--brand-border)", borderRadius: "1rem", padding: "1.75rem", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div>
                    <p style={{ color: "var(--brand-muted)", fontSize: "0.85rem", margin: "0 0 0.25rem" }}>Tracking ID</p>
                    <p style={{ fontWeight: 800, color: "var(--brand-red)", fontSize: "1.1rem", margin: 0 }}>{result.trackingId}</p>
                  </div>
                  {lastStatus && (
                    <span style={{
                      background: statusColors[lastStatus.status] ?? "#888",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "999px",
                    }}>
                      {lastStatus.status}
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                  <div>
                    <p style={{ color: "var(--brand-muted)", fontSize: "0.8rem", margin: "0 0 0.2rem" }}>From</p>
                    <p style={{ fontWeight: 600, margin: 0 }}>{result.pickupArea}</p>
                  </div>
                  <div>
                    <p style={{ color: "var(--brand-muted)", fontSize: "0.8rem", margin: "0 0 0.2rem" }}>To</p>
                    <p style={{ fontWeight: 600, margin: 0 }}>{result.deliveryArea}</p>
                  </div>
                  {lastStatus && (
                    <div>
                      <p style={{ color: "var(--brand-muted)", fontSize: "0.8rem", margin: "0 0 0.2rem" }}>Last Update</p>
                      <p style={{ fontWeight: 600, margin: 0 }}>{lastStatus.time}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline */}
              <div style={{ background: "#fff", border: "1px solid var(--brand-border)", borderRadius: "1rem", padding: "1.75rem" }}>
                <h3 style={{ fontWeight: 700, marginBottom: "1.5rem" }}>Delivery Timeline</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {result.timeline.map((entry, i) => {
                    const isLast = i === result.timeline.length - 1;
                    const color = statusColors[entry.status] ?? "#888";
                    return (
                      <div key={i} style={{ display: "flex", gap: "1rem" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <div style={{ width: 14, height: 14, borderRadius: "50%", background: color, flexShrink: 0, marginTop: 3 }} />
                          {!isLast && <div style={{ width: 2, flex: 1, background: "#e5e5e5", minHeight: 32 }} />}
                        </div>
                        <div style={{ paddingBottom: isLast ? 0 : "1.25rem" }}>
                          <p style={{ fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.2rem", color }}>{entry.status}</p>
                          <p style={{ color: "var(--brand-muted)", fontSize: "0.88rem", margin: "0 0 0.2rem" }}>{entry.message}</p>
                          <p style={{ color: "#bbb", fontSize: "0.78rem", margin: 0 }}>{entry.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {notFound && searched && (
            <div style={{ textAlign: "center", padding: "2rem", background: "var(--brand-gray)", borderRadius: "1rem", border: "1px solid var(--brand-border)" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" style={{ marginBottom: "1rem" }}>
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Order not found</h3>
              <p style={{ color: "var(--brand-muted)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                We could not find an order with that tracking ID. Please check the ID and try again.
              </p>
              <a
                href="https://wa.me/2349137960145?text=Hi%20IVA%20Logistics%2C%20I%20need%20help%20tracking%20my%20order"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#25d366", color: "#fff", fontWeight: 600, padding: "0.65rem 1.25rem", borderRadius: "0.5rem", textDecoration: "none", fontSize: "0.9rem" }}
              >
                Contact Support on WhatsApp
              </a>
            </div>
          )}

          {!searched && (
            <div style={{ textAlign: "center", color: "var(--brand-muted)" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1" style={{ marginBottom: "1rem" }}>
                <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              <p>Enter your tracking ID above to see your delivery status.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    const text = [
      `Hello IVA Logistics! 👋`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      email.trim() ? `*Email:* ${email}` : null,
      ``,
      `*Message:*`,
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/2349137960145?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const isValid = name.trim() && phone.trim() && message.trim();

  return (
    <form onSubmit={handleSubmit} style={{ background: "#fff", border: "1px solid var(--brand-border)", borderRadius: "1rem", padding: "2rem" }}>
      <div style={{ display: "grid", gap: "1.25rem" }}>
        <div>
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            placeholder="080xxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email (optional)</label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            style={{ resize: "vertical" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
          disabled={!isValid}
          style={{
            justifyContent: "center",
            display: "flex",
            opacity: isValid ? 1 : 0.5,
            cursor: isValid ? "pointer" : "not-allowed",
            border: "none",
          }}
        >
          Send via WhatsApp
        </button>
        <p style={{ color: "var(--brand-muted)", fontSize: "0.8rem", textAlign: "center", margin: 0 }}>
          Messages are handled via WhatsApp for fastest response.
        </p>
      </div>
    </form>
  );
}

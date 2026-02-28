"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`[Portfolio Contact] ${name || "No Name"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:qkralsgml24@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="glass-card space-y-4 p-6 md:p-8" aria-label="contact form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="home-name" className="text-sm text-zinc-300">
          Name
        </label>
        <input
          id="home-name"
          name="name"
          type="text"
          className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="home-email" className="text-sm text-zinc-300">
          Email
        </label>
        <input
          id="home-email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
          placeholder="name@email.com"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="home-message" className="text-sm text-zinc-300">
          Message
        </label>
        <textarea
          id="home-message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
          placeholder="Type your message"
        />
      </div>
      <button
        type="submit"
        className="rounded-md border border-primary/60 bg-primary/10 px-5 py-2 text-sm text-primary transition hover:shadow-glow"
      >
        Send Message
      </button>
    </form>
  );
}

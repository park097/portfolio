"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emitFeedback = (message: string) => {
    window.dispatchEvent(new CustomEvent("app-feedback", { detail: { message } }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/qkralsgml24@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      form.reset();
      emitFeedback("전송되었습니다.");
    } catch {
      emitFeedback("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="glass-card space-y-4 p-6 md:p-8" aria-label="contact form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="[Portfolio] New Contact Message" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
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
        disabled={isSubmitting}
        className="rounded-md border border-primary/60 bg-primary/10 px-5 py-2 text-sm text-primary transition hover:shadow-glow"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

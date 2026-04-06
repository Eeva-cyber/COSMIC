"use client";

import { useState } from "react";
import FadeInSection from "../ui/FadeInSection";

// To switch to Convex: run `npx convex dev`, then replace the fetch()
// call below with `useMutation(api.waitlist.join)` from convex/react.
// See convex/waitlist.ts for the mutation.

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="py-28 md:py-36 px-6 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="max-w-lg mx-auto text-center">
        <FadeInSection>
          <p className="text-[11px] font-heading font-medium tracking-[0.3em] uppercase text-muted-light mb-8">
            Early Access
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-foreground mb-4">
            Be first.
          </h2>
          <p className="text-muted leading-relaxed mb-12">
            Join the waitlist and be among the first to experience COSMIC.
          </p>
        </FadeInSection>

        <FadeInSection delay={150}>
          {status === "success" ? (
            <div className="border border-border p-10 animate-fade-up">
              <p className="font-display text-lg font-bold text-foreground mb-2">
                {message}
              </p>
              <p className="text-sm text-muted">
                We&apos;ll keep you posted on our launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-4 bg-white border border-border text-foreground placeholder:text-muted-light text-sm focus:outline-none focus:border-foreground transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-4 bg-foreground text-white text-[11px] font-heading font-semibold tracking-[0.2em] uppercase hover:bg-foreground/80 transition-colors duration-200 disabled:opacity-40 cursor-pointer shrink-0"
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                      Joining...
                    </span>
                  ) : (
                    "Join Now"
                  )}
                </button>
              </div>

              {status === "error" && (
                <p className="mt-3 text-red-600 text-sm text-left">
                  {message}
                </p>
              )}

              <p className="mt-4 text-[11px] text-muted-light tracking-wide">
                No spam — just launch updates.
              </p>
            </form>
          )}
        </FadeInSection>
      </div>
    </section>
  );
}

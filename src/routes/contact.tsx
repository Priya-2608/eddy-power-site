import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eddy Power Cell Pvt. Ltd., Hosur" },
      {
        name: "description",
        content:
          "Contact Eddy Power Cell in Hosur for car, bike, inverter and solar batteries. Get a quote or visit our shop.",
      },
      { property: "og:title", content: "Contact Eddy Power Cell" },
      { property: "og:description", content: "Get in touch — Hosur, Tamil Nadu." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9 ()-]{7,20}$/, "Enter a valid phone number"),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    (async () => {
      const { error } = await supabase.from("enquiries").insert({
        name: parsed.data.name,
        phone: parsed.data.phone,
        message: parsed.data.message,
      });
      setSubmitting(false);
      if (error) {
        toast.error("Couldn't send right now. Please try again or call us.");
        return;
      }
      toast.success("Thanks! We'll get back to you shortly.");
      form.reset();
    })();
  }

  return (
    <>
      <section className="section-pad bg-[radial-gradient(ellipse_at_top,oklch(0.85_0.18_88/0.12),transparent_60%)]">
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</span>
            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">
              Let's talk <span className="text-gradient">power.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg text-muted-foreground">
              Send us a message and we'll get back to you within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-surface p-7 shadow-[var(--shadow-card)] md:p-9"
            >
              <div className="grid gap-5">
                <Field label="Your Name" name="name" placeholder="Rajesh Kumar" />
                <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" />
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground/90">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Which battery do you need? Vehicle make/model or backup hours…"
                    className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {submitting ? "Sending…" : (<>Send Message <Send className="h-4 w-4" /></>)}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="grid gap-4">
              <InfoCard icon={MapPin} title="Visit us">
                Nambi Complex, Thillai Nagar,<br />Hosur, Tamil Nadu – 635109
              </InfoCard>
              <InfoCard icon={Phone} title="Call us"><a href="tel:+918037973957" className="hover:text-primary">+91 80 3797 3957</a></InfoCard>
              <InfoCard icon={Mail} title="Email"><a href="mailto:eddypowercell@gmail.com" className="hover:text-primary">eddypowercell@gmail.com</a></InfoCard>
              <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]">
                <iframe
                  title="Eddy Power Cell, Hosur"
                  src="https://www.google.com/maps?q=Thillai+Nagar+Hosur+Tamil+Nadu+635109&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-foreground/90">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="hover-lift flex gap-4 rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-sm font-bold">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Award, Users, BatteryFull } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eddy Power Cell Pvt. Ltd." },
      {
        name: "description",
        content:
          "Eddy Power Cell Pvt. Ltd. — a Hosur-based battery company built on trust, durability and customer satisfaction.",
      },
      { property: "og:title", content: "About Eddy Power Cell Pvt. Ltd." },
      { property: "og:description", content: "Trust, durability and customer satisfaction from Hosur." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="section-pad bg-[radial-gradient(ellipse_at_top,oklch(0.85_0.18_88/0.12),transparent_60%)]">
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Us</span>
            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">
              Energy you can <span className="text-gradient">depend on.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Eddy Power Cell Pvt. Ltd. is a Hosur-based battery company committed to delivering reliable, long-life power solutions for vehicles, homes and businesses. We combine quality products with hands-on local service — so you get the right battery, fitted right, every time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 md:grid-cols-3">
          {[
            { icon: Award, title: "Quality First", desc: "Only proven cells from trusted manufacturers, with verified warranty backing." },
            { icon: BatteryFull, title: "Built to Last", desc: "Designed for Indian climate — heat-resistant, vibration-tolerant, deep-cycle ready." },
            { icon: Users, title: "Customers for Life", desc: "Honest advice, fair pricing and after-sales support that actually picks up the phone." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="hover-lift h-full rounded-xl border border-border bg-surface p-7 shadow-[var(--shadow-card)]">
                <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-primary">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[oklch(0.13_0.04_262)]">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Find Us</span>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Located in the heart of Hosur</h2>
            <p className="mt-5 text-muted-foreground">
              Drop by our shop or call us — we're happy to help you choose the right battery and arrange installation.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-surface p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="font-bold">Eddy Power Cell Pvt. Ltd.</div>
                <div className="text-sm text-muted-foreground">
                  Nambi Complex, Thillai Nagar,<br />
                  Hosur, Tamil Nadu – 635109
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              Get in touch
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Eddy Power Cell location, Hosur"
                src="https://www.google.com/maps?q=Thillai+Nagar+Hosur+Tamil+Nadu+635109&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[20%]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Wrench, BatteryCharging } from "lucide-react";
import hero from "@/assets/hero-batteries.jpg";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eddy Power Cell Pvt. Ltd. — Reliable Batteries in Hosur" },
      {
        name: "description",
        content:
          "Premium car, bike, inverter and solar batteries from Eddy Power Cell, Hosur. Powering your world with reliable energy.",
      },
      { property: "og:title", content: "Eddy Power Cell — Reliable Batteries in Hosur" },
      { property: "og:description", content: "Powering your world with reliable energy." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt="Rows of premium batteries on factory floor"
            width={1920}
            height={1080}
            className="h-full w-full object-cover animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.85_0.18_88/0.15),transparent_55%)]" />
        </div>

        <div className="container-x flex min-h-[88vh] flex-col justify-center py-24">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <BatteryCharging className="h-3.5 w-3.5" /> Hosur, Tamil Nadu
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Powering your world with{" "}
              <span className="text-gradient">reliable energy.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Eddy Power Cell Pvt. Ltd. delivers durable, high-performance batteries for cars, bikes, inverters and solar — built tough for Indian conditions.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat value="15+" label="Years of trust" />
              <Stat value="10K+" label="Batteries delivered" />
              <Stat value="24/7" label="Support" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad">
        <div className="container-x grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Who we are</span>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Built on trust. Engineered for reliability.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From Hosur, we supply premium batteries that keep vehicles, homes and businesses running. Every cell is selected, tested and backed by responsive local support — because reliable energy isn't a feature, it's a promise.
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-16 grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Quality Assured", desc: "Genuine, tested batteries with full warranty support." },
            { icon: Truck, title: "Fast Delivery", desc: "Same-day dispatch across Hosur and nearby districts." },
            { icon: Wrench, title: "Expert Installation", desc: "Trained technicians for hassle-free fitting and service." },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="hover-lift rounded-xl border border-border bg-surface p-7 shadow-[var(--shadow-card)]">
                <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-primary">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="section-pad bg-[oklch(0.13_0.04_262)]">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our Range</span>
              <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Batteries for every need</h2>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/products" className="group inline-flex items-center gap-2 text-sm font-bold text-primary">
                View all products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]">
                  <div className="aspect-[4/3] overflow-hidden bg-background">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    <p className="mt-1 text-sm text-primary">{p.tagline}</p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-foreground hover:text-primary"
                    >
                      Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-primary md:text-4xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

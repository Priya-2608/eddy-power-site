import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Car, Bike, Inverter & Solar Batteries | Eddy Power Cell" },
      {
        name: "description",
        content:
          "Browse our range of car, bike, inverter and solar batteries. Reliable power, fair pricing and expert installation from Hosur.",
      },
      { property: "og:title", content: "Products | Eddy Power Cell" },
      { property: "og:description", content: "Car, bike, inverter and solar batteries." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="section-pad bg-[radial-gradient(ellipse_at_top,oklch(0.85_0.18_88/0.12),transparent_60%)]">
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Products</span>
            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">
              Power for every <span className="text-gradient">vehicle and home.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-muted-foreground">
              Pick a category below or message us for personalised recommendations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-7 sm:grid-cols-2 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="hover-lift group grid h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] sm:grid-cols-5">
                <div className="aspect-[4/3] overflow-hidden bg-background sm:col-span-2 sm:aspect-auto">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col p-7 sm:col-span-3">
                  <h2 className="text-2xl font-extrabold">{p.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-primary">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <Link
                    to="/contact"
                    className="mt-auto inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-2.5 pt-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
                  >
                    Enquire Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

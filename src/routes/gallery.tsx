import { createFileRoute } from "@tanstack/react-router";
import shop from "@/assets/gallery-shop.jpg";
import install from "@/assets/gallery-install.jpg";
import warehouse from "@/assets/gallery-warehouse.jpg";
import car from "@/assets/product-car.jpg";
import bike from "@/assets/product-bike.jpg";
import inverter from "@/assets/product-inverter.jpg";
import solar from "@/assets/product-solar.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Eddy Power Cell Pvt. Ltd." },
      {
        name: "description",
        content: "A look inside our shop, products and installation work in Hosur.",
      },
      { property: "og:title", content: "Gallery — Eddy Power Cell" },
      { property: "og:description", content: "Shop, products and installations." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: shop, alt: "Inside our Hosur battery shop", span: "md:col-span-2 md:row-span-2" },
  { src: install, alt: "Technician installing a car battery", span: "" },
  { src: car, alt: "Car battery", span: "" },
  { src: warehouse, alt: "Battery warehouse", span: "md:col-span-2" },
  { src: inverter, alt: "Inverter battery", span: "" },
  { src: bike, alt: "Bike battery", span: "" },
  { src: solar, alt: "Solar battery setup", span: "md:col-span-2" },
];

function GalleryPage() {
  return (
    <>
      <section className="section-pad bg-[radial-gradient(ellipse_at_top,oklch(0.85_0.18_88/0.12),transparent_60%)]">
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Gallery</span>
            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">
              Inside our <span className="text-gradient">workshop & store.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 60} className={it.span}>
              <div className="group h-full w-full overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

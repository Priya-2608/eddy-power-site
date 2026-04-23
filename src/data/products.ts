import car from "@/assets/product-car.jpg";
import bike from "@/assets/product-bike.jpg";
import inverter from "@/assets/product-inverter.jpg";
import solar from "@/assets/product-solar.jpg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "car",
    name: "Car Batteries",
    tagline: "Cold-crank power, every start.",
    description:
      "High-performance maintenance-free car batteries engineered for Indian roads and temperatures. Long warranty, instant cranking power.",
    image: car,
  },
  {
    slug: "bike",
    name: "Bike Batteries",
    tagline: "Compact, vibration-proof, dependable.",
    description:
      "Two-wheeler batteries built to handle vibration, heat and stop-start riding — sealed, leak-proof, and ready to fit most models.",
    image: bike,
  },
  {
    slug: "inverter",
    name: "Inverter Batteries",
    tagline: "Backup that just keeps going.",
    description:
      "Tall tubular inverter batteries for homes and small offices. Deep-cycle design, fast recharge, and long service life during power cuts.",
    image: inverter,
  },
  {
    slug: "solar",
    name: "Solar Batteries",
    tagline: "Store the sun, power the night.",
    description:
      "Solar-grade tubular batteries optimized for daily charge–discharge cycles, off-grid setups and hybrid solar inverters.",
    image: solar,
  },
];

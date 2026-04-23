import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eddy Power Cell Pvt. Ltd. — Reliable Batteries in Hosur" },
      {
        name: "description",
        content:
          "Eddy Power Cell Pvt. Ltd., Hosur — premium car, bike, inverter and solar batteries built for Indian conditions.",
      },
      { name: "author", content: "Eddy Power Cell Pvt. Ltd." },
      { property: "og:title", content: "Eddy Power Cell Pvt. Ltd. — Reliable Batteries in Hosur" },
      { property: "og:description", content: "Eddy Power Site is a modern, mobile-responsive business website for a battery manufacturer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eddy Power Cell Pvt. Ltd. — Reliable Batteries in Hosur" },
      { name: "description", content: "Eddy Power Site is a modern, mobile-responsive business website for a battery manufacturer." },
      { name: "twitter:description", content: "Eddy Power Site is a modern, mobile-responsive business website for a battery manufacturer." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45717d97-f8e4-4227-9a9e-a230b2f37bc1/id-preview-1a7a0d80--3cd01e0c-d987-4a5c-a76c-ac213f7ff8a1.lovable.app-1776957870835.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45717d97-f8e4-4227-9a9e-a230b2f37bc1/id-preview-1a7a0d80--3cd01e0c-d987-4a5c-a76c-ac213f7ff8a1.lovable.app-1776957870835.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <Toaster richColors theme="dark" position="top-center" />
    </div>
  );
}

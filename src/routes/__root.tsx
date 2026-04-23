import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-8xl font-medium text-wine">404</div>
        <h2 className="mt-4 font-display text-2xl text-foreground">Pagina non trovata</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center border border-wine bg-wine px-6 py-3 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-wine-deep"
        >
          Torna alla home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Enotions — Emozioni del Vino" },
      {
        name: "description",
        content:
          "Magazine indipendente dedicato al vino: degustazioni, approfondimenti e curiosità dal mondo enologico italiano e internazionale.",
      },
      { name: "author", content: "Enotions" },
      { property: "og:title", content: "Enotions — Emozioni del Vino" },
      {
        property: "og:description",
        content:
          "Storie di vino, vignaioli e territori. Un magazine indipendente per chi vive il calice come emozione.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
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
    <div className="flex min-h-screen flex-col bg-background paper-grain">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

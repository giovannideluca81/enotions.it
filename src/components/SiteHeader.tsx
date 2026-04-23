import { Link } from "@tanstack/react-router";
import { useState } from "react";

type NavItem =
  | { to: "/" | "/articoli" | "/about"; label: string; cat?: never }
  | { to: "/categoria/$cat"; label: string; cat: string };

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/articoli", label: "Articoli" },
  { to: "/categoria/$cat", cat: "degustazioni", label: "Degustazioni" },
  { to: "/categoria/$cat", cat: "approfondimenti", label: "Approfondimenti" },
  { to: "/categoria/$cat", cat: "curiosita", label: "Curiosità" },
  { to: "/about", label: "Chi siamo" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl font-medium tracking-tight text-wine-deep">
            Enotions
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            — Emozioni del Vino
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              params={item.cat ? { cat: item.cat } : undefined}
              className="text-[13px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-wine"
              activeProps={{ className: "text-wine" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden"
          aria-label="Menu"
        >
          <div className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
            <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                params={item.cat ? { cat: item.cat } : undefined}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-[0.18em] text-foreground/80"
                activeProps={{ className: "text-wine" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

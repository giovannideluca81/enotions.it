import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-wine-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-display text-3xl font-medium tracking-tight">
              Enotions
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              Un magazine indipendente dedicato al vino. Storie, degustazioni,
              cultura — senza filtri, senza compromessi.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-cream/50">
              Esplora
            </div>
            <ul className="mt-4 space-y-2 font-display text-base">
              <li><Link to="/articoli" className="hover:text-gold">Tutti gli articoli</Link></li>
              <li><Link to="/categoria/$cat" params={{ cat: "degustazioni" }} className="hover:text-gold">Degustazioni</Link></li>
              <li><Link to="/categoria/$cat" params={{ cat: "approfondimenti" }} className="hover:text-gold">Approfondimenti</Link></li>
              <li><Link to="/categoria/$cat" params={{ cat: "curiosita" }} className="hover:text-gold">Curiosità</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-cream/50">
              Contatti
            </div>
            <ul className="mt-4 space-y-2 font-display text-base">
              <li>redazione@enotions.it</li>
              <li>Italia</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 text-xs uppercase tracking-[0.2em] text-cream/50 md:flex-row">
          <div>© {new Date().getFullYear()} Enotions — Tutti i diritti riservati</div>
          <div>Bevi responsabilmente</div>
        </div>
      </div>
    </footer>
  );
}

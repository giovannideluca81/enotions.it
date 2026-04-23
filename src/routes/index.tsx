import { createFileRoute, Link } from "@tanstack/react-router";
import { articles, imageMap } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Ornament } from "@/components/Ornament";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enotions — Emozioni del Vino" },
      {
        name: "description",
        content:
          "Magazine indipendente dedicato al vino: degustazioni, vinificazione, storia e curiosità del mondo enologico.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const others = articles.filter((a) => a.slug !== featured.slug);
  const secondary = others.slice(0, 3);
  const grid = others.slice(3, 9);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:pb-28 lg:pt-20">
          <div className="lg:col-span-5 lg:pt-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-wine">
              In Evidenza · {featured.category}
            </div>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance text-wine-deep md:text-6xl lg:text-7xl">
              {featured.title}
            </h1>
            <p className="mt-6 max-w-md font-display text-lg leading-relaxed text-foreground/80">
              {featured.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/articoli/$slug"
                params={{ slug: featured.slug }}
                className="inline-flex items-center gap-3 border border-wine bg-wine px-6 py-3 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-wine-deep"
              >
                Leggi l'articolo
                <span aria-hidden>→</span>
              </Link>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {featured.readTime} min
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden bg-muted lg:aspect-[5/6]">
              <img
                src={imageMap[featured.image]}
                alt={featured.title}
                width={1600}
                height={2000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden bg-cream px-6 py-4 shadow-sm lg:block">
              <div className="text-[10px] uppercase tracking-[0.3em] text-wine">
                Numero
              </div>
              <div className="font-display text-3xl font-medium text-wine-deep">
                Nº 01
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section className="border-y border-border bg-wine-deep py-16 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold">
            Il nostro manifesto
          </div>
          <p className="mt-6 font-display text-2xl font-light italic leading-relaxed text-balance md:text-3xl">
            "Il vino non è una bevanda. È un racconto di territorio, mani e
            tempo — un'emozione che si versa nel calice."
          </p>
        </div>
      </section>

      {/* SECONDARY GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-wine">
              Selezione del mese
            </div>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-wine-deep md:text-5xl">
              Da non perdere
            </h2>
          </div>
          <Link
            to="/articoli"
            className="hidden text-xs uppercase tracking-[0.22em] text-wine hover:text-wine-deep md:block"
          >
            Tutti gli articoli →
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {secondary.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* CATEGORIES BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { name: "Degustazioni", slug: "degustazioni", desc: "Note di serate, eventi e incontri con produttori." },
            { name: "Approfondimenti", slug: "approfondimenti", desc: "Vinificazione, tipologie e cultura del vino." },
            { name: "Curiosità", slug: "curiosita", desc: "Storie, record, stranezze del mondo del vino." },
          ].map((c) => (
            <Link
              key={c.slug}
              to="/categoria/$cat"
              params={{ cat: c.slug }}
              className="group block px-6 py-12 text-center transition-colors hover:bg-cream lg:px-10 lg:py-16"
            >
              <div className="text-[11px] uppercase tracking-[0.3em] text-wine">
                Esplora
              </div>
              <h3 className="mt-3 font-display text-3xl font-medium text-wine-deep group-hover:italic">
                {c.name}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* DEEP GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Ornament className="mb-12" />
        <h2 className="text-center font-display text-4xl font-medium text-wine-deep md:text-5xl">
          Tutto il magazine
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Sedici storie raccolte con cura: dai vignaioli più visionari alle
          curiosità che non ti aspetti.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {grid.map((a) => (
            <ArticleCard key={a.slug} article={a} variant="compact" />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/articoli"
            className="inline-flex items-center gap-3 border border-wine px-8 py-4 text-xs uppercase tracking-[0.22em] text-wine transition-colors hover:bg-wine hover:text-cream"
          >
            Sfoglia l'archivio completo
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-wine-deep py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold">
            La newsletter di Enotions
          </div>
          <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
            Una storia di vino,<br />ogni domenica.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/70">
            Niente spam, niente noia. Solo racconti scelti, degustazioni e
            consigli dalla nostra redazione.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="la-tua-email@dominio.it"
              className="flex-1 border border-cream/30 bg-transparent px-4 py-3 text-sm placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="border border-gold bg-gold px-6 py-3 text-xs uppercase tracking-[0.22em] text-wine-deep transition-opacity hover:opacity-90"
            >
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

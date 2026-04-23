import { createFileRoute } from "@tanstack/react-router";
import { Ornament } from "@/components/Ornament";
import vineyard from "@/assets/vineyard.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Chi siamo — Enotions" },
      {
        name: "description",
        content:
          "Enotions è un magazine indipendente dedicato al vino. Raccontiamo storie di vignaioli, territori e tradizioni con un linguaggio diretto e appassionato.",
      },
      { property: "og:title", content: "Chi siamo — Enotions" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 pt-16 text-center lg:pt-24">
        <div className="text-[11px] uppercase tracking-[0.3em] text-wine">
          Chi siamo
        </div>
        <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-wine-deep md:text-7xl">
          Emozioni nel calice.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-display text-xl leading-relaxed text-foreground/80">
          Enotions è un magazine indipendente che racconta il vino come emozione:
          un linguaggio fatto di territori, di mani che lavorano la vite, di
          tempo e di pazienza.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-10">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src={vineyard}
            alt="Vigneto al tramonto"
            className="h-full w-full object-cover"
            width={1600}
            height={685}
          />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-2xl px-6 pb-24">
        <Ornament className="mb-12" />
        <div className="prose-wine">
          <p>
            Siamo nati da una serata in cantina, davanti a un Sangiovese che
            sapeva di terra umida e ciliegia matura. Da lì la voglia di
            raccontare il vino senza filtri, senza l'ossessione della
            classifica, ma con la curiosità di chi vuole capire — e poi
            condividere.
          </p>
          <h3>Cosa troverai qui</h3>
          <p>
            Degustazioni vere, con i produttori in carne e ossa. Approfondimenti
            tecnici scritti in italiano, non in burocratese enologico. Curiosità
            che fanno sorridere e racconti che fanno venir voglia di stappare.
          </p>
          <h3>Come scriviamo</h3>
          <p>
            Senza piedistalli. Il vino è cultura ma è anche piacere quotidiano:
            il nostro tono è quello di un amico esperto che ti versa un calice e
            comincia a raccontare. Niente di più.
          </p>
          <blockquote>
            "Il vino comincia dove finiscono le parole, ma finché ne abbiamo
            qualcuna, vale la pena spenderla bene."
          </blockquote>
          <h3>Contatti</h3>
          <p>
            Scrivici a <strong>redazione@enotions.it</strong> — leggiamo tutto,
            promesso.
          </p>
        </div>
      </section>
    </div>
  );
}

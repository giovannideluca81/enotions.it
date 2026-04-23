import { createFileRoute } from "@tanstack/react-router";
import { articles, getCategories } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Ornament } from "@/components/Ornament";
import { useState } from "react";

export const Route = createFileRoute("/articoli")({
  head: () => ({
    meta: [
      { title: "Tutti gli articoli — Enotions" },
      {
        name: "description",
        content:
          "L'archivio completo del magazine Enotions: degustazioni, approfondimenti e curiosità dal mondo del vino.",
      },
      { property: "og:title", content: "Tutti gli articoli — Enotions" },
      {
        property: "og:description",
        content:
          "Sedici storie di vino: vignaioli, territori e tradizioni raccontati con passione.",
      },
    ],
  }),
  component: ArticlesIndex,
});

function ArticlesIndex() {
  const cats = ["Tutti", ...getCategories()];
  const [active, setActive] = useState("Tutti");
  const list =
    active === "Tutti"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="text-center">
        <div className="text-[11px] uppercase tracking-[0.3em] text-wine">
          L'archivio
        </div>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-wine-deep md:text-6xl">
          Tutti gli articoli
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Sedici storie scelte con cura per chi vive il vino come emozione, non
          come consumo.
        </p>
        <Ornament className="mt-10" />
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`border px-5 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors ${
              active === c
                ? "border-wine bg-wine text-cream"
                : "border-border text-foreground/70 hover:border-wine hover:text-wine"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {list.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}

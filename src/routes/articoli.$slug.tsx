import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getArticle, getRelated, imageMap } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Ornament } from "@/components/Ornament";

export const Route = createFileRoute("/articoli/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article, related: getRelated(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — Enotions` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-[50vh] items-center justify-center px-6 py-24 text-center">
      <div>
        <h1 className="font-display text-4xl text-wine-deep">Articolo non trovato</h1>
        <Link to="/articoli" className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-wine">
          ← Torna all'archivio
        </Link>
      </div>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article, related } = Route.useLoaderData();
  const img = imageMap[article.image];

  return (
    <article>
      {/* HEADER */}
      <header className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-10 lg:pt-24">
        <Link
          to="/articoli"
          className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-wine"
        >
          ← Archivio
        </Link>
        <div className="mt-8 text-[11px] uppercase tracking-[0.3em] text-wine">
          {article.category} · {article.subcategory}
        </div>
        <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-balance text-wine-deep md:text-6xl">
          {article.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-display text-lg leading-relaxed text-foreground/75 md:text-xl">
          {article.excerpt}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Redazione Enotions</span>
          <span className="h-px w-6 bg-current opacity-40" />
          <span>{article.readTime} min di lettura</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="mx-auto mt-12 max-w-5xl px-6 lg:px-10">
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={img}
            alt={article.title}
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto mt-16 max-w-2xl px-6 lg:px-0">
        <div className="prose-wine">
          {article.body.map((b, i) => {
            if (b.tag === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.tag === "h3") return <h3 key={i}>{b.text}</h3>;
            if (b.tag === "blockquote") return <blockquote key={i}>{b.text}</blockquote>;
            if (b.tag === "li") return <li key={i}>{b.text}</li>;
            return <p key={i}>{b.text}</p>;
          })}
        </div>

        <Ornament className="mt-16" />
        <p className="mt-6 text-center text-sm italic text-muted-foreground">
          Hai bevuto un buon vino di recente? Raccontacelo.
        </p>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-7xl border-t border-border px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl font-medium text-wine-deep md:text-4xl">
              Continua a leggere
            </h2>
            <Link
              to="/articoli"
              className="text-xs uppercase tracking-[0.22em] text-wine hover:text-wine-deep"
            >
              Tutti →
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="compact" />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

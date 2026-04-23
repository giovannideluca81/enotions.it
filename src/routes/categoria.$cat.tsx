import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, categorySlug } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Ornament } from "@/components/Ornament";

export const Route = createFileRoute("/categoria/$cat")({
  loader: ({ params }) => {
    const list = articles.filter((a) => categorySlug(a.category) === params.cat);
    if (list.length === 0) throw notFound();
    return { list, name: list[0].category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: `${loaderData.name} — Enotions` },
        {
          name: "description",
          content: `Tutti gli articoli della categoria ${loaderData.name} — Enotions, magazine indipendente sul vino.`,
        },
        { property: "og:title", content: `${loaderData.name} — Enotions` },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-[50vh] items-center justify-center px-6 py-24 text-center">
      <div>
        <h1 className="font-display text-4xl text-wine-deep">Categoria non trovata</h1>
        <Link to="/articoli" className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-wine">
          ← Vai all'archivio
        </Link>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { list, name } = Route.useLoaderData();
  const [hero, ...rest] = list;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="text-center">
        <div className="text-[11px] uppercase tracking-[0.3em] text-wine">
          Categoria
        </div>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-wine-deep md:text-7xl">
          {name}
        </h1>
        <Ornament className="mt-8" />
      </div>

      <div className="mt-16">
        <ArticleCard article={hero} variant="horizontal" />
      </div>

      {rest.length > 0 && (
        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} variant="compact" />
          ))}
        </div>
      )}
    </div>
  );
}

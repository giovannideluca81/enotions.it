import { Link } from "@tanstack/react-router";
import { type Article, imageMap } from "@/data/articles";

type Variant = "default" | "compact" | "horizontal";

export function ArticleCard({
  article,
  variant = "default",
}: {
  article: Article;
  variant?: Variant;
}) {
  const img = imageMap[article.image];

  if (variant === "horizontal") {
    return (
      <Link
        to="/articoli/$slug"
        params={{ slug: article.slug }}
        className="group grid gap-6 sm:grid-cols-[200px_1fr] sm:gap-8"
      >
        <div className="aspect-[4/3] overflow-hidden bg-muted sm:aspect-square">
          <img
            src={img}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[10px] uppercase tracking-[0.25em] text-wine">
            {article.category} · {article.subcategory}
          </div>
          <h3 className="mt-2 font-display text-xl font-medium leading-snug text-pretty group-hover:text-wine sm:text-2xl">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {article.readTime} min di lettura
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        to="/articoli/$slug"
        params={{ slug: article.slug }}
        className="group block"
      >
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={img}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-[0.25em] text-wine">
            {article.category}
          </div>
          <h3 className="mt-1.5 font-display text-lg font-medium leading-snug text-pretty group-hover:text-wine">
            {article.title}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/articoli/$slug"
      params={{ slug: article.slug }}
      className="group block"
    >
      <div className="aspect-[3/2] overflow-hidden bg-muted">
        <img
          src={img}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-5">
        <div className="text-[10px] uppercase tracking-[0.25em] text-wine">
          {article.category} · {article.subcategory}
        </div>
        <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-pretty group-hover:text-wine">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Redazione Enotions</span>
          <span className="h-px w-4 bg-current opacity-40" />
          <span>{article.readTime} min</span>
        </div>
      </div>
    </Link>
  );
}

import data from "./articles.json";
import heroWine from "@/assets/hero-wine.jpg";
import vineyard from "@/assets/vineyard.jpg";
import bubbles from "@/assets/bubbles.jpg";
import grapes from "@/assets/grapes.jpg";
import cellar from "@/assets/cellar.jpg";
import cork from "@/assets/cork.jpg";
import whitewine from "@/assets/whitewine.jpg";
import winemaker from "@/assets/winemaker.jpg";

export const imageMap: Record<string, string> = {
  hero: heroWine,
  vineyard,
  bubbles,
  grapes,
  cellar,
  cork,
  whitewine,
  winemaker,
};

export type ArticleBlock = { tag: string; text: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  subcategory: string;
  excerpt: string;
  readTime: number;
  image: string;
  featured?: boolean;
  body: ArticleBlock[];
};

export const articles = data as Article[];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getCategories(): string[] {
  return Array.from(new Set(articles.map((a) => a.category)));
}

export function articlesByCategory(category: string): Article[] {
  return articles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase(),
  );
}

export function categorySlug(c: string): string {
  return c.toLowerCase().replaceAll("à", "a").replaceAll(" ", "-");
}

export function getRelated(slug: string, limit = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return [];
  return articles
    .filter((a) => a.slug !== slug && a.category === current.category)
    .slice(0, limit);
}

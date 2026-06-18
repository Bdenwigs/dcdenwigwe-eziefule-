import ArticlesClient from "@/components/ArticlesClient";
import { sanityClient } from "@/lib/sanity.client";
import { allArticlesQuery } from "@/lib/sanity.queries";

export default async function ArticlesPage() {
  let articles = [];
  try {
    articles = await sanityClient.fetch(allArticlesQuery);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  return <ArticlesClient initialArticles={articles || []} />;
}

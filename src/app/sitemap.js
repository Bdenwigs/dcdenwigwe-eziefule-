import { sanityClient } from "@/lib/sanity.client";
import {
  allTeamMembersQuery,
  latestArticlesQuery,
  latestCaseStudiesQuery,
} from "@/lib/sanity.queries";

export default async function sitemap() {
  const baseUrl = 'https://www.dcdenwigwe.com';

  // Fetch all data at the exact same time to speed things up
  const [lawyers, articles, caseStudies] = await Promise.all([
    sanityClient.fetch(allTeamMembersQuery),
    sanityClient.fetch(latestArticlesQuery),
    sanityClient.fetch(latestCaseStudiesQuery),
  ]);

  // Use || [] to prevent crashes if a query returns nothing
  const lawyerUrls = (lawyers || []).map((lawyer) => ({
    url: `${baseUrl}/team/${lawyer.slug?.current || lawyer.slug}`,
    lastModified: new Date(),
  }));

  const articleUrls = (articles || []).map((article) => ({
    url: `${baseUrl}/articles/${article.slug?.current || article.slug}`,
    lastModified: new Date(article._updatedAt || new Date()),
  }));

  const caseStudyUrls = (caseStudies || []).map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug?.current || study.slug}`,
    lastModified: new Date(study._updatedAt || new Date()),
  }));

  const staticUrls = [
    '',
    '/about',
    '/articles',
    '/case-studies',
    '/contact',
    '/sectors',
    '/services',
    '/team',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...lawyerUrls, ...articleUrls, ...caseStudyUrls];
}

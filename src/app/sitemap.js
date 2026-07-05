export const revalidate = 60;


import { sanityClient } from "@/lib/sanity.client";
import {
  allTeamMembersQuery,
  allArticlesQuery,
  allCaseStudiesQuery,
  allPracticeAreasQuery, // ✅ Updated to match your frontend services page query
} from "@/lib/sanity.queries";

export default async function sitemap() {
  const baseUrl = 'https://www.dcdenwigwe.com';

  // Fetch all data in parallel
  const [lawyers, articles, caseStudies, services] = await Promise.all([
    sanityClient.fetch(allTeamMembersQuery),
    sanityClient.fetch(allArticlesQuery),
    sanityClient.fetch(allCaseStudiesQuery),
    sanityClient.fetch(allPracticeAreasQuery), // ✅ Using the exact query from your frontend page
  ]);

  // Team members
  const lawyerUrls = (lawyers || []).map((lawyer) => ({
    url: `${baseUrl}/team/${lawyer.slug?.current || lawyer.slug}`,
    lastModified: new Date(),
  }));

  // Articles
  const articleUrls = (articles || []).map((article) => ({
    url: `${baseUrl}/articles/${article.slug?.current || article.slug}`,
    lastModified: new Date(article._updatedAt || new Date()),
  }));

  // Case studies
  const caseStudyUrls = (caseStudies || []).map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug?.current || study.slug}`,
    lastModified: new Date(study._updatedAt || new Date()),
  }));

  // Services / Practice Areas
  const serviceUrls = (services || []).map((service) => ({
    url: `${baseUrl}/services/${service.slug?.current || service.slug}`,
    lastModified: new Date(service._updatedAt || new Date()),
  }));

  // Static pages
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

  return [
    ...staticUrls,
    ...lawyerUrls,
    ...articleUrls,
    ...caseStudyUrls,
    ...serviceUrls,
  ];
}

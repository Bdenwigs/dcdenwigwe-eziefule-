import { sanityClient } from "@/lib/sanity.client";
import {
  allTeamMembersQuery,
} from "@/lib/sanity.queries";

export default async function sitemap() {
  const baseUrl = 'https://dcdenwigwesan.com'; // Replace with actual URL if known

  // Fetch dynamic routes
  const lawyers = await sanityClient.fetch(allTeamMembersQuery);
  
  const lawyerUrls = lawyers.map((lawyer) => ({
    url: `${baseUrl}/team/${lawyer.slug}`,
    lastModified: new Date(),
  }));

  // Add more dynamic routes here (e.g., articles, services, case studies)

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

  return [...staticUrls, ...lawyerUrls];
}

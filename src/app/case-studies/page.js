export const revalidate = 60;

import CaseStudiesClient from "@/components/CaseStudiesClient";
import { sanityClient } from "@/lib/sanity.client";
import { allCaseStudiesQuery } from "@/lib/sanity.queries";

export default async function CaseStudiesPage() {
  let caseStudies = [];
  try {
    caseStudies = await sanityClient.fetch(allCaseStudiesQuery);
  } catch (error) {
    console.error("Error fetching case studies:", error);
  }

  return <CaseStudiesClient initialCaseStudies={caseStudies || []} />;
}

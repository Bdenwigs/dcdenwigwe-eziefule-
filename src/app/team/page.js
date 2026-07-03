export const revalidate = 60;

import TeamClient from "@/components/TeamClient";
import { sanityClient } from "@/lib/sanity.client";
import { allTeamMembersQuery } from "@/lib/sanity.queries";

export default async function TeamPage() {
  let lawyers = [];
  try {
    lawyers = await sanityClient.fetch(allTeamMembersQuery);
  } catch (error) {
    console.error("Error fetching team members:", error);
  }

  return <TeamClient initialLawyers={lawyers || []} />;
}

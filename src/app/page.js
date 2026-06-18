import HomeClient from "@/components/HomeClient";
import { sanityClient } from "@/lib/sanity.client";
import {
  allTeamMembersQuery,
  latestCaseStudiesQuery,
  latestArticlesQuery,
} from "@/lib/sanity.queries";
import { fetchYouTubeVideos } from "@/lib/youtube";

export default async function Home() {
  const backgroundImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  const messages = [
    "Fighting For Justice With Precision, Competence and Devotion",
    "Empowering Lives with Trusted Legal counsel in Nigeria",
    "Dedication, Loyalty and Integrity-driven Legal Solutions",
    "Your Partners in Fairness, Rights, and Excellent Representation",
    "Delivering Compassionate Advocacy Across Nigeria and Beyond",
    "Trusted Advisors for Families, Businesses, and Communities",
    "Protecting Your Rights, Guaranteeing Your Future",
    "Navigating Nigeria’s Legal Landscape with Precision and Care",
  ];

  // Fetch dynamic data from Sanity and YouTube
  let lawyers = [];
  let videos = [];
  let caseStudies = [];
  let articles = [];

  try {
    [lawyers, videos, caseStudies, articles] = await Promise.all([
      sanityClient.fetch(allTeamMembersQuery),
      fetchYouTubeVideos(
        process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "UCEicvUSzAacMjDwqMrv_Fzw",
      ),
      sanityClient.fetch(latestCaseStudiesQuery),
      sanityClient.fetch(latestArticlesQuery),
    ]);
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  return (
    <HomeClient
      backgroundImages={backgroundImages}
      messages={messages}
      lawyers={lawyers || []}
      videos={videos || []}
      caseStudies={caseStudies || []}
      articles={articles || []}
    />
  );
}

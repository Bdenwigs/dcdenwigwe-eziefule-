// Fetch the 3 latest Articles
export const latestArticlesQuery = `*[_type == "article"] | order(publishedAt desc) [0...3] {
  title,
  "slug": slug.current,
  excerpt,
  author,
  publishedAt,
  coverImage
}`;

// Fetch the 3 latest Case Studies
export const latestCaseStudiesQuery = `*[_type == "caseStudy"] | order(publishDate desc) [0...3] {
  title,
  "slug": slug.current,
  summary,
  image,
  "practiceArea": relatedPracticeArea->title
}`;

// Fetch all Articles
// Fetch all Articles
export const allArticlesQuery = `*[_type == "article"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  author,
  publishedAt,
  _createdAt,
  _updatedAt,
  coverImage,
  seoKeywords
}`;

// Fetch all Team Members
export const allTeamMembersQuery = `*[_type == "teamMember"] | order(name asc) {
  name,
  "slug": slug.current,
  "position": role,
  photo,
  bio,
  "practiceAreas": practiceAreas[]->title
}`;

// Fetch all Practice Areas
export const allPracticeAreasQuery = `*[_type == "practiceArea"] | order(title asc) {
  title,
  "slug": slug.current,
  icon,
  description,
  seoKeywords
}`;

// Fetch all Case Studies
export const allCaseStudiesQuery = `*[_type == "caseStudy"] | order(publishDate desc) {
  title,
  "slug": slug.current,
  summary,
  image,
  clientIndustry,
  "practiceArea": relatedPracticeArea->title
}`;

// Single Document Queries by Slug
export const articleBySlugQuery = `*[_type == "article" && slug.current == $slug][0] { ..., "slug": slug.current }`;
export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] { ..., "slug": slug.current, "practiceArea": relatedPracticeArea->title }`;
export const teamMemberBySlugQuery = `*[_type == "teamMember" && slug.current == $slug][0] { ..., "slug": slug.current, "position": role, "practiceAreas": practiceAreas[]->title }`;
export const practiceAreaBySlugQuery = `*[_type == "practiceArea" && slug.current == $slug][0] { 
  ..., 
  "slug": slug.current,
  "team": *[_type == "teamMember" && references(^._id)] {
    name,
    "slug": slug.current,
    "position": role,
    photo,
    bio
  }
}`;

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // Protect Sanity Studio from indexing
    },
    sitemap: 'https://www.dcdenwigwe.com/sitemap.xml', // Replace with actual URL if known
  }
}

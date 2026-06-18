const caseStudy = {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3 },
    { name: 'details', title: 'Details', type: 'array', of: [{ type: 'block' }] },
    { name: 'image', title: 'Featured Image', type: 'image', options: { hotspot: true } },
    { 
      name: 'relatedPracticeArea', 
      title: 'Related Practice Area', 
      type: 'reference', 
      to: [{ type: 'practiceArea' }] 
    },
    { name: 'publishDate', title: 'Publish Date', type: 'date' }
  ]
};

export default caseStudy;

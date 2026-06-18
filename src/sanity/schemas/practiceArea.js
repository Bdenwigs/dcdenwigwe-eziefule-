const practiceArea = {
  name: 'practiceArea',
  title: 'Practice Area',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() },
    { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'icon', title: 'Icon Class', type: 'string', description: 'Font Awesome class, e.g., fa-solid fa-gavel' },
    { name: 'seoKeywords', title: 'SEO Keywords', type: 'string' }
  ]
};

export default practiceArea;

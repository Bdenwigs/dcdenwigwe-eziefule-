const teamMember = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: Rule => Rule.required() },
    { name: 'role', title: 'Role/Position', type: 'string', validation: Rule => Rule.required() },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'bio', title: 'Biography', type: 'array', of: [{ type: 'block' }] },
    { 
      name: 'practiceAreas', 
      title: 'Specialized Practice Areas', 
      type: 'array', 
      of: [{ type: 'reference', to: [{ type: 'practiceArea' }] }] 
    },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }
  ]
};

export default teamMember;

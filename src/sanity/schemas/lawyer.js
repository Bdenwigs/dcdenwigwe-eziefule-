const lawyer = {
  name: 'lawyer',
  title: 'Lawyer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'practiceAreas',
      title: 'Practice Areas',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'memberships',
      title: 'Professional Memberships',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }
  ]
};

export default lawyer;

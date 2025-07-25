import { defineField, defineType } from "sanity";

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: (rule) => rule.required() }),
    defineField({ name: 'image', title: 'Project Image', type: 'image' }),
    defineField({ name: 'github', title: 'GitHub Link', type: 'url' }),
    defineField({ name: 'live', title: 'Live Demo', type: 'url' }),
    defineField({ name: 'technologies', title: 'Technologies', type: 'array', of: [{ type: 'string' }]})
  ]
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Project Image', type: 'image' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'github', title: 'GitHub Link', type: 'url' }),
    defineField({ name: 'live', title: 'Live Demo', type: 'url' })
  ]
});

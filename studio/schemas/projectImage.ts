import {defineType} from 'sanity'

export const projectImage = defineType({
  name: 'projectImage',
  title: 'Project Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
    },
  ],
})

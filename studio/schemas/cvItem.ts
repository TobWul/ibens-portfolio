import {defineType} from 'sanity'

export const cvItem = defineType({
  name: 'cvItem',
  title: 'CV Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'startYear',
      title: 'Startår',
      type: 'number',
    },
    {
      name: 'endYear',
      title: 'Sluttår',
      type: 'number',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
})

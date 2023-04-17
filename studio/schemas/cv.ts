import {defineType} from 'sanity'
import {cvCategory} from './cvCategory'

export const cv = defineType({
  name: 'cv',
  title: 'CV',
  type: 'document',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: cvCategory.name,
        },
      ],
    },
  ],
})

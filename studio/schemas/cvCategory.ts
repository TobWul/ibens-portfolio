import {defineType} from 'sanity'
import {cvItem} from './cvItem'

export const cvCategory = defineType({
  name: 'cvCategory',
  title: 'CV Category',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: cvItem.name,
        },
      ],
    },
  ],
})

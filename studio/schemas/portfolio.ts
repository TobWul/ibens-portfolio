import {defineType} from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'blockContent',
      title: 'Description',
    },
    {
      name: 'rows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'columns',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'project'}],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})

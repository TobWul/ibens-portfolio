import {defineType} from 'sanity'
import {projectImage} from './projectImage'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Undertittel',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Forsidebilde',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: projectImage.name,
        },
      ],
    },
  ],
})

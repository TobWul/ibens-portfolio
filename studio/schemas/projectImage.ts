import {defineType} from 'sanity'
import {RatioInput} from '../RatioInput'

export const projectImage = defineType({
  name: 'projectImage',
  title: 'Project Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({parent}) => parent?.youtube,
    },
    {
      name: 'secondImage',
      title: 'Bilde nr. 2',
      description: 'Valgfritt',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Tittel',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
      hidden: ({parent}) => parent?.secondImage || parent?.youtube,
    },
    {
      name: 'gridRatio',
      type: 'number',
      title: 'Grid ratio',
      components: {input: RatioInput},
      hidden: ({parent}) => (!parent?.secondImage && !parent?.caption) || parent?.youtube,
    },
    {
      name: 'youtube',
      title: 'Youtube',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'caption',
      secondImage: 'secondImage',
      gridRatio: 'gridRatio',
      media: 'image',
      youtube: 'youtube',
    },
    prepare({
      title = '',
      media,
      secondImage,
      gridRatio,
      youtube,
    }: {
      gridRatio: number
      title: string
      media: any
      secondImage: any
      youtube: any
    }) {
      return {
        title: youtube ? 'Video' : title ? title.substring(0, 10) + '...' : 'Uten tekst',
        subtitle: secondImage ? `To bilder ` : gridRatio ? `(${gridRatio} / 12)` : '',
        media,
      }
    },
  },
})

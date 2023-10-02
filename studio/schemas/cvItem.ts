import {defineType} from 'sanity'
import {project} from './project'

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
      name: 'portfolioItem',
      title: 'Portefølje-prosjekt',
      type: 'reference',
      to: [{type: project.name}],
    },
    {
      name: 'externalLink',
      title: 'Ekstern lenke',
      type: 'url',
    },
  ],
})

import {SchemaTypeDefinition} from 'sanity'

const professionalExperience: SchemaTypeDefinition<'object'> = {
  name: 'professionalExperience',
  title: 'Professional Experience',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'employer',
      title: 'Employer',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'start',
      title: 'Start',
      type: 'date',
    },
    {
      name: 'end',
      title: 'End',
      type: 'date',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      employer: 'employer',
    },
    prepare({title, employer}) {
      return {
        title,
        subtitle: employer,
      }
    },
  },
}

export default professionalExperience

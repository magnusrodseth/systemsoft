import {SchemaTypeDefinition} from 'sanity'

const publication: SchemaTypeDefinition<'object'> = {
  name: 'publication',
  title: 'Publication',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Link',
      type: 'url',
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
    },
    prepare: ({title}) => {
      return {
        title,
      }
    },
  },
}

export default publication

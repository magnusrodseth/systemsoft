import {SchemaTypeDefinition} from 'sanity'

const certification: SchemaTypeDefinition<'object'> = {
  name: 'certification',
  title: 'Certification',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare: ({title}) => {
      return {
        title,
      }
    },
  },
}

export default certification

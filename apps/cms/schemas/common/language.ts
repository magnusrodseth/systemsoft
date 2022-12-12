import {SchemaTypeDefinition} from 'sanity'

const language: SchemaTypeDefinition<'document'> = {
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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

export default language

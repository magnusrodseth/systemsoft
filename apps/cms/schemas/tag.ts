import {SchemaTypeDefinition} from 'sanity'

const tag: SchemaTypeDefinition<'document'> = {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
}

export default tag

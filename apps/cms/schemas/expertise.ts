import {SchemaTypeDefinition} from 'sanity'

const expertise: SchemaTypeDefinition<'document'> = {
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare: ({title, media}) => {
      return {
        title,
        media,
      }
    },
  },
}

export default expertise

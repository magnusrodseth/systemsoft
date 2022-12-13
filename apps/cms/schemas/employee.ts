import {SchemaTypeDefinition} from 'sanity'

const employee: SchemaTypeDefinition<'document'> = {
  name: 'employee',
  title: 'Employee',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Portrait',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
}

export default employee

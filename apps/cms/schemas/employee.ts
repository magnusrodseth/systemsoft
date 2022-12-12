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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
}

export default employee

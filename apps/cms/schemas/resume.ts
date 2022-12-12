import {SchemaTypeDefinition} from 'sanity'

const resume: SchemaTypeDefinition<'document'> = {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'employee',
      title: 'Employee',
      type: 'reference',
      to: [{type: 'employee'}],
    },
    {
      name: 'personalInformation',
      title: 'Personal Information',
      type: 'personalInformation',
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{type: 'education'}],
    },
    {
      name: 'professionalExperience',
      title: 'Professional Experience',
      type: 'array',
      of: [{type: 'professionalExperience'}],
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
      title: 'employee.name',
      subtitle: 'employee.title',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
}

export default resume
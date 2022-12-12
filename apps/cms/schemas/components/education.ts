import {SchemaTypeDefinition} from 'sanity'

const education: SchemaTypeDefinition<'object'> = {
  name: 'education',
  title: 'Education',
  type: 'object',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
    },
    {
      name: 'fieldOfStudy',
      title: 'Field of Study',
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
  ],
  preview: {
    select: {
      school: 'school',
      degree: 'degree',
      fieldOfStudy: 'fieldOfStudy',
    },
    prepare({school, degree, fieldOfStudy}) {
      return {
        title: school,
        subtitle: `${degree} - ${fieldOfStudy}`,
      }
    },
  },
}

export default education

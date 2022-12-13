import {SchemaTypeDefinition} from 'sanity'

const skill: SchemaTypeDefinition<'document'> = {
  name: 'skill',
  title: 'Skill',
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
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'shortDescription',
    },
    prepare: ({title, subtitle}) => {
      return {
        title,
        subtitle,
      }
    },
  },
}

export default skill

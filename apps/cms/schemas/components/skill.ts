import {SchemaTypeDefinition} from 'sanity'

const skill: SchemaTypeDefinition<'object'> = {
  name: 'skill',
  title: 'Skill',
  type: 'object',
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
    },
    prepare: ({title}) => {
      return {
        title,
      }
    },
  },
}

export default skill

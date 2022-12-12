import {SchemaTypeDefinition} from 'sanity'

const personalInformation: SchemaTypeDefinition<'object'> = {
  name: 'personalInformation',
  title: 'Personal Information',
  type: 'object',
  fields: [
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'age',
      title: 'Age',
      type: 'number',
    },
    {
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'linkedinLink',
      title: 'LinkedIn Link',
      type: 'url',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

export default personalInformation

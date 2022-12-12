import {SchemaTypeDefinition} from 'sanity'

const contactInformation: SchemaTypeDefinition<'document'> = {
  name: 'contactInformation',
  title: 'Contact Information',
  type: 'document',
  fieldsets: [
    {
      name: 'address',
      title: 'Address',
    },
    {
      name: 'social',
      title: 'Social',
    },
  ],
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      fieldset: 'social',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      fieldset: 'social',
    },
    {
      name: 'linkedInLink',
      title: 'LinkedIn Link',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
      fieldset: 'address',
    },
  ],
}

export default contactInformation

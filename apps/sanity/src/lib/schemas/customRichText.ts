import { defineField, defineType } from 'sanity'
import customImage from './customImage'

export default defineType({
  name: 'customRichText',
  title: 'RichText',
  type: 'object',

  groups: [
    {name: 'style', title: 'Style'},
  ],
  fields: [
    defineField({
        name: 'text',
        type: 'array',
        of: [{ type: 'block' }, {
          
            type: customImage.name
          
        }],
      }),
    defineField({
        name: "removeInnerMargins",
        type: "boolean",
        group: "style",
      }),
  ],
})

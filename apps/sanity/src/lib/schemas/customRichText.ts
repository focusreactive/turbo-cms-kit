import { defineField, defineType } from 'sanity'

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
        of: [{ type: 'block' }],
      }),
    defineField({
        name: "removeInnerMargins",
        type: "boolean",
        group: "style",
      }),
  ],
})

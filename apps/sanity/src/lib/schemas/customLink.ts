import { defineField, defineType } from 'sanity'
import { LinkVariant } from '@shared/ui/components/ui/link/types'

import page from './page'

console.log('page222');
console.log(page);


export default defineType({
  name: 'customLink',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
        name: "text",
        type: "string",
      }),

    defineField({
      name: 'type',
      type: 'string',
      title: 'Link Type',
      initialValue: 'internal',
      options: {
        list: [
          { title: 'URL', value: 'url' },
          { title: 'Internal', value: 'internal' },
        ],
      },
    }),
    defineField({
      name: 'href',
      type: 'string',
      hidden: ({ parent }) => !parent.type || parent?.type === 'internal',
    }),
    defineField({
      name: 'target',
      type: 'string',
      initialValue: '_self',
      options: {
        list: [
          { title: 'Self', value: '_self' },
          { title: 'Blank', value: '_blank' },
          { title: 'Parent', value: '_parent' },
          { title: 'Top', value: '_top' },
        ],
      },
    }),
    
    defineField({
      name: 'url',
      type: 'reference',
      to: [{type: 'page'}], // todo: change to page.name
      hidden: ({ parent }) => !parent.type || parent?.type === 'url',
    }),

      defineField({
        name: "variant",
        type: "string",
        initialValue: LinkVariant.Primary,
        options: {
          list: Object.values(LinkVariant).map(variant => ({
            title: variant,
            value: variant
          }))
        },
      }),
  ],
})

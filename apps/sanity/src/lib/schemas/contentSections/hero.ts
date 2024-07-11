import { defineSection } from '@tinloof/sanity-studio'
import { defineField } from 'sanity'
import customRichText from '../customRichText'
import customImage from '../customImage'
import customLink from '../customLink'

export default defineSection({
  name: 'section.hero',
  title: 'Hero',
  type: 'object',
  options: {
    variants: [
      {
        assetUrl: '/images/hero.png',
      },
    ],
  },
  fields: [
    defineField({
      name: 'text',
      type: customRichText.name,
    }),
    defineField(    {
  
          name: 'image',
          type: customImage.name,
        },
    ),

    defineField({
      name: 'links',
      type: 'array',
      of: [{ type: customLink.name }],
    }),
  ],

  // todo: move to helper
  preview: {
    select: {
      text: 'text.text'
    },
    prepare(value) {
      const block = (value.text || []).find((block: { _type: string }) => block._type === 'block')
      return {
        title: block
          ? block.children
            .filter((child: { _type: string }) => child._type === 'span')
            .map((span: { text: any }) => span.text)
            .join('')
          : 'No title'
      }
    }
  },
})

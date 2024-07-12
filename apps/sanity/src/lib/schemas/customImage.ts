import { defineField, defineType } from 'sanity'
import { ImageAspectRatio } from '@shared/ui/components/ui/image/types'

export default defineType({
  name: 'customImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
        name: 'image',
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            // todo: make required
            title: 'Alternative text',
          },
        ],
      }),
    defineField({
        name: "height",
        type: 'number',
      }),
    defineField({
        name: "aspectRatio",
        type: "string",
        options: {
          list: Object.values(ImageAspectRatio).map(aspectRatio => ({
            title: aspectRatio,
            value: aspectRatio
          }))
        },
      }),
  ],
})

import {defineField, defineType} from 'sanity'

export const splitImageBlockType = defineType({
  name: 'splitImageBlock',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'orientation',
      type: 'string',
      options: {
        list: [
          {value: 'imageLeft', title: 'Image Left'},
          {value: 'imageRight', title: 'Image Right'},
        ],
      },
    }),
    defineField({
      name: 'text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      type: 'imageBlock',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title,
        media,
      }
    },
  },
})

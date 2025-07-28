import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event_type',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'event_title',
      title: 'Event Title',
      type: 'string',
    }),
    defineField({
      name: 'event_link',
      title: 'Event Link',
      type: 'string',
    }),
    defineField({
      name: 'event_date',
      title: 'Event Date',
      type: 'string',
    }),
    defineField({
      name: 'event_time',
      title: 'Event Time',
      type: 'string',
    }),
    defineField({
      name: 'even_location',
      title: 'Event Location',
      type: 'string',
    }),
    defineField({
      name: 'event_image',
      title: 'Event Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'event_title',
      date: 'event_date',
      media: 'event_image',
    },
  },
})

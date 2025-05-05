import {defineField} from 'sanity'

export const pageType = {
  name: 'pageType',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'page_title',
      },
    }),
    defineField({
      name: 'content',
      type: 'pageBuilder',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

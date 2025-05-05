import {defineType, defineArrayMember} from 'sanity'

export const pageBuilderType = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    defineArrayMember({type: 'hero'}),
    defineArrayMember({type: 'callToAction'}),
    defineArrayMember({type: 'imageBlock'}),
    defineArrayMember({type: 'splitImageBlock'}),
  ],
})

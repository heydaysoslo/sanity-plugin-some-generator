import d from '../defaults'
import { someFormats } from '../../custom/components/previews/some/Some'
console.log(
  '🚀 ~ file: some.js ~ line 3 ~ someFormats',
  Object.keys(someFormats)
)
export default {
  name: 'some',
  title: 'some',
  type: 'document',
  fields: [
    d.image,
    {
      name: 'overlayImage',
      title: 'Overlay Image',
      description: 'Used for backgrounds and patterns',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [d.image]
    },
    {
      name: 'type',
      title: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          ...Object.keys(someFormats).map(key => ({ title: key, value: key }))
        ]
      }
    },
    {
      name: 'content',
      title: 'content',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'item',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'title',
              type: 'string',
              description: 'Use %0A for new lines'
            },
            {
              name: 'x',
              title: 'Position X',
              type: 'string',
              description: 'Percent (0-1) or pixels'
            },
            {
              name: 'y',
              title: 'Position Y',
              type: 'string',
              description: 'Percent (0-1) or pixels'
            },
            {
              name: 'fontSize',
              title: 'Font Size',
              type: 'number'
            },
            {
              name: 'fontFamily',
              title: 'Font Family',
              type: 'string',
              options: {
                list: [
                  { title: 'Suisse Works', value: 'SuisseWorks.otf' },
                  { title: 'Suisse Intl', value: 'SuisseIntl.otf' }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: 'title',
      title: 'title',
      type: 'string',
      description: 'Use %0A for new lines'
    },
    {
      name: 'fontSize',
      title: 'Font Size',
      type: 'number'
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'color'
    }
  ]
}

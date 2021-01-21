import d from '../defaults'
export default {
  name: 'some',
  title: 'some',
  type: 'document',
  fields: [
    d.image,
    {
      name: 'type',
      title: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Instagram story', value: 't_instagram_story' },
          { title: 'Instagram post', value: 't_instagram_post' }
        ]
      }
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
    }
  ]
}

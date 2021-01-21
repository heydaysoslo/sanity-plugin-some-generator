import MyTool from 'sanity-plugin-some-generator'
export default {
  name: 'some',
  title: 'some',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string'
    },

    {
      name: 'hello',
      title: 'hello',
      type: 'mytool'
    }
  ]
}

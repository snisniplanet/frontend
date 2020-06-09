import { schema } from 'prosemirror-schema-basic'

let custom = {
  nodes: {
    doc: { content: 'block+' },
    paragraph: {
      group: 'block',
      content: 'inline*',
      marks: '_',
      toDOM() {
        return ['p', 0]
      },
      parseDOM: [{tag: "p"}]
    },
    heading: { group: 'block', content: 'text*', marks: '' },
    text: { group: "inline" }
  },
  marks: {
    ...schema.spec.marks,
    bold: {
      parseDOM: [
        { tag: 'strong' },
        {
          tag: 'b',
          getAttrs: (node) => node.style.fontWeight != 'normal' && null
        }
      ],
      toDOM() {
        return ['b']
      }
    },
    italic: {
      parseDOM: [
        { tag: 'i' },
      ],
      toDOM() {
        return ['i']
      }
    }
  }
}

export default Object.assign(schema, custom)

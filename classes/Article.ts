import { Schema, DOMSerializer, Node, DOMParser } from 'prosemirror-model'

//TODO Rename to JSONDocument
export class Article {
  private document: JSON;
  private schema: Schema;

  constructor(document: JSON, schema: Schema) {
    this.document = document
    this.schema = schema
  }

  public view(target: Element) {
    let contentNode = Node.fromJSON(this.schema, this.document)

    DOMSerializer
      .fromSchema(this.schema)
      .serializeFragment(
        contentNode.content,
        {
          document: window.document
        }
      )
  }
}

/*
let doc = this.editor.getJSON()
      let schema = this.editor.schema
      let target = this.$refs.result
      let contentNode = Node.fromJSON(schema, doc)

      DOMSerializer.fromSchema(schema).serializeFragment(
        contentNode.content,
        { document: window.document },
        target
      )
*/

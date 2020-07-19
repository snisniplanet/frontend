<template>
  <div>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1>
            <span class="title is-1">Publisher</span>
            <sup>DEMO</sup>
          </h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div ref="editor"></div>
      <hr />
      <div ref="content" v-html="content"></div>
      <hr />
    </div>
  </div>
</template>

<script>
import { schema } from 'prosemirror-schema-basic'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { DOMParser } from 'prosemirror-model'
import { Renderer } from 'prosemirror-to-html-js'

export default {
  data(){
    return {
      content: "",
      renderer: {},
    }
  },
  mounted() {
    let editor = this.$refs.editor
    this.renderer = new Renderer()

    let state = EditorState.create({
      doc: DOMParser.fromSchema(schema).parse(editor)
    })

    let view = new EditorView(editor, {
      state,
      dispatchTransaction: (transaction) => {
        let newState = view.state.apply(transaction)

        let doc = newState.toJSON().doc

        this.content = this.renderer.render(doc)

        view.updateState(newState)
      }
    })
  },
  beforeDestroy() {},
  methods: {
    send() {}
  }
}
</script>

<style scoped lang="scss">
.editor {
  padding: 10px 20px;
}
</style>

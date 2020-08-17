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

    <div class="container section box">
      <div ref="editor" class="is-content"></div>
      <hr />
      <div
        ref="content"
        class="is-rounded has-shadow-soft has-padding is-content"
        v-html="content"
      ></div>
      <hr />
    </div>
  </div>
</template>

<script>
import { schema } from 'prosemirror-schema-basic'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { DOMParser } from 'prosemirror-model'
import { keymap } from 'prosemirror-keymap'
import { baseKeymap, toggleMark } from 'prosemirror-commands'
import { Renderer } from 'prosemirror-to-html-js'

export default {
  data() {
    return {
      content: '',
      renderer: {}
    }
  },
  mounted() {
    const editor = this.$refs.editor
    this.renderer = new Renderer()

    const state = EditorState.create({
      doc: DOMParser.fromSchema(schema).parse(editor),
      plugins: [
        keymap({
          ...baseKeymap,
          "Ctrl-b": toggleMark(schema.marks.bold)
        })
      ]
    })

    const view = new EditorView(editor, {
      state,
      dispatchTransaction: (transaction) => {
        const newState = view.state.apply(transaction)

        const doc = newState.toJSON().doc

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

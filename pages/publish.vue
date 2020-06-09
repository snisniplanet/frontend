<template>
  <div>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1>
            <span class="title is-1">Publisher</span>
            <sup>DEMO</sup>
          </h1>

          <h3 class="subtitle is-5">
            Built with
            <a href="https://tiptap.scrumpy.io/" target="_blank" rel="noopener"
              >tiptap</a
            >.
          </h3>
        </div>
      </div>
    </div>

    <div class="container">
      <no-ssr>
        <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
          <div>
            <button
              class="button is-light"
              :class="{ 'is-primary': isActive.bold() }"
              @click="commands.bold"
            >
              <b>B</b>
            </button>

            <button
              class="button is-light"
              :class="{ 'is-primary': isActive.italic() }"
              @click="commands.italic"
            >
              <i>I</i>
            </button>

            <button
              class="button is-light"
              :class="{ 'is-primary': isActive.blockquote() }"
              @click="commands.blockquote"
            >
              [*]
            </button>

            <button
              class="button is-light"
              :class="{ 'is-primary': isActive.code() }"
              @click="commands.code"
            >
              @
            </button>

            <button
              class="button is-light"
              :class="{ 'is-primary': isActive.code_block() }"
              @click="commands.code_block"
            >
              [@]
            </button>
          </div>
        </editor-menu-bar>

        <div>
          <editor-content :editor="editor" class="editor is-content" />
        </div>

        <div>
          <button class="button is-info is-large" @click="send">send</button>
        </div>

        <hr>

        <div>
          <p class="title is-2">Test output</p>
          <div ref="result"></div>
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import { EditorContent, EditorMenuBar, Editor } from 'tiptap'
import { Bold, Blockquote, Code, CodeBlock, Italic } from 'tiptap-extensions'

import schema from '~/assets/schemas/prosemirror-schema-rich'
import { addListNodes } from 'prosemirror-schema-list'
import { Node, DOMSerializer, Schema } from 'prosemirror-model'

export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: {}
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Bold(),
        new Blockquote(),
        new Code(),
        new CodeBlock(),
        new Italic()
      ]
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    send() {
      let doc = this.editor.getJSON()
      console.log(doc)

      // converting to html
      let customSchema = new Schema(schema)
      let target = this.$refs.result
      let contentNode = Node.fromJSON(customSchema, doc)

      DOMSerializer.fromSchema(customSchema).serializeFragment(
        contentNode.content,
        { document: window.document },
        target
      )
    }
  }
}
</script>

<style scoped lang="scss">
.editor {
  padding: 10px 20px;
}
</style>

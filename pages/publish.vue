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
      <no-ssr>
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
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

            <!-- <button
              class="button is-light"
              :class="{ 'is-primary': isActive.blockquote() }"
              @click="commands.blockquote"
            >
              [*]
            </button> -->

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

        <div class="box">
          <editor-content :editor="editor" class="editor"/>
        </div>

        <div>
          <p class="title is-2">Result</p>
          <div class="box" v-html="result"></div>
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import { EditorContent, EditorMenuBar, Editor } from 'tiptap'
import { Bold, Blockquote, Code, CodeBlock, Italic } from 'tiptap-extensions'
import { Renderer } from 'prosemirror-to-html-js'

export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: {},
      result: '',
    }
  },
  mounted() {
    const renderer = new Renderer()

    this.editor = new Editor({
      extensions: [
        new Bold(),
        new Blockquote(),
        new Code(),
        new CodeBlock(),
        new Italic(),
      ],
      onUpdate: ({ getJSON }) => {
        this.result = renderer.render(getJSON())
      }
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style scoped lang="scss">
.editor{
  padding: 10px 20px;
}
</style>

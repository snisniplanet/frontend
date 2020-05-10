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
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
          <button
            class="button"
            :class="{ 'is-primary': isActive.bold() }"
            @click="commands.bold"
          >
            <b>B</b>
          </button>
        </editor-menu-bar>
        <editor-content :editor="editor" />
      </no-ssr>
    </div>
  </div>
</template>

<script>
import { EditorContent, EditorMenuBar, Editor } from 'tiptap'
import { Bold } from 'tiptap-extensions'

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
        new Bold()
      ]
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>

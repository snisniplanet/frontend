<template>
  <div class="intersection">
    <div class="intersection-top hero is-dark has-waves-background has-shadow">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">{{title}}</h1>
          <p class="subtitle is-4">{{snippet}}</p>
          <div class="level">
            <div class="level-item">
              <p>Written by <a href="#">Full Name</a></p>

              <div class="image is-64x64 is-rounded has-margin">
                <img src="~assets/img/profile-pic.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="intersection-bottom">
      <div class="container"></div>

      <div class="box is-borderless container is-paddingless">
        <div class="image has-shadow is-rounded">
          <img src="https://picsum.photos/1000/400?grayscale" />
        </div>

        <div class="section is-content" v-html="parsedContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Renderer } from 'prosemirror-to-html-js'

export default {
  async asyncData({ $axios, params }){
    let article = await $axios.$get(`articles/${params.url}`)

    return article
  },
  data(){
    return {
      renderer: new Renderer(),
    }
  },
  computed: {
    parsedContent(){
      return this.renderer.render(this.content)
    }
  }
}
</script>

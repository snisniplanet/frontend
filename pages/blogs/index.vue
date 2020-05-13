<template>
  <div>
    <Banner>
      <template #title>
        Our blogs
      </template>

      <template #subtitle>
        See what communities we <u>proudly</u> host.
      </template>
    </Banner>

    <div>
      <div
        class="hero is-dark"

        v-for="blog in blogs"
        :key="blog.code"
      >
        <div class="hero-body">
          <div class="container">
            <p class="title is-3">{{blog.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Banner'
export default {
  components: {
    Banner
  },

  data(){
    return {
      blogs: []
    }
  },

  async fetch() {
    const blogs = await fetch(`http://backend/blogs`).then((res) => res.json())

    this.blogs = this.blogs.concat(blogs)
  }
}
</script>

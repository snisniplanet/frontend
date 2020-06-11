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

    <div v-if="Array.isArray(blogs) && blogs.length > 0">
      <div v-for="blog in blogs" :key="blog.code" class="hero is-dark">
        <div class="hero-body">
          <div class="container">
            <p class="title is-3">{{ blog.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <Empty v-else />
  </div>
</template>

<script>
import Banner from '~/components/atoms/Banner'
import Empty from '~/components/prefabs/Empty'

export default {
  components: {
    Banner,
    Empty
  },

  async asyncData({ $axios }) {
    const blogs = await $axios.$get('blogs')
    return { blogs }
  }
}
</script>

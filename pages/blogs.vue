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
  </div>
</template>

<script>
import Banner from '~/components/Banner'
export default {
  components: {
    Banner
  },

  middleware: ['blogs'],

  data(){
    return {
      blogs: []
    }
  },
}
</script>

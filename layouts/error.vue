<template>
  <div class="hero is-large is-info">
    <div class="hero-head container">
      <p class="title is-0">{{ error.statusCode }}</p>
    </div>

    <div class="hero-head container section">
      <p class="subtitle is-2">{{ error.message }}</p>
      <p v-show="error.path" class="subtitle is-4">
        <span>Our awesome site</span>
        <span class="has-text-warning">{{ error.path }}</span>
      </p>
    </div>

    <div class="hero-foot container section">
      <nuxt-link to="/">
        <span class="button is-large">Back to the homepage!</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: Object
  }
}
</script>

<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <component :is="component" class="is-block" :to="to" :href="to" noopener>
          <span  class="has-text-centered">
            <b-icon v-if="icon" :icon="icon"></b-icon>
            <span>
              <slot></slot>
            </span>
          </span>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    to: String,
    internal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    component(){
      return this.internal && this.to ? 'nuxt-link' : 'a'
    }
  }
}
</script>

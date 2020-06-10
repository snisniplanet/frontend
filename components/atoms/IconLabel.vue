<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <span class="has-text-centered">
          <fa v-if="icon" :icon="[pack, icon]"></fa>
          <span>
            <slot></slot>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    pack: {
      type: String,
      default: 'fas'
    }
  }
}
</script>

<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container section">
        <h1 class="title is-1">
          <slot name="title"></slot>
        </h1>
        <h2 class="subtitle is-4">
          <slot name="subtitle"></slot>
        </h2>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  padding-left: 0;
  padding-right: 0;
}
</style>

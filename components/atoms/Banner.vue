<template>
  <div class="hero is-small">
    <div cass="hero-body">
      <div class="section container">
        <h1 class="title is-1">
          <slot name="title"></slot>
        </h1>

        <h3>
          <slot name="subtitle"></slot>
        </h3>
      </div>
    </div>
  </div>
</template>

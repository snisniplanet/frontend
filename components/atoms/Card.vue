<template>
  <div class="card is-rounded has-shadow-light">
    <div class="card-image" v-if="thumbnail">
      <figure class="image is-rounded is-4by3">
        <img
          :src="thumbnail"
          alt
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left" v-if="authorPic">
          <figure class="image is-rounded is-48x48">
            <img
              :src="authorPic"
              alt
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{title}}</p>
          <p class="subtitle is-6" v-if="username">@{{username}}</p>
        </div>
      </div>

      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnail: String,
    authorPic: String,
    username: String,
  }
}
</script>

<style scoped>
.card {
  max-width: 500px !important;
}

.image img {
  object-fit: cover;
}
</style>

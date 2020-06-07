<template>
  <div class="card is-rounded">
    <div class="card-image" v-if="image">
      <figure class="image is-4by3">
        <img
          :src="image"
          alt
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left" v-if="authorPic">
          <figure class="image is-48x48">
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
    image: String,
    authorPic: String,
    username: String,
  }
}
</script>

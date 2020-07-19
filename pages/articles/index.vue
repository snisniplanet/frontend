<template>
  <div>
    <Banner>
      <template #title>
        Our top articles 🔥
      </template>

      <template #subtitle>
        See what has made the list today
      </template>
    </Banner>
    <section
      v-if="Array.isArray(articles) && articles.length > 0"
      class="container"
    >
      <article
        v-for="article in articles"
        :key="article.id"
        class="box is-rounded has-shadow-centered"
      >
        <div class="columns is-vcentered">
          <div class="column">
            <div class="image is-16by9">
              <img src="~assets/img/thumbnail.png" />
            </div>
          </div>
          <div class="column">
            <div>
              <div>
                <p class="title is-3">{{ article.title }}</p>
                <p>{{ article.snippet }}</p>
                <div>
                  <span>by</span>
                  <span v-for="(author, i) in article.authors" :key="author.id">
                    <strong>{{ author.username }}</strong>
                    <span v-if="i < article.authors.length - 2">, </span>
                    <span v-else-if="i == article.authors.length - 2">
                      and
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <br />
            <nuxt-link
              :to="'' + article.id"
              append
              class="button is-large is-fullwidth is-link is-outlined"
            >
              Leggi tutto
            </nuxt-link>
          </div>
        </div>
      </article>
    </section>

    <Empty v-else />
  </div>
</template>

<script>
import Banner from '~/components/atoms/Banner'
import Empty from '~/components/prefabs/Empty'

export default {
  name: 'HomePage',

  components: {
    Banner,
    Empty
  },

  async asyncData({ $axios }) {
    const articles = await $axios.$get('articles')
    return { articles }
  }
}
</script>

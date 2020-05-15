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
    <section class="section container">
      <article
        v-for="n in 5"
        :key="n"
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
                <p class="title is-3 is-marginless">Title</p>
                <span class="is-block"
                  >by <strong>Author</strong> <b-icon icon="check"
                /></span>
              </div>
              <hr />
              <p class="is-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                nemo possimus ea nulla, perspiciatis qui natus incidunt beatae
                similique odit totam. Nam optio beatae rem at aliquid a corrupti
                fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio quasi nemo animi ipsam nobis expedita voluptatum
                reiciendis, recusandae aspernatur tempora hic error porro nulla
                vero in quibusdam assumenda explicabo non?
              </p>
            </div>
            <br />
            <nuxt-link
              to="this-is-an-article"
              append
              class="button is-large is-fullwidth is-link is-outlined"
            >
              Leggi tutto
            </nuxt-link>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import Banner from '~/components/Banner'

export default {
  name: 'HomePage',

  components: {
    Banner
  },
  mounted() {
    this.$buefy.toast.open({
      message: 'Welcome to the new <b>SNISNI</b>',
      type: 'is-dark',
      position: 'is-top'
    })
  }
}
</script>

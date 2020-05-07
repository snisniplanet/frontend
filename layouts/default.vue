<template>
  <div>
    <b-navbar wrapper-class="container" class="sticky-top">
      <template #brand>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
          <h1 class="title">SNI</h1>
        </b-navbar-item>
      </template>

      <template #start>
        <b-navbar-item
          tag="nuxt-link"
          exact-active-class="has-text-primary"
          :to="{ name: 'articles' }"
          >Articles</b-navbar-item
        >
        <b-navbar-item tag="nuxt-link" exact-active-class="is-active" to="#"
          >Developer Blog</b-navbar-item
        >
        <b-navbar-item tag="nuxt-link" exact-active-class="is-active" to="#"
          >API</b-navbar-item
        >
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <nuxt-link to="#" class="button is-primary has-spacing">Login</nuxt-link>
          <nuxt-link to="#" class="button is-sencondary is-light has-spacing">Register</nuxt-link>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content">
      <div>
        <nuxt />
      </div>
    </section>

    <section class="footer is-dark">
      <div class="container">
        <section class="columns">
          <aside class="column">
            <a
              v-for="link in links"
              :key="link.href"
              class="is-block"
              :href="link.href"
            >
              <b-icon :icon="link.icon"></b-icon>
              <span>{{ link.name }}</span>
            </a>
          </aside>

          <aside class="column">
            <a class="is-block" href="#">
              <b-icon icon="user" pack="fas"></b-icon>
              <span>Privacy</span>
            </a>
          </aside>

          <aside class="column">
            <b-field label="Our newsletter" message="Don't worry, we hate spam">
              <b-input
                size="is-medium"
                type="email"
                placeholder="you@awesome.email"
                icon="email"
              ></b-input>
            </b-field>

            <BuyMeACoffee />
          </aside>
        </section>

        <section class="has-text-centered">
          <p>Built and maintained with 🧡 by <b>Mattia Sinisi</b></p>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { links } from '~/snisni.config.json'

import BuyMeACoffee from '~/components/BuyMeACoffee'

export default {
  components: {
    BuyMeACoffee
  },

  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ],

      links
    }
  }
}
</script>

<style scoped>
.main-content {
  margin-bottom: 20px;
}
</style>

<template>
  <div>
    <b-navbar wrapper-class="container" class="sticky-top">
      <template #brand>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
          <p class="title">SNI</p>
        </b-navbar-item>
      </template>

      <template #start>
        <b-navbar-item
          tag="nuxt-link"
          exact-active-class="has-text-primary"
          :to="{ name: 'articles' }"
        >
          <IconLabel icon="newspaper">Articles</IconLabel>
        </b-navbar-item>

        <b-navbar-item
          tag="nuxt-link"
          exact-active-class="has-text-primary"
          :to="{ name: 'blogs' }"
        >
          <IconLabel icon="th">Blogs</IconLabel>
        </b-navbar-item>

        <b-navbar-item
          tag="nuxt-link"
          exact-active-class="has-text-primary"
          to="#"
        >
          <IconLabel icon="cubes">APIs</IconLabel>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <span v-if="username" class="button is-secondary has-spacing is-rounded">
            <span class="has-text-link">@</span>
            <span>{{username}}</span>
          </span>

          <nuxt-link
            v-else
            :to="{ path: '/enter' }"
            class="button is-primary has-spacing is-rounded"
          >
            Enter
          </nuxt-link>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content">
      <div>
        <nuxt />
      </div>
    </section>

    <section class="footer">
      <div class="container">
        <section class="columns">
          <aside class="column">
            <CoolLink
              v-for="link in contacts"
              :key="link.href"
              :to="link.href"
              :icon="link.icon.name"
              :pack="link.icon.pack"
              >{{ link.name }}</CoolLink
            >
          </aside>

          <aside class="column">
            <CoolLink to="/inspire" icon="book">About</CoolLink>

            <CoolLink to="#" icon="lock">Privacy Policy</CoolLink>

            <CoolLink to="#" icon="bug">Spotted a bug?</CoolLink>
          </aside>

          <aside class="column">
            <b-field label="Our newsletter" message="Don't worry, we hate spam">
              <b-input
                size="is-medium"
                type="email"
                placeholder="you@awesome.email"
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
import { contacts } from '~/snisni.config.json'

import { mapGetters } from 'vuex'

import CoolLink from '~/components/molecoles/CoolLink'
import IconLabel from '~/components/atoms/IconLabel'
import BuyMeACoffee from '~/components/prefabs/BuyMeACoffee'

export default {
  components: {
    CoolLink,
    IconLabel,
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

      contacts
    }
  },

  computed: mapGetters({
    userId: "user/id",
    username: "user/username"
  })
}
</script>

<style scoped>
.main-content {
  margin-bottom: 20px;
}
</style>

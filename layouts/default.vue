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
          <nuxt-link
            v-if="username"
            to="/account"
            class="button is-secondary has-margin is-rounded has-shadow-soft"
          >
            <span class="has-text-link">@</span>
            <span>{{ username }}</span>
          </nuxt-link>

          <nuxt-link
            v-else
            :to="{ path: '/enter' }"
            class="button is-primary has-margin is-rounded"
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
        <section class="section">
          <p class="title has-text-centered is-2">Never miss an update!</p>
          <NewsletterForm />
          <p class="subtitle has-text-centered">Don't worry, we hate spam.</p>
        </section>

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

            <CoolLink :to="links.privacy_policy" icon="lock">Privacy Policy</CoolLink>

            <CoolLink :to="links.report_issues" icon="bug">Spotted a bug?</CoolLink>
          </aside>

          <aside class="column">
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
import { mapGetters } from 'vuex'
import { contacts, links } from '~/snisni.config.json'

import CoolLink from '~/components/molecoles/CoolLink'
import IconLabel from '~/components/atoms/IconLabel'
import BuyMeACoffee from '~/components/prefabs/BuyMeACoffee'
import NewsletterForm from '~/components/prefabs/NewsletterForm'

export default {
  components: {
    CoolLink,
    IconLabel,
    BuyMeACoffee,
    NewsletterForm,
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
      links,
      contacts
    }
  },

  computed: mapGetters({
    userId: 'user/id',
    username: 'user/username'
  })
}
</script>

<style scoped>
.main-content {
  margin-bottom: 20px;
}
</style>

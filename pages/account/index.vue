<template>
  <div class="container">
    <div class="section">
      <div class="box has-shadow-soft">
        <p>
          Welcome <strong>{{ user.username }}</strong>!
        </p>
      </div>

      <button @click="logout" class="button is-danger">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters({
      user: 'user/all'
    })
  },
  methods: {
    logout(){
      // NOTE Vuex's mapActions helper is broken: its apply method canno execute properly since it's read-only
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

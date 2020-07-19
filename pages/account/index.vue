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
import { mapGetters, mapActions } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters({
      user: 'user/all'
    }),
    ...mapActions({
      //FIXME Automatically executing store action
      logout: 'user/logout'
    })
  }
}
</script>

<template>
  <div class="container">
    <div class="section">
      <div class="box has-shadow-soft">
        <p>
          Welcome <strong>{{ user.username }}</strong
          >!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: mapGetters({
    user: 'user/all'
  })
}
</script>

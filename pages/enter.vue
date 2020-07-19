<template>
  <!--FIXME Missing icons -->
  <div class="container">
    <b-tabs expanded multiline>
      <b-tab-item label="Login">
        <form class="form" @submit.prevent="sendLogin">
          <div class="field">
            <label class="label">Your email</label>
            <div class="control">
              <input v-model="email" class="input" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Your password</label>
            <div class="control">
              <input
                v-model="password"
                class="input"
                type="password"
                placeholder="Current Password"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <b-button class="button is-large" native-type="submit">
                Enter
              </b-button>
            </div>
          </div>
        </form>
      </b-tab-item>

      <b-tab-item label="Register">
        <form class="form" @submit.prevent="sendRegister">
          <div class="field">
            <label class="label"
              >Your <span class="has-text-success">new</span> username</label
            >
            <div class="control">
              <b-input v-model="username" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Your email</label>
            <div class="control">
              <b-input
                v-model="email"
                type="email"
                placeholder="your@awesome.email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label"
              >Your <span class="has-text-success">new</span> password</label
            >
            <div class="control">
              <input
                v-model="password"
                class="input"
                type="password"
                placeholder="A strong password"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <b-button class="button is-large" native-type="submit">
                Welcome!
              </b-button>
            </div>
          </div>
        </form>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      login: 'user/login',
      register: 'user/register'
    }),
    sendLogin($event) {
      this.login({
        email: this.email,
        password: this.password
      })
    },
    sendRegister($event) {
      this.register({
        username: this.username,
        email: this.email,
        password: this.password
      })
    }
  },
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  }
}
</script>

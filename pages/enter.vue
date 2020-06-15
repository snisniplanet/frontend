<template>
  <!--FIXME Missing icons -->
  <div class="container">
    <b-tabs expanded multiline>
      <b-tab-item label="Login">
        <form class="form" @submit.prevent="sendLogin">
          <div class="field">
            <label class="label">Your email</label>
            <div class="control">
              <input class="input" type="text" v-model="email" />
            </div>
          </div>

          <div class="field">
            <label class="label">Your password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="Current Password"
                v-model="password"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <b-button
                class="button is-large"
                native-type="submit"
                icon-left="github"
              >
                Enter
              </b-button>
            </div>
          </div>
        </form>
      </b-tab-item>

      <b-tab-item label="Register">
        <form class="form" @submit.prevent="register">
          <div class="field">
            <label class="label"
              >Your <span class="has-text-success">new</span> username</label
            >
            <div class="control">
              <b-input
                icon-pack="fas"
                icon="at"
                type="text"
                v-model="username"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Your email</label>
            <div class="control">
              <b-input
                icon="email"
                type="email"
                placeholder="your@awesome.email"
                v-model="email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label"
              >Your <span class="has-text-success">new</span> password</label
            >
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="A strong password"
                v-model="password"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <b-button
                class="button is-large"
                native-type="submit"
                icon-pack="fas"
                icon-right="arrow-circle-right"
              >
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
      login: "user/login"
    }),
    sendLogin($event){
      this.login({
        username: this.username,
        email: this.email,
        password: this.password
      })
    }
  },
  data(){
    return {
      username: '',
      email: '',
      password: ''
    }
  }
}
</script>

<template>
  <!--TODO Fix missing icons -->
  <div class="container">
    <b-tabs expanded multiline>
      <b-tab-item label="Login">
        <form class="form" @submit.prevent="">
          <div class="field">
            <label class="label">Your email / Username</label>
            <div class="control">
              <input
                class="input"
                type="text"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Your password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="********"
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
        <form class="form" @submit.prevent="">
          <div class="field">
            <label class="label">Your <span class="has-text-success">new</span> username</label>
            <div class="control">
              <b-input
                icon-pack="fas"
                icon="at"
                type="text"
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
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Your <span class="has-text-success">new</span> password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="********"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <b-button
                class="button is-large"
                native-type="submit"
                icon-pack="fas"
                icon-right ="arrow-circle-right"
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

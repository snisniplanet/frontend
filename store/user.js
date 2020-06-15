import User from '@/classes/User'
import endpoints from '@/config/endpoints.json'

export const state = () => ({
  username: null,
  email: null,
  id: null
})

export const mutations = {
  assign(user, data) {
    let newUser = new User(data.username, data.email, data.id)

    user.id = newUser.id
    user.username = newUser.username
    user.email = newUser.email
  }
}

export const actions = {
  login(user, data) {
    this.$axios
      .$post(endpoints.user.login, data)
      .then((res) => {
        user.commit('assign', res.data.user)
        this.$axios.setToken(res.data.token, 'Bearer')
      })
      .catch((err) => {
        console.error(err)
      })
  },
  register(user, data) {
    this.$axios
      .$post(endpoints.user.register, data)
      .then((res) => {
        user.commit('assign', res.data.user)
        this.$axios.setToken(res.data.token, 'Bearer')
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export const getters = {
  all: (user) => user,
  id: (user) => user.id,
  username: (user) => user.username,
  email: (user) => user.email
}

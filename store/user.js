import User from '@/classes/User'
import endpoints from '@/config/endpoints.json'
import { error } from '@/helpers/log'
import config from '@/snisni.config.json'

let defaultToken = {
  type: '',
  content: ''
}

export const state = () => ({
  username: null,
  email: null,
  id: null,
  token: defaultToken
})

export const mutations = {
  assign(user, data) {
    const newUser = new User(data.username, data.email, data.id)

    user.id = newUser.id
    user.username = newUser.username
    user.email = newUser.email
  },
  clear(user){
    user.id = null
    user.username = null
    user.email = null
  },
  saveToken(user, token) {
    user.token = token
    this.$axios.setToken(token, 'Bearer')
    this.$cookies.set(config.token.name, user.token)
  },
  setToken(user, newToken) {
    if (newToken) this.$cookies.set(config.token.name, newToken)

    const token = this.$cookies.get(config.token.name)

    if (token) this.$axios.setToken(token, 'Bearer')
  },
  removeToken(user){
    user.token = defaultToken
    this.$cookies.remove(config.token.name)
    this.$axios.setToken(false)
  }
}

export const actions = {
  login(user, data) {
    return this.$axios
      .$post(endpoints.user.login, data)
      .then((res) => {
        user.commit('assign', res.data.user)
        user.commit('saveToken', res.data.token)
      })
      .catch((err) => {
        error(err)
      })
  },
  register(user, data) {
    return this.$axios
      .$post(endpoints.user.register, data)
      .then((res) => {
        user.commit('assign', res.data.user)
        user.commit('saveToken', res.data.token)
      })
      .catch((err) => {
        error(err)
      })
  },
  get(user, token) {
    user.commit('setToken', token)

    return this.$axios
      .$get(endpoints.user.me)
      .then((res) => {
        user.commit('assign', res.data)
      })
      .catch((err) => {
        error(err)
      })
  },
  logout(user){
    user.commit('removeToken')
    user.commit('clear')
  }
}

export const getters = {
  all: (user) => user,
  id: (user) => user.id,
  username: (user) => user.username,
  email: (user) => user.email
}

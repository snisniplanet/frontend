import User from '@/classes/User'
import endpoints from '@/config/endpoints.json'
import { error } from '@/helpers/log'
import config from '@/snisni.config.json'

export const state = () => ({
  username: null,
  email: null,
  id: null,
  token: {
    type: '',
    content: ''
  }
})

export const mutations = {
  assign(user, data) {
    const newUser = new User(data.username, data.email, data.id)

    user.id = newUser.id
    user.username = newUser.username
    user.email = newUser.email
  },
  saveToken(user, token){
    user.token = token
    this.$axios.setToken(token, 'Bearer')
    this.$cookies.set(config.token.name, user.token)
  },
  setToken(user, newToken){
    if(newToken)
      this.$cookies.set(config.token.name, newToken)

    let token = this.$cookies.get(config.token.name)

    if(token)
      this.$axios.setToken(token, 'Bearer')
  }
}

export const actions = {
  login(user, data) {
    this.$axios
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
    this.$axios
      .$post(endpoints.user.register, data)
      .then((res) => {
        user.commit('assign', res.data.user)
        user.commit('saveToken', res.data.token)
      })
      .catch((err) => {
        error(err)
      })
  },
  get(user, token){
    user.commit('setToken', token)
    return this.$axios
      .$get(endpoints.user.me)
      .then((res) => {
        user.commit('assign', res.data)
      })
      .catch((err) => {
        error(err)
      })
  }
}

export const getters = {
  all: (user) => user,
  id: (user) => user.id,
  username: (user) => user.username,
  email: (user) => user.email
}

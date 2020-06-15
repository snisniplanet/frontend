import User from '@/classes/User'
import endpoints from '@/config/endpoints.json'

export const state = () => ({
  username: null,
  email: null,
  id: null
})

export const mutations = {
  assign (user, data){
    user = new User(data.username, data.email, data.id)
  }
}

export const actions = {
  login (user, data){
    this.$axios.$post(endpoints.user.login, data)
    .then(res => {
      user.commit('assign', res.data.user)
      this.$axios.setToken(res.data.token, 'Bearer')
    })
    .catch(err => {
      console.error(err)
    })
  }
}

export const getters = {
  email: (user) => user.email
}

export const state = () => ({
  username: null,
  email: null,
  id: null
})

export const mutations = {
  setup (user, data){}
}

export const actions = {
  login (data){}
}

export const getters = {
  email: (user) => user.email
}

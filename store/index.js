export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const tokenCookie = req.headers.cookie

    const token = tokenCookie ? tokenCookie.split('=')[1] : tokenCookie
    if (token) await dispatch('user/get', token)
  }
}

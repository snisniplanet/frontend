export const actions = {
  async nuxtServerInit ({ dispatch }, { req }) {
    let tokenCookie = req.headers.cookie

    let token = tokenCookie ? tokenCookie.split("=")[1] : tokenCookie
    if (token)
      await dispatch('user/get', token)
  }
}

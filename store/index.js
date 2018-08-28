export const state = () => ({
  authUser: null,
  credits: null
})

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: 0 */
export const mutations = {
  SET_USER(state, authUser) {
    state.authUser = authUser
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    if (res) commit("SET_USER", res.data)
  }
}

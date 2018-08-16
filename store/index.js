export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

export const actions = {
  async nuxtServerInit ({commit}, {req}) {
    const res = await this.$axios.get('/api/current_user')
    console.log(res.data)
  }

}

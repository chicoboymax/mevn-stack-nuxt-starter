export const state = () => ({
  user: null
})

export const getters = {
  isAuth: state => state.user
}

export const mutations = {
  SET_USER: function ({user}, payload) {
    user = payload
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    const res = await this.$axios.get('/api/current_user')
    if (res.data) {
      commit('SET_USER', res.data)
    }
  }

}

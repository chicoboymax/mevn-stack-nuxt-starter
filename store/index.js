export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

export const actions = {
  nuxtServerInit ({commit}, {req}) {
    this.$axios.get('/api/current_user').then((res) => {
      console.log(res.data)
    })
  }

}

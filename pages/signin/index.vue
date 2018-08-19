<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign In</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent="userSignIn">
          <v-layout column>
            <v-flex>
              <v-alert v-model="alert" type="error" dismissible>
                {{ error }}
              </v-alert>
            </v-flex>
            <v-flex>
              <v-text-field
                id="email"
                v-model="email"
                name="email"
                label="Email"
                type="email"
                required/>
            </v-flex>
            <v-flex>
              <v-text-field
                id="password"
                v-model="password"
                name="password"
                label="Password"
                type="password"
                required/>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit" large>Sign In</v-btn>


            </v-flex>
            <v-flex class="text-xs-center" mt-5>

              <v-btn
                color="red"
                class="white--text"
                large
              >
                Sign in with Google
                <v-icon right dark>phone</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      alert: false
    }
  },
  computed: {
    error() {
      return this.$store.state.error
    },
    loading() {
      return this.$store.state.loading
    }
  },
  watch: {
    error(value) {
      if (value) {
        this.alert = true
      }
    },
    alert(value) {
      if (!value) {
        this.$store.commit("setError", null)
      }
    }
  },
  methods: {
    userSignIn() {
      this.$store.dispatch("userSignIn", {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

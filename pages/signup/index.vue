<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent="userSignUp">
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
            <v-flex>
              <v-text-field
                id="confirmPassword"
                v-model="passwordConfirm"
                :rules="[comparePasswords]"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                required
              />
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn :disabled="loading" color="primary" type="submit">Sign Up</v-btn>
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
      passwordConfirm: "",
      alert: false
    }
  },
  computed: {
    comparePasswords() {
      return this.password === this.passwordConfirm
        ? true
        : "Passwords don't match"
    },
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
    userSignUp() {
      if (this.comparePasswords !== true) {
        return
      }
      this.$store.dispatch("userSignUp", {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

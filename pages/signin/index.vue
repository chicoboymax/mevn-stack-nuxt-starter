<template>
  <v-container grid-list-xl>
    <v-layout align-center justify-center justify-end fill-height>
      <v-flex xs2 text-xs-center>
        <v-btn
          color="#3B5998"
          class="white--text social-button"
          large
          href="/auth/facebook"
        >
          <v-icon class="fa fa-facebook" left/>
          Sign in with Facebook

        </v-btn>

        <v-btn
          color="#1DA1F2"
          class="white--text social-button"
          large
          href="/auth/twitter"
        >
          <v-icon class="fa fa-twitter" left/>
          Sign in with Twitter

        </v-btn>

        <v-btn
          color="#DB4437"
          class="white--text social-button"
          large
          href="/auth/google"
        >
          <v-icon class="fa fa-google" left/>
          Sign in with Google

        </v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.social-button {
  /*width: 500px;*/
}
</style>

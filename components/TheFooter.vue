<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
        :to="link.uri"
      >
        {{ link.title }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        <div class="white--text ml-3">
          Made by

          <a class="white--text" href="https://github.com/chicoboymax" target="_blank">Maxime Drouin</a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    name: 'TheFooter',
    data () {
      return {
        links: [
          {title: 'Home', uri: '/'},
          {title: 'Sign Up', uri: '/signup'},
          {title: 'Sign In', uri: '/signin'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>

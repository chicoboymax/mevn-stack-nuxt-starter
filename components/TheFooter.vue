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
        :key="link.title"
        :to="link.path"
        color="white"
        flat
        round
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
  name: "TheFooter",
  data() {
    return {
      links: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Sign Up", path: "/signup" },
        { title: "Sign In", path: "/signin" }
      ]
    }
  }
}
</script>

<style scoped>
</style>

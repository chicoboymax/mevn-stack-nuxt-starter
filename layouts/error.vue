<template>
  <v-container fluid>
    <section class="container">
      <h2>
        error: {{ error.statusCode }}
      </h2>
      <nuxt-link class="button" to="/">
        Homepage
      </nuxt-link>
    </section>
  </v-container>
</template>

<script>
  export default {
    props: ['error']
  }
</script>

<template>
  <v-app>
    <TheHeader app></TheHeader>
    <v-content>
      <nuxt/>
    </v-content>
    <TheFooter app></TheFooter>
  </v-app>
</template>

<script>
  import TheFooter from '@/components/TheFooter'
  import TheHeader from '@/components/TheHeader'

  export default {
    components: {
      TheFooter,
      TheHeader
    }

  }
</script>

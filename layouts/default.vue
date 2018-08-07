<template>
  <v-app>
    <TheHeader/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <TheFooter/>
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

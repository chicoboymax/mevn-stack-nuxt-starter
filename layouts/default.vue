<template>
  <v-app>
    <TheHeader app/>
    <v-content>
      <nuxt/>
    </v-content>
    <TheFooter app/>
  </v-app>
</template>

<script>
import TheFooter from "@/components/TheFooter"
import TheHeader from "@/components/TheHeader"

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-title>
        <v-toolbar-side-icon class="hidden-sm-and-up"
                             @click="drawer = !drawer"/>
        <v-icon color="blue">whatshot</v-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>




      <v-spacer/>


      <v-flex v-if="$store.state.authUser" right>
        <TheStripeCheckout />
        <span >Credits: {{ credits }}</span>
      </v-flex>


      <v-toolbar-items class="hidden-xs-only">

        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          flat>
          <v-icon left color="blue">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items
        v-if="!$store.state.authUser"
        class="hidden-xs-only"
      >
        <v-btn
          v-for="item in loggedInMenuItems"

          :key="item.title"
          :to="item.path"
          flat>
          <v-icon left color="blue">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items
        v-else
        class="hidden-xs-only">
        <v-btn
          v-for="item in loggedOutMenuItems"
          :key="item.title"
          flat

          @click="logout">
          <v-icon left color="blue">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>

      </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<script>
import TheStripeCheckout from "@/components/TheStripeCheckout"
export default {
  name: "TheHeader",
  components: { TheStripeCheckout },
  data() {
    return {
      appTitle: "MEVN stack starter",
      drawer: false,
      menuItems: [
        { title: "Home", path: "/", icon: "home" },
        { title: "About", path: "/about", icon: "group" },
        { title: "Contact", path: "/contact", icon: "mail" }
      ],
      loggedInMenuItems: [
        { title: "Sign In", path: "/signin", icon: "lock_open" }
      ],
      loggedOutMenuItems: [{ title: "Sign Out", path: "/", icon: "logout" }]
    }
  },
  computed: {
    credits: function() {
      return this.$store.state.authUser.credits
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout")
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
</style>

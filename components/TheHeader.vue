<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-title>
        <v-toolbar-side-icon @click="drawer = !drawer"
                             class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-icon color="blue">whatshot</v-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left light>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'TheHeader',
    data () {
      return {
        appTitle: 'MEVN stack starter',
        drawer: false,
        menuItems: [
          {title: 'Home', path: '/', icon: 'home'},
          {title: 'About', path: '/about', icon: 'group'},
          {title: 'Contact', path: '/contact', icon: 'mail'},
          {title: 'Sign Up', path: '/signup', icon: 'face'},
          {title: 'Sign In', path: '/signin', icon: 'lock_open'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>

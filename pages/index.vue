<template>
  <content>
    <section>
      <v-parallax
        src="/images/parallax1.jpeg"
        height="600">
        <v-layout row wrap>
          <v-flex xs12 text-xs-center mt-5>
            <h1>Welcome to MEVN stack starter</h1>
          </v-flex>
          <v-flex xs12 sm6 offset-sm3 mt-3>
            <blockquote class="blockquote text-xs-center">
              A starter single page application <br>
              using Google OAuth, Express, Mongo, Nuxt.
            </blockquote>
          </v-flex>
          <v-flex xs12 sm6 offset-sm3 mt-3 class="text-xs-center" mt-5>
            <v-btn color="primary" to="/signup">Sign Up</v-btn>
            <v-btn to="/signin">Sign In</v-btn>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax
        src="/images/parallax2.jpg"
        height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="/pre-made-themes"
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent"
                      v-for="item in items"
                      :key="item.icon"
                      color="white"
                      flat
                      round>
                <v-list-tile

                >
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">{{item.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{item.value}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>


  </content>
</template>

<script>
  export default {

    data () {
      return {
        items: [
          {icon: 'phone', value: '999-999-9999'},
          {icon: 'place', value: 'Québec, QC, Canada'},
          {icon: 'email', value: 'chicoboymax@gmail.com'}
        ]
      }
    }
  }
</script>

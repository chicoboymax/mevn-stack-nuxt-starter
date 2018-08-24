<!--suppress ALL -->
<template>
  <v-btn id="customButton" round color="primary" @click="openForm">Buy credits</v-btn>
</template>¶

<script>
export default {
  data() {
    return { stripeKey: process.env.STRIPE_KEY }
  },
  mounted() {
    this.handler = window.StripeCheckout.configure({
      key: this.stripeKey,
      image:
        "https://cdn.icon-icons.com/icons2/1369/PNG/512/-whatshot_90079.png",
      locale: "auto",
      token: function(token) {
        console.log(token)
      }
    })
  },
  methods: {
    onToken(token) {
      console.log(token)
    },
    openForm() {
      this.handler.open({
        name: "MEVN stack starter",
        description: "$5 for 5 credits !",
        currency: "USD",
        amount: 500,
        token: token => {
          console.log(token)
        }
      })
    }
  }
}
</script>

<style>
</style>

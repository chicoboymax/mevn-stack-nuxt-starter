<!--suppress ALL -->
<template>
  <StripeCheckout
    :stripe-key="stripeKey"
    name="MEVN stack starter"
    description="$5 for 5 credits"
    image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
    panel-label="Give Money"
    amount="500"
    currency="USD"
    locale="en"
    email="chicoboymax@gmail.com"
    zip-code="{false}"
    allow-remember-me
    token="{this.onToken}"
    opened="{this.onOpened}"
    closed="{this.onClosed}"
    reconfigure-on-update="{false}"
    trigger-event="onTouchTap"
    component-class="div"
    label="Buy credits">
    <!--<v-btn class="btn" flat>Buy credits</v-btn>-->

  </StripeCheckout>
</template>

    <script>
export default {
  data() {
    return { stripeKey: process.env.STRIPE_KEY }
  },
  method: {
    onToken(token) {
      console.log(token)
    }
  }
}
</script>

    <style>
</style>

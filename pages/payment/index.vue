<!--suppress ALL -->
<template>
  <div id="app">
    <h1>Please give us your payment details:</h1>
    <StripeCheckout
      name="Three Comma Co."
      description="Big Data Stuff"
      image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
      component-class="div"
      panel-label="Give Money"
      amount="{1000000}"
      currency="USD"
      stripe-key="pk_test_d2v1b7bw9kJC8R5x5m7UApEa"
      locale="en"
      email="info@vidhub.co"
      shipping-address
      billing-address="{false}"
      zip-code="{false}"
      alipay
      bitcoin
      allow-remember-me
      token="{this.onToken}"
      opened="{this.onOpened}"
      closed="{this.onClosed}"
      reconfigure-on-update="{false}"
      trigger-event="onTouchTap"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {}
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

<script>
import { defineComponent } from 'vue';
import { useShopStore, useCheckoutStore } from '@/store/shop.js';

export default defineComponent({
  setup() {
    const checkoutStore = useCheckoutStore();
    const shopStore = useShopStore();

    const { cart, totalPrice, totaltax } = shopStore;

    const shippingAddress = checkoutStore.shippingAddress;
    const useDifferentBilling = checkoutStore.useDifferentBilling;
    const billingAddress = useDifferentBilling ? checkoutStore.billingAddress : '';

    return {
      shippingAddress,
      billingAddress,
      cart,
      totalPrice,
      totaltax,
      useDifferentBilling,
      "title1": "Your order.",
      "title2": "adress",
      "title3": "adress",
      "title4": "products: ",
      "extratax": "tax: €",
      "Total": "Total: €",
      "button": "Home"
    };
  },
});
</script>
<template>
  <div class="container">
  <div class="order-container">
    <h2>{{title1}}</h2>
    <br>


    <div class="order-summary">
      <h3>{{title4}}</h3><br>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.quantity }} x {{ item.price }}
        </li>
      </ul>
      <br />
      <p>{{extratax}} {{ totaltax }}</p>
      <br />
      <p>{{Total}} {{ totalPrice }}</p>
    </div>
    <router-link to="/" class="back-to-home">{{ button }}</router-link>
  </div>

</div>
</template>

<style scoped>

.container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.order-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  width: 400px;
  background-color: #42b9e5;
  border-radius: 20px;
  color: orange;
}

.order-summary ul {
  padding: 0;
  list-style: none;
}

.back-to-home {
  padding: 8px 25px;
    background-color: #328aaa;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    color: #fff;
}

</style>

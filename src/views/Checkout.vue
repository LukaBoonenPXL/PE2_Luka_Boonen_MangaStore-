<template>
  <div class="container">
  <div class="checkout-container">
    <h2>{{ main }}</h2>

    <div class="shipping-info">
      <label for="shippingAddress">{{ adress1 }}</label>
      <input v-model="shippingAddress" type="text" id="shippingAddress" />
      <br /><br>
      <label>
        <input type="checkbox" v-model="useDifferentBilling" />
        {{ adress2 }}<br>
      </label><br>

      <form v-if="useDifferentBilling">
        <label for="billingAddress">{{ adress3 }}</label>
        <input type="text" v-model="billingAddress" />
      </form><br>
    </div>

    <div class="order-summary">
      <h3>{{ list }}</h3>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.quantity }} x {{ item.price }}
        </li>
      </ul>
      <br />
      <p>{{ extratax }} {{ totaltax }}</p>
      <br />
      <p>{{ total }} {{ totalPrice }}</p>
    </div>

    <form @submit.prevent="completeCheckout">
      <button type="submit">{{ button }}</button>
    </form>
  </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useShopStore, useCheckoutStore } from '@/store/shop.js';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const checkoutStore = useCheckoutStore();
    const shopStore = useShopStore();
    const router = useRouter();

    const { cart, totalPrice, totaltax } = shopStore;

    const shippingAddress = ref(checkoutStore.shippingAddress || (shopStore.isLoggedIn ? shopStore.loggedInUser.address : ''));
    const useDifferentBilling = ref(checkoutStore.useDifferentBilling);
    const billingAddress = ref(checkoutStore.billingAddress || '');

    const completeCheckout = () => {
      checkoutStore.updateShippingAddress(shippingAddress.value);

      router.push('/Confirmation');
    };

    return {
      shippingAddress,
      useDifferentBilling,
      billingAddress,
      completeCheckout,
      cart,
      totalPrice,
      totaltax,
      "main": "Checkout",
      "adress1": "adress: ",
      "adress2": "change adress: ",
      "adress3": "new adress: ",
      "list": "order list: ",
      "extratax": "TAX: €",
      "total": "Total: €",
      "button": "order!"
    };
  },
});
</script>

<style scoped>

.container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.checkout-container {
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

.shipping-info,
.order-summary {
  width: 100%;
  margin-bottom: 20px;
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

button {
  padding: 8px 25px;
    background-color: #328aaa;
    border-radius: 20px;
    font-family: "Roboto";
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    color: #fff;
}

button a:hover {
    background-color: #328aaa; 
    color: orange;
}
</style>

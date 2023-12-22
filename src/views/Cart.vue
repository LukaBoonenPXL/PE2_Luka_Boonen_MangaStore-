<template>
  <div class="cart-container">
    <h2>{{ title }}</h2>
    <ul class="cart-items">
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <div class="cart-item-info">
          <img :src="item.image" alt="Product Image" class="cart-item-image" />
          <div class="cart-item-details">
            <p>{{ item.name }}</p>
            <p>{{ item.description }}</p>
            <p>{{ notax }}€{{ item.price }}</p>
            <p>{{ total }}€{{ item.price_with_tax }}</p>
            <p class="item-quantity">{{ quantity }} {{ item.quantity }}</p>

            <div class="quantity-buttons">
              <button class="quantity-buttons-button" @click="incrementQuantity(item.id)">{{ add }}</button>
              <button class="quantity-buttons-button" @click="decrementQuantity(item.id)">{{ remove }}</button>
              <button class="delete" @click="removeFromCart(item.id)">{{ delete }}</button>
            </div>
          </div>
        </div>
        
      </li>
      
    </ul>
    <div class="container">
    <button v-if="cart.length > 0" @click="checkout" class="checkout-button">{{ button1 }}</button>
  </div>
  </div>
  
</template>

<script>
import { computed } from 'vue';
import { useShopStore } from '@/store/shop.js';
import router from "@/router";

export default {
  setup() {
    const shopStore = useShopStore();
    const cart = computed(() => shopStore.cart);

    const removeFromCart = (productId) => {
      shopStore.removeItemFromCart(productId);
    };

    const incrementQuantity = (productId) => {
      shopStore.incrementItemQuantity(productId);
    };

    const decrementQuantity = (productId) => {
      shopStore.decrementItemQuantity(productId);
    };

    const checkout = () => {
      if (!shopStore.isLoggedIn) {
        router.push('/login');
      } else {
        router.push('/Checkout');
      }
    };

    return {
      cart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      checkout,
      "title": "your shopping cart:",
      "notax": "price without tax: ",
      "totalprice": "final price: ",
      "quantity": "quantity: ",
      "add": "add",
      "remove": "remove",
      "delete": "delete",
      "button1": "Checkout"

    };
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Roboto:ital,wght@0,400;1,100&display=swap');


.cart-container {
  margin-top: 30px;
  margin-left: 25%;
  margin-right: 25%;
}

.cart-item {
  align-items: flex-end;
  background-color: #42b9e5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 12px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 20px;
  padding: 20px;
  text-align: center;
  width: 300px;
}

.cart-item-details {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  padding: 20px;
  text-align: center;
}

.cart-item-details p{
padding: 7px;
}

.cart-item-image {
  height: 350px;
  width: 250px;
}

.cart-item-info {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  margin-top: 20px;
}

.checkout-button {
  align-items: center;
  background-color: #328aaa; 
  color: #fff;
  border: none;
  border-radius: 4px;
  font-family: "roboto";
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 10px;
  
}

.container{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.h2 {
  margin-top: 50px;
}

.item-quantity {
  font-weight: bold;
  margin: 0.5rem 0;
}

.quantity-buttons-button {
  background-color: rgb(0, 140, 255);
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  margin: 0 0.2rem;
  padding: 0.5rem;
}

.quantity-buttons button:hover {
  background-color: rgb(0, 140, 255);
  color: orange;
}

.delete {
  background-color: red;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  margin: 0 0.2rem;
  padding: 0.5rem;
}

.cart-container h2 {
  color: #000;
  text-align: center;
  font-family: "roboto";

}


@media screen and (max-width: 600px)
{
  .cart-item {
    width: 100%;
  }

  .cart-container {
    margin-top: 5rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;
  }

  .cart-container h2
  {
    color: #000;
    font-family: "roboto";
    padding-bottom: 2rem;
    text-align: center;
  }
}

</style>

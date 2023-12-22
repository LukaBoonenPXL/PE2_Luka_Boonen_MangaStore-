<script>
import { ref, onMounted } from 'vue';
import { useShopStore } from '@/store/shop.js';

export default {
  setup() {
    const shopStore = useShopStore();
    const popularProducts = ref([]);

    const getStockText = (stock) => {
      return stock > 0 ? `In Stock: ${stock}` : 'Out of Stock';
    };

    onMounted(async () => {
      await shopStore.fetchProducts();
      popularProducts.value = shopStore.popularProducts;
    });

      return {
      popularProducts,
      getStockText,
        "button": "Buy now!"
    };

  },
  methods: {
    addToCart(product)
    {
      useShopStore().addToCart(product);
    }
  },
};
</script>

<template>
  <div>
    <ul class="product-container">
      <li v-for="product in popularProducts" :key="product.id" class="product-item">
        <div class="product-info">
          <router-link :to="{ name: 'product-detail', params: { id: product.id } }">
            <img :src="product.image" alt="Product Image" class="product-image" /></router-link>
            <p>{{ product.name }}</p>
            <p>€{{ product.price_with_tax }}</p>
            <p class="stock">{{ getStockText(product.stock) }}</p>
            <button @click="addToCart(product)" class="add-to-cart-button">{{ button }}</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Roboto:ital,wght@0,400;1,100&display=swap');

.product-container {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  width: 200px;
}

.product-item {
  display: flex;
  justify-content: center;
  align-items: space-evenly;
  width: 200px;
}

.product-item p{
  color: white;
  font-family: "roboto";
  font-weight: bold;
  margin-bottom: 10px;
}

.product-info {
    background-color: #42b9e5;
    font-family: "roboto";
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    align-items: flex-end;
    margin: 20px;
    width: 300px;
    box-shadow: 0 12px 15px rgba(0, 0, 0, 0.2);
}

.product-details {
  font-family: "roboto";
  max-width: 150px;
  padding-top: 1.5rem;
  color: #42b9e5;
  font-weight: bold;
  font-size: 20px;
}

.stock
{
  padding-top: 1rem;
}

@media screen and (max-width: 200px) {
  .product-container {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }
}

</style>

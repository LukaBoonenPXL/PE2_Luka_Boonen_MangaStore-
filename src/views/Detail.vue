<template>
  <div class="container">
  <div class="detail-container" v-if="product"><div class="container">
    <img v-if="product.image" :src="`/${product.image}`" alt="product-img" class="product-image" />
  </div>
    <div class="details">
      <h2>{{ product.name }}</h2>
      <p class="description">{{ product.description }}</p><br>
      <p class="price">{{ price }} {{ euroteken }}{{ product.price ? product.price.toFixed(2) : 'N/A' }}</p>
      <p class="price-with-tax">{{ pricetax }}{{ euroteken }}{{ product.price_with_tax ? product.price_with_tax.toFixed(2) : 'N/A' }}</p>
      <p class="stock">{{ Stock }} {{ product.stock }}</p><br>
      <p class="creator">{{ Bedrijf }} {{ product.creator }}</p>
      <p class="release-year">{{ Jaar }} {{ product.release_year }}</p><br>
      <button @click="addToCart(product)" class="add-to-cart-button" id="button2">{{ Button1 }}</button>
      <button @click="(product)" class="add-to-cart-button" id="button2">{{ Button2 }}</button>
    </div>
  </div>
</div>
  <footer></footer>
</template>

<script>
import { useShopStore } from '@/store/shop.js';
import jsonData from "@/assets/data.json";
import footer from "@/components/footer.vue";

export default {
  props: {
    id: {
      footer,
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      product: null,
      "price": "price: €",
      "pricetax": "price + tax: €",
      "Stock": "Stock: ",
      "Bedrijf": "Version: ",
      "Jaar": "Language : ",
      "Button1": "add to cart",
      "Button2": "back",
    };
  },
  async created() {
    await this.fetchProductData();
  },
  methods: {
    async fetchProductData() {
      try {
        const productId = String(this.id);
        const allProducts = jsonData;

        this.product = allProducts.find(product => String(product.id) === productId);

        if (!this.product) {
          console.error(`Product not found for id: ${productId}`);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    addToCart(product) {
      useShopStore().addToCart(product);
    },
  },
  watch: {},
  beforeRouteUpdate(to, from, next) {
    this.fetchProductData().then(next);
  },
};

</script>

<style>

.container{
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.detail-container
{
  border-radius: 18px;

  display: flex;
  flex-direction: row;
  background-color: #42b9e5 ;
  width: 80%;
  
}

.container
{
  width: 100%;
}

.container img
{
  width: 450px;
  height: auto;
  margin-top: 80px;
  margin-left: 80px;
  margin-bottom: 80px;
}

.details 
{
  font-family: "Roboto";
  width: 70%;
  color: #fff;
  margin-top: 150px;
  margin-left: 150px;
  font-size: 24px;
  margin-right: 150px;
}

.details h2{
  font-family: "roboto";
}

#button2
{
  width: 12rem;
  font-size: 16px;
}


@media screen and (max-width: 600px) {

  .detail-container
  {
    flex-direction: column;
  }

  .details
  {
    font-family: "Roboto";
    margin-left: 15%;
    text-align: center;
    padding-bottom: 5rem;
    margin-top: 2rem;

  }

  .container img
  {
    width: 250px;
    height: auto;
    margin-left: 60%;
    margin-top: 2rem;
  }


}

</style>

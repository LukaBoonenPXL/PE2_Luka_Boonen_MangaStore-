<script>
import { onMounted } from 'vue';
import { useShopStore } from '@/store/shop.js';
import PopularProducts from "@/components/PopularProducts.vue";
import Footer from "@/components/Footer.vue";

export default {
  setup() {
    const shopStore = useShopStore();

    const texts = {

      "title": "Welcome to the website Manga Store!" ,
      "subtitle": "Only the best manga are sold here",
      "Buttontext": "Go to shop"
    };

    onMounted(async () => {
      await shopStore.fetchProducts();
    });

    return {
      texts,
      shopStore,
    };
  },
  components: {
    PopularProducts,
    Footer
  }
}
</script>

<template>
  <div>


    <h2 class="title">{{ texts.title }}</h2>
    <h2 class="subtitle">{{ texts.subtitle }}</h2>

    <PopularProducts></PopularProducts>

    <Footer></Footer>
  </div>
</template>
<style>

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Roboto:ital,wght@0,400;1,100&display=swap');

*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.title, .subtitle{
  font-family: "roboto";
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

@media screen and (min-width: 2100px)
{
  #introductie {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
  }
}
</style>
<script>

import {defineComponent} from "vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";

export default defineComponent({

  data() {
    return {

      "title": "All manga"
    }
  },
  components: {Footer, ProductCard}
})
</script>

<template>
  <h2 class="title">{{title}}</h2>
  <ProductCard></ProductCard>
  <Footer></Footer>
</template>

<style>

#shop {

  width: 90%;
  height: 600px;
  background-color: #3498db;
  border-radius: 100px;
  margin-left: 5rem;
  margin-top: 2.5rem;
  color: #fff;
}

#shop img
{
  width: 412px;
  height: 343px;
  margin-right: 9rem;
  margin-top: 7rem;
  float: right;
}

#shop h1
{
  font-size: 75px;
  float: left;
  padding-left: 10.6rem;
  padding-top: 11rem;
}

#shop p
{
  font-size: 25px;
  float: left;
  padding-left: 11rem;
  margin-top: 2rem;
  width: 50%;
}

.title {
  text-align: center;
  margin-top: 7rem;
  font-size: 50px;
}



@media screen and (min-width: 2000px)
{
  #shop {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
  }
}

@media screen and (max-width: 600px)
{
  #shop {
    width: 90%;
    height: auto;
    border-radius: 15px;
    padding: 2rem;
    margin-left: 5%;
  }

  #shop img {
    width: 100%;
    height: auto;
    margin: 0;
  }

  #shop h1  {
    font-size: 18px;
    padding: 0;
    margin-top: 2rem;
    width: 100%;
    text-align: left;
  }

  #webshop p  {
    font-size: 18px;
    float: none;
    width: 100%;
    text-align: left;
    padding-left: 0;
  }

}

</style>
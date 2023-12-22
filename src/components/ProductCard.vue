<script>
import jsonData from "@/assets/data.json";
import { useShopStore } from '@/store/shop.js';


export default {
  data() {
    return {
      products: jsonData,
      filteredProducts: jsonData,
      itemsPerPage: 8,
      currentPage: 1,
      checkedFilters: {
        yearFilterFrench: false,
        yearFilterEnglish: false,
        versionFilterPaperback: false,
        versionFilterHardcover: false,
      },
      "title1": "Language",
      "title2": "Version",
      "filter1": "French",
      "filter2": "English",
      "filter3": "Paperback",
      "filter4": "Hardcover",
      "button1": "Add to cart",
    };
  },
  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      const sortedProducts = [...this.filteredProducts].sort((a, b) => a.id - b.id);
      return sortedProducts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
  },
  watch: {
    checkedFilters: {
      handler: "applyFilters",
      deep: true,
      immediate: true,
    },
  },
  methods: {
    getStockText(stock) {
      return `Stock: ${stock}`;
    },

    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },

    applyFilters() {
      this.filteredProducts = this.products.filter(product => {

        const meetsLanguageFilter = (
            (!this.checkedFilters.LanguageFilterFrench || product.Language === 'French') &&
            (!this.checkedFilters.LanguageFilterEnglish || product.Language === 'English') 
        );

        const meetsVersionfilter = (
            (!this.checkedFilters.versionFilterPaperback || product.Version === 'paperback') &&
            (!this.checkedFilters.versionFilterHardcover || product.Version === 'hardcover') 
        );

        return meetsLanguageFilter && meetsVersionfilter;
      });

      this.currentPage = 1;
    },
    addToCart(product) {

      useShopStore().addToCart(product);
    },


  }
};
</script>

<template>
    <div class="filter-container">
      <div class="filter-section">
        <h2>{{ title1 }}</h2>
        <label>
          <input type="checkbox" v-model="checkedFilters.LanguageFilterFrench" />
          {{ filter1 }}
        </label>
        <label>
          <input type="checkbox"  v-model="checkedFilters.LanguageFilterEnglish" />
          {{ filter2 }}
        </label>

      </div>
      <div class="filter-section">
        <h2>{{ title2 }}</h2>
        <label>
          <input type="checkbox"  v-model="checkedFilters.versionFilterPaperback" />
          {{ filter3 }}
        </label>
        <label>
          <input type="checkbox"  v-model="checkedFilters.versionFilterHardcover"  />
          {{ filter4 }}
        </label>
      </div>
    </div>
    <div class="product-container">
      <ul class="product-list">
        <li v-for="(product) in paginatedProducts" :key="product.id" class="product-item">
          <div class="product-info">
            <router-link :to="{ name: 'product-detail', params: { id: product.id } }">
              <img :src="product.image" alt="img" class="product-image"/></router-link>
            <div class="product-details">
              <p>{{ product.name }}</p>
              <p class="stock">{{ getStockText(product.stock) }}</p>
              <p class="price">${{ product.price.toFixed(2) }}</p>
              <button @click="addToCart(product)" class="add-to-cart-button">{{ button1 }}</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
      <div class="page-numbers">
        <button v-for="pageNumber in totalPages" :key="pageNumber" @click="goToPage(pageNumber)" :class="{ active: pageNumber === currentPage }">
          {{ pageNumber }}
        </button></div>
   

</template>

<style>
.page-container {
  display: flex;
}

.filter-container {
  display: flex;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  justify-content: flex-start;
  padding-left: 270px;
}

.filter-section {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  margin: 20px;
  background-color: #42b9e5;
  color: #fff;
  font-size: 30px;
  font-family: "roboto";
  border-radius: 5px;
  width: 300px;
  box-shadow: 0 12px 15px rgba(0, 0, 0, 0.2);
}

.filter-section h2{
  color: orange;
}
.product-container {
  width: 100%;
  padding-left: 20px;
  margin-top: 0;
}

.page-numbers
{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.page-numbers button
{
  width: 50px;
  height: 50px;
  background-color: #42b9e5; 
  color: #fff;
  border: 0;
  border-radius: 10px;
  margin: 2rem;

}

.product-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3rem;
}

.product-item {
  width: 100%;
  margin-bottom: 20px;
}

.product-info {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.product-image {
  padding: 20px;
    text-align: center;
    width: 300px;
    height: 400px;
}

.product-details {
  max-width: 200px;
  padding-top: 1.5rem;
  color: orange;
  font-weight: bold;
  font-size: 20px;
}

.stock {
  padding-top: 1rem;
}

.add-to-cart-button
{
  padding: 8px 25px;
    background-color: #328aaa;
    border-radius: 20px;
    font-family: "Roboto";
    font-weight: bold;
    border: none;
    cursor: pointer;
    color: #fff;
}

@media screen and (max-width: 600px)
{
  .filter-container {
    width: 100%;
    margin-top: 50px;
    margin-left: -85px;
    text-align: center;

  }

  .filter-section
  {
    font-size: 25px;
  }

  .product-container
  {
    display: block;
    width: 100%;
    margin-left: 30%;

  }

  .page-container {
    display: inline;
  }
}
</style>

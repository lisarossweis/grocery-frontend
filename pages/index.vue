<template>
  <div class="container">
    <div class="page-wrapper">
      <div class="topbar">
        <div class="logo">GiaGrocery</div>
        <div class="searchbox">
          <input class="input" type="search">
          <i class="bi bi-search"></i>
        </div>
      </div>

      <div class="categories">
        <h3 class="categories-text">Categories &gt;</h3>
        <div
          class="category"
          v-for="(category, index) in categories"
          :key="index"
          :class="category.title.toLowerCase()"
          @click="showProductByCategory(category.title)"
        >
          <img :src="category.icon" :alt="category.title" />
          <p class="category-title">{{ category.title }}</p>
        </div>
      </div>

      <div class="products">
        <h3 class="products-text">Products &gt;</h3>
        <div class="product" v-for="(product, index) in products" :key="index">
          <img class="product-image" :src="product.image" :alt="product.name" />
          <div class="product-detail">
            <div class="product-name">
              <p>{{ product.name }}</p>
            </div>
            <div class="product-price">
              <p>{{ currencySymbol }} {{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="spacer"></div>

    <div class="bottom-nav">
      <div class="tab" v-for="(nav, index) in bottomNavLinks" :key="index">
        <i class="bi" :class="nav.icon" />
        <p>{{ nav.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currencySymbol = useCurrencySymbol()
const categories = useCategories()
const products = useProducts()
const bottomNavLinks = useBottomNavLinks()
let unfileteredProducts: Product[] = []

const showProductByCategory = (category: string) => {
  if (category === 'All') {
    const allProduct: Product[] = products.value.length > unfileteredProducts.length ? products.value : unfileteredProducts
    products.value = allProduct
  } else if (products.value.length !== unfileteredProducts.length && unfileteredProducts.length !== 0) {
    products.value = unfileteredProducts.filter(product => product.category == category.toLowerCase())
  } else {
    unfileteredProducts = products.value
    products.value = products.value.filter(product => product.category == category.toLowerCase())
  }
}
</script>

<style>
* {
  font-family: sans-serif, "Roboto";
}

.categories, .products, .topbar, .bottom-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.categories, .products, .topbar {
  padding-bottom: 15px;
}

.categories, .products {
  justify-content: space-evenly;
  gap: 3px;
}

.topbar {
  justify-content: space-between;
}

.bottom-nav {
  width: 100%;
  justify-content: center;
}

.category, .product {
  flex-grow: 1;
  border: 2px solid;
  border-radius: 5px;
}

.category p {
  text-align: center;
}

.all {
  background-color: #e6e6fa;
  border-color: #e6e6fa;
}

.vegetables {
  background-color: #d3ffce;
  border-color: #d3ffce;
}

.meat {
  background-color: #ff7f7f;
  border-color: #ff7f7f;
}

.fruits {
  background-color: #ff7f50;
  border-color: #ff7f50;
}

.fish {
  background-color: #66cdaa;
  border-color: #66cdaa;
}

.category:hover {
  background-color: #fff;
}

.product {
  border-color: #f0f8ff;
}

.product:hover {
  border-color: #b4eeb4;
}

.category img, .product img {
  display: inline-block;
  width: 5em;
}

.category img {
  align-self: center;
}

.topbar {
  padding: 3px 3px 5px;
}

.categories-text, .products-text {
  flex-basis: 100%;
}

.logo {
  font-weight: bolder;
}

.bottom-nav {
  clear: both;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0 -5px 8px #ccc;
}

.bottom-nav .tab {
  padding-top: 20px;
  flex-grow: 2;
  text-align: center;
}

.bottom-nav .tab:hover {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #db7093;
  color: #fff;
}

.page-wrapper {
  width: 100%;
  overflow-y: scroll;
}

.spacer {
  height: 50px;
}
</style>

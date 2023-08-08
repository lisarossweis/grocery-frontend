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

      <Product :products="products"></Product>
    </div>

    <div class="spacer"></div>

    <div class="bottom-nav">
      <div class="tab" v-for="(nav, index) in bottomNavLinks" :key="index">
        <p>
          <fa-icon :icon="nav.icon"></fa-icon>
        </p>
        <p class="sr-only">{{ nav.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '#components'

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
@import url('~/assets/global.css')
</style>

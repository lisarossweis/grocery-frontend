<template>
  <div class="page-wrapper">
    <TopBar></TopBar>

    <Category :categories="categories" :clickHandler="showProductByCategory"></Category>

    <Product :products="products"></Product>
  </div>
</template>

<script setup lang="ts">
import { Category, Product, TopBar } from '#components'

const categories = useCategories()
const products = useProducts()
let unfileteredProducts: Product[] = []

const showProductByCategory = (category: string) => {
  if (category === 'all') {
    const allProduct: Product[] = products.value.length > unfileteredProducts.length ? products.value : unfileteredProducts
    products.value = allProduct
  } else if (products.value.length !== unfileteredProducts.length && unfileteredProducts.length !== 0) {
    products.value = unfileteredProducts.filter(product => product.category == category)
  } else {
    unfileteredProducts = products.value
    products.value = products.value.filter(product => product.category == category)
  }
}
</script>

<style>
@import url('~/assets/global.css')
</style>

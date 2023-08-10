<template>
  <div class="page-wrapper">
    <TopBar></TopBar>

    <Category :categories="categories" :clickHandler="filterProductByCategory"></Category>

    <Product :products="isProductHasFilter ? getProductByCategory(selectedCategory) : products"></Product>
  </div>
</template>

<script setup lang="ts">
import { Category, Product, TopBar } from '#components'
import useCategoryStore from '@/store/category'
import useProductStore from '@/store/product'

const { categories } = useCategoryStore()
const { products, getProductByCategory } = useProductStore()
let isProductHasFilter = ref(false)
let selectedCategory = ref('all')

const filterProductByCategory = (category: string) => {
  if (category === 'all') {
    isProductHasFilter.value = false
  } else {
    isProductHasFilter.value = true
  }

  selectedCategory.value = category
}
</script>

<style>
@import url('~/assets/global.css')
</style>

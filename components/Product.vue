<template>
  <div class="products">
    <h3 class="products-text">Products &gt;</h3>
    <ProductItem
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    ></ProductItem>
  </div>
</template>

<script setup lang="ts">
import { ProductItem } from '#components'

defineProps<{
  products: Product[]
}>()
</script>

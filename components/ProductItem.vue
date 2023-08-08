<template>
    <div class="product">
      <img class="product-image" :src="product.image" :alt="product.name" />
      <div class="product-detail">
        <div class="product-name">
          <p>{{ product.name }}</p>
        </div>
        <div class="product-price">
          <p>{{ currencySymbol }} {{ product.price }}/{{ product.unit }}</p>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
const currencySymbol = useCurrencySymbol()

defineProps<{
  product: Product
}>()
</script>

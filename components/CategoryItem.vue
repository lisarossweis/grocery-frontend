<template>
  <div
    class="category"
    :class="category.title.toLowerCase()"
  >
    <img :src="category.icon" :alt="category.title" />
    <p class="category-title">{{ category.title }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: Category
}>()
</script>

<template>
  <div class="categories">
    <h3 class="categories-text">Categories &gt;</h3>
    <CategoryItem
      v-for="(category, index) in categories"
      :key="index"
      :category="category"
      @click="handleClick(category.title)"
    ></CategoryItem>
  </div>
</template>

<script setup lang="ts">
import { CategoryItem } from '#components'

const props = defineProps<{
  categories: Category[],
  clickHandler?: Function
}>()

const handleClick = (categoryTitle: string) =>  {
  if (props.clickHandler) {
    props.clickHandler(categoryTitle.toLowerCase())
  }
}
</script>

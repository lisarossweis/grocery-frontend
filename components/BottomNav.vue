<template>
  <div class="bottom-nav">
    <router-link
      class="tab"
      v-for="(nav, index) in bottomNavLinks"
      :key="index"
      :to="nav.link"
    >
      <p>
        <fa-icon :icon="nav.icon"></fa-icon>
      </p>
      <p class="sr-only">{{ nav.text }}</p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const bottomNavLinks = useBottomNavLinks()
</script>

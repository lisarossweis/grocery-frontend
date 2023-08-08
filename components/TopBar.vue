<template>
  <div class="topbar">
    <div class="logo">GiaGrocery</div>
    <div class="searchbox">
      <fa-icon icon="fa-solid fa-search"></fa-icon>
      <input class="input" type="search" v-show="showSearchBox">
      <button class="btn btn-primary" v-show="showSearchBox" @click="hideSearchBox">
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
let showLogo = true
let showSearchBox = false
const expandSearchBox = () => {
  showSearchBox = true
  showLogo = false
}
const hideSearchBox = () => {
  showSearchBox = false
  showLogo = true
}
</script>

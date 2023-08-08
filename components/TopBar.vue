<template>
  <div class="topbar" :class="showSearchBox ? 'row' : ''">
    <div class="logo" v-show="showLogo">GiaGrocery</div>
    <div class="searchbox row" :class="showSearchBox ? 'col-12' : ''">
      <button class="btn col-1" @click="expandSearchBox" v-show="searchButtonEnabled">
        <fa-icon icon="fa-solid fa-search"></fa-icon>
      </button>
      <div class="btn col-1" v-show="!searchButtonEnabled">
        <fa-icon icon="fa-solid fa-search"></fa-icon>
      </div>
      <input class="input col" type="search" v-show="showSearchBox">
      <button class="btn col-1" v-show="showSearchBox" @click="hideSearchBox">
        <fa-icon icon="fa-solid fa-close"></fa-icon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const showLogo = ref(true)
const showSearchBox = ref(false)
const searchButtonEnabled = ref(true)

const expandSearchBox = () => {
  showSearchBox.value = true
  showLogo.value = false
  searchButtonEnabled.value = false
}
const hideSearchBox = () => {
  showSearchBox.value = false
  showLogo.value = true
  searchButtonEnabled.value = true
}
</script>

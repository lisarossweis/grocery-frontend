<template>
  <div class="container">
    <router-view></router-view>

    <div class="spacer"></div>
    <BottomNav></BottomNav>
  </div>
</template>

<script setup lang="ts">
import { BottomNav } from '#components'
</script>

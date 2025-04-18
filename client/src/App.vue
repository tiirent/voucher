<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
</script>

<template>
  <v-app>
    <AppNavbar />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.v-layout {
  height: 100vh;
  overflow: hidden;
}
.v-main {
  height: 100%;
  min-height: unset;
}
</style>

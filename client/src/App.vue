<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
</script>

<template>
  <v-layout>
    <AppNavbar />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
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

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
</script>

<template>
  <v-layout>
    <AppNavbar />
    <v-main class="d-flex align-start">
      <v-container class="pa-0">
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
</template>

<style>
.v-main {
  min-height: fit-content !important;
}
</style>

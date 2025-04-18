<script setup lang="ts">
// Component for the main navigation bar
import { useRouter } from 'vue-router'
const router = useRouter()
const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <v-app-bar flat color="transparent">
    <v-app-bar-title @click="navigateTo('/')" style="cursor: pointer;">4u</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      variant="outlined"
      color="#64A9AF"
      class="mr-2"
      density="comfortable"
    >
      Login
    </v-btn>
    <v-btn
      variant="outlined"
      color="#64A9AF"
      density="comfortable"
    >
      Signup
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.v-app-bar-title {
  color: #64A9AF;
}

</style> 
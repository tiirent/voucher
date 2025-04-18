<script setup lang="ts">
// Component for the main navigation bar
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'

const router = useRouter()
const theme = useTheme()
const navigateTo = (path: string) => {
  router.push(path)
}
const toggleTheme = () => {
  const currentTheme = theme.global.name.value
  theme.global.name.value = currentTheme === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-app-bar flat color="transparent">
    <v-app-bar-title  @click="navigateTo('/')">4u</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn color="primary" class="mr-2" icon variant="outlined" density="comfortable" @click="toggleTheme">
      <v-icon>{{ theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
    <v-btn color="primary" variant="outlined" class="mr-2" density="comfortable">
      Login
    </v-btn>
    <v-btn color="primary" variant="outlined" class="mr-2" density="comfortable">
      Signup
    </v-btn>
    
  </v-app-bar>
</template>

<style scoped>
.v-app-bar-title {
  color: rgb(var(--v-theme-primary));
  cursor: pointer;
}
</style> 
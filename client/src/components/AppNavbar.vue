<script setup lang="ts">
// Component for the main navigation bar
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'
import SignupDialog from './SignupDialog.vue'

const router = useRouter()
const theme = useTheme()
const isSignupDialogOpen = ref(false)
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const navigateTo = (path: string) => {
  router.push(path)
}
const toggleTheme = () => {
  const currentTheme = theme.global.name.value
  theme.global.name.value = currentTheme === 'light' ? 'dark' : 'light'
}

const handleSignup = async () => {
  const { data, error } = await supabase.auth.signUp({ email: email.value, password: password.value })
  if (error) {
    errorMessage.value = error.message
    successMessage.value = ''
  } else {
    successMessage.value = 'Sign up successful! Please check your email.'
    errorMessage.value = ''
    isSignupDialogOpen.value = false
  }
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
    <v-btn color="primary" variant="outlined" class="mr-2" density="comfortable" @click="isSignupDialogOpen = true">
      Signup
    </v-btn>
  </v-app-bar>
  <SignupDialog v-model="isSignupDialogOpen" />
</template>

<style scoped>
.v-app-bar-title {
  color: rgb(var(--v-theme-primary));
  cursor: pointer;
}
</style> 
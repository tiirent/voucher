<script setup lang="ts">
// Component for the main navigation bar
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'
import SignupDialog from './SignupDialog.vue'
import LoginDialog from './LoginDialog.vue'

const router = useRouter()
const theme = useTheme()
const isSignupDialogOpen = ref(false)
const isLoginDialogOpen = ref(false)
const isSignedIn = ref(false)

const navigateTo = (path: string) => {
  router.push(path)
}
const toggleTheme = () => {
  const currentTheme = theme.global.name.value
  theme.global.name.value = currentTheme === 'light' ? 'dark' : 'light'
}

const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.error('Error signing out:', error)
}

onMounted(() => {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      console.log('User signed in:', session?.user)
      isSignedIn.value = true
    } else if (event === 'SIGNED_OUT') {
      console.log('User signed out')
      isSignedIn.value = false
    }
  })
})
</script>

<template>
  <v-app-bar flat color="transparent">
    <v-app-bar-title  @click="navigateTo('/')">4u</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn color="primary" class="mr-2" icon variant="outlined" density="comfortable" @click="toggleTheme">
      <v-icon>{{ theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
    <template v-if="!isSignedIn">
      <v-btn color="primary" variant="outlined" class="mr-2" density="comfortable" @click="isLoginDialogOpen = true">
        login
      </v-btn>
      <v-btn color="primary" variant="outlined" class="mr-2" density="comfortable" @click="isSignupDialogOpen = true">
        sign up
      </v-btn>
    </template>
    <template v-if="isSignedIn">
      <v-btn color="primary" variant="outlined" class="mr-2" density="comfortable" @click="handleSignOut">
        sign out
      </v-btn>
    </template>
  </v-app-bar>
  <SignupDialog v-model:showDialog="isSignupDialogOpen" />
  <LoginDialog v-model:showDialog ="isLoginDialogOpen" />
</template>

<style scoped>
.v-app-bar-title {
  color: rgb(var(--v-theme-primary));
  cursor: pointer;
}
</style> 
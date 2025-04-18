<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { supabase } from '@/lib/supabase'

const props = defineProps({
  showDialog: Boolean
})

const emit = defineEmits(['update:showDialog'])

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const emailError = ref(false)
const passwordError = ref(false)
const confirmPasswordError = ref(false)

const handleSignup = async () => {
  emailError.value = false
  passwordError.value = false
  confirmPasswordError.value = false
  errorMessage.value = ''
  
  if (!email.value.trim()) {
    emailError.value = true
    errorMessage.value = 'r u forgetting something?'
  }
  if (!password.value.trim()) {
    passwordError.value = true
    if (errorMessage.value) errorMessage.value += ' '
    else errorMessage.value = 'r u forgetting something?'
  }
  if (!confirmPassword.value.trim()) {
    confirmPasswordError.value = true
    if (errorMessage.value) errorMessage.value += ' '
    else errorMessage.value = 'r u forgetting something?'
  }
  
  if (emailError.value || passwordError.value || confirmPasswordError.value) {
    return
  }
  
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    password.value = ''
    confirmPassword.value = ''
    passwordError.value = true
    confirmPasswordError.value = true
    return
  }
  
  const { error } = await supabase.auth.signUp({ email: email.value, password: password.value })
  if (error) {
    errorMessage.value = error.message
    successMessage.value = ''
  } else {
    successMessage.value = 'Sign up successful! Please check your email.'
    errorMessage.value = ''
    emit('update:showDialog', false)
  }
}
</script>

<template>
  <v-dialog :model-value="props.showDialog" @update:model-value="emit('update:showDialog', $event)">
    <v-card>
      <v-card-text>
        <h2>Sign Up</h2>
        <v-text-field v-model="email" label="Email" type="email" :error="emailError"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password" :error="passwordError"></v-text-field>
        <v-text-field v-model="confirmPassword" label="Reenter Password" type="password" :error="confirmPasswordError"></v-text-field>
        <v-btn @click="handleSignup">Submit</v-btn>
        <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
        <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template> 
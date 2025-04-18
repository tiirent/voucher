<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { supabase } from '@/lib/supabase'

// Define props for dialog visibility
const props = defineProps({
  showDialog: Boolean
})

const emit = defineEmits(['update:showDialog'])

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const handleSignup = async () => {
  const { data, error } = await supabase.auth.signUp({ email: email.value, password: password.value })
  if (error) {
    errorMessage.value = error.message
    successMessage.value = ''
  } else {
    successMessage.value = 'Sign up successful! Please check your email.'
    errorMessage.value = ''
    emit('update:showDialog', false)  // Close the dialog
  }
}
</script>

<template>
  <v-dialog :model-value="props.showDialog" @update:model-value="emit('update:showDialog', $event)">
    <v-card>
      <v-card-text>
        <h2>Sign Up</h2>
        <v-text-field v-model="email" label="Email" type="email"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        <v-btn @click="handleSignup">Submit</v-btn>
        <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
        <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template> 
<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { supabase } from '@/lib/supabase'

const props = defineProps({
  showDialog: Boolean
})

const emit = defineEmits(['update:showDialog'])

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const handleLogin = async () => {
  errorMessage.value = ''
  const { error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value })
  if (error) {
    errorMessage.value = error.message
    successMessage.value = ''
  } else {
    successMessage.value = 'Login successful!'
    errorMessage.value = ''
    emit('update:showDialog', false)  // Close the dialog on success
  }
}
</script>

<template>
  <v-dialog width="400" :model-value="props.showDialog" @update:model-value="emit('update:showDialog', $event)">
    <v-card>
      <v-card-text>
        <h2 class="text-h4 mb-4">Login</h2>
        <v-text-field v-model="email" label="Email" type="email"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        <div class="d-flex justify-end">
          <v-btn color="primary" variant="outlined" class="mb-2" density="comfortable" @click="handleLogin">Submit</v-btn>
        </div>
        <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
        <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template> 
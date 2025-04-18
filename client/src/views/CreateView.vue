<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Voucher } from '@/models/Voucher'
import { supabase } from '@/lib/supabase'
import { type User } from '@supabase/supabase-js'

const router = useRouter()
const voucherForm = ref(new Voucher())
const loading = ref(false)
const user = ref<User | null>(null)

onMounted(async () => {
  const { data: { user: currentUser } } = await supabase.auth.getUser()
  user.value = currentUser
})

const createVoucher = async () => {
  if (!user.value) {
    console.error('user is not authenticated')
    alert('you have to be logged in to create a voucher')
    return
  }
  loading.value = true
  try {
    const { error } = await supabase.from('vouchers').insert([
      {
        user_id: user.value.id,
        title: voucherForm.value.title,
        description: voucherForm.value.description,
        expiry_date: voucherForm.value.expiryDate ? voucherForm.value.expiryDate : null,
        theme_color: voucherForm.value.theme.color,
        theme_emoji: voucherForm.value.theme.emoji,
        recipient: voucherForm.value.recipient
      }
    ])
    if (error) {
      console.error('Supabase error details:', error)
      if (error.code === '42501') {
        console.error('RLS Error: The user_id does not match the authenticated user. Policy: ' + error.message + '. Check your Supabase policy settings.')
      }
      throw error
    } else {
      console.log('Voucher created successfully')
      router.push('/manage')
    }
  } catch (error) {
    if (error instanceof Error) {
      alert('Failed to create voucher: ' + error.message + '. Please check console for details.')
    } else {
      alert('Failed to create voucher: An unknown error occurred. Please check console for details.')
    }
    console.error('Error creating voucher:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container fluid class="d-flex flex-column justify-center">
    <div class="d-flex flex-column w-100">

      <v-row>
        <!-- Form Section -->
        <v-col cols="12" md="6">
          <v-card color="transparent" flat>
            <v-card-title class="text-h5 px-4 pt-4">
              Create
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="createVoucher">
                <v-text-field
                  v-model="voucherForm.title"
                  label="title"
                  placeholder="e.g., '10 free hugs', 'movie night'"
                  required
                  class="mb-2"
                />
  
                <v-textarea
                  v-model="voucherForm.description"
                  label="description (optional)"
                  placeholder="add a personal message..."
                  rows="3"
                  class="mb-2"
                />
  
                <v-text-field
                  v-model="voucherForm.recipient"
                  label="who is this for? (optional)"
                  placeholder="enter recipient's name"
                  class="mb-2"
                />
  
                <v-text-field
                  v-model="voucherForm.expiryDate"
                  label="expiration date (optional)"
                  type="date"
                  class="mb-2"
                />
  
                <div class="mb-6 d-flex flex-row">
                  <v-color-picker
                        v-model="voucherForm.theme.color"
                        mode="hex"
                  />
                </div>
  
                <div class="d-flex justify-end">
                  <v-btn variant="outlined"
                    class="mr-2"
                    density="comfortable"
                    :loading="loading" 
                    @click="createVoucher">create
                  </v-btn>
                </div>
  
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Preview Section -->
        <v-col cols="12" md="6">
          <v-card color="transparent" flat>
            <v-card-title class="text-h5 px-4 pt-4">
              Preview
            </v-card-title>
            <v-card-text class="d-flex align-center justify-center" style="min-height: 400px;">
              preview coming soon...
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.v-btn {
  color: var(--color-accent-2);
}
</style> 
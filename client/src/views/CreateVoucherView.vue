<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const voucherForm = ref({
  title: '',
  description: '',
  expiryDate: '',
  theme: {
    color: '#64A9AF',
    emoji: '🎁'
  },
  recipient: '',
})

const loading = ref(false)

const createVoucher = async () => {
  loading.value = true
  try {
    // TODO: Implement API call to create voucher
    console.log('Creating voucher:', voucherForm.value)
    router.push('/vouchers')
  } catch (error) {
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
          <v-card class="h-100" color="transparent" flat>
            <v-card-title class="text-h5 px-4 pt-4">
              Create Your Voucher
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="createVoucher">
                <v-text-field
                  v-model="voucherForm.title"
                  label="Title"
                  placeholder="e.g., '10 Free Hugs', 'Movie Night'"
                  required
                  class="mb-2"
                />
  
                <v-textarea
                  v-model="voucherForm.description"
                  label="Description (Optional)"
                  placeholder="Add a personal message..."
                  rows="3"
                  class="mb-2"
                />
  
                <v-text-field
                  v-model="voucherForm.recipient"
                  label="Who is this for? (Optional)"
                  placeholder="Enter recipient's name"
                  class="mb-2"
                />
  
                <v-text-field
                  v-model="voucherForm.expiryDate"
                  label="Expiration Date (Optional)"
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
                    color="#64A9AF"
                    class="mr-2"
                    density="comfortable"
                    :loading="loading" 
                    @click="createVoucher">Create
                  </v-btn>
                </div>
  
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Preview Section -->
        <v-col cols="12" md="6">
          <v-card class="h-100" color="transparent" flat>
            <v-card-title class="text-h5 px-4 pt-4">
              Voucher Preview
            </v-card-title>
            <v-card-text class="d-flex align-center justify-center" style="min-height: 400px;">
              Preview coming soon...
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.h-100 {
  height: 100%;
}
</style> 
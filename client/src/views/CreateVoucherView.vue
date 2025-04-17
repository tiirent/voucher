<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const voucherForm = ref({
  title: '',
  description: '',
  value: 0,
  expiryDate: '',
  quantity: 1
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
  <v-container fluid class="pa-4">
    <v-row>
      <!-- Form Section -->
      <v-col cols="12" md="6">
        <v-card class="h-100">
          <v-card-title class="text-h5 px-4 pt-4">
            Voucher Form
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="createVoucher">
              <v-text-field
                v-model="voucherForm.title"
                label="Voucher Title"
                required
                class="mb-2"
              />

              <v-textarea
                v-model="voucherForm.description"
                label="Description"
                rows="3"
                class="mb-2"
              />

              <v-text-field
                v-model="voucherForm.value"
                label="Value"
                type="number"
                prefix="$"
                required
                class="mb-2"
              />

              <v-text-field
                v-model="voucherForm.expiryDate"
                label="Expiry Date"
                type="date"
                required
                class="mb-2"
              />

              <v-text-field
                v-model="voucherForm.quantity"
                label="Quantity"
                type="number"
                min="1"
                required
                class="mb-4"
              />

              <div class="d-flex gap-4">
                <v-btn
                  color="primary"
                  type="submit"
                  block
                  :loading="loading"
                >
                  Create Voucher
                </v-btn>

                <v-btn
                  color="secondary"
                  block
                  variant="outlined"
                  :disabled="loading"
                  @click="router.push('/')"
                >
                  Cancel
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Preview Section -->
      <v-col cols="12" md="6">
        <v-card class="h-100">
          <v-card-title class="text-h5 px-4 pt-4">
            Voucher Preview
          </v-card-title>
          <v-card-text class="d-flex align-center justify-center" style="min-height: 400px;">
            Preview coming soon...
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.h-100 {
  height: 100%;
}
</style> 
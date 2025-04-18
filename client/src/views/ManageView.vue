<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(false)
</script>

<template>
  <v-container fluid class="d-flex flex-column justify-center">
    <div class="d-flex flex-column w-100">

      <v-row>
        <!-- Form Section -->
        <v-col cols="12" md="6">
          <v-card color="transparent" flat>
            <v-card-title class="text-h5 px-4 pt-4">
              Manage Vouchers
            </v-card-title>
            <v-card-text>
              
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Preview Section -->
        <v-col cols="12" md="6">
          <v-card color="transparent" flat>
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
.v-btn {
  color: var(--color-accent-2);
}
</style> 
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-4">
          <v-card-title class="text-h4 text-center mb-4">
            Welcome to Vuetify
          </v-card-title>
          
          <v-card-text>
            <p class="text-body-1 mb-4">
              This is a Vue 3 + Vuetify 3 + TypeScript project.
            </p>
            
            <v-btn
              color="primary"
              @click="count++"
              class="mb-4"
            >
              Count is: {{ count }}
            </v-btn>
            
            <p class="text-body-2">
              Edit
              <code>views/HomeView.vue</code> to test hot module replacement.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

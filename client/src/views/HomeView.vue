<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goToCreate = () => router.push('/create')
const goToManage = () => router.push('/manage')
</script>

<template>
  <v-container class="d-flex flex-column justify-center">
    <div class="d-flex flex-column">
      <h1 class="text-h3 font-weight-bold mb-8 text-center">hey, i got something 4 u</h1>
      <v-row class="justify-center">
        <v-col cols="12" sm="6" md="3" class="d-flex justify-center">
          <v-img
            src="/assets/ticket.png"
            alt="Arcade Ticket"
            width="250"
            height="200"
            @click="goToCreate"
            style="cursor: pointer;"
          />
        </v-col>
        <v-col cols="12" sm="6" md="3" class="d-flex justify-center">
          <v-img
            src="/assets/manage-ticket.png"
            alt="Manage Ticket"
            width="250"
            height="200"
            @click="goToManage"
            style="cursor: pointer;"
          />
        </v-col>
      </v-row>
    </div>
    <!-- <p class="text-subtitle-1 text-center mt-4">u can use it to make more vouchers</p> -->
  </v-container>
</template>

<style>
.v-container {
  min-height: 100vh;
}
</style>
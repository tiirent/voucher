<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToCreate = () => router.push('/create')
</script>

<template>
  <v-container class="flex-column">
		<h1 class="text-h3 font-weight-bold mb-4">hey, i got something 4 u</h1>
		<v-img
			src="/assets/ticket.png"
			alt="Arcade Ticket"
			class="mb-4"
			width="250"
      height="200"
			@click="goToCreate"
			style="cursor: pointer;"
		/>
		<p class="text-subtitle-1">u can use it to make more vouchers</p>
	</v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToCreate = () => router.push('/create')
const goToManage = () => router.push('/manage')
</script>

<template>
  <v-container class="flex-column">
		<h1 class="text-h3 font-weight-bold mb-4">hey, i got something 4 u</h1>
		<v-row class="justify-center">
			<v-col cols="12" sm="6" class="d-flex justify-center">
				<v-img
					src="/assets/ticket.png"
					alt="Arcade Ticket"
					width="250"
					height="200"
					@click="goToCreate"
					style="cursor: pointer;"
				/>
			</v-col>
			<v-col cols="12" sm="6" class="d-flex justify-center">
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
		<!-- <p class="text-subtitle-1 text-center mt-4">u can use it to make more vouchers</p> -->
	</v-container>
</template>

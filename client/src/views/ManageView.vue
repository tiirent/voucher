<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'
import { Voucher } from '@/models/Voucher'
import { type User } from '@supabase/supabase-js'

const vouchers = ref<Voucher[]>([])
const loading = ref(true)
const error = ref('')
const showCreateDialog = ref(false)
const user = ref<User | null>(null)

const fetchVouchers = async () => {
	if (!user.value) return
	loading.value = true
	error.value = ''
	const { data, error: err } = await supabase.from('vouchers').select('*').eq('user_id', user.value.id).order('created_at', { ascending: false })
	if (err) {
		error.value = err.message
		console.error(err)
	} else {
		vouchers.value = data.map(Voucher.fromSupabaseObject) || []
	}
	loading.value = false
}

onMounted(async () => {
	const { data: { user: currentUser } } = await supabase.auth.getUser()
	user.value = currentUser
	if (user.value) {
		await fetchVouchers()
	} else {
		error.value = 'You must be logged in to view vouchers'
	}
})
</script>

<template>
	<v-container>
		<h1 class="text-h4 mb-4">My Vouchers</h1>

		<div class="d-flex justify-space-between align-center mb-4">
			<v-btn color="primary" @click="showCreateDialog = true">Create New Voucher</v-btn>
		</div>

		<v-row v-if="!loading">
			<v-col v-for="voucher in vouchers" :key="voucher.id" cols="12" md="6" lg="4">
				<v-card :style="{ backgroundColor: voucher.theme.color || '#fff' }">
					<v-card-title>
						<span class="text-h6">{{ voucher.theme.emoji || '🎁' }} {{ voucher.title }}</span>
					</v-card-title>
					<v-card-text>
						<p>{{ voucher.description }}</p>
						<p><strong>For:</strong> {{ voucher.recipient || 'N/A' }}</p>
						<p><strong>Expires:</strong> {{ voucher.expiryDate || 'No expiry' }}</p>
					</v-card-text>
					<v-card-actions>
						<v-btn icon color="blue">
							<v-icon>mdi-pencil</v-icon>
						</v-btn>
						<v-btn icon color="red">
							<v-icon>mdi-delete</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>

		<v-alert type="info" v-if="!loading && vouchers.length === 0">
			You don't have any vouchers yet. Click "Create New Voucher" to get started!
		</v-alert>

		<v-progress-circular v-if="loading" indeterminate color="primary" class="ma-auto" />

		<!-- Create Voucher Dialog (to be implemented) -->
		<!-- <CreateVoucherDialog v-model="showCreateDialog" @refresh="fetchVouchers" /> -->
	</v-container>
</template>

<style scoped>
.v-card {
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>

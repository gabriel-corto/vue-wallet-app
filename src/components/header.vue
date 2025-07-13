<script setup lang="ts">
import Logo from "./logo.vue"
import Navbar from "./navbar.vue"
import NewTransactionModal from "@/components/new-transaction-modal/new-transaction-modal.vue"
</script>

<template>
	<header class="flex items-center justify-between py-10 max-xl:px-4">
		<div class="flex items-center justify-center gap-6">
			<Logo />

			<div class="w-[2px] h-7 bg-indigo-400" />
			<Navbar />
		</div>

		<NewTransactionModal />
	</header>
</template>

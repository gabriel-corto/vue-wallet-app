<script setup lang="ts">
import { House, ArrowLeftRight } from "lucide-vue-next"
</script>

<template>
	<nav class="flex items-center gap-2 text-neutral-500 font-medium">
		<RouterLink
			to="/"
			class="flex items-center gap-2 hover:bg-indigo-50 duration-150 transition-all rounded-md hover:text-indigo-500 px-3 py-1"
		>
			<House class="w-5 h-5" />
			<span>Home</span>
		</RouterLink>

		<RouterLink
			to="/transactions"
			class="flex items-center gap-2 hover:bg-indigo-50 duration-150 transition-all rounded-md hover:text-indigo-500 px-3 py-1"
		>
			<ArrowLeftRight class="w-5 h-5" />
			<span>Transações</span>
		</RouterLink>
	</nav>
</template>

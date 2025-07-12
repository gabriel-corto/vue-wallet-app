<script setup lang="ts">
import Header from "@/components/header.vue"
</script>

<template>
	<main class="max-w-6xl m-auto h-screen antialiased text-neutral-700">
		<Header />

		<div>
			<router-view />
		</div>
	</main>
</template>

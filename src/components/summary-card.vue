<script setup lang="ts">
import { useSummaryIcon } from "@/composables/useSummaryIcon"
import type { TransactionType } from "@/types/transactions"

const { renderSvgIcon } = useSummaryIcon()

interface SummaryProps {
	variant: TransactionType
	title: string
}

defineProps<SummaryProps>()
</script>

<template>
	<div
		class="flex flex-col justify-between gap-4 rounded-md shadow-sm p-4 w-full max-w-md"
	>
		<div class="flex justify-between">
			<h2>{{ title }}</h2>
			<component
				:is="renderSvgIcon(variant).icon"
				:class="renderSvgIcon(variant).style"
			/>
		</div>

		<strong>19.500,00 AOA</strong>
	</div>
</template>

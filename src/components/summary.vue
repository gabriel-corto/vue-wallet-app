<script setup lang="ts">
import SummaryCard from "@/components/summary-card.vue"
</script>

<template>
	<section class="py-6">
		<div class="space-y-2">
			<h1 class="text-3xl font-bold">Visão Geral</h1>
			<p>Acompanhe o resumo das suas transações</p>
		</div>

		<div class="py-10 flex gap-6">
			<SummaryCard variant="income" title="Entradas" />
			<SummaryCard variant="outcome" title="Saídas" />
			<SummaryCard variant="total" title="Total" />
		</div>
	</section>
</template>

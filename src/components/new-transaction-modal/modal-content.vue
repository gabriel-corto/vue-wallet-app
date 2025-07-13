<script setup lang="ts">
import { ref } from "vue"

import { DialogPanel } from "@headlessui/vue"
import ModalHeader from "./modal-header.vue"

import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue"
import { useSummaryIcon } from "@/composables/useSummaryIcon"

const transactionType = ref<"income" | "outcome">("outcome")
const { renderSvgIcon } = useSummaryIcon()
</script>

<template>
	<DialogPanel
		class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
	>
		<ModalHeader />

		<form class="py-6 space-y-4">
			<input
				type="text"
				class="w-full bg-indigo-50 border-2 border-transparent p-3 rounded-lg focus:border-indigo-500 duration-150 focus:outline-0"
				placeholder="Descrição"
			/>

			<input
				type="number"
				class="w-full bg-indigo-50 border-2 border-transparent p-3 rounded-lg focus:border-indigo-500 duration-150 focus:outline-0"
				placeholder="Preço"
			/>

			<RadioGroup v-model="transactionType" class="px-1">
				<RadioGroupLabel>Tipo de Transação</RadioGroupLabel>

				<div class="grid grid-cols-2 gap-2 mt-2">
					<RadioGroupOption v-slot="{ checked }" value="income">
						<div
							:class="checked ? 'bg-emerald-200' : 'bg-indigo-50'"
							class="p-3 gap-2 flex items-center justify-center rounded-md cursor-pointer"
						>
							<component
								:is="renderSvgIcon('income').icon"
								:class="renderSvgIcon('income').style"
							/>
							<span :class="checked && 'text-emerald-500 font-bold'"
								>Entrada</span
							>
						</div>
					</RadioGroupOption>

					<RadioGroupOption v-slot="{ checked }" value="outcome">
						<div
							:class="checked ? 'bg-rose-200' : ''"
							class="p-3 gap-2 flex items-center justify-center rounded-md cursor-pointer bg-indigo-50"
						>
							<component
								:is="renderSvgIcon('outcome').icon"
								:class="renderSvgIcon('outcome').style"
							/>
							<span :class="checked && 'text-rose-500 font-bold'">Saída</span>
						</div>
					</RadioGroupOption>
				</div>
			</RadioGroup>

			<div class="px-1 py-2">
				<button
					type="submit"
					class="bg-indigo-500 w-full text-white flex items-center justify-center font-bold rounded-lg hover:bg-indigo-700 duration-150 transition-all cursor-pointer p-3"
				>
					<span class="max-sm:hidden">Cadastrar Transação</span>
				</button>
			</div>
		</form>
	</DialogPanel>
</template>

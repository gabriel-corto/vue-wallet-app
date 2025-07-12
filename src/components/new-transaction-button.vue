<script setup lang="ts">
import { Plus } from "lucide-vue-next"

import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/vue"
import { useNewTransactionModal } from "@/store/new-transation-modal"

const newTransactionModalStore = useNewTransactionModal()
</script>

<template>
	<div>
		<button
			type="button"
			@click="newTransactionModalStore.openModal"
			class="bg-indigo-500 text-white flex items-center justify-center font-bold rounded-full hover:bg-indigo-700 duration-150 transition-all cursor-pointer p-2"
		>
			<Plus class="w-5 h-5" />
			<span class="max-sm:hidden">Nova Transação</span>
		</button>
	</div>

	<TransitionRoot appear :show="newTransactionModalStore.isOpen" as="template">
		<Dialog
			as="div"
			@close="newTransactionModalStore.closeModal"
			class="relative z-10"
		>
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black/25" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div
					class="flex min-h-full items-center justify-center p-4 text-center"
				>
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel
							class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle
								as="h3"
								class="text-lg font-medium leading-6 text-gray-900"
							>
								Cadastrar Nova Transação
							</DialogTitle>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

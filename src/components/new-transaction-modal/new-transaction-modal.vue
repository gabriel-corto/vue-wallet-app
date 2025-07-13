<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog } from "@headlessui/vue"
import { useNewTransactionModal } from "@/store/new-transation-modal"

import ModalTrigger from "./modal-trigger.vue"
import ModalContent from "./modal-content.vue"

const newTransactionModalStore = useNewTransactionModal()
</script>

<template>
	<ModalTrigger />

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
						<ModalContent />
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

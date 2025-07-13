<script setup lang="ts">
import { DialogTitle } from "@headlessui/vue"
import { X } from "lucide-vue-next"

import { useNewTransactionModal } from "@/store/new-transation-modal"
const newTransactionModalStore = useNewTransactionModal()
</script>

<template>
	<div class="flex items-center justify-between">
		<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
			Cadastrar Nova Transação
		</DialogTitle>

		<div @click="newTransactionModalStore.closeModal">
			<X class="w-5 h-5" />
		</div>
	</div>
</template>

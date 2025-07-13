<script setup lang="ts">
import { Plus } from "lucide-vue-next"
import { useNewTransactionModal } from "@/store/new-transation-modal"

const newTransactionModalStore = useNewTransactionModal()
</script>

<template>
	<button
		type="button"
		@click="newTransactionModalStore.openModal"
		class="bg-indigo-500 text-white flex items-center justify-center font-bold rounded-full hover:bg-indigo-700 duration-150 transition-all cursor-pointer p-2"
	>
		<Plus class="w-5 h-5" />
		<span class="max-sm:hidden">Nova Transação</span>
	</button>
</template>

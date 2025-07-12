import { defineStore } from "pinia"

export const useNewTransactionModal = defineStore("new-transaction-modal", {
	state: () => ({ isOpen: false }),
	actions: {
		openModal() {
			this.isOpen = true
		},
		closeModal() {
			this.isOpen = false
		},
	},
})

import type { TransactionType } from "@/types/transactions"
import {
	ArrowUpCircle,
	ArrowDownCircle,
	HelpCircle,
	DollarSign,
} from "lucide-vue-next"

export function useSummaryIcon() {
	function renderSvgIcon(transactionType: TransactionType) {
		switch (transactionType) {
			case "income":
				return { icon: ArrowUpCircle, style: "text-emerald-500" }
			case "outcome":
				return { icon: ArrowDownCircle, style: "text-rose-500" }
			case "total":
				return { icon: DollarSign, style: "text-neutral-500" }
			default:
				return { icon: HelpCircle, style: "text-gray-400" }
		}
	}

	return { renderSvgIcon }
}

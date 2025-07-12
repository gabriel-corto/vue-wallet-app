import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

import AppLayout from "@/layouts/app-layout.vue"
import Home from "@/pages/home.vue"

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: AppLayout,
		children: [{ path: "/", component: Home }],
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})

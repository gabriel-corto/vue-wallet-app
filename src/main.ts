import { createApp } from "vue"
import App from "./app.vue"

import "@/styles/globals.css"
import { router } from "./routes"
import { pinia } from "@/libs/pinia"

const app = createApp(App)
app.use(pinia).use(router).mount("#app")

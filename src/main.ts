import { createApp } from "vue"
import App from "./app.vue"

import "@/styles/globals.css"
import { router } from "./routes"

const app = createApp(App)
app.use(router).mount("#app")

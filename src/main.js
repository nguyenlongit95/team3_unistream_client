import './assets/main.css'
import '../public/output.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App)

app.use(router)

app.use(vue3GoogleLogin, {
  clientId: "958591095715-69gck429hv16u74v1mtfrredgonhi41s.apps.googleusercontent.com",
});

app.mount('#app')
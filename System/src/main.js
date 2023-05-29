import './assets/main.css';


import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/index.css';




import { createPinia } from 'pinia';
import { createApp } from 'vue';


import App from './App.vue';
import router from './router';

const app = createApp(App)
app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')

import './bootstrap';
import { createApp } from 'vue';
import Index from './components/Index.vue'
import route from './route.js'
import store from "./store";

const app = createApp(Index);

app.use(route);
app.use(store)
app.mount('#app');

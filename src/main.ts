import { createApp } from 'vue'
import App from './App.vue'
import ViewerPlugin from './ViewerPlugin';

const app = createApp(App);
app.use(ViewerPlugin, {img: 'https://picsum.photos/200/300'})

app.mount('#app');

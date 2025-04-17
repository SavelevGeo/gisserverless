import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import "vue3-openlayers/dist/vue3-openlayers.css";

import OpenLayersMap from "vue3-openlayers";

const app = createApp(App);

const options = {
    debug: true,
};

app.use(OpenLayersMap, options);

app.mount('#app')

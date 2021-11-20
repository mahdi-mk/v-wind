import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import Button from './components/Button'
import { TextInput } from './components/Form'

let app = createApp(App)

app.component('Btn', Button)
app.component('TextInput', TextInput)

app.mount('#app')

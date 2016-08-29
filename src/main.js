import Vue from 'vue'
import App from './App'
import router from './route'
import { RadonInstall } from 'radon-ui'

Vue.use(RadonInstall)

router.start(App, 'app')

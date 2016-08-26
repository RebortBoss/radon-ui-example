import Vue from 'vue'
import App from './App'
import RadonUI from 'radon-ui/dist/components/install'

Vue.use(RadonUI)

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: { App }
})

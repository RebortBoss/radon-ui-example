import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: (resolve) => {
            require(['./views/index.vue'], resolve)
        }
    },
    '/order': {
        name: 'order',
        component: (resolve) => {
            require(['./views/order.vue'], resolve)
        }
    },
    '/product': {
        name: 'product',
        component: (resolve) => {
            require(['./views/product.vue'], resolve)
        }
    }
})

export default router

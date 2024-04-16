import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from './stores/user'
import { useProductsStore } from './stores/products'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Register from './components/Register.vue'
import ProductsList from './components/ProductsList.vue'
import ProductPage from './components/ProductPage.vue'
import Cart from './components/Cart.vue'
import Login from './components/Login.vue'

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {path: '/', name: 'home', component: HelloWorld, props: route=> ({msg: "\"Prepare for unforseen consequences\""})},
            {path: '/register', name: 'register', component: Register},
            {path: '/products', name: 'catalog', component: ProductsList, },
            {path: '/product/:id', name: 'produit', component: ProductPage, props: route=> ({product_id: parseInt(route.params.id)})},
            {path: '/login', name: "login", component: Login},
            {path: '/cart', name: "panier", component: Cart},
            {path: '/logout', name: "logout", component: {
                    beforeCreate() {
                        const userStore = useUserStore();
                        userStore.$reset();
                        this.$router.push({name: 'home'});
                    }
                }
            }
        ]
    }
)

router.beforeEach((to, from, next) => {
    const products = useProductsStore();
    if (products.productsList.length == 0) {
        products.fetchProducts();
    }
    next();
})

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
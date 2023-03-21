// 写一个vue3的入口文件
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// 格式化下面这一段代码
// Path: App.vue
{/* <template>
    <div id="app"></div>
</template>
<script></script>
<style></style> */}


    // Path: main.js
    import { createApp } from 'vue'
    import App from './App.vue'
    import router from './router'
    import store from './store'

    createApp(App).use(store).use(router).mount('#app')


    // Path: router/index.js
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../views/Home.vue'

    const routes = [
        {
            path: '/',
            name: 'Home',

            component: Home
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
                }
            ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    // export default router


    // Path: store/index.js
    import { createStore } from 'vuex'

    export default createStore({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
    })
    // 写一个asyncpool的函数
    // Path: asyncPool.js
    
    

















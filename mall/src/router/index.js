import { createRouter, createWebHashHistory } from 'vue-router'
const home = () =>
    import ('@/views/Home/home')



const routes = [{
    path: '/',
    component: home
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
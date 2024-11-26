import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/post',
        component: () => import('./components/Post/IndexComponent.vue'),
        name: 'post.index'
    },
    {
        path: '/post/create',
        component: () => import('./components/Post/CreateComponent.vue'),
        name: 'post.create'
    },
    {
        path: '/post/:id/show',
        component: () => import('./components/Post/ShowComponent.vue'),
        name: 'post.show'
    },
    {
        path: '/post/:id/edit',
        component: () => import('./components/Post/EditComponent.vue'),
        name: 'post.edit'
    },

]

const router = createRouter({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    routes
})

export default router



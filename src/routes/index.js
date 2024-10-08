import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import Movie from './Movie';
import About from './About';
import NotFound from './NotFound';
export default createRouter({
    // Hash, History
    history: createWebHashHistory(),
    scrollBehavior() {
        return { top: 0 };
    },
    // pages
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/movie/:id',
            component: Movie,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        },
    ],
});

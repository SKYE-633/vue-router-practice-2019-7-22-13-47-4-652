import VueRouter from 'vue-router'
import Welcome from './components/Welcome'
import Home from './components/Home'
import TodoList from './components/TodoList'
import Mine from './components/Mine'
import Vue from "vue";

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Welcome },
    {
        path: '/home',
        component: Home,
        children: [
            { path: '/', redirect: '/TodoList' },
            { path: '/TodoList', component: TodoList },
            { path: '/mine', component: Mine }
        ]
    },

];
export default new VueRouter({
    routes,
});

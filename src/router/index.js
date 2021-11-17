import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from '../Dashboard/Dashboard.vue';
import NewGame from '../game/NewGame.vue';
import Game from '../game/Game.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'dashboard',
        component: Dashboard
    }, {
        path: '/game',
        name: 'newGame',
        component: NewGame
    }, {
        path: '/game/:id',
        name: 'game',
        component: Game
    }]
});
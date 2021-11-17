import { createStore } from "vuex";
import courses from '../data/courses.js';

export default createStore({
    state: {
        games: [{
            id: 88,
            player: {
                name: 'Nick',
                courseHandicap: '4',
                strokes: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            },
            course: courses[0]
        }],
        newGame: {}
    },
    getters: {
        getGameById: (state) => (id) => {
          return state.games.find(game => game.id + '' === id + '')
        }
    },
    mutations: {
        addPlayer(state, player) {
            state.newGame.player = player;
        },
        addCourse(state, course) {
            state.newGame.course = course;
        },
        addNewGame(state) {
            state.newGame.id = Math.floor(100000 + Math.random() * 900000);
            state.newGame.player.strokes = new Array(state.newGame.course.holes.length);
            state.games.push(Object.assign({}, state.newGame));
            state.newGame = {};
        },
        updatePlayerStrokes(state, game) {
            for (let i = 0; i <= state.games.length; i++) {
                if (state.games[i].id + '' === game.id + '') {
                    state.games[i].player.strokes = game.player.strokes;
                    break;
                }
            }
        }
    }
});
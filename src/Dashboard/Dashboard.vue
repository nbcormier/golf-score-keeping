<template>
    <n-space vertical justify="space-between">
    <n-empty v-if="!games.length" size="huge" description="No games found">
    </n-empty>
    <div v-if="games.length">
        <n-thing v-for="game in games" :key="game.id">
            <template #header>{{ game.course.name }}</template>
            <template #description> {{ game.player.name }}: {{ gameStrokes(game) || 'no score yet' }}</template>
            <template #action>
                <n-space justify="space-between">
                    <n-button size="small">
                        Delete
                    </n-button>
                    <n-button size="small" @click="viewGame(game.id)">
                        Details
                    </n-button>
                </n-space>
            </template>
        </n-thing>
    </div>
    <n-space justify="space-around">
    <router-link to="/game">
        <n-button size="large" type="primary">Start a new game</n-button>
    </router-link>
    </n-space>
    </n-space>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Dashboard',
    computed: {
        games() {
            return this.$store.state.games;
        }
    },
    setup() {
        const router = useRouter();
        return {
            viewGame(id) {
                router.push({name: 'game', params: {id: id}})
            },
            gameStrokes(game) {
                let totalStrokes = 0;
                for (let i = 1; i <= game.player.strokes.length; i++) {
                    if (game.player.strokes[i]) {
                        totalStrokes+= game.player.strokes[i];
                    }
                }
                return totalStrokes;
            }
        }
    }
});
</script>

<style>
</style>
<template>
    <n-button text style="font-size: 32px" @click="toDashboard">
        <n-icon>
            <chevron-left-24-regular />
        </n-icon>
    </n-button>
    <n-space>
        <div v-if="game">
        {{gameStrokes(game)}}
        <n-steps vertical :current="currentStep">
            <n-step v-for="(hole, index) in game.course.holes" :key="index" :title="`Hole ${hole.number}`">
                <div v-show="currentStep === hole.number">
                    <div>
                        Par: {{hole.par}}
                    </div>
                    <div>
                        Index: {{hole.index}}
                    </div>
                    <n-divider title-placement="left">{{game.player.name}}</n-divider>
                    Strokes<br>
                    <n-radio-group class="hole-strokes" v-model:value="game.player.strokes[index + 1]" name="radiobuttongroup1">
                        <n-radio-button
                            v-for="possibleStroke in hole.par + 3"
                            :key="possibleStroke"
                            :value="possibleStroke"
                        >
                            {{ possibleStroke }}
                        </n-radio-button>
                    </n-radio-group>
                    <n-space justify="space-between">
                        <n-button v-show="hole.number > 1" size="large" @click="moveStep()">Previous</n-button>
                        <n-button v-show="hole.number < game.course.holes.length" size="large" @click="moveStep(true)">Next</n-button>
                    </n-space>
                </div>
            </n-step>
        </n-steps>
        </div>
    </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ChevronLeft24Regular } from '@vicons/fluent'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'Game',
    components: {
        ChevronLeft24Regular
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        const store = useStore();
        const currentStepRef = ref(1);
        return {
            currentStep: currentStepRef,
            moveStep(forward) {
                if (forward) {
                    currentStepRef.value++
                } else {
                    currentStepRef.value--
                }
            },
            toDashboard() {
                router.push({name: 'dashboard'});
            },
            game: ref(store.getters.getGameById(route.params.id)),
            // updatePlayerStrokes(game) {
            //     store.commit('updatePlayerStrokes', game);
            // },
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
    .hole-strokes {
        margin-bottom: 15px;
    }
</style>
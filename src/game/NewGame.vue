<template>
    <n-space vertical>
        <n-steps vertical :current="current">
            <n-step title="Players">
                <div v-show="current === 1">
                    <PlayerEntry @move-step="moveStep" />
                </div>
            </n-step>
            <n-step title="Course & Tees">
                <div v-show="current === 2">
                    <CourseEntry @move-step="moveStep" />
                </div>
            </n-step>
        </n-steps>
    </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue'
import PlayerEntry from './PlayerEntry.vue'
import CourseEntry from './CourseEntry.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    components: {
        PlayerEntry,
        CourseEntry
    },
    computed: {
        newGame() {
            return this.$store.state.newGame;
        },
        games() {
            return this.$store.state.games;
        }
    },
    setup() {
        const router = useRouter();
        const currentRef = ref(1);
        return {
            current: currentRef,
            moveStep(forward) {
                if (forward) {
                    if (currentRef.value === null) currentRef.value = 1
                    else if (currentRef.value >= 2) router.push({name: 'dashboard'})
                    else currentRef.value++
                } else {
                    if (currentRef.value === 0) currentRef.value = null
                    else if (currentRef.value === null) currentRef.value = 2
                    else currentRef.value--
                }
            }
        }
    }
});
</script>
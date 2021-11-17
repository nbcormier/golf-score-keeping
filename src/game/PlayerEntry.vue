<template>
    <n-form
    :model="formValue"
    :rules="rules"
    ref="formRef">
        <n-form-item label="Player Name" path="player.name">
            <n-input size="large" v-model:value="formValue.player.name" placeholder="Name" />
        </n-form-item>
        <n-form-item label="Course Handicap" path="player.courseHandicap">
            <n-select size="large" v-model:value="formValue.player.courseHandicap" :options="courseHandicaps" />
        </n-form-item>
    </n-form>
    <n-space justify="space-between">
      <router-link to="/">
          <n-button size="large">Cancel</n-button>
      </router-link>
      <n-button size="large" type="primary" @click="handleValidateClick">Continue</n-button>
    </n-space>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  emits: ['moveStep'],
  computed: {
    newGame() {
        return this.$store.state.newGame;
    }
  },
  setup(props, context) {
    const store = useStore()
    const formRef = ref(null)
    const formValue = ref({
        player: {
          name: '',
          courseHandicap: null
        }
      });

    return {
      formRef,
      formValue,
      rules: {
        player: {
          name: {
            required: true,
            message: 'Required',
            trigger: 'blur'
          },
          courseHandicap: {
            required: true,
            message: 'Required',
            trigger: 'blur'
          }
        },
      },
      handleValidateClick (e) {
        e.preventDefault();
        formRef.value.validate((errors) => {
          if (!errors) {
            context.emit('moveStep', true);
            store.commit('addPlayer', Object.assign({}, formValue.value.player));
          }
        })
      },
      courseHandicaps: [
        {
            label: '+5',
            value: '-5',
        },
        {
            label: '+4',
            value: '-4',
        },
        {
            label: '+3',
            value: '-3',
        },
        {
            label: '+2',
            value: '-2',
        },
        {
            label: '+1',
            value: '-1',
        },
        {
            label: '0',
            value: '0',
        },
        {
            label: '1',
            value: '1',
        },
        {
            label: '2',
            value: '2',
        },
        {
            label: '3',
            value: '3',
        },
        {
            label: '4',
            value: '4',
        },
        {
            label: '5',
            value: '5',
        },
        {
            label: '6',
            value: '6',
        },
        {
            label: '7',
            value: '7',
        },
        {
            label: '8',
            value: '8',
        },
        {
            label: '9',
            value: '9',
        },
        {
            label: '10',
            value: '10',
        },
        {
            label: '11',
            value: '11',
        },
        {
            label: '12',
            value: '12',
        },
        {
            label: '13',
            value: '13',
        },
        {
            label: '14',
            value: '14',
        }
      ]
    }
  }
})
</script>
<style lang="">
    
</style>
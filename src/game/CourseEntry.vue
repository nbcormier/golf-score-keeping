<template>
    <n-form
    :model="formValue"
    :rules="rules"
    ref="formRef">
        <n-form-item label="Course" path="courseId">
            <n-select size="large" v-model:value="formValue.courseId" :options="courseOptions" />
        </n-form-item>
    </n-form>
    <n-space justify="space-between">
      <router-link to="/">
          <n-button size="large">Cancel</n-button>
      </router-link>
      <n-space justify="space-around">
        <n-button size="large" @click="movePrevious">Back</n-button>
        <n-button size="large" type="primary" @click="handleValidateClick">Start Game</n-button>
      </n-space>
    </n-space>
</template>
<script>
import { defineComponent, ref } from 'vue'
import courses from '../data/courses.js';
import { useStore } from 'vuex'

export default defineComponent({
  emits: ['moveStep'],
  computed: {
    newGame() {
        return this.$store.state.newGame;
    }
  },
  setup(props, { emit }) {
    const store = useStore()
    const formRef = ref(null);
    const formValue = ref({
        courseId: null
    });
    const getCourseName = (id) => {
      for (let i = 0; i < courses.length; i++) {
          if (courses[i].id === id) {
              return courses[i];
          }
      }
      return null;
    };

    return {
      formRef,
      formValue,
      rules: {
        courseId: {
          required: true,
          message: 'Required',
          trigger: 'blur'
        },
      },
      courseOptions: courses.map(course => {return {label: course.name, value: course.id}}),
      movePrevious() {
        emit('moveStep');
      },
      handleValidateClick (e) {
        e.preventDefault();
        formRef.value.validate((errors) => {
          if (!errors) {
            const course = getCourseName(formValue.value.courseId);
            if (course) {
              store.commit('addCourse', course);
              store.commit('addNewGame');
            }
            emit('moveStep', true);
          }
        })
      }
    }
  }
})
</script>
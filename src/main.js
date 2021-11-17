import { createApp } from 'vue'
import {
  // create naive ui
  create,
  // component
  NButton,
  NEmpty,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NMessageProvider,
  NSelect,
  NSpace,
  NSteps,
  NStep,
  NGrid,
  NGridItem,
  NThing,
  NDivider,
  NRadioButton,
  NRadioGroup,
  NIcon
} from 'naive-ui'
import router from './router'
import store from './store'
import App from './App.vue'

const naive = create({
  components: [
      NButton,
      NEmpty,
      NForm,
      NFormItem,
      NInput,
      NInputNumber,
      NMessageProvider,
      NSelect,
      NSpace,
      NSteps,
      NStep,
      NGrid,
      NGridItem,
      NThing,
      NDivider,
      NRadioButton,
      NRadioGroup,
      NIcon
    ]
})

createApp(App)
    .use(router)
    .use(store)
    .use(naive)
    .mount('#app');
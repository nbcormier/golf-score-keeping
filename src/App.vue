<template>
  <n-message-provider>
    <n-grid :cols="1">
      <n-grid-item>
          <router-view></router-view>
      </n-grid-item>
    </n-grid>
  </n-message-provider>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  padding: 30px;
}
</style>

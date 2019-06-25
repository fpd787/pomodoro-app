<template>
  <div id="app">
    <CountDownForm></CountDownForm>
  </div>
</template>

<script>
import CountDownForm from './components/CountDownForm.vue'

export default {
  name: 'app',
  components: {
    CountDownForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

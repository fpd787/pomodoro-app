<template>
  <div class="form">
    <Tabs></Tabs>
    <CountDown></CountDown>
    <ul class="button-list">
      <li><StartButton></StartButton></li>
      <li><PauseButton></PauseButton></li>
      <li><ResetButton></ResetButton></li>
    </ul>
  </div>
</template>

<script>
import Tabs from './Tabs.vue'
import CountDown from './CountDown.vue'
import StartButton from './StartButton.vue'
import PauseButton from './PauseButton.vue'
import ResetButton from './ResetButton.vue'
export default {
  components: {
    Tabs,
    CountDown,
    StartButton,
    PauseButton,
    ResetButton
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding-inline-start: 0;
}
.form {
  background-color: #eef2f6;
  border-radius: 15px;
  padding: 0.5em;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%) translateY(-10%);
}
.button-list > li {
  display: inline-block;
  margin: 0 6px;
}
</style>
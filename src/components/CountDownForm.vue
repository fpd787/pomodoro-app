<template>
  <div class="form">
    <CountDown></CountDown>
    <ul class="button-list">
      <li><StartButton></StartButton></li>
      <li><PauseButton></PauseButton></li>
      <li><ResetButton></ResetButton></li>
    </ul>
  </div>
</template>

<script>
import CountDown from './CountDown.vue'
import StartButton from './StartButton.vue'
import PauseButton from './PauseButton.vue'
import ResetButton from './ResetButton.vue'
export default {
  components: {
    CountDown,
    StartButton,
    PauseButton,
    ResetButton
  }
}
</script>

<style lang="scss" scoped>
.form {
  background-color: #eef2f6;
  border-radius: 15px;
  padding: 0.5em;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%) translateY(-10%);
}
.button-list {
  padding-inline-start: 0;
  > li {
    display: inline-block;
    margin: 0 12px 0 0;
    &:last-child {
      margin: 0;
    }
  }
}
</style>
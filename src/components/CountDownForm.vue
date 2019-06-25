<template>
  <div>
    <CountDown></CountDown>
    <StartButton></StartButton>
    <PauseButton></PauseButton>
    <ResetButton></ResetButton>
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
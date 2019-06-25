<template>
  <button type="button" @click="pauseTimer()" :disabled="!this.$store.state.isTimerOn" class="pause">
    Pause
  </button>
</template>

<script>
export default {
  methods: {
    pauseTimer() {
      this.$store.commit('pause')
    }
  }
}
</script>

<style lang="scss" scoped>
.pause {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: .4s;

  &:hover {
    background: #67c5ff;
    color: white;
  }
}
</style>

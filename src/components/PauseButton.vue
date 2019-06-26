<template>
  <button
    type="button"
    @click="pauseTimer()"
    :disabled="!isTimerOn"
    :class="[{ active: !isTimerOn }, 'pause']"
  >
    Pause
  </button>
</template>

<script>
export default {
  computed: {
    isTimerOn() {
      return this.$store.state.isTimerOn
    }
  },
  methods: {
    pauseTimer() {
      this.$store.commit('pause')
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #ff9800;
$sub-color: #fff;

.pause {
  display: inline-block;
  width: 160px;
  padding: 0.8em;
  text-align: center;
  text-decoration: none;
  background-color: $main-color;
  color: $sub-color;
  border: solid 2px $main-color;
  border-radius: 3px;
  transition: .4s;
}
.active {
  background-color: $sub-color;
  color: $main-color;
}
</style>

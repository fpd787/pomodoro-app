<template>
  <button
    type="button"
    @click="startTimer()"
    :disabled="isTimerOn"
    :class="[{ active: isTimerOn }, 'start']"
  >
    Start
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
    startTimer() {
      this.$store.commit('start')
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #8bc34a;
$sub-color: #fff;

.start {
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
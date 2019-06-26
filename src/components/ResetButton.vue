<template>
  <button
    type="button"
    @click="resetTimer()"
    class="reset"
  >
    Reset
  </button>
</template>

<script>
export default {
  methods: {
    resetTimer() {
      this.$store.commit('reset')
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #ec407a;
$sub-color: #fff;

.reset {
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
</style>

<template>
  <p class="timer">{{ count }}</p>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.dateCounter
    }
  },
  watch: {
    count() {
      if (this.$store.state.count < 0) {
        this.$store.commit('reset')
        alert('Work is done!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.timer {
  font-size: 4em;
}
</style>
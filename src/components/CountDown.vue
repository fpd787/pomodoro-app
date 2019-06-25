<template>
  <p>{{ count }}</p>
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
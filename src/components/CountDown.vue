<template>
  <p>{{ count }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 1500, // 25分
      timer: null, // setInterval()に格納するオブジェクト
      isTimerOn: false // タイマーがONのとき(カウントダウンしているとき)にtrue
    }
  },
  methods: {
    start() {
      this.timer = setInterval(() => --this.count, 1000)
      this.isTimerOn = true
    },
    pause() {
      clearInterval(this.timer)
      this.isTimerOn = false
    },
    reset() {
      clearInterval(this.timer)
      this.count = 1500
      this.isTimerOn = false
    }
  }
}
</script>
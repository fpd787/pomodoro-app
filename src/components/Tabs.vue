<template>
  <div class="tabs">
    <input type="radio" name="tabs" @change="changeTab('pomodoro', 1500)" value="pomodoro" id="pomodoroTab" class="tab-input">
    <label for="pomodoroTab" :class="classPomodoro">Pomodoro</label>

    <input type="radio" name="tabs" @change="changeTab('shortBreak', 300)" value="shortBreak" id="shortBreakTab" class="tab-input">
    <label for="shortBreakTab" :class="classShortBreak">Short Break</label>

    <input type="radio" name="tabs" @change="changeTab('longBreak', 900)" value="longBreak" id="longBreakTab" class="tab-input">
    <label for="longBreakTab" :class="classLongBreak">Long Break</label>

    <div class="bottom-line"></div>
  </div>
</template>

<script>
export default {
  computed: {
    activeTab() {
      return this.$store.getters.activeTab
    },
    classPomodoro() {
      return {
        'tab-active': this.activeTab === 'pomodoro',
        'tab-not-active': this.activeTab !== 'pomodoro',
        'tab-label': true
      }
    },
    classShortBreak() {
      return {
        'tab-active': this.activeTab === 'shortBreak',
        'tab-not-active': this.activeTab !== 'shortBreak',
        'tab-label': true
      }
    },
    classLongBreak() {
      return {
        'tab-active': this.activeTab === 'longBreak',
        'tab-not-active': this.activeTab !== 'longBreak',
        'tab-label': true
      }
    }
  },
  methods: {
    changeTab (tab, counter) {
      this.$store.commit('changeTab', { tab: tab, counter: counter })
      this.$store.commit('reset')
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #56b4be;
$sub-color: #eee;

.tabs {
  overflow: hidden;
}
.tab-input {
  display: none;
}
.tab-label {
  display: inline-block;
  line-height: 40px;
  width: 160px;
  text-align: center;
  background-color: $sub-color;
  transition: 0.4s;
  border-radius: 10px 10px 0 0;
}
.tab-active {
  background-color: $main-color;
  color: #fff;
}
.tab-not-active:hover {
  background-color: #fff;
}
.bottom-line {
  border-top: 2px solid $main-color;
}
</style>
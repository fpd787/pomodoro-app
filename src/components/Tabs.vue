<template>
  <div class="tabs">
    <input type="radio" value="1" id="pomodoroTab" v-model="activeTabId" class="tab-input">
    <label for="pomodoroTab" :class="classPomodoro">Pomodoro</label>

    <input type="radio" value="2" id="shortBreakTab" v-model="activeTabId" class="tab-input" :disabled="true">
    <label for="shortBreakTab" :class="classShortBreak">Short Break</label>

    <input type="radio" value="3" id="longBreakTab" v-model="activeTabId" class="tab-input" :disabled="true">
    <label for="longBreakTab" :class="classLongBreak">Long Break</label>

    <div class="bottom-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTabId: '1'
    }
  },
  computed: {
    classPomodoro() {
      return {
        'tab-active': this.activeTabId === '1',
        'tab-not-active': this.activeTabId !== '1',
        'tab-label': true
      }
    },
    classShortBreak() {
      return {
        'tab-active': this.activeTabId === '2',
        'tab-not-active': this.activeTabId !== '2',
        'tab-label': true
      }
    },
    classLongBreak() {
      return {
        'tab-active': this.activeTabId === '3',
        'tab-not-active': this.activeTabId !== '3',
        'tab-label': true
      }
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
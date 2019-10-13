<template>
  <div class="tabs">
    <div v-for="tab in tabs" :key="tab.id" class="tab">
      <input
        type="radio"
        name="tabs"
        v-model="activeTab"
        @change="changeTab"
        :value="tab.value"
        :id="tab.value"
        class="tab-input"
      >
      <label :for="tab.value" :class="classActiveTab(tab.value)">{{ tab.value }}</label>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { id: 1, value: 'Pomodoro', maxCount: 1500 },
        { id: 2, value: 'ShortBreak', maxCount: 300 },
        { id: 3, value: 'LongBreak', maxCount: 900 }
      ],
      activeTab: this.$store.getters.activeTab
    }
  },
  computed: {
    maxCount() {
      const selectedTab = this.tabs.find((e) => e.value === this.activeTab)
      return selectedTab.maxCount
    }
  },
  methods: {
    classActiveTab(tabName) {
      return {
        'tab-active': this.activeTab === tabName,
        'tab-not-active': this.activeTab !== tabName,
        'tab-label': true
      }
    },
    changeTab () {
      this.$store.commit('changeTab', { activeTab: this.activeTab })
      this.$store.commit('setCount', { maxCount: this.maxCount })
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
.tab {
  display: inline-block;
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
<template>
  <a href="#" class="reset">
    <span>Reset</span>
  </a>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.reset {
  display: inline-block;
  font-weight: bold;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #fff;
  background: #ff7f7f;
  border-radius: 3px;
  transition: .4s;

  > span {
    border-bottom: solid 2px #fff;
    border-top: solid 2px #fff;
  }

  &:hover > span {
    padding: 0.1em 0;
  }
}
</style>

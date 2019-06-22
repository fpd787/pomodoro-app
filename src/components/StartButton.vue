<template>
  <a href="#" class="start">Start</a>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.start {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;

  &:active {
    -webkit-transform: translateY(.4s);
    transform: translateY(.4s);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    border-bottom: none;
  }
}
</style>
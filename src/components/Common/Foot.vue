<template>
  <div class="foot">
    <div class="container">
      <p class="foot-links">
        <a href="">条款</a> ·
        <a href="">隐私政策</a>
      </p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss" type="text/scss">
  .foot {
    border-top: rgba(0, 0, 0, .1) 1px solid;;
    width: 100%;
    bottom: -72px;
    left: 0;
    font-size: 13px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.54);
    white-space: nowrap;
    padding: 32px 0;
    &-links {
      text-align: center;
      a {
        color: rgba(0, 0, 0, 0.38);
        display: inline;
        &:hover {
          color: #039be5;
        }
      }
    }
  }
</style>

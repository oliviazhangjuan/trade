<template>
  <div class="financial_contain">
    <ul>
      <li>
        <Button type="success" long size="large">已投资金情况</Button>
      </li>
      <li>
        <Button type="info" long size="large">投资报表</Button>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped lang="scss" type="text/scss">
  .financial_contain{
    text-align: center;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 80%;
    li{
      margin:20px 0;
      .ivu-btn-large{
        padding:16px 15px 17px 15px;
      }
    }
  }
</style>

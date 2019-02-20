<template>
  <header class="head">
    <div class="container">
      <div class="row">
        <div class="col-xs-5">
          <a href="#"><img src="../../static/images/logo.png" alt="" /></a>
        </div>
        <div class="col-xs-7">
          <div class="ser-box">
            <!--<label for="txt-ser"></label>-->
            <input type="text" id="txt-ser" class="ser" name="txt-ser" v-model="keyword"/>
            <span v-on:click='seach()'></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      keyword: this.$route.query.keyword
    }
  },
  methods: {
    seach () {
      const keyword = this.keyword
      this.$router.push({// 核心语句
        path: '/booklist', // 跳转的路径
        query: { // 路由传参时push和query搭配使用 ，作用时传递参数
          keyword: keyword
        }
      })
    }
  }
}
</script>

<style>
</style>

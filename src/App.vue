<template>
  <div id="app">
    <!-- header-->
    <app_head></app_head>
    <!-- 路由加载页面 -->
    <div class="main">
      <router-view/>
    </div>
    <!-- footer-->
    <app_footer></app_footer>
  </div>
</template>

<script>
import axios from 'axios'
import appHead from './components/head.vue'
import appFooter from './components/footer.vue'

export default {
  name: 'App',
  data () {
    return {
      queryName: 'vue',
      repoUrl: ''
    }
  },
  components: {
    app_head: appHead,
    app_footer: appFooter
  },
  created () {
    // 使用vue-resource发送ajax请求
    // 也可以使用axios发送ajax请求
    var url = `https://api.github.com/search/repositories?q=${this.queryName}&s=stars`
    axios.get(url).then(
      response => {
        var result = response.data
        console.log(result)
      },
      response => {
        console.log('请求失败')
      }
    )
  }
}
</script>

<style>
</style>

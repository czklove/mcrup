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
  }
}
</script>

<style>
</style>

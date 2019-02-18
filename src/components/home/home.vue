<template>
  <div class="">
    <!-- 轮播图 -->
    <appbanner></appbanner>
    <!-- 新闻列表 -->
    <news></news>
    <!-- 小广告 -->
    <bannermin></bannermin>
    <!-- 招聘信息 -->
    <employ></employ>
  </div>
</template>

<script>
import appbanner from './banner'
import news from './news'
import bannermin from './bannermid'
import employ from './employ'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    appbanner: appbanner,
    news: news,
    bannermin: bannermin,
    employ: employ
  }
}
</script>

<style>
</style>

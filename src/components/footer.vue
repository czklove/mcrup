<template>
  <div class="footer">
    <ul class="foot-box clearfix">
      <router-link to="/home" class="home active" tag="li"><span>首页</span></router-link>
      <router-link to="/book" class="book" tag="li"><span>图书</span></router-link>
      <router-link to="/teacher" class="teacher" tag="li"><span>服务</span></router-link>
      <li class="more" @click="showmore=!showmore">
        <span>更多</span>
        <div class="more-con" v-show="showmore">
          <a href="#">课程中心</a>
          <a href="#">营销中心</a>
          <a href="#">培训中心</a>
          <a href="#" class="no-bord-btm">关于我们</a>
        </div>
      </li>
      <router-link to="/percenter" class="per" tag="li"><span>个人中心</span></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      showmore: false
    }
  }
}
</script>

<style>
.footer{position: fixed; bottom: 0px; width: 100%}
</style>

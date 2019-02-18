<template>
  <div class="footer">
    <ul class="foot-box clearfix">
      <li class="home"><router-link to="/home"><span>首页</span></router-link></li>
      <li class="book"><router-link to="/book"><span>图书</span></router-link></li>
      <li class="teacher"><router-link to="/teacher"><span>服务</span></router-link></li>
      <li class="more" @click="showmore=!showmore">
        <span>更多</span>
        <div class="more-con" v-show="showmore">
          <a href="#">课程中心</a>
          <a href="#">营销中心</a>
          <a href="#">培训中心</a>
          <a href="#" class="no-bord-btm">关于我们</a>
        </div>
      </li>
      <li class="per"><span><router-link to="/percenter">个人中心</router-link></span></li>
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

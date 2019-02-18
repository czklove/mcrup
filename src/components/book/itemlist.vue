<template>
  <div class="book-exp">
    <div class="news-title">
      <div class="container">
        <div class="row">
          <div class="col-xs-12"><h2>{{mutilte}}</h2></div>
        </div>
      </div>
    </div>
    <div class="book-con">
      <div class="container">
        <div class="row">
          <div class="col-xs-4" v-for="(item,key) in list" :key="key">
            <a href="#"><img :src="item.src" alt=""/><span>{{item.name}}</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'mutilte'],
  name: '',
  data () {
    return {

    }
  }
}
</script>

<style>
.book-exp{background: #ffffff;margin-bottom: 12px;}
.news-title{border-bottom: 1px solid #dddddd;padding: 10px 0;}
.news-title h2{color: #3c3c3c;font-size: 20px;border-left: 5px solid #ae0e16;padding-left:10px;line-height: 20px;font-family:"PingFangSC-Medium";}
.book-con{padding: 12px 0;}
.book-con a span{margin-top: 5px;}
.book-con a img{border-radius: 3px;}
</style>

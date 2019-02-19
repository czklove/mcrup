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
            <a href="#"><img :src="item.ImgUrl" alt=""/><span>{{item.Title}}</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['listtype', 'mutilte'],
  name: '',
  data () {
    return {
      list: []
    }
  },
  created () {
    // 使用vue-resource发送ajax请求
    // 也可以使用axios发送ajax请求
    const postdata = {flag: this.listtype, size: 3}
    axios.post('/api/Book/BookExpress', postdata).then(
      response => {
        var result = response.data
        this.list = result.model
      },
      response => {
        console.log('请求失败')
      }
    )
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

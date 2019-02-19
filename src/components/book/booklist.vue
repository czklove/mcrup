<!-- 图书列表页 -->
<template>
  <div class="news news-body content">
        <div class="news-title">
            <div class="container">
                <div class="row" style="width: 375px;">
                    <div class="col-xs-12" id="changshow"><h2 class="active"><span style="float:right" id="sjcount">共查询到<strong style="color:#bf4250;">27477</strong>条数据</span></h2></div>
                </div>
            </div>
        </div>
        <div class="container">
            <ul id="booklist">
                <li v-for="(item,index) in list" :key="index">
                    <div class="row" style="width: 375px;">
                        <div class="col-xs-4" style="line-height:162px">
                            <a :href="'/Book/Detail?doi='+item.ID" class="news-img" style="width:100%;height:135px"><img :src="item.ImgUrl" style="width:95px"></a>
                        </div>
                        <div class="col-xs-8">
                            <div class="news-text">
                                <a :href="'/Book/Detail?doi='+item.ID" :data-doi="item.ID">{{item.Name}}</a>
                                <p>{{item.Digest}}</p>
                                <p><span>{{item.Author}}</span><br><span>{{item.Date}}</span></p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['keyword'],
  data () {
    return {list: []
    }
  },
  created () {
    // 使用vue-resource发送ajax请求
    // 也可以使用axios发送ajax请求
    const postdata = {Keywords: this.keyword, size: 10, Qualifications: '1.'}
    axios.post('/api/Book/BindCourseList', postdata).then(
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
/*news*/
.news{background: #ffffff;min-height: 20px;margin-bottom: 12px;}
.news-title{border-bottom: 1px solid #dddddd;padding: 10px 0;}
.news-title h2{color: #3c3c3c;font-size: 20px;border-left: 5px solid #ae0e16;padding-left:10px;line-height: 20px;font-family:"PingFangSC-Medium";}
.news-tabs{margin-left: -62px;text-align: right;}
.news-tabs a{background: #a7a7a7;margin-left: 2px;color: #ffffff;padding: 1px 3px;}
.news-tabs a.active{background: #ae0e16;}
.news-body ul li{padding: 15px 0;border-bottom: 1px solid #dddddd;position: relative;display: -webkit-box;}
.news-body ul li img{border-radius: 3px;-webkit-border-radius: 3px;-moz-border-radius: 3px;height:100%;width:100%;}
#news .news-img {width:100%;}
#newbook li img {width:100%;}
.news-body .news-text a{font-size: 14px;margin-left: -15px;display: -webkit-box;-webkit-box-orient: vertical;max-height:4rem;line-height:2rem;overflow: hidden;}
.news-body .news-text a:hover{color: #ae0e16;}
.news-body p{font-size: 12px;color: #b0b0b0;display: -webkit-box;margin-left: -15px;max-height: 6.5rem;overflow: hidden;line-height:1.6rem;}
.news-body p span{color: #555555;margin-right: 10px;}
</style>

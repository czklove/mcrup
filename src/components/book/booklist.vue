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
          <pullto :top-load-method="refresh" :bottom-load-method="butload" @top-state-change="topstateChange">
             <template slot="top-block" slot-scope="props">
              <div class="top-load-wrapper">
                <svg class="icon"
                    :class="{
                        'icon-arrow': props.state === 'trigger',
                        'icon-loading': props.state === 'loading'
                    }"
                    aria-hidden="true">
                  <use :xlink:href="iconLink"></use>
                </svg>
                {{ props.stateText }}
              </div>
            </template>
            <ul id="booklist">
                <li v-for="(item,index) in list" :key="index">
                    <div class="row" style="width: 375px;">
                        <div class="col-xs-4" style="line-height:162px">
                            <a :href="'/Book/Detail?doi='+item.ID" class="news-img" style="width:100%;height:135px"><img :src="item.ImgUrl" style="width:95px"></a>
                        </div>
                        <div class="col-xs-8">
                            <div class="news-text">
                                <a :href="'/Book/Detail?doi='+item.ID" :data-doi="item.ID" v-html="item.Name"></a>
                                <p>{{item.Digest}}</p>
                                <p><span>{{item.Author}}</span><br><span>{{item.Date}}</span></p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
          </pullto>
        </div>
  </div>
</template>

<script>
import pullto from 'vue-pull-to'
import Vue from 'vue'
import axios from 'axios'
Vue.use(pullto)
export default {
  data () {
    return {
      list: [],
      page: 1,
      iconLink: ''
    }
  },
  components: {
    pullto
  },
  created () {
    loadResource(this)
  },
  mounted () {
  },
  methods: {
    refresh (loaded) {
      this.page = 1
      loadResource(this, 1)
      loaded('done')
    },
    butload (loaded) {
      this.page += 1
      loadResource(this, 2)
      loaded('done')
    },
    topstateChange (state) {
      if (state === 'pull' || state === 'trigger') {
        this.iconLink = '#icon-arrow-bottom'
      } else if (state === 'loading') {
        this.iconLink = '#icon-loading'
      } else if (state === 'loaded-done') {
        this.iconLink = '#icon-finish'
      }
    }
  }
}
// type为1 下拉更新，type为2 下拉加载
function loadResource (_self, type) {
  // 使用vue-resource发送ajax请求
  // 也可以使用axios发送ajax请求
  // console.log(_self.$route.query.keyword)
  var keyword = _self.$route.query.keyword
  if (!keyword) {
    keyword = ''
  }
  const postdata = {Keywords: _self.$route.query.keyword, size: 10, Qualifications: '1.', page: _self.page}
  axios.post('/api/Book/BindCourseList', postdata).then(
    response => {
      var result = response.data
      if (type !== 1) {
        console.log(result.model)
        _self.list = _self.list.concat(result.model)
      } else {
        _self.list = result.model
      }
    },
    response => {
      console.log('请求失败')
    }
  )
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
.news-body .news-text a{font-size: 14px;margin-left: -15px;display: -webkit-box;-webkit-box-orient: vertical;max-height:4rem;line-height:1.5rem;overflow: hidden;}
.news-body .news-text a:hover{color: #ae0e16;}
.news-body p{font-size: 12px;color: #b0b0b0;margin-left: -15px;max-height: 6.5rem;overflow: hidden;line-height:1.6rem;}
.news-body p span{color: #555555;margin-right: 10px;}.js-mdropload-up{width: 96%;}.bottom-load-wrapper {line-height: 50px;text-align: center;}
.top-load-wrapper {line-height: 50px;text-align: center;}
.icon {width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;}
.icon-arrow {transition: .2s;transform: rotate(180deg);}
.icon-loading {transform: rotate(0deg);animation-name: loading;animation-duration: 3s;animation-iteration-count: infinite;animation-direction: alternate;}
@keyframes loading{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
.vue-pull-to-wrapper{overflow: hidden;}
</style>

<template>
  <div class="event">
    <div class="event-title">
      <div class="container">
        <div class="row">
          <div class="col-xs-4"><i></i></div>
          <div class="col-xs-8"><h2>新闻中心</h2></div>
        </div>
      </div>
    </div>
    <div class="event-con">
      <newitem :newlist="newlist"></newitem>
    </div>
  </div>
</template>

<script>
import newitem from './newitem'

export default {
  name: '',
  data () {
    return {
      newlist: [
        {name: 'aaaa', id: '1'},
        {name: 'aaaa', id: '2'},
        {name: 'aaaa', id: '3'},
        {name: 'aaaa', id: '4'},
        {name: 'aaaa', id: '4'},
        {name: 'aaaa', id: '4'},
        {name: 'aaaa', id: '4'},
        {name: 'aaaa', id: '4'},
        {name: 'aaaa', id: '4'}
      ]
    }
  },
  components: {
    newitem
  }
}
</script>

<style>
.event-title{width: 100%;height: 50px;background: url(/static/images/rect-grade.png) no-repeat center;}
.event-title h2{font-size: 20px;color: #ffffff;line-height:50px;padding-left: 25px;background: url(/static/images/news-icon.png) no-repeat left center;background-size: auto 40%;font-family:"PingFangSC-Medium";}
.event-title i{display:inline-block;width: 10px;height: 19px;background: url(/static/images/icon-back.png) no-repeat;background-size: 100% auto;margin-top: 15px;}
.event{background: #ffffff;margin-bottom: 20px;}
</style>

<template>
  <div class="book">
    <div class="books">
      <div class="books-title">
        <div class="container">
          <div class="row">
            <div class="col-xs-4"><i></i></div>
            <div class="col-xs-8"><h2>图书中心</h2></div>
          </div>
        </div>
      </div>
      <bookclassfic></bookclassfic>
      <!--新书速递 -->
      <itemlist :listtype="newtype" :mutilte="'新书速递'"></itemlist>
      <!-- 重磅力作-->
      <itemlist :listtype="zbtype" :mutilte="'重磅力作'"></itemlist>
    </div>
    <!-- 专题推荐-->
    <bookrec></bookrec>
  </div>
</template>

<script>
import bookrec from './bookrec.vue'
import itemlist from './itemlist.vue'
import bookclassfic from './bookclassfic.vue'

export default {
  name: '',
  data () {
    return {
      newtype: 18,
      zbtype: 0
    }
  },
  components: {
    bookrec,
    itemlist,
    bookclassfic
  }
}
</script>

<style>
.books{margin-bottom: 20px;}
.books-title{width: 100%;height: 50px;background: url(/static/images/rect-grade.png) no-repeat center;}
.books-title h2{font-size: 20px;color: #ffffff;line-height:48px;padding-left: 30px;background: url(/static/images/book-icon.png) no-repeat left center;background-size: auto 40%;font-family:"PingFangSC-Medium";}
.books-title i{display:inline-block;width: 10px;height: 19px;background: url(/static/images/icon-back.png) no-repeat;background-size: 100% auto;margin-top: 15px;}
.books-list ul{float:left;padding: 0 10px;border-right: 1px solid #dddddd;width: 33%;}
.books-list ul li{line-height: 25px;}
.arrow-icon{position: absolute;top:40px;left:40%;width: 21px;height: 10px;background:  url(/static/images/arrow-top-icon.png) no-repeat;background-size:21px 10px;z-index: 11;}
</style>

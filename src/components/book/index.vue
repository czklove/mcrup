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
      <itemlist :list="newlist" :mutilte="'新书速递'"></itemlist>
      <!-- 重磅力作-->
      <itemlist :list="zblist" :mutilte="'重磅力作'"></itemlist>
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
      newlist: [
        {id: 1, name: '管理会计学', src: '../../../static/images/book-exp-1.png'},
        {id: 2, name: '克鲁格曼经济学原理（经济科学译库）', src: '../../../static/images/book-exp-2.png'},
        {id: 3, name: '中国法制史（第四版）', src: '../../../static/images/book-exp-3.png'}
      ],
      zblist: [
        {id: 1, name: '亚里士多德全集', src: '../../../static/images/book-exp-4.png'},
        {id: 2, name: '宏观经济学（第十二版）', src: '../../../static/images/book-exp-5.png'},
        {id: 3, name: '佛学与儒学（修订版）', src: '../../../static/images/book-exp-6.png'}
      ]
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

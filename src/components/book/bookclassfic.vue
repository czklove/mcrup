<template>
  <ul class="books-tabs clearfix">
    <li>
      <a href="#"><span>一般图书</span></a>
      <div class="arrow-icon"></div>
      <div class="books-list clearfix" v-show="isshow">
        <ul>
          <li>人文社科</li>
          <li>经管</li>
          <li>科技</li>
          <li>小说</li>
        </ul>
        <ul>
          <li>人文社科</li>
          <li>经管</li>
          <li>科技</li>
          <li>小说</li>
        </ul>
        <ul class="no-bord-rt">
          <li>人文社科</li>
          <li>经管</li>
          <li>科技</li>
          <li>小说</li>
        </ul>
      </div>
    </li>
    <li><a href="#"><span>教材</span></a></li>
    <li><a href="#"><span>学术专著</span></a></li>
    <li><a href="#"><span>考试</span></a></li>
  </ul>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isshow: false
    }
  }
}
</script>

<style>
.books-tabs{margin-right: -1px;margin-bottom: 12px;background: #ffffff;}
.books-tabs>li{float: left;width: 25%;height:40px;line-height:40px;text-align: center;position: relative;}
.books-tabs>li a{font-size: 16px;border-right: 1px solid #dddddd;width: 100%;line-height: 20px;}
.books-tabs>li a span{border-bottom: 2px solid transparent;line-height: 38px;}
.books-list{position: absolute;left:10px;top:49px;min-width:270px;padding: 10px 0;background: #f7f7f7;border: 1px solid #dddddd;border-radius: 5px;box-shadow: 2px 2px 5px rgba(0,0,0,0.1);text-align: left;z-index: 10;}
.books-tabs>li>a.active{color: #ae0e16;}
.books-tabs>li>a.active span{border-color:#ae0e16;}
</style>

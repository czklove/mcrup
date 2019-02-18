<template>
    <!-- 专题推荐-->
    <div class="news rec">
      <h2>专题推荐</h2>
      <div class="container">
        <div class="row">
          <div class="col-xs-3 rec-info"><a href="#"><img src="../../../static/images/rec-icon-1.png" alt=""/></a><span>每日新书单</span></div>
          <div class="col-xs-3 rec-info"><a href="#"><img src="../../../static/images/rec-icon-2.png" alt=""/></a><span>创业书单</span></div>
          <div class="col-xs-3 rec-info"><a href="#"><img src="../../../static/images/rec-icon-3.png" alt=""/></a><span>诗词</span></div>
          <div class="col-xs-3 rec-info"><a href="#"><img src="../../../static/images/rec-icon-4.png" alt=""/></a><span>微店动态</span></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<style>
/*专题推荐*/
.col-xs-8,.row{display: -webkit-box;}
.news{background: #ffffff;min-height: 20px;margin-bottom: 12px;}
.rec h2{font-size: 18px;text-align: center;line-height: 50px;border-bottom: 1px solid #dddddd;font-family:"PingFangSC-Medium";}
.rec .rec-info{border-left: 1px solid #dddddd;padding:10px;text-align: center;border-bottom: 1px solid #dddddd;}
.rec .rec-info:first-child{margin-left: -1px;background: url(/static/images/NEW.png) no-repeat top right;background-size: 30px 30px;}
.rec .rec-info:hover{background: #f5f5f5;}
.rec .rec-info:first-child:hover{background:#f5f5f5 url(/static/images/NEW.png) no-repeat top right;background-size: 30px 30px;}
.rec .rec-info img{width: 70%;}
.rec-info span{color: #666666;margin-top: 8px;display: block;}
</style>

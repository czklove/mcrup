<template>
  <div class="news employ">
    <div class="news-title">
      <div class="container">
        <div class="row">
          <div class="col-xs-12"><h2>招聘信息</h2></div>
        </div>
      </div>
    </div>
    <div class="news-body">
      <div class="container">
        <div class="employ-con">
          <div class="row emp-info-1">
            <div class="col-xs-6"><a href="#">测试：执行主编61</a></div>
            <div class="col-xs-6"><strong>【招聘人数99】</strong></div>
          </div>
          <div class="row emp-info-2">
            <div class="col-xs-6"><div class="require"><a href="#" class="add">北京</a><a href="#" class="year">3年以上</a><a href="#" class="edu">本科</a></div></div>
            <div class="col-xs-6"><span>2017-06-16</span></div>
          </div>
        </div>
        <div class="employ-con">
          <div class="row emp-info-1">
            <div class="col-xs-6"><a href="#">测试：执行主编61</a></div>
            <div class="col-xs-6"><strong>【招聘人数99】</strong></div>
          </div>
          <div class="row emp-info-2">
            <div class="col-xs-6"><div class="require"><a href="#" class="add">北京</a><a href="#" class="year">3年以上</a><a href="#" class="edu">本科</a></div></div>
            <div class="col-xs-6"><span>2017-06-16</span></div>
          </div>
        </div>
        <div class="employ-con">
          <div class="row emp-info-1">
            <div class="col-xs-6"><a href="#">测试：执行主编61</a></div>
            <div class="col-xs-6"><strong>【招聘人数99】</strong></div>
          </div>
          <div class="row emp-info-2">
            <div class="col-xs-6"><div class="require"><a href="#" class="add">北京</a><a href="#" class="year">3年以上</a><a href="#" class="edu">本科</a></div></div>
            <div class="col-xs-6"><span>2017-06-16</span></div>
          </div>
        </div>
      </div>
      <a href="#" class="look-more">查看更多>></a>
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
.employ .news-body a{font-size: 16px;text-align: left;}
.employ .news-body strong{width: 100%;text-align: right;color: #ccb18e;font-weight: normal;display: inline-block;}
.employ-con{padding: 10px 0;border-bottom: 1px solid #dddddd;}
.employ .require{margin-right: -68px;}
.employ .require a{font-size: 14px;color: #999999;padding-left: 20px;margin-right: 10px;background: url(/static/images/employ-icon-1.png) no-repeat left center;background-size:auto 70%;}
.employ .require .year{background:url(/static/images/employ-icon-2.png)  no-repeat left center;background-size:auto 70%;}
.employ .require .edu{background:url(/static/images/employ-icon-3.png)  no-repeat left center;background-size:auto 70%;}
.employ span{font-size: 14px;color: #999999;width: 100%;text-align: right;}
.emp-info-1{margin-bottom: 10px;}
</style>

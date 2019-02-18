<template>
  <div class="news">
    <div class="news-title">
      <div class="container">
        <div class="row">
          <div class="col-xs-6">
            <h2>新闻</h2>
          </div>
          <div class="col-xs-6">
            <div class="news-tabs"><a href="#" class="active">新闻动态</a><a href="#">媒体聚焦</a><a href="#">海外合作</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="news-body">
      <div class="container">
        <ul>
          <li>
            <div class="row">
              <div class="col-xs-4">
                <a href="#" class="news-img"><img src="images/NewsPic-1.png" alt=""/></a>
              </div>
              <div class="col-xs-8">
                <div class="news-text">
                  <a href="#">中国法律文化走出去——王利明教授《合同法》、《物权法》英文版发布会</a>
                  <p>2017-09-14</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="row">
              <div class="col-xs-4">
                <a href="#" class="news-img"><img src="images/NewsPic-2.png" alt=""/></a>
              </div>
              <div class="col-xs-8">
                <div class="news-text">
                  <a href="#">“一带一路”学术出版联盟在京隆重成立，29个国家和地区和92家机构加盟</a>
                  <p>2017-09-14</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="row">
              <div class="col-xs-4">
                <a href="#" class="news-img"><img src="images/NewsPic-3.png" alt=""/></a>
              </div>
              <div class="col-xs-8">
                <div class="news-text">
                  <a href="#">中国特色社会主义理论研究系列图书英文版发布会在京举行</a>
                  <p>2017-09-14</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="row">
              <div class="col-xs-4">
                <a href="#" class="news-img"><img src="images/NewsPic-4.png" alt=""/></a>
              </div>
              <div class="col-xs-8">
                <div class="news-text">
                  <a href="#">我校教师吴静钰出征里约奥运会 剑指奥运三连发东方闪电冠</a>
                  <p>2017-09-14</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="row">
              <div class="col-xs-4">
                <a href="#" class="news-img"><img src="images/NewsPic-5.png" alt=""/></a>
              </div>
              <div class="col-xs-8">
                <div class="news-text">
                  <a href="#">《中国经济2040》新书发布会暨“全球变局与中国经济”研讨会在沪举行</a>
                  <p>2017-09-14</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <router-link to="/newlist" class="look-more">查看更多>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {

    }
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
.news-body ul li img{border-radius: 3px;-webkit-border-radius: 3px;-moz-border-radius: 3px;}
.news-body .news-text a{font-size: 14px;margin-left: -15px;display: -webkit-box;-webkit-box-orient: vertical;height: 38px;overflow: hidden;}
.news-body .news-text a:hover{color: #ae0e16;}
.news-body p{font-size: 12px;color: #b0b0b0;display: -webkit-box;margin-left: -15px;max-height: 68px;overflow: hidden;}
.news-body p span{color: #555555;margin-right: 10px;}
.news-text{display: -webkit-box;-webkit-box-orient: vertical;-webkit-box-flex:1;-webkit-box-pack: justify;}
.col-xs-8,.row{display: -webkit-box;}
</style>

<template>
  <div class="container">
    <div class="event-list" v-for="(item,index) in newlist" :key="index">
      <a href="#">
        <div class="row">
          <div class="col-xs-4"><img :src="'../../../static/images/NewsPic-'+item.id+'.png'" alt=""/></div>
          <div class="col-xs-8">
            <div class="event-text">
              <h3>中国法律文化走出去——王利明教授《合同法》、《物权法》英文版发布会</h3>
              <p><strong>新闻动态</strong><span class="fr">2017-10-10</span></p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['newlist'],
  name: '',
  data () {
    return {
    }
  }
}
</script>

<style>
/*.event-list{margin-left: 4%;}*/
.event-list a{padding: 15px 0;display: -webkit-box;border-bottom: 1px solid #dddddd;}
.event-list h3:hover{color: #ae0e16;}
.row,.col-xs-8,.col-xs-4{display: -webkit-box;}
.event-text{margin-left: -15px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-box-flex: 1;-webkit-box-pack: justify;}
.event-text h3{font-size: 15px;height: 32px;overflow: hidden;}
.event-text p{font-size: 14px;color: #ccb18e;}
.event-text p strong{font-weight:normal;background: #f5efe8;border-radius: 10px;padding: 0 5px;}
.event-text p span{color: #b0b0b0;}
.event-list img{border-radius: 3px;-webkit-border-radius: 3px;-moz-border-radius: 3px;}
.event-odd{background: #f1f1f1;}
.event-odd .event-list a{background: url(/static/images/dot-yellow.png) no-repeat left center;background-size:8% auto; }
.look-more{font-size: 16px;color: #ccb18e;display: block;text-align: center;line-height: 50px;}
</style>

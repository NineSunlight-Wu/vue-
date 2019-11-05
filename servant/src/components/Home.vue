<template>
<div class="home">
  <router-link exact to="/"><img src="./../assets/logo.png" alt="" class="home-topimg1"></router-link>
    <router-link exact to="/"><img src="./../assets/更多.png" alt="" class="home-topimg2"></router-link>
  <template>
    <mt-swipe :auto="4000" >
      <mt-swipe-item v-for="item of list"><img :src="item" alt=""></mt-swipe-item>
    </mt-swipe>
  </template>
    <div class="home-milled clearfix">
      <router-link exact to="/"><img src="./../assets/1.png" alt="">面授课程</router-link>
      <router-link exact to="/"><img src="./../assets/2.png" alt="">网校课程</router-link>
      <router-link exact to="/"><img src="./../assets/3.png" alt="">图书材料</router-link>
      <router-link exact to="/"><img src="./../assets/4.png" alt="">在线讲座</router-link>
      <router-link exact to="/"><img src="./../assets/5.png" alt="">各校地区</router-link>
    </div>
  <div class="home-zxhd">
    <img src="./../assets/zxhd.png" alt="" class="home-zximg1">
    <p>2017甘肃乡镇公务员考试笔试备考免费讲座</p>
    <h4>陕西乡镇公务员考试模考活动</h4>
    <img src="./../assets/dbx.png" alt="" class="home-zximg2">
  </div>
  <div class="home-bk">
    <img src="./../assets/tt.png" alt="" class="home-bkimg1">
  <div class="home-bktop" >
    <h3>乡镇公务员</h3>
    <el-select v-model="value" placeholder="选择报考省份" style="width: 100px;border: 1px solid #ccc;border-radius: 5px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
    <router-link  to="/last" class="home-bkimg2"><img src="./../assets/right.png" alt=""></router-link>
    <div class="home-sj">
      <div v-for="(item, $index) in arr" :key="$index" :page="page">
        <!-- Hacker News item loop -->
        <ul>
          <li>{{item.title}}</li>
        </ul>
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </div>
  <Head/>
</div>
</template>

<script>
    import axios from 'axios';
    import InfiniteLoading from 'vue-infinite-loading';
    const api = './../../static/txt.json';
    import Head from '../components/Head'
    import lbt1 from './../assets/lbt1.png'
    import lbt2 from './../assets/lbt2.png'
    import lbt3 from './../assets/lbt3.png'
    import lbt4 from './../assets/lbt4.png'
    export default {
        components:{Head,InfiniteLoading},
        name: "Home",
        data(){
            return{
                list:[lbt1,lbt2,lbt3,lbt4],
                page: 1,
                arr:[],
                options: [{
                    value: '选项1',
                    label: '河南'
                }, {
                    value: '选项2',
                    label: '河南'
                }, {
                    value: '选项3',
                    label: '河南'
                }, {
                    value: '选项4',
                    label: '河南'
                }, {
                    value: '选项5',
                    label: '河南'
                }],
                value: '',

            }
        },
        methods: {
            infiniteHandler($state) {
                axios.get(api, {
                    params: {
                        page: this.page,
                    },
                }).then(({ data }) => {
                    if (data.hits.length) {
                        this.page += 1;
                        this.arr.push(...data.hits);
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                });
            },
        },
    }
</script>

<style scoped>
  .home{padding-top: 90px}
  .home-topimg1{position: fixed;z-index: 111;top: 25px;left:30px;width: 320px;}
  .home-topimg2{position: fixed;z-index: 111;right: 30px;top: 47px;width: 50px}
  .clearfix:before,
  .clearfix:after {display: table;content: "";}
  .clearfix:after {clear: both}
  .mint-swipe{height: 300px}
  .mint-swipe img{width: 100%;height: 100%}
  .home-milled{width: 100%;border-top: 1px solid #ccc;padding: 30px 0 0 0;margin-bottom: 20px}
  .home-milled a{float: left;width: 20%;text-align: center; }
  .home-milled a img{margin: 0 auto 30px;width: 100px;}
  .home-zxhd{padding:40px 100px 35px 170px;position: relative}
  .home-zxhd p{margin-bottom: 20px}
  .home-zxhd .home-zximg1{width: 90px;position: absolute;left: 30px}
  .home-zxhd .home-zximg2{width: 70px;position: absolute;right: 0;top: 0}
  .home-bk{padding: 15px 30px 20px;position: relative}
  .home-bkimg1{position: absolute;left: 30px;width: 60px}
  .home-bkimg2{position: absolute;right: 30px;top:30px;background: none;border: none}
  .home-bkimg2 img{width: 10px;}
  .home-bk h3{float: left;font-weight: 600;margin-right: 30px;font-size: 30px;padding-left:  108px}
  .home-bktop{padding-bottom: 20px;border-bottom: 1px solid #ccc}
  .home-sj ul li{margin-top: 30px;list-style:circle;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}
</style>

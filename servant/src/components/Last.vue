<template>
    <div class="last">
      <div class="last-top">
        <el-button type="text" @click="goBack"><img src="./../assets/fan.png" alt=""></el-button>
        <span class="last-topsn">考试资讯</span>
        <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">全国<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">北京</el-dropdown-item>
            <el-dropdown-item command="b">郑州</el-dropdown-item>
            <el-dropdown-item command="c">上海</el-dropdown-item>
            <el-dropdown-item command="d" disabled>深圳</el-dropdown-item>
            <el-dropdown-item command="e" divided>广州</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
       <p class="top-p">当前是全国考试公告列表，点击全国查看具体省份</p>
      <template>
        <ul class="oul">
          <li v-for="(item,index) of list" @click="num = index" :class="{oa:num ==index}">
            <router-link to="">{{item}}</router-link>
          </li>
        </ul>
        <div class="zd">
          <img src="./../assets/zd.png" alt="" class="oul-zdimg">
          <h2>2017山东乡镇公务员考试公告</h2>
          <router-link to="" class="oul-btn">考试公告</router-link>
        </div>
      </template>
      <LastChild :e="num"/>
      <Head/>
    </div>
</template>

<script>
    import Head from '../components/Head'
    import InfiniteLoading from 'vue-infinite-loading';
    import LastChild from "./LastChild";
    export default {
        components:{Head,InfiniteLoading,LastChild},
        name: "Last",
        data() {
            return {
                selected: '1',
                list:['公告大纲','考试新闻','报考指导'],
                num:0
            };
        },
        methods: {
            handleCommand(command) {
                this.$message('click on item ' + command);
            },
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
  .last{padding-top: 90px}
  .last-top{display: block;width: 100%;height: 90px;position: fixed;top: 0;z-index: 2000;line-height: 90px;}
  .last-top button{position: absolute;top: 25px;left: 30px}
  .last-top button img {width: 13px}
  .last-topsn{display: block;text-align: center;font-size: 32px;font-weight: 600;color: #fff}
  .el-dropdown{position: absolute;top:5px;right: 30px}
  .el-dropdown-link {cursor: pointer;color: #fff;font-size: 30px}
  .el-icon-arrow-down {font-size: 12px;}
  .top-p{background: #ccc;text-align: center;color: red;height: 35px;line-height: 35px}
  .oa{border-bottom:3px solid rgb(22, 204, 175);font-weight: 600 }
  .oul{border-bottom: 1px solid rgb(239, 239, 239)}
  .oul .oa a{color:rgb(22, 204, 175);}
  .oul{padding: 20px 30px 0;display: flex}
  .oul li {float: left;flex: 1;font-weight: 600;font-size: 30px;padding-bottom: 25px;}
  .oul li a{color:rgb(136, 136, 136);display: inline-block;text-align: center;width: 100%}
  .zd{height: 110px;padding-left:90px;font-weight: 400;font-size: 22px;position: relative;}
  .zd h2{padding-top: 45px}
  .oul-zdimg{width: 50px;position: absolute;left: 30px;top: 50px}
  .oul-btn{position: absolute;right: 40px;top: 40px;background: none;border: 2px solid rgb(22, 204, 175);height: 50px;width: 160px;border-radius: 10px;
  font-weight: 600;color:rgb(22, 204, 175);text-align: center;line-height: 50px }
  .arr-pbox span{display: block}
</style>

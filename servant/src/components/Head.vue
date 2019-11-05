<template>
  <div>
    <div class="headTop">
    </div>
    <div class="head">
      <router-link exact to="/"><img src="./../assets/b1.png" alt="">在线咨询</router-link>
      <router-link exact to="/glwx"><img src="./../assets/b2.png" alt="">官方微信</router-link>
      <router-link exact to="/kcfd"><img src="./../assets/b3.png" alt="">课程辅导</router-link>
      <router-link exact to="/jlq"><img src="./../assets/b4.png" alt="">交流群</router-link>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Head",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
  .headTop{position: fixed;top:0;width:100%;height: 90px;background: url("../assets/云1.png") no-repeat;background-size: 100%;}
.head{display: flex;position: fixed;bottom: 0;width: 100%;border-top: 1px solid #ccc;padding: 20px 0 0 0;background: #ffffff}
.head a{float: left;width: 25%;text-align: center; }
.head a img{margin: 0 auto 20px;width: 40px;}
</style>

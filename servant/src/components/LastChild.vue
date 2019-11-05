<template>
  <div class="lastChild">
    <ul>
    <li v-for="item in arr[e]"  >
      <router-link to="" v-text="item"></router-link>
      <router-link  to="" class="home-bkimg2"><img src="./../assets/right.png" alt=""></router-link>
    </li>
    </ul>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';
    export default {
        components:{InfiniteLoading},
        name: "LastChild",
        props:['e'],
        data(){
            return{
                arr:[
                    ['2017年福建选调生考试公告，19日报名',
                        '2017年福建选调生考试公告，报名31日考试',
                        '2017年广发银行杭州分行校园招聘面试通知',
                        '2017年福建选调生考试公告，19日报名',
                        '2017年福建选调生考试公告，19日报名',
                        '2017年福建选调生考试公告，19日报名',
                        '2017年福建选调生考试公告，报名31日考试',
                        '2017年广发银行杭州分行校园招聘面试通知',
                        '2017年福建选调生考试公告，19日报名',],
                    ['福建'],
                    ['杭州']
                ],


            }
        },
        methods: {
            infiniteHandler($state) {
                setTimeout(() => {
                    const temp = [
                        ['2017年福建选调生考试公告，19日报名',
                        '2017年福建选调生考试公告，报名31日考试',
                        '2017年广发银行杭州分行校园招聘面试通知',
                        '2017年福建选调生考试公告，19日报名',
                        '2017年福建选调生考试公告，19日报名',
                        '2017年福建选调生考试公告，19日报名',
                        '2017年福建选调生考试公告，报名31日考试',
                        '2017年广发银行杭州分行校园招聘面试通知',
                        '2017年福建选调生考试公告，19日报名',],
                        ['福建'],
                        ['杭州']
                    ];
                    this.arr[this.e] = this.arr[this.e].concat(temp[this.e]);
                    $state.loaded();
                }, 1000);

            },

        }
    }
</script>

<style scoped>
.lastChild ul {padding-left: 30px}
.lastChild ul li{height: 100px;line-height: 100px;border-bottom: 1px solid  rgb(239, 239, 239);list-style:circle;margin-left: 30px;position: relative}
.home-bkimg2{position: absolute;right: 30px;top:35px;}
.home-bkimg2 img{width: 10px;}
</style>

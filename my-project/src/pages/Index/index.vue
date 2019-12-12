<template>
  <div style="min-height: -webkit-fill-available;">
    <HeadPage></HeadPage>
    <LabelLeft></LabelLeft>
    <Lunbotu  style="margin-bottom: -100px;"></Lunbotu>
    <leimu style="margin-bottom: 100px;"></leimu>
    <Tuijian></Tuijian>
    <New></New>
    <Leibie></Leibie>
    <Foot></Foot>
  </div>
</template>

<script>
    import HeadPage from "../../components/HeadPage";
    import Foot from "../../components/Foot";
    import Lunbotu from "./lunbotu";
    import Tuijian from "./tuijian";
    import leimu from "./leimu";
    import New from "./new";
    import Leibie from "./leibie";
    export default {
        components: {
            HeadPage,Foot,Lunbotu,Tuijian,leimu,New,Leibie
        },
        data(){
            return {}
        },
        mounted(){
            this.initData();
        },
        methods:{
            //记录网站访问
            initData(){
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.$http.get(this.GLOBAL.baseurl + 'v1/site/record_access').then((response)=>{
                })
            }
        },
    }
</script>
<style scoped>
  /*.carousel{*/
  /*height: 518px;*/
  /*overflow: hidden;*/
  /*margin: 100px auto;*/
  /*position: relative;*/
  /*margin-top:12px;*/
  /*z-index:1;*/
  /*}*/
  /*.carousel ul{*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/
  /*.carousel ul li{*/
  /*!*position: absolute;*!*/
  /*}*/
  /*.carousel ul li a img{*/
  /*height: 518px;*/
  /*}*/
  /*.bullet{*/
  /*position: absolute;*/
  /*font-size: 0;*/
  /*bottom: 20px;*/
  /*left: 50%;*/
  /*margin-left: -42px;*/
  /*}*/
  /*.bullet span{*/
  /*display: inline-block;*/
  /*width: 10px;*/
  /*height: 10px;*/
  /*background-color: #ffffff;*/
  /*margin-left: 15px;*/
  /*border-radius: 10px;*/
  /*}*/
  /*.bullet span:first-child{*/
  /*margin-left: 0;*/
  /*}*/
  /*.switch span{*/
  /*position: absolute;*/
  /*width: 50px;*/
  /*height: 50px;*/
  /*line-height: 50px;*/
  /*text-align: center;*/
  /*background-color: rgba(0,0,0,.1);*/
  /*font-size: 20px;*/
  /*color: #ffffff;*/
  /*top: 50%;*/
  /*margin-top: -25px;*/
  /*cursor: pointer;*/
  /*font-family: "宋体";*/
  /*} */
  /*.switch span:hover{*/

  /*background-color: rgba(0,0,0,.5);*/

  /*}*/
  .prev{
    left: 0;
  }
  .next{
    right: 0;
  }
  .active{
    background-color: red !important;
  }
  .image-enter-active{
    transform:translateX(0);
    transition:all 1s ease;
  }
  .image-leave-active{
    transform:translateX(-100%);
    transition:all 1s ease
  }
  .image-enter{
    transform:translateX(100%);
  }
  .image-leave{
    transform:translateX(0);
  }
</style>
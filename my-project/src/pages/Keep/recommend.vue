<template>
    <div style="height:100%">
        <HeadPage></HeadPage>
        <div class="lanmu">收藏夹</div>
        <div style="text-align: left;padding-left: 20%;min-height: -webkit-fill-available;" class="clearfix">
            <div :id="'keep'+keep[0].id" class="keeps" v-for="keep in keepinfo">
                <a :href="'/#/keep/keepimg?id='+keep[0].id" target="_blank">
                    <div class="keep gallery1" :id="keep[0].id">
                        <div v-for="keep_img in keep" id="gallery_id">
                            <img  :src="keep_img.image" id="img" alt="" style="float: left;" height="30px">
                        </div>
                    </div>
                    <span class="keeps_name" style="color:black">{{keep[0].keep_name}}</span>
                </a>
            </div>
        </div>
        <Foot style="margin-top:30px;clear: both;"></Foot>
    </div>

</template>
<script>
    import axios from 'axios'
    import HeadPage from "../../components/HeadPage"
    import Foot from "../../components/Foot"
    const baseurl = 'http://118.178.89.229/'
    export default {
        name: 'Recommend',
        data(){
            return{
                keepinfo:[],
            }
        },
        components: {
            HeadPage,Foot
        },
        watch: {
            '$route' () {
                this.initData();
            }
        },
        mounted(){
            this.$http.get(baseurl + 'v1/home/findkeepall').then((response)=>{
                console.log(response.data)
                this.keepinfo = response.data
            })
        },
        methods:{
            initData(){

            },
            //点击查看收藏夹
            sele_keep(event){
                this.$router.push({name: 'keepimg',params:{id:event.currentTarget.id}});
            },
        }
    }
</script>
<style>
    html,body{height: 100%;margin:0px;padding:0px;margin: 0 auto}
    .lanmu{
        margin-top: 15px;
        width:100%;
        height:30px;
        background:#f2f2f2;
        line-height:30px;
        text-align:left;
        padding-left:20%;
        margin-bottom:20px;
        font-size:15px;
        color:#333;
    }
    .clearfix:after{
        display: block;
        content:'';
        clear: both;
        height:0;
    }
    .keep{
        display: inline-block;
        background-color:#77696917;
        width: 210px;
        height: 200px;
        float: left;
        margin-bottom: 5px;
        overflow: hidden;
        cursor: pointer;
    }
    .keeps{
        display: inline-block;
        width: 210px;
        margin-right:20px;
        float: left;
    }
    /*列表布局*/
    .gallery1{
        display: flex;
        flex-wrap: wrap;
        margin-left: 5px;
        align-content: flex-start
    }
    .gallery1 #gallery_id{
        flex-grow: 1;
        margin:2px 2px 0px 0px;
        position: relative;
    }
    .gallery1 #img{
        object-fit: cover;
        min-height:50px;
        max-width: 100%;
        min-width: 100%;
        vertical-align: bottom;
    }
    .gallery1:after {
        content: "";
        flex-grow:2;
        flex-basis:50%;
        flex-shrink:1;
    }
    /*结束*/
</style>
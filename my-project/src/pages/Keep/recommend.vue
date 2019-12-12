<template>
    <div style="height:100%;text-align: -webkit-center;">
        <input type="hidden" value="艺术,早安,早安艺术,article,早安art,ZaoanArt">
        <h1 style="display: none;position: absolute;">艺术,早安,早安艺术,article,早安art,ZaoanArt</h1>
        <HeadPage></HeadPage>
        <div class="lanmu">收藏夹</div>
        <div style="width:1200px;min-height: -webkit-fill-available;" class="clearfix">
            <!--<div :id="'keep'+keep[0].id" class="keeps" v-for="keep in keepinfo">-->
                <!--<a :href="'/#/keep/keepimg?id='+keep[0].id" target="_blank">-->
                    <!--<div class="keep gallery1" :id="keep[0].id">-->
                        <!--<div v-for="keep_img in keep" id="gallery_id">-->
                            <!--<img  :src="keep_img.image" id="img" alt="" style="float: left;" height="30px">-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<span class="keeps_name" style="color:black">{{keep[0].keep_name}}</span>-->
                <!--</a>-->
            <!--</div>-->
            <div :id="'keep'+keep[0].id" class="keeps" v-for="keep in keepinfo" >
                <template v-if="(keep[0].img_ratio == 1) || !(keep[0].img_ratio)">
                    <div>
                        <a :href="'/#/keep/keepimg?status=1&id='+keep[0].id" target="_blank">
                            <div class="keep gallery1" :id="keep[0].id">
                                <div id="gallery_id" style="margin:0 auto">
                                    <img v-if="(keep[0])" :src="keep[0].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                    <img v-if="(keep[1])" :src="keep[1].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                    <img v-if="(keep[2])" :src="keep[2].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                    <img v-if="(keep[3])" :src="keep[3].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                </div>
                            </div>
                            <span class="keeps_name name_span" style="color:black">{{keep[0].keep_name}}</span>
                            <div>
                                <span style="color:#000;">{{keep[0].attention_num}}个收藏</span>
                                <span style="color:#000;">{{keep[0].heat}}热度</span>
                            </div>
                        </a>
                    </div>
                </template>
                <template v-if="(keep[0].img_ratio == 2)">
                    <a :href="'/#/keep/keepimg?status=1&id='+keep[0].id" target="_blank">
                        <div class="keep gallery1" :id="keep[0].id">
                            <div id="gallery_id" style="margin:0 auto">
                                <img v-if="(keep[0])" :src="keep[0].image+'?imageView2/1/w/400/h/250'" style="margin: 2px;float: left;width:200px;height:130px;">
                                <img v-if="(keep[1])" :src="keep[1].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:63px;height:65px;">
                                <img v-if="(keep[2])" :src="keep[2].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:63px;height:65px;">
                                <img v-if="(keep[3])" :src="keep[3].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:63px;height:65px;">
                            </div>
                        </div>
                        <span class="keeps_name name_span" style="color:black;">{{keep[0].keep_name}}</span>
                        <div>
                            <span style="color:#000;">{{keep[0].attention_num}}个收藏</span>
                            <span style="color:#000;">{{keep[0].heat}}热度</span>
                        </div>
                    </a>
                </template>
                <template v-if="(keep[0].img_ratio == 3)">
                    <a :href="'/#/keep/keepimg?status=1&id='+keep[0].id" target="_blank">
                        <div class="keep gallery1" :id="keep[0].id">
                            <div id="gallery_id" style="margin:0 auto">
                                <img v-if="(keep[0])" :src="keep[0].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:121px;height:100px;">
                                <img v-if="(keep[1])" :src="keep[1].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:71px;height:100px;">
                                <img v-if="(keep[2])" :src="keep[2].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:71px;height:100px;">
                                <img v-if="(keep[3])" :src="keep[3].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:121px;height:100px;">
                            </div>
                        </div>
                        <span class="keeps_name name_span" style="color:black">{{keep[0].keep_name}}</span>
                        <div>
                            <span style="color:#000;">{{keep[0].attention_num}}个收藏</span>
                            <span style="color:#000;">{{keep[0].heat}}热度</span>
                        </div>
                    </a>
                </template>
            </div>
        </div>
        <LabelLeft></LabelLeft>
        <Foot style="margin-top:30px;clear: both;"></Foot>
    </div>

</template>
<script>
    import axios from 'axios'
    import HeadPage from "../../components/HeadPage"
    import LabelLeft from "../../components/LabelLeft"
    import Foot from "../../components/Foot"
    export default {
        name: 'Recommend',
        data(){
            return{
                keepinfo:[],
            }
        },
        components: {
            HeadPage,LabelLeft,Foot
        },
        watch: {
            '$route' () {
                this.initData();
            }
        },
        mounted(){
            this.$http.get(this.GLOBAL.baseurl + 'v1/home/findkeepall').then((response)=>{
                this.keepinfo = response.data
            })
        },
        methods:{
            initData(){
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            },
            //点击查看收藏夹
            sele_keep(event){
                this.$router.push({name: 'keepimg',params:{id:event.currentTarget.id}});
            },
        }
    }
</script>
<style scoped>
    html,body{height: 100%;margin:0px;padding:0px;margin: 0 auto}
    a{padding:0;margin:0;text-decoration:none}
    /*.lanmu{*/
        /*margin-top: 15px;*/
        /*width:100%;*/
        /*height:30px;*/
        /*background:#f2f2f2;*/
        /*line-height:30px;*/
        /*text-align:left;*/
        /*padding-left:20%;*/
        /*margin-bottom:20px;*/
        /*font-size:15px;*/
        /*color:#333;*/
    /*}*/
    .clearfix:after{
        display: block;
        content:'';
        clear: both;
        height:0;
    }
    .name_span{
        width: 80%;
        display: block;
        text-decoration:none;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        white-space:nowrap;
    }
    .keep{
        display: inline-block;
        /*background-color:#77696917;*/
        width: 200px;
        height: 200px;
        float: left;
        margin-bottom: 5px;
        overflow: hidden;
        cursor: pointer;
    }
    .keeps{
        display: inline-block;
        width: 18%;
        margin:1%;
        float: left;
        overflow:hidden;
        text-align: left;
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
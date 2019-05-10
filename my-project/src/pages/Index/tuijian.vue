<template>
    <div>
        <div style="" class="tuijiantuzong">
            <div class="title" style="margin-top:20px">
                <div class="xian1"></div>
                <a class="tuijian" href="/#/keep/recommend" target="_blank">推荐  Recommend</a>
                <div class="xian2"></div>
            </div>
            <!--<div style="width:1200px;height:311px;margin:0 auto;">-->
            <!--<div class="row">-->
            <!--<div class="col-sm-6 col-md-4"  v-for='lists in list'>-->
            <!--<div class="thumbnail">-->
            <!--<img v-bind:src="lists.src" alt="" style="width:100%;">-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <div style="width:1200px;margin:0 auto;">
                <div class="keeps" v-for="keep in keep_info">
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
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    const baseurl = 'http://118.178.89.229/';
    export default {
        data(){
            return{
                keep_info:[],
            }
        },
        methods:{

        },
        mounted(){
            this.$http.get(baseurl + 'v1/home/findreckeep').then((response)=>{
                this.keep_info = response.data
            })
        }
    }
</script>
<style scoped>
    .tuijiantuzong{margin-top:-70px;background:#f8f8f8;height:350px;margin-top: 20px;}
    .tuijiantu{width:1200px;margin:0 auto;}
    .title{width:400px;height:30px;margin:0 auto;margin-bottom:20px;}
    .xian1{width:100px;height:15px;float:left;border-bottom:1px solid #888;}
    .tuijian{display:inline-block;width:200px;height:30px;float:left;font-size:20px;text-align:center;font-weight:600;color:#000;}
    .xian2{width:100px;height:20px;float:left;border-bottom:1px solid #888;}
    .keeps{
        display: inline-block;
        width: 220px;
        margin-right:15px;
    }
    .keep{
        display: inline-block;
        background-color:#77696917;
        width: 220px;
        height: 220px;
        float: left;
        margin-bottom: 5px;
        overflow: hidden;
        cursor: pointer;
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
        min-height:60px;
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
    @media (min-width:375px) {
        .tuijiantuzong{}
        .tuijiantu{width:375px;margin:0 auto;}
        .xian1{display:none;}
        .xian2{display:none;}
        .tutu1,.tutu2,.tutu3{margin-bottom:20px;}
    }
    @media (min-width:414px) {
        .tuijiantuzong{text-align:center;}
        .tuijiantu{margin-left:66px;width:414px;}
        .tutu1,.tutu2,.tutu3{margin-bottom:20px;}
    }
    @media (min-width:700px) {
        .tuijiantu{width:700px;margin:0 auto;}
        .xian1{display:block;}
        .xian2{display:block;}
    }

    @media (min-width:1200px) {
        .tuijiantu{width:1200px;margin:0 auto;}
        .tuijiantuzong{text-align:center;}
    }
</style>
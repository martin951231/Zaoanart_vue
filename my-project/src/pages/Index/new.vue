<template>
    <div>
        <div style="newzong">
            <div class="new">
                <div class="title">
                    <div class="xian1"></div>
                    <span class="tuijian">最新  New</span>
                    <div class="xian2">
                    </div>
                </div>
                <div class="content" style="width:1300px">
                    <div class="row">
                        <div v-for="img in img" style="margin-right: 15px;margin-bottom: 15px;height:330px">
                            <div class="jx">
                                <router-link :to="'sanjiye?id='+img.id+'&lanmu='+img.lanmu+'&lanmus='+img.lanmus+''">
                                    <img :src="img.image" alt="..." style="height:300px;min-width: 300px;min-height: 330px;">
                                </router-link>
                            </div>
                            <div class="caption kg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    const baseurl = 'https://api.zaoanart.com/';
    export default {
        data(){
            return{
                img: [],
            }
        },
        methods:{

        },
        mounted(){
            this.$http.get(baseurl + 'v1/goods/findimage').then((response)=>{
                for(var i = 0; i<response.data.length;i++ ){
                    response.data[i].image  = 'http://qiniu.zaoanart.com/'+response.data[i].image+'?imageView2/1/w/300/h/330'
                    var res = []
                    var param = '产品'
                    for ( var v=0; v<param.length; v++ ) {
                        res[v] = ( "00" + param.charCodeAt(v).toString(16) ).slice(-4);
                    }
                    var res1 = []
                    var param1 = '最新产品'
                    for ( var v=0; v<param1.length; v++ ) {
                        res1[v] = ( "00" + param1.charCodeAt(v).toString(16) ).slice(-4);
                    }
                    response.data[i].lanmu  = res
                    response.data[i].lanmus  = res1
                }
                this.img = response.data
            })
        }
    }
</script>
<style scoped>
    .tuijiantu{width:1250px;height:311px;margin:0 auto;}
    .new{width:1250px;margin:0 auto;padding-top:0px;}
    .newzong{height:600px;background:#f8f8f8;}
    .title{width:400px;height:30px;margin:0 auto;margin-bottom:20px;}
    .xian1{width:100px;height:15px;float:left;border-bottom:1px solid #888;}
    .tuijian{display:inline-block;width:200px;height:30px;float:left;font-size:20px;text-align:center;font-weight:600;color:#000;}
    .xian2{width:100px;height:20px;float:left;border-bottom:1px solid #888;}
    .thumbnail{width:350px;height:218px;}
    .kg{margin-top:10px;}
    h5{font-size:14px;}
    @media (min-width:375px) {
        .new{width:375px;margin-top:40px;}
        .xian1,.xian2{display:none;}
        .tuijiantu{width:375px;margin:0 auto;}
    }
    @media (min-width:400px) {

    }

    @media (min-width:700px) {
        .tuijiantu{width:700px;}
        .new{width:700px;}
        .xian1,.xian2{display:block;}
    }

    @media (min-width:1200px) {
        .tuijiantu{width:1200px;}
        .new{width:1200px;padding-top:0px;}
        .xian1,.xian2{display:block;}
    }
    .jx{
        height:330px;
        overflow:hidden;
    }
    .thumbnail{
        display:block;
        overflow:hidden;
        width: 240px;
        height: 220px;
    }

</style>
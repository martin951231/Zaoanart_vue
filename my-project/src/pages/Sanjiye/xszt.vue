
<template>
    <div  class="zuop">
        <div style="background:#fff;padding-top:200px;" class="xszt">
            <div class="xiangsi" style="width:1200px;">
                <router-link class="tuijian" :to="'erjiye?label_all='+img_id+''" target="_blank">您可能要找▼</router-link>
                <ul style="margin:0 auto;">
                    <li v-for="mayImageList in mayImageList" style="overflow:hidden;"><a :href="'/#/sanjiye?id='+mayImageList.id+''" target="_blank"><img :src="mayImageList.image" width="100%" style="min-width: 230px;"></a></li>
                </ul>
            </div>
        </div>
        <div style="background:#fff;padding-top:120px;" class="xszt">
            <div class="xiangsi" style="width:1200px;">
                <router-link class="tuijian" :to="'erjiye?cate_id='+dataCategoryList[0].category+'&theme_id=0&color_id=0'" target="_blank">相似类型▼</router-link>
                <ul style="margin:0 auto;">
                    <li v-for="dataCategoryList in dataCategoryList" style="overflow:hidden;"><a :href="'/#/sanjiye?id='+dataCategoryList.id+''" target="_blank"><img :src="dataCategoryList.image" width="100%" style="min-width: 230px;"></a></li>
                </ul>
            </div>
        </div>
        <div style="background:#fff;padding-top:120px;" class="xszt">
            <div class="xiangsi" style="width:1200px;">
                <router-link class="tuijian" :to="'erjiye?cate_id=0&theme_id='+dataThemeList[0].theme+'&color_id=0'"  target="_blank">相似主题▼</router-link>
                <ul style="margin:0 auto;">
                    <li v-for="dataThemeList in dataThemeList" style="overflow:hidden;"><a :href="'/#/sanjiye?id='+dataThemeList.id+''" target="_blank"><img :src="dataThemeList.image" width="100%" style="min-width: 230px;"></a></li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
    import axios from 'axios'
    const baseurl = 'https://api.zaoanart.com/';
    export default {
        data() {
            return{
                dataThemeList: [],
                dataCategoryList: [],
                mayImageList: [],
                img_id:'',
            }
        },
        mounted(){
            var url=location.href;
            var i=url.indexOf('?');
            if(i==-1)return;
            var querystr=url.substr(i+1);
            var arr1=querystr.split('&');
            var arr2=new Object();
            for(i in arr1){
                var ta=arr1[i].split('=');
                arr2[ta[0]]=ta[1];
            }
            this.img_id = arr2.id
            this.$http.get(baseurl + 'v1/goods/findgoods_catagory',{params:{id: arr2.id}}).then((response)=>{
                if(response.data){
                    for(var i = 0; i<response.data.category.length;i++ ){
                        response.data.category[i].image  = 'http://qiniu.zaoanart.com/'+response.data.category[i].image+'?imageView2/1/w/216/h/200'
                        var res = []
                        var param = '类别'
                        for ( var v=0; v<param.length; v++ ) {
                            res[v] = ( "00" + param.charCodeAt(v).toString(16) ).slice(-4);
                        }
                        var res1 = []
                        var param1 = response.data.category[0].category_name
                        for ( var v=0; v<param1.length; v++ ) {
                            res1[v] = ( "00" + param1.charCodeAt(v).toString(16) ).slice(-4);
                        }
                        response.data.category[i].lanmu  = res
                        response.data.category[i].lanmus  = res1
                    }
                    this.dataCategoryList.lanmu = '类别'
                    this.dataCategoryList.lanmus = response.data.category[0].category_name
                    for(var i = 0; i<response.data.theme.length;i++ ){
                        response.data.theme[i].image  = 'http://qiniu.zaoanart.com/'+response.data.theme[i].image+'?imageView2/1/w/216/h/200'
                    }
                }
                this.dataCategoryList = response.data.category
                this.dataThemeList = response.data.theme
            })
            this.$http.get(baseurl + 'v1/goods/findmayimg',{params:{id: arr2.id}}).then((response)=>{
                this.mayImageList = response.data
                for(var q=0;q<response.data.length;q++){
                    this.mayImageList[q].image = 'http://qiniu.zaoanart.com/'+this.mayImageList[q].image+'?imageView2/1/w/216/h/200'
                }
            })
        }
    }
</script>
<style scoped>
    *{padding:0;margin:0;}
    a{padding:0;margin:0;text-decoration:none}
    .tuijian{display:block;float:right;font-size:15px;text-align:center;color:#999;margin-right:10px;margin-bottom:5px}
    ul li{list-style:none;padding:0;margin:0;}
    li{float:left;display: flex;}
    @media (min-width:1200px) {
        ul{padding:0;margin:0;}
        .zuop .title{margin:0 auto;text-align:center;margin-bottom:30px;}
        .biaoti{width:1200px;margin:0 auto;}
        .xiangsi,.xiangsi ul{width:100%;padding:0;margin:0 auto;padding-left:0;overflow: hidden;}
        .xiangsi ul li{margin-bottom:10px;padding-right:10px;justify-content: center;}
        .xiangsi ul li a{display:inline-block;margin-left:0;justify-content: center;}
        .xszt-1{width:1200px;margin:0 auto;margin-top:-40px;}
        .lanmu{height:100px;}
        .xszt-1 ul li{width:20%;margin-bottom:20px;}
    }
    .div{
        display: inline-block;
        margin-bottom: 5px;
        height: 200px;
        width: 19%;
        text-align: center;
        line-height: 200px;
        overflow: hidden;
        margin-right: 5px;
    }
</style>
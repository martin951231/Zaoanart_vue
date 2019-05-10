<template>
    <div>
        <div class="leibie" style="">
            <div class="addkeep_Mask_layer">
                <img src="../../assets/images/closes.png" width="25px" alt="" style="float: right;margin: -40px 20px 0px 0px;cursor: pointer;" @click="Mask_layer_hidden()">
                <div class="fenlei">
                    <div>
                        <a :href="'/#/erjiye?label_name='+label2.label_name2+'&label_id='+label2.id+''" v-for="label2 in label2">{{label2.label_name}}</a>
                    </div>
                </div>
            </div>
            <div class="title">
                <div class="xian1"></div>
                <span class="tuijian">标签  Tag</span>
                <div class="xian2"></div>
            </div>
            <div class="fenlei">
                <div>
                    <a :href="'/#/erjiye?label_name='+label.label_name2+'&label_id='+label.id+''" v-for="label in label">{{label.label_name}}</a>
                </div>
            </div>
            <img src="../../assets/images/seemore.png" alt="查看更多" width="25px" style="float: right;" @click="Mask_layer_show()">
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    const baseurl = 'http://118.178.89.229/';
    export default {
        data(){
            return{
                label: [],
                label2: [],
                label_name: []
            }
        },
        methods:{
            label_show(){
                this.$http.get(baseurl + 'v1/label/findlabel2').then((response)=>{
                    for(var i=0;i<response.data.length;i++){
                        response.data[i].label_name2 = encodeURI(response.data[i].label_name)
                    }
                    console.log(response.data)
                    this.label2 = response.data
                })
            },
            Mask_layer_hidden(){
                $(".addkeep_Mask_layer").css('display','none')
            },
            Mask_layer_show(){
                $(".addkeep_Mask_layer").css('display','block')
                this.label_show()
            }
        },
        mounted(){
            this.$http.get(baseurl + 'v1/label/findlabel').then((response)=>{
                for(var i=0;i<response.data.length;i++){
                    response.data[i].label_name2 = encodeURI(response.data[i].label_name)
                }
                this.label = response.data
            })
        }
    }
</script>
<style scoped>
    a{padding:;marign:0;}
    .leibie{width:1200px;height:360px;margin:0 auto;margin-top:20px;}
    .tuijiantu{width:1200px;height:311px;margin:0 auto;}
    .title{width:400px;height:30px;margin:0 auto;margin-bottom:20px;}
    .xian1{width:100px;height:15px;float:left;border-bottom:1px solid #888;}
    .tuijian{display:inline-block;width:200px;height:30px;float:left;font-size:20px;text-align:center;font-weight:600;color:#000;}
    .xian2{width:100px;height:20px;float:left;border-bottom:1px solid #888;}
    .thumbnail{width:350px;height:218px;}
    .kg{margin-top:10px;}
    .fenlei a{display:inline-block;width:158px;height:40px;border:1px solid #e2e2e2;text-align:center;
        margin-top:10px;margin-left:10px;line-height:40px;color:#666;}
    .fenlei a:hover{border:1px solid #ef401d;color:#ef401d;text-decoration:none;}
    @media (min-width:375px) {
        .leibie{width:375px;height:900px;margin:0 auto;}
        .fenlei a{width:130px;}
        .xian1,.xian2{display:none;}
        .fenlei div{margin-left:-40px;}
    }
    @media (min-width:400px) {
        .leibie{width:400px;height:600px;}
        .fenlei a{width:130px;}
        .xian1,.xian2{display:none;}
        .fenlei div{margin-left:-40px;}
    }

    @media (min-width:700px) {
        .leibie{width:700px;height:600px;}
        .fenlei a{width:150px;}
        .xian1,.xian2{display:block;}
        .fenlei div{margin-left:0px;}
    }

    @media (min-width:1200px) {
        .leibie{width:1200px;height:360px;margin:0 auto;margin-top:40px;}
        .fenlei a{width:150px;}
        .xian1,.xian2{display:block;}
    }
    .addkeep_Mask_layer{
        width:80%;
        left:10%;
        height:300px;
        padding-top: 60px;
        border:1px solid #ccc;
        background-color: #fff;
        display: none;
        position: absolute;
        margin-top: 0px;
        overflow-y: scroll;
    }
</style>
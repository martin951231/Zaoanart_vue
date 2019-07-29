<template>
    <div>
        <div class="leimu">
            <div style="padding-top:30px;">
                <div class="title">
                    <div class="xian1"></div>
                    <a class="leixing" style="color: black;">分类  Category</a>
                    <div class="xian2"></div>
                </div>
                <div style="text-align: center;height: 20px;overflow: hidden;font-family: monospace;" id="cate_show_div">
                    <a href="" :href="'/#/erjiye?cate_id='+category.id+'&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1'" v-for="(category,index) in category" :key="index" v-if="category.pid==0">
                        <ul style="display: inline-block;width:100px;text-align: center;font-family: monospace;" class="tuijian ul_shadow" :id="category.id" @mouseenter="show_cate($event)">{{category.category_name}}</ul>
                    </a>
                    <!--油画列表-->
                    <div style="position: absolute;width: 1200px;">
                        <ul style="display: none;background-color: #fff;" id="youhua" @mouseleave="hide_cate()">
                            <li class="ul_shadow" style="display: inline-block;margin-right: 5px;" v-for="(category,index) in category" :key="index" v-if="category.pid==1">
                                <a :href="'/#/erjiye?cate_id='+category.id+'&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1'">
                                    <div style="text-align: center;">
                                        <img :src="cate_img_url+category.face_img" alt="" width="100px" height="100px">
                                        <br>
                                        <a>{{category.category_name}}</a>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--国画列表-->
                    <div style="position: absolute;width: 1200px;">
                        <ul style="display: none;background-color: #fff;" id="guohua" @mouseleave="hide_cate()">
                            <li class="ul_shadow" style="display: inline-block;margin-right: 5px;" v-for="(category,index) in category" :key="index" v-if="category.pid==2">
                                <a :href="'/#/erjiye?cate_id='+category.id+'&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1'">
                                    <div style="text-align: center;">
                                        <img :src="cate_img_url+category.face_img" alt="" width="100px" height="100px">
                                        <br>
                                        <a>{{category.category_name}}</a>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!--摄影列表-->
                    <div style="position: absolute;width: 1200px;">
                        <ul style="display: none;background-color: #fff;" id="sheying" @mouseleave="hide_cate()">
                            <li class="ul_shadow" style="display: inline-block;margin-right: 5px;" v-for="(category,index) in category" :key="index" v-if="category.id==16">
                                <a :href="'/#/erjiye?cate_id='+category.id+'&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1'">
                                    <div style="text-align: center;">
                                        <img :src="cate_img_url+category.face_img" alt="" width="100px" height="100px">
                                        <br>
                                        <a>{{category.category_name}}</a>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!--综合绘画-->
                    <div style="position: absolute;width: 1200px;">
                        <ul style="display: none;background-color: #fff;" id="zonghehuihua" @mouseleave="hide_cate()">
                            <li class="ul_shadow" style="display: inline-block;margin-right: 5px;" v-for="(category,index) in category" :key="index" v-if="category.pid==3">
                                <a :href="'/#/erjiye?cate_id='+category.id+'&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1'">
                                    <div style="text-align: center;">
                                        <img :src="cate_img_url+category.face_img" alt="" width="100px" height="100px">
                                        <br>
                                        <a>{{category.category_name}}</a>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--装饰画-->
                    <div style="position: absolute;width: 1200px;">
                        <ul style="display: none;background-color: #fff;" id="zhuangshihua" @mouseleave="hide_cate()">
                            <li class="ul_shadow" style="display: inline-block;margin-right: 5px;">
                                <a :href="'/#/erjiye?cate_id=4&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1'">
                                    <div style="text-align: center;">
                                        <img src="https://api.zaoanart.com/resource/cate-img/zhuangshihua1.jpg" alt="" width="100px" height="100px">
                                        <br>
                                        <a>装饰画1</a>
                                    </div>
                                </a>
                            </li>
                            <li class="ul_shadow" style="display: inline-block;margin-right: 5px;">
                                <a :href="'/#/erjiye?cate_id=4&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1'">
                                    <div style="text-align: center;">
                                        <img src="https://api.zaoanart.com/resource/cate-img/zhuangshihua2.jpg" alt="" width="100px" height="100px">
                                        <br>
                                        <a>装饰画2</a>
                                    </div>
                                </a>
                            </li>
                            <li class="ul_shadow" style="display: inline-block;margin-right: 5px;">
                                <a :href="'/#/erjiye?cate_id=4&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1'">
                                    <div style="text-align: center;">
                                        <img src="https://api.zaoanart.com/resource/cate-img/zhuangshihua3.jpg" alt="" width="100px" height="100px">
                                        <br>
                                        <a>装饰画3</a>
                                    </div>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <!--其他-->
                    <div style="position: absolute;width: 1200px;">
                        <ul id="qita" style="display: none;background-color: #fff;" @mouseleave="hide_cate()">
                            <li class="ul_shadow" style="display: inline-block;margin-right: 5px;" v-for="(category,index) in category" :key="index" v-if="category.pid==5">
                                <a :href="'/#/erjiye?cate_id='+category.id+'&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1'">
                                    <div style="text-align: center;">
                                        <img :src="cate_img_url+category.face_img" alt="" width="100px" height="100px">
                                        <br>
                                        <a>{{category.category_name}}</a>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="title" style="margin-top:20px">
                    <div class="xian1"></div>
                    <a class="leixing" style="color: black;">主题  Subjects</a>
                    <div class="xian2"></div>
                </div>
                <div style="text-align: center;" id="theme_show_div">
                    <a v-for="(theme,index) in theme" :key="index" :href="'/#/erjiye?theme_id='+theme.id+'&cate_id=0&color_id=0&search=&pageSize=50&currentPage=1'" width="100px">
                        <ul class="ul_shadow" :id="theme.id" style="padding:0;font-family:monospace;display: inline-block;width:100px;text-align: center;" @mouseenter="show_theme($event)" @mouseleave="hide_theme($event)">
                            {{theme.theme_name}}
                            <li style="position: relative;">
                                <div :id="'theme'+theme.id" style="box-shadow: #ccc 3px 3px 5px;text-align: center;display:none;position: absolute;">
                                    <img :src="theme_img_url+theme.theme_img" alt="" width="100px">
                                    <br>
                                </div>
                            </li>
                        </ul>
                    </a>
                </div>
                <div class="title" style="margin-top:20px">
                    <div class="xian1"></div>
                    <a class="leixing" style="color: black;">颜色  Color</a>
                    <div class="xian2"></div>
                </div>
                <tr style="display: block;text-align: center;">
                    <a class="color_style" :href="'/#/erjiye?color_id=1&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'"><div class="color_td" id="1" style="border-radius: 50%;background-color:rgb(255,0,0);"></div></a>
                    <a class="color_style" :href="'/#/erjiye?color_id=2&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="2"  style="border-radius: 50%;background-color:rgb(255,150,0);"></div>
                    </a>
                    <a class="color_style" :href="'/#/erjiye?color_id=3&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="3" style="border-radius: 50%;background-color:rgb(255,255,0);"></div>
                    </a>
                    <a class="color_style" :href="'/#/erjiye?color_id=4&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="4"  style="border-radius: 50%;background-color:rgb(0,255,0);"></div>
                    </a>
                    <a class="color_style" :href="'/#/erjiye?color_id=5&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="5"  style="border-radius: 50%;background-color:rgb(0,255,255);"></div>
                    </a>
                    <a class="color_style" :href="'/#/erjiye?color_id=6&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="6"  style="border-radius: 50%;background-color:rgb(0,0,255);"></div>
                    </a>
                    <a class="color_style" :href="'/#/erjiye?color_id=7&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="7"  style="border-radius: 50%;background-color:rgb(100,50,150);"></div>
                    </a>
                    <a class="color_style" :href="'/#/erjiye?color_id=8&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="8"  style="border-radius: 50%;background-color:rgb(255,150,255);"></div>
                    </a>
                    <a class="color_style" :href="'/#/erjiye?color_id=9&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="9"  style="border:solid 1px #ccc;border-radius: 50%;background-color:rgb(255,255,255);"></div>
                    </a>
                    <a class="color_style" :href="'/#/erjiye?color_id=10&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="10"  style="border-radius: 50%;background-color:rgb(0,0,0);"></div>
                    </a>
                    <a class="color_style" :href="'/#/erjiye?color_id=11&cate_id=0&theme_id=0&search=&pageSize=50&currentPage=1'">
                        <div class="color_td" id="11"  style="border-radius: 50%;background-color:rgb(120,120,120);"></div>
                    </a>
                </tr>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                category: [],
                theme: [],
                cate_img_url : 'http://qiniu.zaoanart.com/',
                theme_img_url : 'http://qiniu.zaoanart.com/',
            }
        },
        methods:{
            show_cate(e){
                var cate_id = $(e.target).attr("id")
                if(cate_id==999){
                    $('#cate_show_div').css('height','20px')
                    $('#qita').css('display','none')
                    $('#sheying').css('display','none')
                    $('#zhuangshihua').css('display','none')
                    $('#zonghehuihua').css('display','none')
                    $('#guohua').css('display','none')
                    $('#youhua').css('display','none')
                }else{
                    // $('#cate_show_div').css('height','200px')
                }
                if(cate_id==1){
                    $('#guohua').css('display','none')
                    $('#sheying').css('display','none')
                    $('#zonghehuihua').css('display','none')
                    $('#zhuangshihua').css('display','none')
                    $('#qita').css('display','none')
                    $('#youhua').css('display','inline-block')
                }if(cate_id==2){
                    $('#guohua').css('display','inline-block')
                    $('#sheying').css('display','none')
                    $('#youhua').css('display','none')
                    $('#zonghehuihua').css('display','none')
                    $('#zhuangshihua').css('display','none')
                    $('#qita').css('display','none')
                }if(cate_id==3){
                    $('#zonghehuihua').css('display','inline-block')
                    $('#sheying').css('display','none')
                    $('#guohua').css('display','none')
                    $('#youhua').css('display','none')
                    $('#zhuangshihua').css('display','none')
                    $('#qita').css('display','none')
                }if(cate_id==4){
                    $('#zhuangshihua').css('display','inline-block')
                    $('#sheying').css('display','none')
                    $('#zonghehuihua').css('display','none')
                    $('#guohua').css('display','none')
                    $('#youhua').css('display','none')
                    $('#qita').css('display','none')
                }if(cate_id==5){
                    $('#qita').css('display','inline-block')
                    $('#sheying').css('display','none')
                    $('#zhuangshihua').css('display','none')
                    $('#zonghehuihua').css('display','none')
                    $('#guohua').css('display','none')
                    $('#youhua').css('display','none')
                }if(cate_id==16){
                    $('#sheying').css('display','inline-block')
                    $('#qita').css('display','none')
                    $('#zhuangshihua').css('display','none')
                    $('#zonghehuihua').css('display','none')
                    $('#guohua').css('display','none')
                    $('#youhua').css('display','none')
                }
            },
            hide_cate(){
                $('#cate_show_div').css('height','20px')
                $('#qita').css('display','none')
                $('#zhuangshihua').css('display','none')
                $('#zonghehuihua').css('display','none')
                $('#guohua').css('display','none')
                $('#youhua').css('display','none')
            },
            show_theme(e){
                var theme_id = $(e.target).attr("id")
                $('#theme'+theme_id).css('display','block')
            },
            hide_theme(e){
                var theme_id = $(e.target).attr("id")
                $('#theme'+theme_id).css('display','none')
            }
        },
        mounted(){
            this.$http.get(this.GLOBAL.baseurl + 'v1/category/findcategory1').then((response)=>{
                this.category = response.data
            }),
                this.$http.get(this.GLOBAL.baseurl + 'v1/theme/findtheme').then((response)=>{
                    this.theme = response.data
                })
        },
    }
</script>
<style scoped>
    body{font-family:"微软雅黑";}
    ul,li{
        list-style:none;
    }
    a{text-decoration:none;font-family:"微软雅黑";color:#333;font-size:14px;}
    .daoduan2,.daoduan3{margin-top:20px;padding-bottom:6px;border-bottom:1px solid #e2e2e2;text-align:left;font-family:"微软雅黑";font-size:14px;}
    .title{width:400px;height:30px;margin:0 auto;margin-bottom:20px;}
    .daoduan1{padding-bottom:6px;border-bottom:1px solid #e0e0e0;text-align:left;font-family:"微软雅黑";font-size:14px;}
    .daoduan1 span,.daoduan2 span,.daoduan3 span{font-weight:700;}
    .daoduan1 span,.daoduan2 span,.daoduan3 span{margin-right:15px;}
    .daoduan1 a,.daoduan2 a,.daoduan3 a{color:#333;margin:0 3px;}
    .daoduan1 a:hover,.daoduan2 a:hover,.daoduan3 a:hover{color:#ef401d;text-decoration:none;}
    .leimu{width:1200px;margin:0 auto;text-align: left;}
    .color_style{
        margin-right:10px;
    }
    .ul_shadow:hover{
        box-shadow: #ccc 3px 3px 5px;
    }
    @media (min-width:375px) {
        .leimu{width:320px;margin-left:-1px;text-align: left;}
    }
    @media (min-width:414px) {
        .leimu{width:414px;padding:0 5px;text-align: left;}
    }
    @media (min-width:700px) {
        .leimu{width:700px;margin:0 auto;text-align: left;}
    }
    @media (min-width:1200px) {
        .leimu{width:1200px;margin:0 auto;text-align: left;}
    }
    .color_td{
        width:30px;
        height:30px;
        display: inline-block;

    }
    .color_td:hover{
        box-shadow:#000 0px 0px 0px 3px;
        cursor: pointer;
    }
    .leixing{
        display:inline-block;
        width:200px;
        height:30px;
        float:left;
        font-size:20px;
        text-align:center;
        font-weight:600;
        color:black;
    }
    .xian1{width:100px;height:15px;float:left;border-bottom:1px solid #888;}
    .xian2{width:100px;height:20px;float:left;border-bottom:1px solid #888;}
</style>
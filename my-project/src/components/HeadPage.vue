<template>
    <div style="font-size: 15px;margin-bottom:100px;margin-top: 15px;">
        <div style="float:right;height: 70px;position: absolute;right: 50px;padding-top: 50px;">
            <input id="search_input" type="text" v-model="input" style="text-align: right;display:none;outline:none;border: 0px;border-bottom: 1px solid #ccc;width: 100px;">
            <img src="../assets/images/search.png" alt="" width="20px" @click="test1" style="cursor: pointer;">
            <div v-if="telphone" style="display: inline-block;">
                <a href="/#/keep" class="login_sign" target="_blank">
                    <img src="../assets/images/keep.png" width="20px" id="show_keep_img">
                </a>
                <a href="/#/home" class="login_sign" target="_blank">
                    <img src="../assets/images/user.png" width="20px" id="show_user_img">
                </a>
            </div>
            <div v-else style="display: inline-block;" id="show_user2">
                <a href="/#/sign" class="login_sign" style="margin-right:10px" id="show_user_a3">注册</a>
                <a href="/#/login" class="login_sign" id="show_user_a4">登录</a>
            </div>
            <div v-if="telphone" id="show_user" style="width:150px;background-color:#fff;display:none;position: absolute;z-index: 999;right: 0px;text-align: left;padding: 5px;">
                <a style="display:block;padding: 10px 0px 10px 0px;font-weight: bold;" v-if="telphone" class="login_sign" target="_blank" id="show_user_a1">
                    <img src="../assets/images/hi.png" width="20px" id="show_user_img1">
                    {{telphone}}
                </a>
                <a style="display:block;height: 25px;line-height: 25px;" v-if="telphone" href="/#/home/shopcar" class="login_sign tohover" target="_blank" id="show_user_a5">
                    <img src="../assets/images/car.png" width="20px" id="show_user_img5">
                    购物车
                </a>
                <a style="display:block;height: 25px;line-height: 25px;" v-if="telphone" href="/#/home/history" class="login_sign tohover" target="_blank" id="show_user_a6">
                    <img src="../assets/images/history.png" width="20px" id="show_user_img6">
                    足迹
                </a>
                <a style="display:block;height: 25px;line-height: 25px;" v-if="telphone" href="/#/home" class="login_sign tohover" target="_blank" id="show_user_a7">
                    <img src="../assets/images/set.png" width="20px" id="show_user_img7">
                    设置
                </a>
                <a style="cursor: pointer;display:block;height: 25px;line-height: 25px;" v-if="telphone" class="login_sign tohover"  @click="login_out" id="show_user_a2">
                    <img src="../assets/images/shutdown.png" width="20px" id="show_user_img2">
                    注销
                </a>
            </div>
            <div v-if="telphone" id="show_keep" style="width:150px;background-color:#fff;display:none;position: absolute;z-index: 999;right: 0px;text-align: left;">
                <ul>
                    <li class="show_keep_li" style="padding: 10px 0px 10px 20px;min-width:100px;display:block;color:#000;font-weight: bold;">收藏夹</li>
                    <a id="show_keep_a" style="height: 25px;line-height: 25px;" v-for="keep in keep" :href="'/#/keep/keepimg?id='+keep.id" target="_blank">
                        <li class="show_keep_li" style="padding-left:20px;margin:0px;min-width:100px;display:block;color:#000">{{keep.keep_name}}</li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="container">
            <!--导航栏-->
            <div style="display: flex;height: 70px;justify-content: center;">
                <div style="position: absolute;left: 0;">
                    <a href=""><img src="../assets/images/logo.png" alt="" height="80px"></a>
                </div>
                <div style="height: 70px;padding-top: 50px;">
                    <ul id="cate_select" class="select_ul" data_id="0" @mouseenter="show($event)" @mouseleave="hidden($event)" style="width:140px;">
                        <div style="padding-left: 15px;">
                            <img src="../assets/images/2.jpg" style="width:20px;">
                            <span id="cate_select_one" style="color:#000">类别</span>
                        </div>
                        <div class="category_div" data_id="0" @click="category_find($event,0)" style="height: 30px;line-height: 30px;padding-left: 15px;color:#000">全部类别</div>
                        <li v-for="(category,son_category) in category" style="color:#000">
                            <span style="height: 30px;line-height: 30px;display:block" class="category_div" :id="'category'+category.id" :data_id="category.id" @click="cate_find($event,category.id)">&nbsp&nbsp&nbsp&nbsp{{category.name}}</span>
                            <div style="height: 30px;line-height: 30px;" v-for="(category1,index) in category.info" @click="category_find($event,category1.id)" class="category_div" :id="'category'+category1.id">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{category1.category_name}}</div>
                        </li>
                    </ul>
                    <ul id="theme_select" class="select_ul" data_id="0" @mouseenter="show($event)" @mouseleave="hidden($event)" style="width:140px;text-align: left;">
                        <div style="padding-left: 20px;">
                            <img src="../assets/images/3.jpg" alt="" width="20px">
                            <span id="theme_select_one" style="color:#000">主题</span>
                        </div>
                        <li class="select_li theme_div" @click="theme_find($event,0)">全部主题</li>
                        <li v-for="theme1 in theme1" :id="'themes'+theme1.id" class="select_li theme_div" @click="theme_find($event,theme1.id)">{{theme1.theme_name}}</li>
                    </ul>
                    <ul id="color_select" class="select_ul" data_id="0" @mouseenter="show($event)" @mouseleave="hidden($event)" style="width:100px;color: rgb(247, 247, 247);">
                        <div style="padding-left: 15px;width: 100px;height: 20px;">
                            <img id="color_select_img" src="../assets/images/color.png" alt="" width="20px">
                            <span id="color_select_one" style="color:#000">颜色</span>
                        </div>
                        <li @click="color_find($event,0)" style="height:30px;line-height: 30px;background-color: #fff;color: rgb(100, 100, 100);display: block;">颜色</li>
                        <li class="color select_li" style="display:block;background-color:rgb(255,0,0);width:100%;margin-left:0px" @click="color_find($event,1)"></li>
                        <li class="color select_li" style="display:block;background-color:rgb(255,150,0);width:100%;margin-left:0px" @click="color_find($event,2)"></li>
                        <li class="color select_li" style="display:block;background-color:rgb(255,255,0);width:100%;margin-left:0px" @click="color_find($event,3)"></li>
                        <li class="color select_li" style="display:block;background-color:rgb(0,255,0);width:100%;margin-left:0px" @click="color_find($event,4)"></li>
                        <li class="color select_li" style="display:block;background-color:rgb(0,255,255);width:100%;margin-left:0px" @click="color_find($event,5)"></li>
                        <li class="color select_li" style="display:block;background-color:rgb(0,0,255);width:100%;margin-left:0px" @click="color_find($event,6)"></li>
                        <li class="color select_li" style="display:block;background-color:rgb(100,50,150);width:100%;margin-left:0px" @click="color_find($event,7)"></li>
                        <li class="color select_li" style="display:block;background-color:rgb(255,255,255);width:100%;margin-left:0px" @click="color_find($event,9)"></li>
                        <li class="color select_li" style="display:block;background-color:rgb(255,150,255);width:100%;margin-left:0px" @click="color_find($event,8)"></li>
                        <li class="color select_li color_black" style="display:block;background-color:rgb(0,0,0);width:100%;margin-left:0px" @click="color_find($event,10)"></li>
                        <li class="color select_li" style="display:block;background-color:rgb(120,120,120);width:100%;margin-left:0px" @click="color_find($event,11)"></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>


</template>
<script>
    import axios from 'axios'
    const baseurl = 'https://api.zaoanart.com/';
    export default {
        name: 'HeadPage',
        data () {
            return {
                input: '',
                category:[],
                theme1: [],
                color: [],
                keep: [],
                telphone:'',
                result1: null,
                s: true,
                h: true,
                o: true,
                w: true,
            }
        },
        watch: {
        },
        mounted() {
            this.telphone = this.getCookie('tel');
            this.initData();
        },
        methods:{
            initData(){
                //获取分类
                this.$http.get(baseurl + 'v1/category/findcategory').then(function(res){
                    this.category = res.data
                })
                // //获取主题
                this.$http.get(baseurl + 'v1/theme/findtheme').then(function(res){
                    this.theme1 = res.data
                    // for(var k=0;k<this.theme1.length;k++){
                    //     $("#theme_select_one").html(this.theme1[k].theme_name)
                    // }
                })
                //如果登陆则获取收藏夹信息
                if(this.telphone){
                    this.$http.get(baseurl + 'v1/home/findkeepname',{params:{tel: this.telphone}}).then((response)=>{
                        this.keep = response.data
                    })
                }
                document.onmousemove = function() {
                    var id = window.event.target.id
                    var class_ = window.event.target.getAttribute('class')
                    if( id != 'show_keep_img' || id != 'show_keep' || class_ != 'show_keep_li'){
                        $('#show_keep').css('display','none')
                    }
                    if(id == 'show_keep_img' || id == 'show_keep' || class_ == 'show_keep_li'){
                        $('#show_keep').css('display','block')
                    }
                    if(id != 'show_user_img' || id != 'show_user' || id != 'show_user_img1' || id != 'show_user_img2' || id != 'show_user_a1' || id != 'show_user_a2' || id != 'show_user_a3' || id != 'show_user_a4' || id != 'show_user_a5' || id != 'show_user_a6' || id != 'show_user_a7' || id != 'show_user2'){
                        $('#show_user').css('display','none')
                    }
                    if(id == 'show_user_img' || id == 'show_user' || id == 'show_user_img1' || id == 'show_user_img2' || id == 'show_user_a1' || id == 'show_user_a2' || id == 'show_user_a3' || id == 'show_user_a4' || id == 'show_user_a5' || id == 'show_user_a6' || id == 'show_user_a7' || id == 'show_user2'){
                        $('#show_user').css('display','block')
                    }
                }
            },
            test1: function () {
                $('#search_input').animate({width:'toggle'})
                var vm = this
                $(document).keydown(function(event){
                    switch(event.keyCode) {
                        case 13:
                            if(vm.input){
                                var term = encodeURI(vm.input)
                                vm.$router.push({path:'/erjiye?term='+term});
                            }else{
                                alert('请输入搜索内容')
                            }
                    }
                });
            },
            //退出
            login_out(){
                var exp = new Date();
                exp.setTime(exp.getTime() - 1);
                var cval = this.getCookies('tel');
                if (cval != null){
                    document.cookie = "tel=" + cval + ";expires=" + exp.toGMTString();
                    window.location.href="/";
                }
            },
            //获取cookie
            getCookies(name) {
                var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if (arr = document.cookie.match(reg)) {
                    return true;
                } else {
                    return false
                }
            },
            show(e){
                $(e.target).css("max-height",'700px')
                // $(e.target).css("position",'absolute')
                $(e.target).css("z-index",'999')
            },
            hidden(e){
                $(e.target).css("max-height",'20px')
            },
            //所有分类查询
            category_find(e,cate_id){
                this.currentPage = 1
                $(e.target).parent().parent().attr('data_id',cate_id)
                $(e.target).parent().parent().css("max-height",'20px')
                // $("#cate_select_one").text($.trim($(e.target).text()))
                // if(cate_id == 0){
                //     $("#cate_select_one").css('color','rgb(100, 100, 100)')
                // }else{
                //     $("#cate_select_one").css('color','rgb(253, 162, 100)')
                // }
                $("#cate_select").attr('data_id',cate_id)
                var theme_id = $("#theme_select").attr('data_id')
                var color_id = $("#color_select").attr('data_id')
                this.$router.push({path:"/erjiye?cate_id="+cate_id+"&theme_id="+theme_id+"&color_id="+color_id+"&pageSize="+this.pageSize+"&currentPage="+this.currentPage+""})
            },
            //1级分类查询
            cate_find(e,id){
                // var data_info = e.target.getAttribute("data_id")
                $(e.target).parent().parent().attr('data_id',id)
                var theme_id = $("#theme_select").attr('data_id')
                var color_id = $("#color_select").attr('data_id')
                this.$router.push({path:"/erjiye?cate_id="+id+"&theme_id="+theme_id+"&color_id="+color_id+"&pageSize="+this.pageSize+"&currentPage="+this.currentPage+""})
            },
            //主题查询
            theme_find(e,theme_id){
                this.currentPage = 1
                $(e.target).parent().attr('data_id',theme_id)
                $(e.target).parent().css("max-height",'20px')
                // $("#theme_select_one").text($.trim($(e.target).text()))
                // if(theme_id == 0){
                //     $("#theme_select_one").css('color','rgb(100, 100, 100)')
                // }else{
                //     $("#theme_select_one").css('color','rgb(253, 162, 100)')
                // }
                $("#theme_select").attr('data_id',theme_id)
                var cate_id = $("#cate_select").attr('data_id')
                var color_id = $("#color_select").attr('data_id')
                this.$router.push({path:"/erjiye?cate_id="+cate_id+"&theme_id="+theme_id+"&color_id="+color_id+"&pageSize="+this.pageSize+"&currentPage="+this.currentPage+""})
            },
            //颜色查询
            color_find(e,color_id){
                this.currentPage = 1
                $(e.target).parent().attr('data_id',color_id)
                $(e.target).parent().css("max-height",'20px')
                switch(color_id)
                {
                    case 0:
                        // $("#color_select_one").css("background-color",'rgba(255, 255, 255, 0.7)');
                        $("#color_select").css("background-color",'rgb(255, 255, 255, 0.7)');
                        $("#color_select_one").html('颜色')
                        $("#color_select_img").css('display','inline-block')
                        break;
                    case 1:
                        // $("#color_select_one").css("background-color",'rgb(255,0,0)');
                        $("#color_select").css("background-color",'rgb(255,0,0)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 2:
                        // $("#color_select").css("background-color",'rgb(255,150,0)');
                        $("#color_select").css("background-color",'rgb(255,150,0)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 3:
                        // $("#color_select_one").css("background-color",'rgb(255,255,0)');
                        $("#color_select").css("background-color",'rgb(255,255,0)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 4:
                        // $("#color_select_one").css("background-color",'rgb(0,255,0)');
                        $("#color_select").css("background-color",'rgb(0,255,0)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 5:
                        // $("#color_select_one").css("background-color",'rgb(0,255,255)');
                        $("#color_select").css("background-color",'rgb(0,255,255)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 6:
                        // $("#color_select_one").css("background-color",'rgb(0,0,255)');
                        $("#color_select").css("background-color",'rgb(0,0,255)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 7:
                        // $("#color_select_one").css("background-color",'rgb(100,50,150)');
                        $("#color_select").css("background-color",'rgb(100,50,150)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 8:
                        // $("#color_select_one").css("background-color",'rgb(255,150,255)');
                        $("#color_select").css("background-color",'rgb(255,150,255)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 9:
                        // $("#color_select_one").css("background-color",'rgb(255,255,255)');
                        $("#color_select").css("background-color",'rgb(255,255,255)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 10:
                        // $("#color_select_one").css("background-color",'rgb(0,0,0)');
                        $("#color_select").css("background-color",'rgb(0,0,0)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 11:
                        // $("#color_select_one").css("background-color",'rgb(120,120,120)');
                        $("#color_select").css("background-color",'rgb(120,120,120)');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                }
                $("#color_select").attr('data_id',color_id)
                var cate_id = $("#cate_select").attr('data_id')
                var theme_id = $("#theme_select").attr('data_id')
                this.$router.push({path:"/erjiye?cate_id="+cate_id+"&theme_id="+theme_id+"&color_id="+color_id+"&pageSize="+this.pageSize+"&currentPage="+this.currentPage+""})
            },
            //显示退出按钮
            show_user(){
                $('#show_user').css('display','block')
            },
            //隐藏退出按钮
            hide_user(){
                $('#show_user').css('display','none')
            },
            //显示快捷收藏夹
            show_keep(){
                $('#show_keep').css('display','block')
            },
            //隐藏快捷收藏夹
            hide_keep(){
                var move_ = window.event.target
                // $('#show_keep').css('display','none')
            },
            //显示搜索input
            show_search_input(){

            },
        },
    }
</script>
<style scoped>
    *{padding:0;margin:0;font-size: 15px;font-weight: 300;}
    a{color:#fff;padding:0;margin:0;text-decoration:none}
    body{font-family:"微软雅黑";}
    .container{width:1200px;margin:0 auto;position:relative;z-index:999;max-width: 1200px;}
    .xiala1,.xiala2,.xiala3,.xiala4{
        position:absolute;top:15px;left:0px;width:150px;padding:0 0;margin-top: 11px;
        border:1px solid #333;background:#000;color:#fff;opacity:0.8;display:none;
    }
    .xiala1,.xiala2,.xiala3{
        padding:10px 0px;
    }
    ul,li{
        list-style:none;
        margin:0px;
        padding:0px
    }
    li{
        display:inline
    }
    .xiala1 li,.xiala2 li,.xiala3 li,.xiala4 li{
        margin-left:20px;float:left;padding:3px 0;display: block;text-align: left;width:100%;
    }
    .nav1,.nav2,.nav3,.nav4{float:left;margin-top:18px;position:relative;font-size:16px;cursor: pointer;}
    #cate_select{
        padding: 0;
        float: left;
        position: relative;
        width:140px;
        margin-right: 4px;
        text-align: left;
        overflow: hidden;
        line-height: 20px;
        cursor: pointer;
        max-height: 20px;
        background: rgba(255, 255, 255, 0.7);
        border: 0px;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: rgb(100,100,100);
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
    }
    .category_div:hover{color:#ea8010;}
    .theme_div:hover{color:#ea8010;}
    .theme_div{
        color:#000;
    }
    #theme_select{
        padding: 0;
        float: left;
        position: relative;
        width:140px;
        margin-right: 4px;
        overflow: hidden;
        line-height: 20px;
        cursor: pointer;
        max-height: 20px;
        background: rgba(255, 255, 255, 0.7);
        border: 0px;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: rgb(100,100,100);
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
    }
    .select_ul{
        overflow:hidden;
    }
    .select_li{
        width: 150px;
        margin: 0;
        height: 30px;
        line-height: 30px;
        text-align: left;
        padding-left: 20px;
        display:block;
    }
    #color_select{
        padding: 0;
        float: left;
        position: relative;
        width:150px;
        margin-right: 4px;
        overflow: hidden;
        line-height: 20px;
        cursor: pointer;
        max-height: 20px;
        background: rgba(255, 255, 255, 0.7);
        border: 0px;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: rgb(100,100,100);
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
    }
    .clearfix:after{
        display: block;
        content:'';
        clear: both;
        height:0;
    }
    .nav1:hover,.nav2:hover,.nav3:hover,.nav4:hover{color:#ef401d;}
    .xiala1 li:hover,.xiala2 li:hover,.xiala3 li:hover{cursor: pointer;color:#ef401d;background:#888;text-align:center;margin-left:0px;}
    /*.color:hover{box-shadow:inset 0px 0px 5px 2px}*/
    .color:hover{border:#000 solid 2px;}
    .color_black:hover{border:#fff solid 2px;}
    .login_sign{
        color:black
    }
    .show_keep_li:hover{
        color:#ea8010 !important;
    }
    .show_keep_li:hover{
        color:#ea8010 !important;
    }
    .tohover:hover{
        color: #ea8010 !important;
    }


</style>
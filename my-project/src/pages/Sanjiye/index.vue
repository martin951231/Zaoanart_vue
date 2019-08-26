<template>
    <div>
        <HeadPage></HeadPage>
        <div id="Mask_layer">
            <div class="addkeep_Mask_layer">
                <img src="../../assets/images/closes.png" width="25px" alt="" style="float: right;margin: -40px 20px 0px 0px;cursor: pointer;" @click="Mask_layer_hidden()">
                <input type="text" class="input" v-model="keep_name" placeholder="请输入收藏夹名">
                <br>
                <button class="button" style="background: #000;" @click="add_keep()">确认</button>
            </div>
        </div>
        <div style="min-height: -webkit-fill-available;">
            <div id="app1" class="clearfix" style="width:1200px;margin: 0 auto;position: relative;">
                <div class="img-con" style="width:60%;float:left;border:none;margin-right: 5%;height: 550px;display: flex;justify-content: center;align-items: center;">
                    <img :src="dataImageList.img" style="max-height:550px;max-width:100%" @click="show2()">
                </div>
                <div class="img-info" style="width:20%;float:left;">
                    <div style="text-align:left;color:#999;" >
                        <h4 v-if="dataImageList.is_face == 1">{{dataImageList.name}}</h4>
                        <div style="margin-top:15px">
                            <span style="display:block">IMAGE ID</span>
                            <span>{{dataImageList.id}}</span>
                        </div>
                        <div style="margin-top:15px">
                            <span style="display:block">CATEGORY</span>
                            <span>{{dataImageList.category_name}}</span>
                        </div>
                        <div style="margin-top:15px">
                            <span style="display:block">SUBJECTS</span>
                            <span>{{dataImageList.theme_name}}</span>
                        </div>
                        <div style="margin-top:15px">
                            <span style="display:block">MAX SIZE</span>
                            <span>{{dataImageList.max_width}}*{{dataImageList.max_length}}cm</span>
                        </div>
                        <div style="margin-top:150px;margin-bottom: 50px;height: 40px;line-height: 40px;">
                            <img src="../../assets/images/aixin.png" alt="" @click="show_hidden($event)" height="40px">
                            <ul id="select" style="width:170px;display:none;margin-top: 20px;">
                                <li>
                                    <div class="select-head">
                                        <span class="select-head-cont" style="min-width:100px;height:20px;" @click="show_select()"></span>
                                        <div style="width: 65px;float: right;color:#000">
                                            <span class="select-icon" @click="show_select()">▼</span>
                                            <button class="btn_bc" style="" @click="addto_keep($event,dataImageList.id)">保存</button>
                                        </div>
                                    </div>
                                    <ul class="option">
                                        <li class="option-item" v-for="keep_info in keep_info">{{keep_info.keep_name}}</li>
                                        <li class="option-item" style="color:#000" @click="Mask_layer_show">添加</li>
                                    </ul>
                                </li>
                            </ul>
                            <!--<div id="example-5">-->
                            <!--<select class="form-control default_select" v-model="keep_option" @change="Mask_layer_show()" style="float: left;width:60%;border-radius: 5px 0px 0px 5px;outline:none;">-->
                            <!--<option v-for="keep_info in keep_info" @mouseenter="op_hover_show($event)" @mouseleave="op_hover_hide($event)" class="">{{keep_info.keep_name}}</option>-->
                            <!--<option value="add" style="color:#ea8010;" @mouseenter="op_hover_show($event)" @mouseleave="op_hover_hide($event)" class="default_option">添加</option>-->
                            <!--</select>-->
                            <!--<button type="button" class="btn" style="background-color:#ea8010; float: right;width: 40%;border-radius: 0px 5px 5px 0px;" @click="addto_keep($event,dataImageList.id)">保存</button>-->
                            <!--</div>-->
                        </div>
                        <a style="color:#999;font-size:20px" :href="'/#/Decoration?img='+dataImageList.img2+'&max_width='+dataImageList.max_width+'&max_height='+dataImageList.max_length+'&imgid='+dataImageList.id+''">智能装裱报价 beta1.0
                            <img src="../../assets/images/right2.png" alt="" width="25px" style="position: absolute;z-index: -999;">
                        </a>
                    </div>
                </div>
            </div>
            <Xszt></Xszt>
            <div style="background:#f8f8f8;padding-top:10px;" class="see">
                <div style="width:1200px;height:340px;margin:0 auto;margin-top:20px;">
                    <span class="tuijian">按类别查看▼</span>
                    <div class="fenlei1">
                        <div>
                            <router-link id="fenlei_a" :to="'/erjiye?pageSize=50&currentPage=1&label_name='+dataLabelList.label_name2+'&label_id='+dataLabelList.id+''" v-for="dataLabelList in dataLabelList" target="_blank">{{ dataLabelList.label_name}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!--<Spxq></Spxq>-->
            <div class='popContainer' style="margin:auto;text-align: center;">
                <div style="position: absolute;right: 30px;top: 30px;z-index: 999;">
                    <img @click="shut()" style="position: relative;display: block;" src="../../assets/images/shut.png" width="50"></img>
                    <img @click="big()" style="position: relative;display: block;margin-top:10px" src="../../assets/images/big.png" width="50"></img>
                    <img @click="small()" style="position: relative;display: block;margin-top:10px" src="../../assets/images/small.png" width="50"></img>
                    <img @click="reduction()" style="position: relative;display: block;margin-top:10px" src="../../assets/images/reduction.png" width="50"></img>
                </div>
                <img id="mask_layer_img" title="右键点击图片关闭预览" style="display: inline-block;"></img>
                <canvas id="myCanvas" style="display:none;"></canvas>
            </div>
        </div>
        <Foot style="margin-bottom:15px;"></Foot>
    </div>
</template>
<script>
    import axios from 'axios'
    import HeadPage from "../../components/HeadPage";
    import Lanmu from "./lanmu";
    import ImgZoom from './imgZoom';
    import Xszt from './xszt';
    import Spxq from './spxq';
    import Foot from "../../components/Foot";

    export default {
        name: 'ImageList',
        components: {
            HeadPage,Foot,Lanmu,ImgZoom,Xszt,Spxq
        },
        data () {
            return {
                configs: {
                    width:650,
                    height:350,
                    maskWidth:100,
                    maskHeight:100,
                    maskColor:'red',
                    maskOpacity:0.2,
                },
                dataImageList: [],
                mayImageList: [],
                dataLabelList: [],
                keep_info:[],
                keep_option:'',
                keep_name:'',
                pageSize : 50 , //每页显示50条数据
                currentPage : 1,
                isMouseDown:false,
                x1:'',
                y1:'',
                img_width:'',
                img_height:'',
                img_offsetX:'',
                img_offsetY:''
            }
        },
        watch: {
            '$route' () {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.initData();
            }
        },
        mounted(){
            $("#example-5").css("display",'none')
            // this.findcategory();
            // this.findtheme();
            this.initData()
            var mask_layer_width = window.screen.width
            var mask_layer_height = window.screen.height/1.5
            var mask_layer_margin = window.screen.width/20
            // $("#mask_layer_img").css({"max-height":mask_layer_height})
            // $("#mask_layer_img").css({"max-width":mask_layer_width})
            // $("#mask_layer_img").css({"margin-top":mask_layer_margin})
            // $(".img-con img").css({"max-width":mask_layer_width * 0.9 * 0.5})
            // console.log(mask_layer_width)
            $('#mask_layer_img').bind('mousewheel', function(e){
                if(e.originalEvent.wheelDelta>0){
                    var bili = $("#mask_layer_img").width()/$("#mask_layer_img").height()
                    $("#mask_layer_img").css('width',($("#mask_layer_img").width()) * 1.1)
                    $("#mask_layer_img").css('height',($("#mask_layer_img").width()) / bili)
                }else{
                    var bili = $("#mask_layer_img").width()/$("#mask_layer_img").height()
                    $("#mask_layer_img").css('width',($("#mask_layer_img").width()) * 0.9)
                    $("#mask_layer_img").css('height',($("#mask_layer_img").width()) / bili)
                }
            })
            $('#mask_layer_img').bind('mouseenter',function(e){
                $("#mask_layer_img").css('flex-shrink','0')
            })
            $('#mask_layer_img').bind('mousedown',function(e){
                $("#mask_layer_img").css('flex-shrink','0')
                this.img_offsetX = $('#mask_layer_img').offset().left
                this.img_offsetY = $('#mask_layer_img').offset().top
                if(e.which==3){
                    $(".popContainer").animate({height:'hide',width:'hide'})
                    $('body').css('overflow-y','')
                    $("#mask_layer_img").unbind('mousemove')
                    this.isMouseDown = false
                    return false
                }
                e.which
                this.isMouseDown = true
                e.preventDefault()
                e = e || window.event
                //鼠标的位置
                this.x1 = e.pageX || e.clientX + document.body.scroolLeft
                this.y1 = e.pageY || e.clientY + document.body.scrollTop
                if(this.isMouseDown){
                    //鼠标相对图片的位置X
                    var offsetX = e.pageX - $('#mask_layer_img').offset().left
                    //鼠标相对图片的位置Y
                    var offsetY = e.pageY - $('#mask_layer_img').offset().top
                    $('#mask_layer_img').mousemove(function(e){
                        //鼠标移动后的位置
                        var x2 = e.pageX || e.clientX + document.body.scroolLeft
                        var y2 = e.pageY || e.clientY + document.body.scrollTop
                        $('#mask_layer_img').offset({'left': x2-offsetX ,'top': y2-offsetY})
                    })
                }else{
                    return false
                }
            })
            $('#mask_layer_img').bind('mouseleave',function(e){
                $("#mask_layer_img").unbind('mousemove')
            })
            $('#mask_layer_img').bind('mouseup',function(e){
                $("#mask_layer_img").unbind('mousemove')
                this.isMouseDown = false
            })
        },
        methods:{
            initData(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/site/up_pv_count3').then((response)=>{
                })
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
                this.$http.get(this.GLOBAL.baseurl + 'v1/goods/findgoodsall',{params:{id: arr2.id}}).then((response)=>{
                    this.dataImageList = response.data.info
                    for(var i=0;i<response.data.label_list.length;i++){
                        response.data.label_list[i].label_name2 = encodeURI(response.data.label_list[i].label_name)
                    }
                    this.dataLabelList = response.data.label_list
                    this.dataImageList.img = 'http://qiniu.zaoanart.com/'+response.data.info.image
                    this.dataImageList.img2 = response.data.info.image
                    var img_id = response.data.info.id
                    this.set_history(img_id)
                })
            },
            show2(){
                var addtoimg = new Image()
                addtoimg.setAttribute('crossOrigin','Anonymous')
                addtoimg.src = this.dataImageList.img
                var c=document.getElementById("myCanvas")
                var ctx=c.getContext("2d")
                addtoimg.onload = function() {
                    var shuiyin = new Image()
                    shuiyin.setAttribute('crossOrigin','Anonymous')
                    shuiyin.src = 'http://www.zaoanart.com:8000/images/zaoanart_logo_shuiyin.png'
                    shuiyin.onload = function(){
                        c.width = addtoimg.naturalWidth
                        c.height = addtoimg.naturalHeight
                        ctx.drawImage(addtoimg,0,0,addtoimg.naturalWidth,addtoimg.naturalHeight)
                        ctx.drawImage(shuiyin,0,0,shuiyin.naturalWidth,shuiyin.naturalHeight,(addtoimg.naturalWidth-shuiyin.naturalWidth)/2,(addtoimg.naturalHeight-shuiyin.naturalHeight)/2,shuiyin.naturalWidth,shuiyin.naturalHeight)
                        $("#mask_layer_img").attr('src',c.toDataURL('image/jpeg'))
                    }
                }
                $(".popContainer").animate({height:'show',width:'show','z-index':'999'})
                $(".popContainer").css('display','flex')
                $(".popContainer").css('justify-content','center')
                $(".popContainer").css('align-items','center')
                $("#mask_layer_img").css('flex-shrink','0')
                $('body').css('overflow-y','hidden')
            },
            hidden2(){
                $(".popContainer").animate({height:'hide',width:'hide'})
                $('body').css('overflow-y','')
            },
            //存历史浏览记录
            set_history(img_id){
                if(this.getCookie('tel')){
                    this.$http.get(this.GLOBAL.baseurl + 'v1/home/set_history',{params:{tel: this.getCookie('tel'),img_id:img_id}}).then((response)=>{
                    })
                }
            },
            show_select(){
                //初始化赋值
                // $('.select-head .select-head-cont').html($('.option li').eq(0).html());
                if($('.select-head-cont').html() == ''){
                    $('.select-head .select-head-cont').html($('.option li').eq(0).html());
                }else{
                    $('.select-head .select-head-cont').html($('.select-head .select-head-cont').html());
                }
                //点击弹出下拉列表
                event.stopPropagation();//阻止冒泡~必须条件！！
                // $('.option').css('display','block');
                //箭头动画
                if($('.select-icon').hasClass('rotate')){
                    $('.select-icon').addClass('rotate1').removeClass('rotate');
                    $('.option').css('display','none');
                }else {
                    $('.option').css('display','block');
                    $('.select-icon').removeClass('rotate1').addClass('rotate');
                }
                //选中后赋值
                $('.option li').click(function(){
                    // $(this).addClass('click_bg').siblings().removeClass('click_bg');
                    if($('.select-head-cont').html() == '添加' || $('.select-head-cont').html() == ''){
                        $('.select-head .select-head-cont').html('');
                    }else{
                        $('.select-head .select-head-cont').html($('.option li').eq($(this).index()).html());
                    }
                    $('.select-icon').addClass('rotate1').removeClass('rotate');
                });
                //点击下拉菜单之外隐藏列表
                $(document).click(function(){
                    $(".option").hide();
                    $('.select-icon').addClass('rotate1').removeClass('rotate');
                });
            },
            show_hidden(e){
                if(!this.getCookie('tel')){
                    toastr.warning("请先登录")
                    return false
                }
                $('#select').animate({width:'toggle'})
                $("#example-5").animate({height:'toggle',width:'toggle','z-index':'999'})
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/select_keep',{params:{tel:this.getCookie('tel')}}).then((response)=>{
                    this.keep_info = response.data
                })
            },
            //显示添加收藏夹
            Mask_layer_show(){
                if(!this.getCookie('tel')){
                    toastr.warning("请先登录")
                    return false
                }else{
                    $("#Mask_layer").css('display','block')
                }
            },
            //隐藏添加收藏夹
            Mask_layer_hidden(){
                $("#Mask_layer").css('display','none')
            },
            add_keep(){
                if(!this.keep_name){
                    toastr.warning("请填写收藏夹名")
                }
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/addkeep',{params:{tel: this.getCookie('tel'),keep_name:this.keep_name}}).then((response)=>{
                    if(response.data == 1){
                        toastr.info("该文件夹名已经存在")
                    }else{
                        toastr.info("添加成功")
                        $("#Mask_layer").css('display','none')
                    }
                })
            },
            addto_keep(e,img_id){
                var keep_name = $('.select-head-cont').html()
                if(!this.getCookie('tel')){
                    toastr.warning("请先登录")
                    return false
                }
                if(!keep_name){
                    toastr.warning("请选择要添加的收藏夹")
                    return false
                }
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/addto_keep',{params:{tel:this.getCookie('tel'),keep_name:keep_name,img_id:img_id}}).then((response)=>{
                    if(response.data == 1){
                        toastr.warning("该图片已经存在此收藏夹")
                        return false
                    }else if(response.data == 2){
                        toastr.warning("添加失败")
                    }else if(response.data == 0){
                        toastr.info("添加成功")
                    }
                })
            },
            show(e){
                $(e.target).css("max-height",'700px')
                $(e.target).css("z-index",'999')
            },
            hidden(e){
                $(e.target).css("position",'')
                $(e.target).css("max-height",'30px')
            },

            big(){
                var bili = $("#mask_layer_img").width()/$("#mask_layer_img").height()
                $("#mask_layer_img").css('width',($("#mask_layer_img").width()) * 1.1)
                $("#mask_layer_img").css('height',($("#mask_layer_img").width()) / bili)
            },
            small(){
                var bili = $("#mask_layer_img").width()/$("#mask_layer_img").height()
                $("#mask_layer_img").css('width',($("#mask_layer_img").width()) * 0.9)
                $("#mask_layer_img").css('height',($("#mask_layer_img").width()) / bili)
            },
            reduction(){
                $('#mask_layer_img').attr('style','')
            },
            shut(){
                $("#mask_layer_img").attr('src','')
                $(".popContainer").animate({height:'hide',width:'hide'})
                $('body').css('overflow-y','')
                $("#mask_layer_img").unbind('mousemove')
                this.isMouseDown = false
            },
            op_hover_show(e){
                $(e.target).css('color','red')
            },
            op_hover_hide(e){
                $(e.target).css('color','#000')
            }
        }
    }
</script>

<style scoped>
    a{padding:0;margin:0;text-decoration:none}
    #app1 {
        font-family: '微软雅黑', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size: 15px;
        font-weight: 300;
        margin-top: 10px;
    }
    #example-5{
        position: absolute;
        display:inline-block;
        width:150px;
        margin-left: 5px;
    }
    .img-con{border: 1px solid #ccc; text-align: center; padding:0;}
    .img-con2{border: 1px solid #bbb; text-align: center; float: left; margin-top: 20px;}
    p{margin:0;padding:0;height:30px;line-height:30px;}
    .tuijiantu{width:1200px;height:311px;margin:0 auto;}
    .title{width:400px;height:30px;margin:0 auto;margin-bottom:20px;}
    .xian1{width:100px;height:15px;float:left;border-bottom:1px solid #888;}
    .tuijian{display:block;font-size:15px;text-align:right;color:#999;margin-right:10px;margin-bottom:5px}
    .xian2{width:100px;height:20px;float:left;border-bottom:1px solid #888;}
    .thumbnail{width:350px;height:218px;}
    .kg{margin-top:10px;}
    .fenlei{margin-top:20px;}
    .fenlei a{display:inline-block;width:158px;height:40px;border:1px solid #e2e2e2;text-align:center;
        margin-top:10px;margin-left:10px;line-height:40px;color:#666;}
    .fenlei a:hover{border:1px solid #ef401d;color:#ef401d;text-decoration:none;}
    #lanmu_1{width:100%;height:40px;background:#f2f2f2;line-height:40px;text-align:left;padding-left:30px;margin-bottom:20px;font-size:14px;color:#333;}
    .zhongjian{width:1200px;height:40px;margin:0 auto;background:#f2f2f2;text-align:left;}
    .zhongjian a{color:#333;}
    .zhongjian a:hover{text-decoration:none;color:#ef401d;}
    .fenlei1{width:1200px;margin-top:20px;}
    .lanmu{width:100%;height:30px;line-height:30px;padding-left:30px;margin-bottom:20px;font-size:14px;color:#333;}
    .lanmu a{color:#333;}
    .lanmu a:hover{text-decoration:none;color:#ef401d;}
    .popContainer{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.6);
        z-index:999999;
        display:none;
        /*position: absolute;*/
    }

    .clearfix:after{
        display: block;
        content:'';
        clear: both;
        height:0;
    }
    ul li{list-style:none;}
    ul{display: inline-block;padding:0px;margin: 0px;}
    li{float:left;margin-left:10px;}
    .select_ul{
        overflow:hidden;
    }
    .xian1{width:100px;height:15px;float:left;border-bottom:1px solid #888;}
    .xian2{width:100px;height:20px;float:left;border-bottom:1px solid #888;}
    .color:hover{box-shadow:inset 0px 0px 5px 2px}
    /*.category_div:hover{color:rgb(255, 129, 0);}*/
    .select_li{
        width: 150px;
        margin: 0;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
    }
    #Mask_layer{
        width:100%;
        z-index:9999999;
        height:100%;
        position:fixed;
        top :0px;
        left: 0px;
        background-color:rgba(0, 0, 0, 0.5);
        text-align:center;
        display: none;
    }
    #Mask_layers{
        width:100%;
        z-index:9999999;
        height:100%;
        position:fixed;
        top :0px;
        background-color:rgba(0, 0, 0, 0.5);
        text-align:center;
        display: none;
    }
    .addkeep_Mask_layer{
        width:500px;
        height:300px;
        padding-top: 60px;
        background-color: #ffffffd1;
        display: inline-block;
        margin-top: 15%;
    }
    .input{
        width: 300px;
        height: 42px;
        margin-top: 25px;
        padding: 0 15px;
        background:rgba(255, 176, 27, 0);
        border: 1px solid rgba(255,255,255,.15);
        -moz-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: black;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        -webkit-transition: all .2s;
    }
    .button2{
        cursor: pointer;
        width: 150px;
        max-height: 30px;
        padding: 0;
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid #9e9e9e;
        /*-moz-box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset, 0 2px 7px 0 rgba(0,0,0,.2);*/
        /*-webkit-box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset, 0 2px 7px 0 rgba(0,0,0,.2);*/
        /*box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset, 0 2px 7px 0 rgba(0,0,0,.2);*/
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: rgb(100, 100, 100);
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        /*-o-transition: all .2s;*/
        /*-moz-transition: all .2s;*/
        /*-webkit-transition: all .2s;*/
    }
    #fenlei_a{
        background-color: #ececec;
        padding: 5px 10px;
        margin-right:5px;
        color: #6d6d6d;
        display: inline-block;
    }
    #fenlei_a:hover{
        color:#ef401d;text-decoration:none
    }
    .color:hover{box-shadow:inset 0px 0px 5px 2px}
    /*.category_div:hover{color:rgb(255, 129, 0);}*/
    .theme_div:hover{color:rgb(255, 129, 0);}
    .button{
        cursor: pointer;
        width: 300px;
        height: 44px;
        margin-top: 25px;
        padding: 0;
        background: #9e9e9e;
        border: 1px solid #9e9e9e;
        -moz-box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset, 0 2px 7px 0 rgba(0,0,0,.2);
        -webkit-box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset, 0 2px 7px 0 rgba(0,0,0,.2);
        box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset, 0 2px 7px 0 rgba(0,0,0,.2);
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        -o-transition: all .2s;
        -moz-transition: all .2s;
        -webkit-transition: all .2s;
    }
    .cent{
        justify-content:center !important;
    }
    .clearfix:after{
        display: block;
        content:'';
        clear: both;
        height:0;
    }
    #cate_select{
        padding: 0;
        float: left;
        /*position: absolute;*/
        width:150px;
        margin-right: 4px;
        overflow: hidden;
        line-height: 30px;
        cursor: pointer;
        max-height: 30px;
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid #9e9e9e;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: rgb(100,100,100);
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
    }
    #theme_select{
        padding: 0;
        float: left;
        /*position: absolute;*/
        width:150px;
        margin-right: 4px;
        overflow: hidden;
        line-height: 30px;
        cursor: pointer;
        max-height: 30px;
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid #9e9e9e;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: rgb(100,100,100);
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
    }
    #color_select{
        padding: 0;
        float: left;
        /*position: absolute;*/
        width:150px;
        margin-right: 4px;
        overflow: hidden;
        line-height: 30px;
        cursor: pointer;
        max-height: 30px;
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid #9e9e9e;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: rgb(100,100,100);
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
    }
    select {
        /*清除select的边框样式 */
        border: none;
        /*清除select聚焦时候的边框颜色*/
        outline: none;
        /*appearance: none;*/
        /*-webkit-appearance: none;*/
        /*-moz-appearance: none;*/
    }
    /*option{*/
    /*-moz-appearance:none; !* Firefox *!*/
    /*-webkit-appearance:none; !* Safari 和 Chrome *!*/
    /*appearance:none;*/
    /*outline: none;*/
    /*border: none;*/
    /*}*/
    .form-control:focus {
        border: none;
        border-color: none;
        box-shadow: none;
    }
    .btn_bc{
        float:right;
        height:20px;
        color:#fff;
        background-color:#000;
        border: 0;
        line-height: 10px;
        padding: 5px;
    }
    #select{
        background-color: #fff;
        font-size: 18px;
        position: absolute;
        color: #000;
    }
    .select-head{
        overflow: hidden;
        width: 200px;
        height: 20px;
        box-sizing: border-box;
        padding: 0 10px;
        line-height: 20px;
    }
    .select-head-cont{
        float: left;
        color: rgb(153, 153, 153);
    }
    .select-icon{
        float: left;
    }
    ul,li{
        float:none;
        margin-left:0px;
    }
    .option{
        width: 170px;
        color: black;
        display: none;
        padding-top: 10px;
    }
    .option-item{
        display:block;
        padding-left:10px;
        cursor: default;
        color: rgb(153, 153, 153);
        height: 25px;
        line-height: 25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .option-item:hover{
        color:#ea8010;
    }
    .click_bg{
        background: #fff;
    }
    .rotate {
        cursor: default;
        transform-origin: center center;
        /* //旋转中心要是正中间 才行*/
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transition: transform 0.2s;
        -moz-transition: -moz-transform 0.2s;
        -moz-transition: -moz-transform 0.2s;
        -o-transition: -o-transform 0.2s;
        -ms-transition: -ms-transform 0.2s;
    }

    .rotate1 {
        cursor: default;
        transform-origin: center center;
        transform: rotate(0deg);
        /*//返回原点*/
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transition: transform 0.2s;
        -moz-transition: -moz-transform 0.2s;
        -moz-transition: -moz-transform 0.2s;
        -o-transition: -o-transform 0.2s;
        -ms-transition: -ms-transform 0.2s;
    }

</style>
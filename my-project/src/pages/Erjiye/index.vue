<template>
    <div style="">
        <input type="hidden" value="早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧">
        <h1 style="display: none;position: absolute;">早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧</h1>
        <HeadPage style="margin-bottom:15px;" ref="headPage"></HeadPage>
        <div id="Mask_layer">
            <div class="addkeep_Mask_layer">
                <img src="../../assets/images/closes.png" width="25px" alt="" style="float: right;margin: -40px 20px 0px 0px;cursor: pointer;" @click="Mask_layer_hidden()">
                <input type="text" class="input" v-model="keep_name" placeholder="请输入收藏夹名">
                <button class="button" style="background:#000;" @click="add_keep()">确认</button>
            </div>
        </div>
        <div class="lanmu clearfix" style="display: flex;justify-content: center;position: relative;">
            <span style="position: absolute;left: 0;height: 30px;line-height: 30px;"><a href="/#/erjiye?cate_id=0&theme_id=0&color_id=0&search=&pageSize=50&currentPage=1">全部商品</a> > {{lanmu}}</span>
            <!--<span v-if="is_prompt !=0" style="height: 30px;line-height: 30px;float: left;"><a href="/#/erjiye?cate_id=0&theme_id=0&color_id=0&pageSize=50&currentPage=1">全部商品</a> > {{prompts}}</span>-->
            <div style="position: absolute;width: 100%;height: 30px;line-height: 30px;display: flex;align-items: center;justify-content: center;">
                <div class="contrast_div" style="display: inline-block;border:2px solid #ccc;padding: 2px;width:36px;height:22px;margin-right:20px">
                    <div class="contrast_a" @click="contrast_tab($event,-1)" data_id="0" style="width: 28px;height: 14px;background-color: #ccc;"></div>
                </div>
                <div class="contrast_div" style="display: inline-block;border:2px solid #ccc;padding: 2px;width:22px;height:36px;margin-right:20px">
                    <div class="contrast_a" @click="contrast_tab($event,1)" data_id="0" style="width: 14px;height: 28px;background-color: #ccc;"></div>
                </div>
                <div class="contrast_div" style="display: inline-block;border:2px solid #ccc;padding: 2px;width:28px;height:28px;margin-right:20px">
                    <div class="contrast_a" @click="contrast_tab($event,0)" data_id="0" style="width: 20px;height: 20px;background-color: #ccc;"></div>
                </div>

            </div>
        </div>
        <div v-if="status" style="width: 100%;position:absolute;top:150px;bottom:120px">
            <div class="list" style="min-height:100%;">
                <template v-if="count">
                    <section class = "gallery">
                        <div id="gallery_id" v-for="dataImageList in dataImageList" :key="dataImageList.id" @mouseenter="shows($event)" @mouseleave="hiddens($event)">
                            <!--添加收藏夹-->
                            <div id="example-5">
                                <select class="form-control" v-model="keep_option" @mouseenter="keep_show2()" style="float: left;width:60%;border-radius:0px" @click="keep_show()" @change="Mask_layer_show()">
                                    <option v-for="keep_info in keep_info">{{keep_info.keep_name}}</option>
                                    <option value="add" style="color:#000">添加</option>
                                </select>
                                <button type="button" class="btn btn-warning" style="background-color:#000;border:1px solid #000;color:#fff;float: right;width: 40%;border-radius:0px" @click="addto_keep($event,dataImageList.id)">收藏</button>
                            </div>
                            <!--收藏夹遮罩层-->
                            <div id="icon" @click="to_sanji(dataImageList.id)"  style="z-index:999;position: absolute;height:0px;width:100%;text-align:left;padding: 0px 0px 0px 5px;background-color: #0000007d;overflow: hidden;">
                            </div>
                            <img id="img" v-lazy="dataImageList.image" height="200px" alt="早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧">
                        </div>
                    </section>
                    <!--<MoPaging-->
                            <!--:page-index="currentPage"-->
                            <!--:total="count"-->
                            <!--:pageid="pageId"-->
                            <!--:page-size="pageSize"-->
                            <!--@change="pageChange">-->
                    <!--</MoPaging>-->
                    <div id="page-break">
                        <ul>
                            <li v-if="cur>1">
                                <a class="page-break-li-a" v-on:click="cur=1,pageClick()">首页</a>
                            </li>
                            <li v-if="cur>1">
                                <img class="tab_page_prev_img" src="../../assets/images/tab_page_left.png" alt="">
                                <a class=" tab_page_prev" v-on:click="cur--,pageClick()">上 一 页</a>
                            </li>
                            <li v-if="cur>1" >
                                <a style="cursor: default;" class="page-break-li">...</a>
                            </li>
                            <li v-for="item in indexs" v-bind:class="{'active':cur==item}">
                                <a class="page-break-li-a" v-on:click="btnClick(item), pageClick()">{{item}}</a>
                            </li>
                            <li v-if="cur!=all">
                                <a style="cursor: default;" class="page-break-li">...</a>
                            </li>
                            <li v-if="cur!=all">
                                <a class=" tab_page_next" v-on:click="cur++,pageClick()">下 一 页</a>
                                <img class="tab_page_next_img" src="../../assets/images/tab_page_right.png" alt="">
                            </li>
                            <li v-if="cur!=all">
                                <a class="page-break-li-a" v-on:click="cur=all,pageClick()" >尾页</a>
                            </li>
                            <li><a style="cursor: default;">共<i>{{all}}</i>页</a></li>
                            <li><a style="cursor: default;">共<i>{{count}}</i>条</a></li>
                            <div class="jumpbox">
                                <input type="text" oninput ="value=value.replace(/[^\d]/g,'')" v-model="jump_page" class="jumppage" />
                                <a class="jumpbtn page-break-li-a" v-on:click="pageSkip()">跳转</a>
                            </div>
                        </ul>
                    </div>
                </template>
                <template v-else>
                    <span>{{prompt}}</span>
                </template>
            </div>
            <Foot style="clear: both;"></Foot>
        </div>
        <div v-if="status==0" style="position:absolute;top:150px;bottom:120px">请等待</div>
        <div id="goTopBtn"><span class="icon_top"></span></div>
    </div>

</template>
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.7.1/less.min.js" ></script>
<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
<script>
    import HeadPage from "../../components/HeadPage";
    import Foot from "../../components/Foot";
    import baguetteBox from "../../assets/css/baguetteBox.css";
    import style from "../../assets/css/style.css";
    import Paginate from 'vuejs-paginate'
    import baguetteBox1 from "../../assets/js/baguetteBox.js";
    import axios from 'axios'
    import MoPaging from './mo-paging'
    export default {
        name: 'ImageList',
        components: {
            HeadPage,Foot,MoPaging
        },
        data () {
            return {
                dataCategoryList: [],
                dataThemeList: [],
                dataImageList: [], //表格显示数据
                pageSize : 50 , //每页显示50条数据
                currentPage : 1, //当前页码
                count : 0, //总记录数
                pageId:1,//当前最后一张图片id
                cur: 1,
                all: 1,
                skipPage:1,
                lanmus : '',
                lanmu : '',
                jump_page:null,
                prompt : '',
                prompts : '',
                is_prompt : 0,
                selected: '',
                telphone:'',
                keep_info:[],
                keep_option:'',
                category:[],
                theme:[],
                category2:[],
                theme2:[],
                info:[],
                status:0,
                keep_name:'',
                contrast:2,
            }
        },
        activated() {
        },
        watch: {
            '$route' () {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.initData();
                // this.findcategory();
                // this.findtheme();
                // this.color_show();
                // this.category_show();
                // this.theme_show();
                // this.cate_find(e);
            },
            'jump_page'(){
                if(this.jump_page>=this.all){
                    this.jump_page=this.all
                }
            },
            'dataImageList'(){
                // this.initData();
            },
            'contrast'(){
                // this.currentPage = 1;
                this.initData();
                // this.findcategory();
                // this.findtheme();
                // this.color_show();
                // this.category_show();
                // this.theme_show();
            }
        },
        mounted(){
            this.telphone = this.getCookie('tel');
            this.initData();
            // this.findcategory();
            // this.findcategory1();
            // this.findtheme();
        },
        computed: {
            indexs(){
                var left = 1;
                var right = this.all;
                var arr = [];
                if(this.all>=5){
                    if(this.cur>3 && this.cur<this.all-2){
                        left = this.cur-2;
                        right = this.cur+2;
                    }else if(this.cur<=3){
                        left=1;
                        right=5;
                    }else{
                        left=this.all-5;
                        right=this.all;
                    }
                }
                while(left<=right){
                    arr.push(left);
                    left++;
                }
                return arr;
            }
        },
        methods:{
            initData(){
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.$http.get(this.GLOBAL.baseurl + 'v1/site/up_pv_count2').then((response)=>{
                })
                var url=location.href;
                var i=url.indexOf('?');
                if(i==0)return;
                var querystr=url.substr(i+1);
                var arr1=querystr.split('&');
                var arr2=new Object();
                for(i in arr1){
                    var ta=arr1[i].split('=');
                    arr2[ta[0]]=ta[1];
                }
                for(var k in arr2){
                    var param = k
                }
                this.info = arr2
                this.cur = Number(arr2.currentPage)
                function unicode(str){
                    var res = [];
                    for ( var i=0; i<str.length; i++ ) {
                        res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);
                    }
                    return(JSON.stringify(res))
                }
                this.GLOBAL.search = decodeURI(arr2.search)
                switch(Number(arr2.color_id))
                {
                    case 0:
                        $("#color_select").css("background-color",'rgb(255, 255, 255, 0.7)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('颜色')
                        $("#color_select_img").css('display','inline-block')
                        break;
                    case 1:
                        // $("#color_select_one").css("background-color",'rgb(255,0,0)');
                        $("#color_select").css("background-color",'rgb(255,0,0)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 2:
                        // $("#color_select").css("background-color",'rgb(255,150,0)');
                        $("#color_select").css("background-color",'rgb(255,150,0)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 3:
                        // $("#color_select_one").css("background-color",'rgb(255,255,0)');
                        $("#color_select").css("background-color",'rgb(255,255,0)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 4:
                        // $("#color_select_one").css("background-color",'rgb(0,255,0)');
                        $("#color_select").css("background-color",'rgb(0,255,0)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 5:
                        // $("#color_select_one").css("background-color",'rgb(0,255,255)');
                        $("#color_select").css("background-color",'rgb(0,255,255)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 6:
                        // $("#color_select_one").css("background-color",'rgb(0,0,255)');
                        $("#color_select").css("background-color",'rgb(0,0,255)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 7:
                        // $("#color_select_one").css("background-color",'rgb(100,50,150)');
                        $("#color_select").css("background-color",'rgb(100,50,150)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 8:
                        // $("#color_select_one").css("background-color",'rgb(255,150,255)');
                        $("#color_select").css("background-color",'rgb(255,150,255)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 9:
                        // $("#color_select_one").css("background-color",'rgb(255,255,255)');
                        $("#color_select").css("background-color",'rgb(255,255,255)');
                        $("#color_select_div").css("border",'2px solid #000');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 10:
                        // $("#color_select_one").css("background-color",'rgb(0,0,0)');
                        $("#color_select").css("background-color",'rgb(0,0,0)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                    case 11:
                        // $("#color_select_one").css("background-color",'rgb(120,120,120)');
                        $("#color_select").css("background-color",'rgb(120,120,120)');
                         $("#color_select_div").css("border",'none');
                        $("#color_select_one").html('')
                        $("#color_select_img").css('display','none')
                        break;
                }
                if(param == 'label_id') {
                    this.is_prompt = 1
                    var goods_id = ''
                    if (arr2.id) {
                        goods_id = arr2.id
                    }
                    this.$http.get(this.GLOBAL.baseurl + 'v1/goods/findgoodsd', {
                        params: {
                            label_id: arr2.label_id,
                            id: goods_id,
                            pageSize: arr2.pageSize,
                            currentPage: arr2.currentPage,
                            contrast:this.contrast
                        }
                    }).then((response) => {
                        if (response.body) {
                            this.count = Number(response.body[0].count)
                            this.all = Math.ceil(Number(response.body[0].count)/arr2.pageSize)
                        } else {
                            this.all = 1
                            this.count = false
                            this.prompt = '暂时没有图片'
                        }
                        for(var i = 0; i<response.body.length;i++ ){
                            response.body[i].image  = 'http://qiniu.zaoanart.com/'+response.body[i].image+'?imageView2/2/h/500'
                        }
                        this.dataImageList = response.body
                        this.prompts = decodeURI(arr2.label_name)
                    })
                }else if(param == 'term'){
                    this.is_prompt = 1
                    this.$http.get(this.GLOBAL.baseurl + 'v1/goods/findgoodsown',{params:{term: decodeURI(arr2.term),pageSize:arr2.pageSize,currentPage:arr2.currentPage,contrast:this.contrast}}).then((response)=>{
                        if(response.body){
                            for(var i = 0; i<response.body.length;i++ ){
                                response.body[i].image  = 'http://qiniu.zaoanart.com/'+response.body[i].image+'?imageView2/2/h/500'
                            }
                        }
                        if(response.body){
                            this.count = Number(response.body[0].count)
                            this.all = Math.ceil(Number(response.body[0].count)/arr2.pageSize)
                        }else{
                            this.count = false
                            this.all = 1
                            this.prompt = '暂时没有图片'
                        }
                        this.dataImageList = response.body
                        this.prompts = decodeURI(arr2.term)
                    })
                }else if(param == 'label_all'){
                    this.is_prompt = 1
                    this.$http.get(this.GLOBAL.baseurl + 'v1/goods/findmayimgall',{params:{id: arr2.label_all,pageSize:arr2.pageSize,currentPage:arr2.currentPage,contrast:this.contrast}}).then((response)=>{
                        this.prompts = response.body[0].label_name
                        this.dataImageList = response.body
                        this.count = Number(response.body[0].count)
                        this.all = Math.ceil(Number(response.body[0].count)/arr2.pageSize)
                        for(var q=0;q<response.data.length;q++){
                            this.dataImageList[q].image = 'http://qiniu.zaoanart.com/'+this.dataImageList[q].image
                        }
                    })
                }else{
                    // if(arr2.cate_id != 0){
                    //     $("#cate_select_one").css('color','rgb(253, 162, 100)')
                    // }
                    // if(arr2.theme_id != 0){
                    //     $("#theme_select_one").css('color','rgb(253, 162, 100)')
                    // }
                    if(arr2.term){
                        var search = decodeURI(arr2.term)
                    }else{
                        var search = null
                    }
                    this.is_prompt = 0
                    this.$http.get(this.GLOBAL.baseurl + 'v1/goods/category_find',{params:{cate_id:arr2.cate_id,theme_id:arr2.theme_id,color_id:arr2.color_id,search:this.GLOBAL.search,pageSize:arr2.pageSize,currentPage:arr2.currentPage,contrast:this.contrast}}).then(function(response){
                        for(var i = 0; i<response.body.length;i++ ){
                            response.body[i].image  = 'http://qiniu.zaoanart.com/'+response.body[i].image+'?imageView2/2/h/500'
                        }
                        if(response.body){
                            this.count = Number(response.body[0].count)
                            this.all = Math.ceil(Number(response.body[0].count)/arr2.pageSize)
                            this.lanmu = response.body[0].end_condition
                        }else{
                            this.count = false
                            this.all = 1
                            this.prompt = '暂时没有图片'
                        }
                        this.dataImageList = response.body
                        for(var p=0; p<$(".category_div").length;p++){
                            $(".category_div")[p].style.backgroundColor = ''
                            $(".category_div")[p].style.color = ''
                        }
                        if(arr2.cate_id != 0){
                            $("#cate_select").attr('data_id',arr2.cate_id)
                            $("#category"+arr2.cate_id).css('background-color','black')
                            $("#category"+arr2.cate_id).css('color','rgb(253, 162, 100)')
                            $("#cate_select_one").text($('#category'+arr2.cate_id).text().replace(/\s*/g,""))
                        }else{
                            $("#cate_select_one").text('类别')
                        }
                        for(var e=0; e<$(".theme_div").length;e++){
                            $(".theme_div")[e].style.backgroundColor = ''
                            $(".theme_div")[e].style.color = ''
                        }
                        if(arr2.theme_id != 0){
                            $("#theme_select").attr('data_id',arr2.theme_id)
                            $("#themes"+arr2.theme_id).css('background-color','black')
                            $("#themes"+arr2.theme_id).css('color','rgb(253, 162, 100)')
                            $("#theme_select_one").text($('#themes'+arr2.theme_id).text().replace(/\s*/g,""))
                        }else{
                            $("#theme_select_one").text('主题')
                        }
                    })
                }
                $(window).scroll(function(){
                    var sc=$(window).scrollTop();
                    var rwidth=$(window).width()
                    if(sc>500){
                        $("#goTopBtn").css("display","block");
                        $("#goTopBtn").css("left",(rwidth-106)+"px")
                    }else{
                        $("#goTopBtn").css("display","none");
                    }
                })
                $("#goTopBtn").click(function(){
                    var sc=$(window).scrollTop();
                    $('body,html').animate({scrollTop:0},100);
                })

                $(".allnews").click(function () {
                    $("#allcon").css("height", "auto");
                    $(this).hide(1000);
                });
                this.status = true
            },
            btnClick(num){
                if(num!=this.cur){
                    this.cur=num;
                }
            },
            pageClick(){
                var url=location.href;
                var i=url.indexOf('?');
                if(i==0)return;
                var querystr=url.substr(i+1);
                var arr1=querystr.split('&');
                var arr2=new Object();
                for(i in arr1){
                    var ta=arr1[i].split('=');
                    arr2[ta[0]]=ta[1];
                }
                for(var k in arr2){
                    var param = k
                }
                if(!arr2.cate_id){
                    arr2.cate_id = 0
                }
                if(!arr2.theme_id){
                    arr2.theme_id = 0
                }
                if(!arr2.color_id){
                    arr2.color_id = 0
                }
                if(!arr2.search){
                    arr2.search = 0
                }
                this.$router.push({path:"/erjiye?cate_id="+arr2.cate_id+"&theme_id="+arr2.theme_id+"&color_id="+arr2.color_id+"&search="+arr2.search+"&pageSize="+arr2.pageSize+"&currentPage="+this.cur+""})
                console.log('现在是'+this.cur+'页')
            },
            pageSkip(){
                this.skipPage = Number(document.getElementsByClassName("jumppage")[0].value);
                var page = this.skipPage
                this.pageSkips(page)
            },
            pageSkips(page){
                var maxPage = this.all;
                var skipPage = page
                if(!skipPage){
                    alert("请输入跳转页码");
                    return;
                }else if(skipPage<1 || skipPage>maxPage){
                    this.btnClick(maxPage);
                    this.pageClick();
                }else{
                    this.cur=skipPage;
                    this.btnClick(skipPage);
                    this.pageClick();
                }
            },
            pageChange (page) {
                this.currentPage = page
                this.initData()
            },
            shows(e){
                $(e.target).children("#icon").css({height:'100%'})
                $(e.target).children("#icon").prev("#example-5").css({height:'50px','z-index':'9999'})
            },
            hiddens(e){
                $(e.target).children("#icon").css({height:'0px'})
                $(e.target).children("#icon").prev("#example-5").css({height:'0px'})
            },
            keep_show(){
                if(!this.telphone){
                    toastr.warning("请先登录")
                    return false
                }
            },
            keep_show2(){
                if(this.telphone){
                    this.$http.get(this.GLOBAL.baseurl + 'v1/home/select_keep',{params:{tel:this.telphone}}).then((response)=>{
                        this.keep_info = response.data
                    })
                }
            },
            to_sanji(id){
                let routeData = this.$router.resolve({path:"/sanjiye?id="+id})
                window.open(routeData.href, '_blank')
            },
            addto_keep(e,img_id){
                if(!this.telphone){
                    toastr.warning("请先登录")
                    return false
                }
                if(!this.keep_option){
                    toastr.warning("请选择要添加的收藏夹")
                    return false
                }
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/addto_keep',{params:{tel:this.telphone,keep_name:this.keep_option,img_id:img_id}}).then((response)=>{
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
            findcategory(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/category/findcategory').then(function(res){
                    this.category = res.data
                })
            },
            findcategory1(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/category/findcategory1').then(function(res){
                    this.category2 = res.data
                    for(var k=0;k<this.category2.length;k++){
                        if(this.category2[k].id == this.info.cate_id){
                            $("#cate_select_one").html(this.category2[k].category_name)
                        }
                    }
                })
            },
            findtheme(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/theme/findtheme').then(function(res){
                    this.theme = res.data
                    for(var k=0;k<this.theme.length;k++){
                        if(this.theme[k].id == this.info.theme_id){
                            $("#theme_select_one").html(this.theme[k].theme_name)
                        }
                    }
                })
            },
            show(e){
                $(e.target).css("max-height",'700px')
                $(e.target).css("position",'absolute')
                $(e.target).css("z-index",'999')
            },
            hidden(e){
                $(e.target).css("max-height",'20px')
            },
            // category_find(e,cate_id){
            //     this.currentPage = 1
            //     $(e.target).parent().parent().attr('data_id',cate_id)
            //     $(e.target).parent().parent().css("max-height",'30px')
            //     $("#cate_select_one").text($.trim($(e.target).text()))
            //     if(cate_id == 0){
            //         $("#cate_select_one").css('color','rgb(100, 100, 100)')
            //     }else{
            //         $("#cate_select_one").css('color','rgb(253, 162, 100)')
            //     }
            //     $("#cate_select").attr('data_id',cate_id)
            //     var theme_id = $("#theme_select").attr('data_id')
            //     var color_id = $("#color_select").attr('data_id')
            //     this.$router.push({path:"/erjiye?cate_id="+cate_id+"&theme_id="+theme_id+"&color_id="+color_id+"&pageSize="+this.pageSize+"&currentPage="+this.currentPage+""})
            // },
            // theme_find(e,theme_id){
            //     this.currentPage = 1
            //     $(e.target).parent().attr('data_id',theme_id)
            //     $(e.target).parent().css("max-height",'30px')
            //     $("#theme_select_one").text($.trim($(e.target).text()))
            //     if(theme_id == 0){
            //         $("#theme_select_one").css('color','rgb(100, 100, 100)')
            //     }else{
            //         $("#theme_select_one").css('color','rgb(253, 162, 100)')
            //     }
            //     $("#theme_select").attr('data_id',theme_id)
            //     var cate_id = $("#cate_select").attr('data_id')
            //     var color_id = $("#color_select").attr('data_id')
            //     this.$router.push({path:"/erjiye?cate_id="+cate_id+"&theme_id="+theme_id+"&color_id="+color_id+"&pageSize="+this.pageSize+"&currentPage="+this.currentPage+""})
            // },
            // color_find(e,color_id){
            //     this.currentPage = 1
            //     $(e.target).parent().attr('data_id',color_id)
            //     $(e.target).parent().css("max-height",'30px')
            //     switch(color_id)
            //     {
            //         case 0:
            //             $("#color_select").css("background-color",'rgba(255, 255, 255, 0.7)');
            //             // $("#color_select_one").html('颜色')
            //             break;
            //         case 1:
            //             $("#color_select").css("background-color",'rgb(255,0,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 2:
            //             $("#color_select").css("background-color",'rgb(255,150,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 3:
            //             $("#color_select").css("background-color",'rgb(255,255,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 4:
            //             $("#color_select").css("background-color",'rgb(0,255,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 5:
            //             $("#color_select").css("background-color",'rgb(0,255,255)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 6:
            //             $("#color_select").css("background-color",'rgb(0,0,255)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 7:
            //             $("#color_select").css("background-color",'rgb(100,50,150)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 8:
            //             $("#color_select").css("background-color",'rgb(255,150,255)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 9:
            //             $("#color_select").css("background-color",'rgb(255,255,255)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 10:
            //             $("#color_select").css("background-color",'rgb(0,0,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 11:
            //             $("#color_select").css("background-color",'rgb(120,120,120)');
            //             // $("#color_select_one").html('')
            //             break;
            //     }
            //     $("#color_select").attr('data_id',color_id)
            //     var cate_id = $("#cate_select").attr('data_id')
            //     var theme_id = $("#theme_select").attr('data_id')
            //     this.$router.push({path:"/erjiye?cate_id="+cate_id+"&theme_id="+theme_id+"&color_id="+color_id+"&pageSize="+this.pageSize+"&currentPage="+this.currentPage+""})
            // },
            // color_show(){
            //     var num = parseInt(this.info.color_id)
            //     switch(num)
            //     {
            //         case 0:
            //             $("#color_select").css("background-color",'rgba(255, 255, 255, 0.7)');
            //             // $("#color_select_one").html('请选择')
            //             break;
            //         case 1:
            //             $("#color_select").css("background-color",'rgb(255,0,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 2:
            //             $("#color_select").css("background-color",'rgb(255,150,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 3:
            //             $("#color_select").css("background-color",'rgb(255,255,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 4:
            //             $("#color_select").css("background-color",'rgb(0,255,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 5:
            //             $("#color_select").css("background-color",'rgb(0,255,255)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 6:
            //             $("#color_select").css("background-color",'rgb(0,0,255)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 7:
            //             $("#color_select").css("background-color",'rgb(100,50,150)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 8:
            //             $("#color_select").css("background-color",'rgb(255,150,255)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 9:
            //             $("#color_select").css("background-color",'rgb(255,255,255)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 10:
            //             $("#color_select").css("background-color",'rgb(0,0,0)');
            //             // $("#color_select_one").html('')
            //             break;
            //         case 11:
            //             $("#color_select").css("background-color",'rgb(120,120,120)');
            //             // $("#color_select_one").html('')
            //             break;
            //     }
            // },
            category_show(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/category/findcategory1').then((response)=>{
                    this.category2 = response.data
                    for(var v=0;v<this.category2.length;v++){
                        if(this.info.cate_id == 0){
                            for(var p=0; p<$(".category_div").length;p++){
                                $(".category_div")[p].style.backgroundColor = ''
                                $(".category_div")[p].style.color = ''
                            }
                        }
                        if(this.category2[v].id == this.info.cate_id){
                            $("#cate_select_one").html(this.category2[v].category_name)
                            for(var p=0; p<$(".category_div").length;p++){
                                $(".category_div")[p].style.backgroundColor = ''
                                $(".category_div")[p].style.color = ''
                            }
                            $("#category"+this.category2[v].id).css('background-color','black')
                            $("#category"+this.category2[v].id).css('color','rgb(253, 162, 100)')
                        }
                    }
                })
            },
            theme_show(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/theme/findtheme').then(function(res){
                    this.theme2 = res.data
                    for(var t=0;t<this.theme2.length;t++){
                        if(this.info.theme_id == 0){
                            for(var e=0; e<$(".theme_div").length;e++){
                                $(".theme_div")[e].style.backgroundColor = ''
                                $(".theme_div")[e].style.color = ''
                            }
                        }
                        if(this.theme2[t].id == this.info.theme_id){
                            for(var r=0; r<$(".theme_div").length;r++){
                                $(".theme_div")[r].style.backgroundColor = ''
                                $(".theme_div")[r].style.color = ''
                            }
                            $("#themes"+this.theme2[t].id).css('background-color','black')
                            $("#themes"+this.theme2[t].id).css('color','rgb(253, 162, 100)')
                        }
                    }
                })
            },
            cate_find(e,id){
                // var data_info = e.target.getAttribute("data_id")
                $(e.target).parent().parent().attr('data_id',id)
                var theme_id = $("#theme_select").attr('data_id')
                var color_id = $("#color_select").attr('data_id')
                this.$router.push({path:"/erjiye?cate_id="+id+"&theme_id="+theme_id+"&color_id="+color_id+"&pageSize="+this.pageSize+"&currentPage="+this.currentPage+""})
            },
            //显示添加收藏夹
            Mask_layer_show(){
                if(!this.telphone){
                    toastr.warning("请先登录")
                    return false
                }else{
                    if(this.keep_option == 'add'){
                        $("#Mask_layer").css('display','block')
                        this.keep_option = ''
                    }
                }
            },
            //隐藏添加收藏夹
            Mask_layer_hidden(){
                $("#Mask_layer").css('display','none')
            },
            //添加收藏夹
            add_keep(){
                if(!this.keep_name){
                    toastr.warning("请填写收藏夹名")
                }
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/addkeep',{params:{tel: this.telphone,keep_name:this.keep_name}}).then((response)=>{
                    if(response.data == 1){
                        toastr.info("该文件夹名已经存在")
                    }else{
                        toastr.info("添加成功")
                        $("#Mask_layer").css('display','none')
                    }
                })
            },
            contrast_tab(e,num){
                var data_id = $(e.target).attr('data_id')
                if(data_id == 0){
                    $('.contrast_a').attr('data_id',0)
                    $(e.target).attr('data_id',1)
                    this.contrast = num
                    $('.contrast_a').css('background-color','#ccc')
                    $('.contrast_div').css('border-color','#ccc')
                    $(e.target).css('background-color','#000')
                    $(e.target).parent().css('border-color','#000')
                }else{
                    $('.contrast_a').attr('data_id',0)
                    // $(e.target).css('background-color','#000')
                    this.contrast = 2
                    $('.contrast_a').css('background-color','#ccc')
                    $('.contrast_div').css('border-color','#ccc')
                }
            }
        },
    }

</script>
<style scoped>
    html,body {
        height: 100%;
        margin: 0px;
        padding: 0px;
    }
    .wenzi{font-size:12px;background:#000;position:absolute;display:none;bottom:0;}
    #yema a{color:#888;}
    .paging-item{background:#fff;}
    .paging-item-current{background:red;border:1px solid red;text-decoration:none;}
    .paging-item-current a{color:#fff;}
    .ivu-page{display:inline-block;width:300px;}
    .ivu-page,.ivu-page li{list-style:none;}
    .ivu-page li{float:left;margin-right:20px;}
    .ivu-col-span-lg-6{display:inline;}
    .ivu-select-selected-value{display:none;}
    .ivu-page-item a{display:inline-block;width:30px;border:1px solid #eee;}
    .ivu-page li:hover{border:1px solid blue;}
    /*分页*/
    #page-break{
        margin-top: 20px;
        margin-left: 20px;
        width: 100%;
    }
    #page-break li{list-style: none;}
    #page-break a{ text-decoration: none;float: left;padding: 6px 12px;color: #646464;cursor: pointer}
    /*#page-break a:hover{background-color: #eee;}*/
    #page-break a .banclick{cursor: not-allowed;}
    #page-break .active a{color: #fff;cursor: default;background-color: #000;}
    #page-break i{font-style: normal;color: #646464;margin: 0px 4px;font-size: 12px;}
    #page-break .jumpbox {display:inline-block;}
    #page-break .jumpbox .jumppage {
        width: 50px;
        /* padding-bottom: 0px; */
        text-align: center;
        /* display: flex; */
        /* align-items: flex-end; */
        float: left;
        outline: none;
        border: none;
        font-size: 15px;
        color:#646464;
        padding-top: 5px;
        height: 28px;
        border-bottom: 1px solid #646464;
    }
    .tab_page_prev{
        width: 200px;
        height:50px;
        background-color: #000;
        color: #fff !important;
        font-size: 25px;
        position: absolute;
        left: 0px;
    }
    .tab_page_prev_img{
        z-index: 999;
        padding-top: 10px;
        width: 30px;
        background-color: #000;
        color: #fff !important;
        font-size: 25px;
        position: absolute;
        left: 10px;
    }
    .tab_page_next_img{
        z-index: 999;
        padding-top: 10px;
        width: 30px;
        background-color: #000;
        color: #fff !important;
        font-size: 25px;
        position: absolute;
        right: 10px;
    }
    .tab_page_next{
        width: 200px;
        background-color: #000;
        color: #fff !important;
        font-size: 25px;
        position: absolute;
        right: 0px;
    }
    .page-break-li:hover{
        background-color:#fff;
    }
    .page-break-li-a:hover{
        background-color: #eee;
    }
    #page-break .jumpbox .jumpbtn {cursor: pointer;}
    #page-break .jumpbox .jumpbtn:active {color: #337ab7;}


    .thumbnail{
        display:block;
        margin-bottom:5px;
    }
    .lanmu{
        width:1200px;
        height:30px;
        line-height:30px;
        margin: 0 auto;
        font-size:14px;
        color:#333;
    }
    .lanmu a{color:#333;cursor: pointer;}
    .lanmu a:hover{text-decoration:none;color:#ef401d;}
    ul li{list-style:none;}
    ul{display: inline-block;}
    li{float:left;}
    .select_ul{
        overflow:hidden;
    }
    .select_li{
        width: 150px;
        margin: 0;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
    }
    #example-5{
        position: absolute;
        height:0px;
        display: block;
        width:150px;
        overflow: hidden;
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
        color: rgb(100,100,100);
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        /*-o-transition: all .2s;*/
        /*-moz-transition: all .2s;*/
        /*-webkit-transition: all .2s;*/
    }
    .color:hover{box-shadow:inset 0px 0px 5px 2px}
    .category_div:hover{color:rgb(255, 129, 0);}
    .button{
        cursor: pointer;
        width: 300px;
        height: 44px;
        margin-top: 25px;
        padding: 0;
        background: #000;
        border: 1px solid #000;
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
    .addkeep_Mask_layers{
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
        background: rgba(45,45,45,.15);
        border: 1px solid rgba(255,255,255,.15);
        -moz-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
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
        position: relative;
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
        position: relative;
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
        position: relative;
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

    .mo-paging {
        display: inline-block;
        padding: 0;
        margin: 1rem 0;
        font-size: 0;
        list-style: none;
        user-select: none;
    > .paging-item {
        display: inline;
        font-size: 14px;
        position: relative;
        padding: 6px 12px;
        line-height: 1.42857143;
        text-decoration: none;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-left: -1px;
        cursor: pointer;
        color: #0275d8;
    :first-child {
        margin-left: 0;
    }
    :hover {
        background-color: #f0f0f0;
        color: #0275d8;
    }

    .paging-item--disabled,
    .paging-item--more{
        background-color: #fff;
        color: #505050;
    }
    /*禁用*/
      .paging-item--disabled {
          cursor: not-allowed;
          opacity: .75;
      }
    .paging-item--more,
    .paging-item--current {
        cursor: default;
    }
    /*选中*/
      .paging-item--current {
          background-color: #0275d8;
          color:#fff;
          position: relative;
          z-index: 1;
          border-color: #0275d8;
      }
    }
    }

</style>
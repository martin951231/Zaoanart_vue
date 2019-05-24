<template>
    <div>
        <HeadPage style="margin-bottom:15px;" ref="headPage"></HeadPage>
        <div id="Mask_layer">
            <div class="addkeep_Mask_layer">
                <img src="../../assets/images/closes.png" width="25px" alt="" style="float: right;margin: -40px 20px 0px 0px;cursor: pointer;" @click="Mask_layer_hidden()">
                <input type="text" class="input" v-model="keep_name" placeholder="请输入收藏夹名">
                <button class="button" style="background: rgb(251, 140, 41);" @click="add_keep()">确认</button>
            </div>
        </div>
        <div class="lanmu clearfix">
            <span v-if="is_prompt !=0" style="height: 30px;line-height: 30px;float: left;"><a href="/#/erjiye?cate_id=0&theme_id=0&color_id=0&pageSize=50&currentPage=1">全部商品</a> > {{prompts}}

            </span>
            <span style="height: 30px;line-height: 30px;">
                <a class="contrast_a" @click="contrast_tab($event,-1)" data_id="0">横</a>
                <a class="contrast_a" @click="contrast_tab($event,1)" data_id="0">竖</a>
                <a class="contrast_a" @click="contrast_tab($event,0)" data_id="0">方</a>
            </span>
        </div>
        <div v-if="status">
            <div class="list" style="min-height: -webkit-fill-available;">
                <template v-if="count">
                    <section class = "gallery">
                        <div id="gallery_id" v-for="dataImageList in dataImageList" :key="dataImageList.id" @mouseenter="shows($event)" @mouseleave="hiddens($event)">
                            <!--添加收藏夹-->
                            <div id="example-5">
                                <select class="form-control" v-model="keep_option" @mouseenter="keep_show2()" style="float: left;width:60%;border-radius:0px" @click="keep_show()" @change="Mask_layer_show()">
                                    <option v-for="keep_info in keep_info">{{keep_info.keep_name}}</option>
                                    <option value="add" style="color:#ff6700">添加</option>
                                </select>
                                <button type="button" class="btn btn-warning" style="float: right;width: 40%;border-radius:0px" @click="addto_keep($event,dataImageList.id)">收藏</button>
                            </div>
                            <!--收藏夹遮罩层-->
                            <div id="icon" @click="to_sanji(dataImageList.id)"  style="position: absolute;height:0px;width:100%;text-align:left;padding: 0px 0px 0px 5px;background-color: #0000007d;overflow: hidden;">
                            </div>
                            <img id="img" v-lazy="dataImageList.image" height="200px" alt="...">
                        </div>
                    </section>
                    <MoPaging
                            :page-index="currentPage"
                            :total="count"
                            :pageid="pageId"
                            :page-size="pageSize"
                            @change="pageChange">
                    </MoPaging>
                </template>
                <template v-else>
                    <span>{{prompt}}</span>
                </template>
            </div>
            <Foot style="margin-top:30px;clear: both;"></Foot>
        </div>
        <div v-if="status==0">请等待</div>
        <br/>
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
    const baseurl = 'https://api.zaoanart.com/';
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
                lanmus : '',
                lanmu : '',
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
                this.initData();
                // this.findcategory();
                // this.findtheme();
                // this.color_show();
                // this.category_show();
                // this.theme_show();
                this.currentPage = 1;
                // this.cate_find(e);
            },
            'dataImageList'(){
                // this.initData();
            },
            'contrast'(){
                this.currentPage = 1;
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
        methods:{
            initData(){
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
                function unicode(str){
                    var res = [];
                    for ( var i=0; i<str.length; i++ ) {
                        res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);
                    }
                    return(JSON.stringify(res))
                }
                switch(Number(arr2.color_id))
                {
                    case 0:
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
                if(param == 'label_id') {
                    this.is_prompt = 1
                    var goods_id = ''
                    if (arr2.id) {
                        goods_id = arr2.id
                    }
                    this.$http.get(baseurl + 'v1/goods/findgoodsd', {
                        params: {
                            label_id: arr2.label_id,
                            id: goods_id,
                            pageSize: this.pageSize,
                            currentPage: this.currentPage,
                            contrast:this.contrast
                        }
                    }).then((response) => {
                        if (response.body) {
                            this.count = Number(response.body[0].count)
                        } else {
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
                    this.$http.get(baseurl + 'v1/goods/findgoodsown',{params:{term: decodeURI(arr2.term),pageSize:this.pageSize,currentPage:this.currentPage,contrast:this.contrast}}).then((response)=>{
                        if(response.body){
                            for(var i = 0; i<response.body.length;i++ ){
                                response.body[i].image  = 'http://qiniu.zaoanart.com/'+response.body[i].image+'?imageView2/2/h/500'
                            }
                        }
                        if(response.body){
                            this.count = Number(response.body[0].count)
                        }else{
                            this.count = false
                            this.prompt = '暂时没有图片'
                        }
                        this.dataImageList = response.body
                        this.prompts = decodeURI(arr2.term)
                    })
                }else if(param == 'label_all'){
                    this.is_prompt = 1
                    this.$http.get(baseurl + 'v1/goods/findmayimgall',{params:{id: arr2.label_all,pageSize:this.pageSize,currentPage:this.currentPage,contrast:this.contrast}}).then((response)=>{
                        this.prompts = response.body[0].label_name
                        this.dataImageList = response.body
                        this.count = Number(response.body[0].count)
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
                    this.is_prompt = 0
                    this.$http.get(baseurl + 'v1/goods/category_find',{params:{cate_id:arr2.cate_id,theme_id:arr2.theme_id,color_id:arr2.color_id,pageSize:this.pageSize,currentPage:this.currentPage,contrast:this.contrast}}).then(function(response){
                        for(var i = 0; i<response.body.length;i++ ){
                            response.body[i].image  = 'http://qiniu.zaoanart.com/'+response.body[i].image+'?imageView2/2/h/500'
                        }
                        if(response.body){
                            this.count = Number(response.body[0].count)
                        }else{
                            this.count = false
                            this.prompt = '暂时没有图片'
                        }
                        this.dataImageList = response.body
                        for(var p=0; p<$(".category_div").length;p++){
                            $(".category_div")[p].style.backgroundColor = ''
                            $(".category_div")[p].style.color = ''
                        }
                        if(arr2.cate_id != 0){
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
            pageChange (page) {
                this.currentPage = page
                this.initData()
            },
            shows(e){
                $(e.target).children("#icon").css({height:'100%'})
                $(e.target).children("#icon").prev("#example-5").css({height:'50px','z-index':'999'})
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
                    this.$http.get(baseurl + 'v1/home/select_keep',{params:{tel:this.telphone}}).then((response)=>{
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
                this.$http.get(baseurl + 'v1/home/addto_keep',{params:{tel:this.telphone,keep_name:this.keep_option,img_id:img_id}}).then((response)=>{
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
                this.$http.get(baseurl + 'v1/category/findcategory').then(function(res){
                    this.category = res.data
                })
            },
            findcategory1(){
                this.$http.get(baseurl + 'v1/category/findcategory1').then(function(res){
                    this.category2 = res.data
                    for(var k=0;k<this.category2.length;k++){
                        if(this.category2[k].id == this.info.cate_id){
                            $("#cate_select_one").html(this.category2[k].category_name)
                        }
                    }
                })
            },
            findtheme(){
                this.$http.get(baseurl + 'v1/theme/findtheme').then(function(res){
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
                this.$http.get(baseurl + 'v1/category/findcategory1').then((response)=>{
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
                this.$http.get(baseurl + 'v1/theme/findtheme').then(function(res){
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
                this.$http.get(baseurl + 'v1/home/addkeep',{params:{tel: this.telphone,keep_name:this.keep_name}}).then((response)=>{
                    if(response.data == 1){
                        toastr.info("该文件夹名已经存在")
                    }else{
                        toastr.info("添加成功")
                        $("#Mask_layer").css('display','none')
                    }
                })
            },
            contrast_tab(e,num){
                $('.contrast_a').css('color','#000')
                $(e.target).css('color','#ea8010')
                var data_id = $(e.target).attr('data_id')
                if(data_id == 0){
                    $('.contrast_a').attr('data_id',0)
                    $(e.target).attr('data_id',1)
                    this.contrast = num
                }else{
                    $('.contrast_a').attr('data_id',0)
                    $(e.target).css('color','#000')
                    this.contrast = 2
                }
            }
        },
    }

</script>
<style scoped>
    .wenzi{font-size:12px;background:#000;position:absolute;display:none;bottom:0;}
    #yema a{color:#888;}
    .paging-item{background:#fff;}
    .paging-item-current{background:red;border:1px solid red;text-decoration:none;}
    .paging-item-current a{color:#fff;}
    .active{border:1px solid red;}
    .ivu-page{display:inline-block;width:300px;}
    .ivu-page,.ivu-page li{list-style:none;}
    .ivu-page li{float:left;margin-right:20px;}
    .ivu-col-span-lg-6{display:inline;}
    .ivu-select-selected-value{display:none;}
    .ivu-page-item a{display:inline-block;width:30px;border:1px solid #eee;}
    .ivu-page li:hover{border:1px solid blue;}
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
    li{float:left;margin-left:10px;}
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
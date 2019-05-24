<template>
    <div id="keep_body" class="clearfix">
        <a href="" class="logo_a" style="position: absolute;z-index: 999;width: 10%;"><img src="../../assets/images/logo.png" alt=""  style="width: auto;height: auto;max-height: 100%;max-width: 100%;"></a>
        <div id="keep_show">
            <div>
                <span style="color:#464646;font-size: 35px;">{{keep_name}}</span>
                <span style="color:#464646;font-size: 17px;margin-left: 30px;">共{{keepimg_count}}张</span>
            </div>
            <div style="height:30px;" class="clearfix">
                <div class="edit_keep">
                    <input type="checkbox" v-model="checked_all" @change="checkAll()">
                    <span style="color:#cccccc;font-size:8px;margin-left: -5px;">全选</span>
                </div>
                <div class="edit_keep">
                    <img src="../../assets/images/mobile.png" alt="" width="15px">
                    <span style="color:#cccccc;font-size:8px;margin-left: -5px;" @click="move_img_all_show($event)" id="move_to_span">移动到...</span>
                    <div id="move_img_all" class="example-5" data_id="0">
                        <select class="form-control" id="move_to_sele" v-model="mobile_keep_select_all" style="font-size: 10px;
    height: 32px;float: left;width:60%;">
                            <option v-for="keep_info in keep_info">{{keep_info.keep_name}}</option>
                        </select>
                        <button type="button" class="btn btn-warning" style="float: right;width: 40%;font-size:10px;" @click="move_img_all()">确认</button>
                    </div>
                </div>
                <div class="edit_keep">
                    <img src="../../assets/images/copy.png" alt="" width="20px">
                    <span style="color:#cccccc;font-size:8px;margin-left: -5px;" @click="copy_img_all_show($event)" id="copy_to_span">复制到...</span>
                    <div id="copy_img_all" class="example-5"  data_id="0">
                        <select class="form-control" id="copy_to_sele" v-model="mobile_keep_selects_all" style="font-size: 10px;
    height: 32px;float: left;width:60%;">
                            <option v-for="keep_info in keep_info">{{keep_info.keep_name}}</option>
                        </select>
                        <button type="button" class="btn btn-warning" style="font-size:10px;float: right;width: 40%;" @click="copy_img_all()">确认</button>
                    </div>
                </div>
                <div class="edit_keep">
                    <img src="../../assets/images/delete2.png" alt="" width="20px">
                    <span style="color:#cccccc;font-size:8px;margin-left: -5px;" id="delete_span" @click="delete_img_all_show($event)">删除</span>
                    <div id="delete_img_all" class="example-5"  data_id="0" style="font-size: 10px;
    height: 32px;background: #fff;line-height: 36px;">
                        <span style="font-size:8px;width:65%">确定删除?</span>
                        <button type="button" class="btn btn-warning" id="delete_btn" style="font-size:10px;float: right;width: 40%;" @click="delete_img_all()">确认</button>
                    </div>
                </div>
            </div>
            <div v-for="(keepimg,index) in keepimg" class="keep_show_img" @mouseleave="hidden_edit_keep($event)" @click="up_img($event,index)">
                <!--遮罩层-->
                <div style="width: 150px;height: 150px;overflow: hidden;" @mouseenter="shows($event)" @mouseleave="hiddens($event)" class="clearfix">
                    <div class="edit_keep_div clearfix">
                        <div class="edit_keep1">
                            <img src="../../assets/images/selected5.png" alt="" width="20px" @click="hide_edit_keep_div1($event)">
                        </div>
                        <div class="edit_keep1">
                            <div class="edit_logo">
                                <img src="../../assets/images/mobile2.png" alt="" width="15px">
                            </div>
                            <span style="color:rgb(100,100,100);font-size:8px;" @click="find_keep($event)">移动到...</span>
                            <div id="mobile_keep" data_id="0" style="width:100px;margin-left: 23px;display:none">
                                <select id="mobile_keep_select" v-model="mobile_keep_select" >
                                    <option v-for="keep_info in keep_info">{{keep_info.keep_name}}</option>
                                </select>
                                <button class="btn-warning" style="height: 22px;line-height: 20px;font-size: 12px;" @click="move_img(keepimg.id,keep_info.id)">确认</button>
                            </div>
                        </div>
                        <div class="edit_keep1">
                            <div class="edit_logo">
                                <img src="../../assets/images/copy2.png" alt="" width="20px">
                            </div>
                            <span style="color:rgb(100,100,100);font-size:8px;" @click="find_keep($event)">复制到...</span>
                            <div id="mobile_keep" data_id="0" style="width:100px;margin-left: 23px;display:none">
                                <select id="copy_keep_select" v-model="mobile_keep_selects" >
                                    <option v-for="keep_info in keep_info">{{keep_info.keep_name}}</option>
                                </select>
                                <button class="btn-warning" style="height: 22px;line-height: 20px;font-size: 12px;" @click="copy_img(keepimg.id,keep_info.id)">确认</button>
                            </div>
                        </div>
                        <div class="edit_keep1">
                            <div class="edit_logo">
                                <img src="../../assets/images/delete3.png" alt="" width="20px">
                            </div>
                            <span style="color:rgb(100,100,100);font-size:8px;" @click="find_keep2($event)">删除</span>
                            <div id="mobile_keep" data_id="0" style="width:100px;margin-left: 23px;display:none">
                                <span style="font-size: 8px;">确认删除?</span>
                                <button class="btn-warning" style="height: 22px;line-height: 20px;font-size: 12px;" @click="delete_img(keepimg.id,keep_info.id)">确认</button>
                            </div>
                        </div>
                    </div>
                    <div id="icon" class="icon">
                        <img class="edit_keep_show" id="edit_keep_show" style="" src="../../assets/images/selected3.png" width="25px" @click="show_edit_keep_div($event)">
                        <img class="edit_keep_hide" id="edit_keep_hide" style="display:none" src="../../assets/images/selected4.png" width="25px" @click="hide_edit_keep_div($event)">
                        <div class="icon_check">
                            <input name="test" class="checked_box" type="checkbox" v-model="checked_one" :value="keepimg.id">
                        </div>
                    </div>
                    <img class="pic" :src="keepimg.image" :id="index" height="150px" style="min-width: 150px;min-height: 150px;" @click="up_img($event,index)">
                </div>
            </div>
        </div>


        <div class="right_table right_img clearfix"  @click="keep_show()">
            <img src="../../assets/images/right.png" alt="" style="width: auto;height: auto;max-height: 100%;max-width: 100%;">
        </div>
        <div class="right_table left_img clearfix" @click="keep_hidden()" style="display:none">
            <img src="../../assets/images/left.png" alt="" style="width: auto;height: auto;max-height: 100%;max-width: 100%;">
        </div>

        <div style="width:100%;height:100%;display: flex;align-items: center;justify-content: center;" data_id="0" class="clearfix" id="main_img_div" @keyup.left=switch_img()>

            <div id="main_img" style="position: relative;right:0px;text-align: center;">
                <img class="keep_image" :data_id="keepimg[0].id" @load="upimg()" @click="to_sanji($event)" :src="keepimg[0].image2" alt="点击查看详情" style="max-width:0px" id="0">
            </div>

            <img src="../../assets/images/arrowleft.png" alt="" class="left_btn" width="50px" @click="last_img()" style="position: absolute;left: 0px;border-radius: 50%;background: #cad0d0;">
            <img src="../../assets/images/arrowright.png" alt="" class="right_btn" width="50px"@click="next_img()" style="position: absolute;right: 0px;border-radius: 50%;background: #cad0d0;">
        </div>
    </div>
</template>
<script>
    $(window).on('click',function(){
        var click_ = window.event.target.id
        if(click_ == 'move_to_sele' || click_ == 'move_to_span'){
        }else{
            $('#move_img_all').css('display','none')
        }
        if(click_ == 'copy_to_sele' || click_ == 'copy_to_span'){
        }else{
            $('#copy_img_all').css('display','none')
        }
        if(click_ == 'delete_btn' || click_ == 'delete_span'){
        }else{
            $('#delete_img_all').css('display','none')
        }
    })
    const baseurl = 'https://api.zaoanart.com/'
    import axios from 'axios'
    export default {
        name: 'Keepimg',
        data(){
            return{
                keepimg:[],
                keep_name:'',
                keep_info:[],
                keepimg_count:'',
                checked_all:false,
                checked_one:[],
                mobile_keep_select:'',
                mobile_keep_selects:'',
                mobile_keep_select_all:[],
                mobile_keep_selects_all:[],
                copy_keep_select:'',
                screenWidth: document.body.clientWidth
            }
        },
        watch: {
            '$route' () {
                this.initData()
            },
            'checked_one'($event) {
                if($event.length == 0){
                    for(var y=0;y<$(".icon").length;y++){
                        $(".icon")[y].style.backgroundColor = '#000000BF'
                        $(".icon")[y].style.display = 'none'
                    }
                }
                for(var i=0;i<$event.length;i++){
                    if($("input[value="+$event[i]+"]")[0].checked){
                        $("input[value="+$event[i]+"]").parent().parent("#icon").css('display','block')
                        $("input[value="+$event[i]+"]").parent().parent("#icon").css('background-color','#79797940')
                    }else{
                        $("input[value="+$event[i]+"]").parent().parent("#icon").css('display','none')
                    }
                }
            }
        },
        mounted(){
            this.initData()
            window.onresize = () => {
                if($("#main_img_div").attr('data_id') == 0){
                    $(".keep_image").css({'max-width':innerWidth*0.7,'max-height':innerHeight-50})
                }else{
                    $(".keep_image").css({'max-width':innerWidth*0.5,'max-height':innerHeight-50})
                }
            }
            var vm = this
            window.addEventListener('mousewheel',function(e){
                var direction = e.deltaY>0?vm.next_img():vm.last_img()
            })
            $(document).keydown(function(event){
                if(event.keyCode == 37){
                    vm.last_img()
                }
                if(event.keyCode == 39){
                    vm.next_img()
                }
            })
        },
        methods:{
            upimg(){
                if($("#main_img_div").attr('data_id') == 0){
                    $(".keep_image").animate({'max-width':innerWidth*0.7,'max-height':innerHeight-50})
                }else{
                    $(".keep_image").animate({'max-width':innerWidth*0.5,'max-height':innerHeight-50})
                }
            },
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
                this.$http.get(baseurl + 'v1/home/findkeepimg',{params:{kid:arr2.id}}).then((response)=>{
                    if(response.data){
                        for(var i = 0; i<response.data.info.length;i++ ){
                            if(response.data.info[i]){
                                var img = response.data.info[i].image
                                response.data.info[i].image  = 'http://qiniu.zaoanart.com/'+ img + '?imageView2/1/w/500/h/500'
                                response.data.info[i].image2  = 'http://qiniu.zaoanart.com/'+ img
                            }
                        }
                        this.keepimg = response.data.info
                        this.keep_name = response.data.keep_name
                        this.keepimg_count = response.data.info.length
                    }else{
                        toastr.warning("该收藏夹已没有图片了,系统将在3妙后关闭窗口")
                        setTimeout(function(){
                            window.close()
                        },3000)
                        return false
                    }
                })
            },
            handleScroll(e){
            },
            keep_show(e){
                $(".logo_a").animate({'margin-left':'30%'})
                $("#keep_show").animate({width:'30%'})
                $("#keep_show").css({height:'100%'})
                $(".keep_image").animate({'max-width':innerWidth*0.5,'max-height':innerHeight-50})
                $("#main_img_div").animate({width:'70%','margin-left':'30%'})
                $("#main_img_div").attr('data_id','1')
                $(".left_btn").animate({'left':'30%'})
                $(".right_img").css("display",'none')
                $(".keep_show_img").css("display",'inline-block')
                $(".left_img").css("display",'')
            },
            keep_hidden(){
                $(".logo_a").animate({'margin-left':'0'})
                $("#keep_show").animate({width:'0px'})
                $("#keep_show").css({height:'0px'})
                $(".keep_image").animate({'max-width':innerWidth*0.7,'max-height':innerHeight-50})
                $("#main_img_div").animate({width:'100%','margin-left':''})
                $("#main_img_div").attr('data_id','0')
                $(".right_img").css("display",'')
                $(".left_btn").animate({'left':'0px'})
                $(".keep_show_img").css("display",'none')
                $(".left_img").css("display",'none')
            },
            up_img(e,id){
                if(e.target.id == 'icon'){
                    var img_url = e.target.nextElementSibling.src
                    var strs = img_url.replace("?imageView2/1/w/500/h/500","")
                    var i = strs.lastIndexOf("/")
                    $(".keep_image").attr('src','http://qiniu.zaoanart.com/'+ strs.slice(i+1))
                    $(".keep_image").attr('id',id)
                    $(".keep_image").animate({'max-width':innerWidth*0.5,'max-height':innerHeight-50})
                }
            },
            next_img(){
                var data_id = $("#main_img .keep_image").attr('id')
                if(data_id == this.keepimg.length-1){
                    toastr.warning("当前是最后一张")
                    return false
                }
                var id = parseInt(data_id) + 1
                $(".keep_image").attr('id',id)
                $(".keep_image").attr('src',this.keepimg[id].image2)
                $(".keep_image").attr('data_id',this.keepimg[id].id)
                if($("#main_img_div").attr('data_id') == 0){
                    $(".keep_image").animate({'max-width':innerWidth*0.7,'max-height':innerHeight-50})
                }else{
                    $(".keep_image").animate({'max-width':innerWidth*0.5,'max-height':innerHeight-50})
                }
            },
            last_img(){
                var data_id = $("#main_img .keep_image").attr('id')
                if(data_id <= 0){
                    toastr.warning("当前是第一张")
                    return false
                }
                var id = parseInt(data_id) - 1
                $(".keep_image").attr('id',id)
                $(".keep_image").attr('src',this.keepimg[id].image2)
                $(".keep_image").attr('data_id',this.keepimg[id].id)
                if($("#main_img_div").attr('data_id') == 0){
                    $(".keep_image").animate({'max-width':innerWidth*0.7,'max-height':innerHeight-50})
                }else{
                    $(".keep_image").animate({'max-width':innerWidth*0.5,'max-height':innerHeight-50})
                }
            },
            to_sanji(e){
                var id = $(e.target).attr('data_id')
                let routeData = this.$router.resolve({path:"/sanjiye?id="+id})
                window.open(routeData.href, '_blank');
            },
            shows(e){
                $(e.target).children("#icon").css({'display':'block'})
            },
            hiddens(e){
                var box_checked = $(e.target).children("#icon").children(".icon_check").children(".checked_box")[0].checked
                if(box_checked){
                    $(e.target).children("#icon").css({'display':'block'})
                }else{
                    $(e.target).children("#icon").css({'display':'none'})
                    $(e.target).children("#icon").css({'background-color':'#000000BF'})
                }
            },
            checkAll(){
                if(!this.checked_all){
                    for(var k=0; k<$(".checked_box").length; k++){
                        if($(".checked_box")[k].checked == true){
                            $(".checked_box")[k].checked = false
                            this.checked_one = []
                        }
                    }
                }else{
                    for(var k=0; k<$(".checked_box").length; k++){
                        if($(".checked_box")[k].checked == false){
                            $(".checked_box")[k].checked = true
                            this.checked_one.push(parseInt($(".checked_box")[k].value))
                        }
                    }
                }
            },
            show_edit_keep_div(e){
                $(".edit_keep_show").css('display','block')
                $(".edit_keep_hide").css('display','none')
                $(".edit_keep_div").css('display','none')
                $(e.target).parent().prev(".edit_keep_div").css("display","block")
                $(e.target).css('display','none')
                $(e.target).next("#edit_keep_hide").css('display','')
            },
            hide_edit_keep_div(e){
                $(e.target).parent().prev(".edit_keep_div").css("display","none")
                $(e.target).prev("#edit_keep_show").css('display','')
                $(e.target).css('display','none')
            },
            hide_edit_keep_div1(e){
                $(e.target).parent().parent().css("display","none")
                $(e.target).parent().parent().next().children("#edit_keep_show").css('display','')
                $(e.target).parent().parent().next().children("#edit_keep_hide").css('display','none')
            },
            find_keep(e){
                if($(e.target).next("#mobile_keep").attr("data_id") == 0){
                    $(e.target).next("#mobile_keep").css("display","")
                    $(e.target).next("#mobile_keep").attr("data_id","1")
                }else if($(e.target).next("#mobile_keep").attr("data_id") == 1){
                    $(e.target).next("#mobile_keep").css("display","none")
                    $(e.target).next("#mobile_keep").attr("data_id","0")
                }
                if(this.getCookie('tel')){
                    this.$http.get(baseurl + 'v1/home/select_keep',{params:{tel:this.getCookie('tel')}}).then((response)=>{
                        this.keep_info = response.data
                    })
                }
            },
            find_keep2(e){
                if($(e.target).next("#mobile_keep").attr("data_id") == 0){
                    $(e.target).next("#mobile_keep").css("display","")
                    $(e.target).next("#mobile_keep").attr("data_id","1")
                }else if($(e.target).next("#mobile_keep").attr("data_id") == 1){
                    $(e.target).next("#mobile_keep").css("display","none")
                    $(e.target).next("#mobile_keep").attr("data_id","0")
                }
            },
            move_img(keepimg_id){
                if(this.mobile_keep_select == this.keep_name){
                    toastr.warning("不能操作同一个收藏夹")
                    return false
                }else{
                    this.$http.get(baseurl + 'v1/home/move_img',{params:{tel:this.getCookie('tel'),img_id:keepimg_id,new_keep:this.mobile_keep_select,old_keep:this.keep_name}}).then((response)=>{
                        if(response){
                            for(var i=0; i<this.keepimg.length; i++){
                                if(this.keepimg[i].id == keepimg_id){
                                    this.keepimg.splice(i,1);
                                    if(this.keepimg.length == 0){
                                        toastr.warning("该收藏夹已没有图片了,系统将在3妙后关闭窗口")
                                        setTimeout(function(){
                                            window.close()
                                        },3000)
                                        return false
                                    }
                                }
                            }
                            toastr.info("移动成功")
                        }
                    })
                }
            },
            copy_img(keepimg_id){
                if(this.mobile_keep_selects == this.keep_name){
                    toastr.warning("不能操作同一个收藏夹")
                    return false
                }else{
                    this.$http.get(baseurl + 'v1/home/copy_img',{params:{tel:this.getCookie('tel'),img_id:keepimg_id,new_keep:this.mobile_keep_selects,old_keep:this.keep_name}}).then((response)=>{
                        if(response.data == 1){
                            toastr.warning("该收藏夹已经存在此张图片")
                        }else if(response.data == 0){
                            toastr.info("复制成功")
                        }else if(response.data == 2){
                            toastr.warning("系统故障,复制失败")
                        }
                    })
                }
            },
            delete_img(keepimg_id){
                this.$http.get(baseurl + 'v1/home/delete_img',{params:{tel:this.getCookie('tel'),img_id:keepimg_id,keep:this.keep_name}}).then((response)=>{
                    if(response.data){
                        for(var i=0; i<this.keepimg.length; i++){
                            if(this.keepimg[i].id == keepimg_id){
                                this.keepimg.splice(i,1);
                                if(this.keepimg.length == 0){
                                    toastr.warning("该收藏夹已没有图片了,系统将在3妙后关闭窗口")
                                    setTimeout(function(){
                                        window.close()
                                    },3000)
                                    return false
                                }
                            }
                        }
                        toastr.info("删除成功")
                    }else{
                        toastr.warning("删除失败")
                    }
                })
            },
            //批量移动
            move_img_all_show(e){
                if(this.getCookie('tel')){
                    this.$http.get(baseurl + 'v1/home/select_keep',{params:{tel:this.getCookie('tel')}}).then((response)=>{
                        this.keep_info = response.data
                    })
                }
                $(e.target).next("#move_img_all").css("display",'block')
                // var data_id1 = $(e.target).next("#move_img_all").attr("data_id")
                // if(data_id1 == 0){
                //     $(e.target).next("#move_img_all").attr("data_id",1)
                //     $(e.target).next("#move_img_all").css("display",'block')
                // }else{
                //     $(e.target).next("#move_img_all").attr("data_id",0)
                //     $(e.target).next("#move_img_all").css('display','none')
                // }
            },
            //批量复制
            copy_img_all_show(e){
                if(this.getCookie('tel')){
                    this.$http.get(baseurl + 'v1/home/select_keep',{params:{tel:this.getCookie('tel')}}).then((response)=>{
                        this.keep_info = response.data
                    })
                }
                $(e.target).next("#copy_img_all").css("display",'block')

                // var data_id2 = $(e.target).next("#copy_img_all").attr("data_id")
                // if(data_id2 == 0){
                //     if(this.getCookie('tel')){
                //         this.$http.get(baseurl + 'v1/home/select_keep',{params:{tel:this.getCookie('tel')}}).then((response)=>{
                //             this.keep_info = response.data
                //         })
                //     }
                //     $(e.target).next("#copy_img_all").attr("data_id",1)
                //     $(e.target).next("#copy_img_all").css("display",'block')
                // }else{
                //     $(e.target).next("#copy_img_all").attr("data_id",0)
                //     $(e.target).next("#copy_img_all").css("display",'none')
                // }
            },
            //批量删除
            delete_img_all_show(e){
                $(e.target).next("#delete_img_all").css("display",'block')

                // var data_id3 = $(e.target).next("#delete_img_all").attr("data_id")
                // if(data_id3 == 0){
                //     $(e.target).next("#delete_img_all").attr("data_id",1)
                //     $(e.target).next("#delete_img_all").css("display",'block')
                // }else{
                //     $(e.target).next("#delete_img_all").attr("data_id",0)
                //     $(e.target).next("#delete_img_all").css("display",'none')
                // }
            },
            //批量移动
            move_img_all(){
                if(this.mobile_keep_select_all.length == 0){
                    toastr.warning("请选择要移动的收藏夹")
                }
                if(this.checked_one.length == 0){
                    toastr.warning("请选择要移动的图片")
                    return false
                }
                if(this.mobile_keep_select_all == this.keep_name){
                    toastr.warning("不能操作同一个收藏夹")
                    return false
                }
                this.$http.get(baseurl + 'v1/home/move_img_all',{params:{tel:this.getCookie('tel'),img_id:this.checked_one,new_keep:this.mobile_keep_select_all,old_keep:this.keep_name}}).then((response)=>{
                    if(response.data){
                        for(var y=0; y<this.keepimg.length; y++){
                            for(var v = 0; v<this.checked_one.length;v++){
                                if(this.keepimg[y].id == this.checked_one[v]){
                                    this.keepimg.splice(y,1)
                                    if(this.keepimg.length == 0){
                                        toastr.warning("该收藏夹已没有图片了,系统将在3妙后关闭窗口")
                                        setTimeout(function(){
                                            window.close()
                                        },3000)
                                        return false
                                    }
                                }
                            }
                        }
                        toastr.info("移动成功")
                        $("#move_img_all").css("display","none")
                    }else{
                        toastr.warning("移动失败")
                        $("#move_img_all").css("display","none")
                    }
                })
            },
            //批量复制
            copy_img_all(){
                if(this.mobile_keep_selects_all.length == 0){
                    toastr.warning("请选择要复制的收藏夹")
                }
                if(this.checked_one.length == 0){
                    toastr.warning("请选择要复制的图片")
                    return false
                }
                if(this.mobile_keep_selects_all == this.keep_name){
                    toastr.warning("不能操作同一个收藏夹")
                    return false
                }
                this.$http.get(baseurl + 'v1/home/copy_img_all',{params:{tel:this.getCookie('tel'),img_id:this.checked_one,new_keep:this.mobile_keep_selects_all,old_keep:this.keep_name}}).then((response)=>{
                    if(response.data){
                        toastr.info("复制成功")
                        $("#copy_img_all").css("display","none")
                    }else{
                        toastr.warning("系统故障,复制失败")
                        $("#copy_img_all").css("display","none")
                    }
                })
            },
            //隐藏edit_keep_div
            hidden_edit_keep(e){
                $(e.target).children('.clearfix').children('.edit_keep_div').css('display','none')
                $(e.target).children('.clearfix').children('.edit_keep_div').next('#icon').children('#edit_keep_show').css('display','block')
                $(e.target).children('.clearfix').children('.edit_keep_div').next('#icon').children('#edit_keep_hide').css('display','none')
            },
            //批量删除
            delete_img_all(){
                if(this.checked_one.length == 0){
                    toastr.warning("请选择要删除的图片")
                    return false
                }
                this.$http.get(baseurl + 'v1/home/delete_img_all',{params:{tel:this.getCookie('tel'),img_id:this.checked_one,keep:this.keep_name}}).then((response)=>{
                    if(response.data){
                        if(response.data){
                            for(var o=0; o<this.keepimg.length; o++){
                                for(var p = 0; p<this.checked_one.length;p++){
                                    if(this.keepimg[o].id == this.checked_one[p]){
                                        this.keepimg.splice(o,1)
                                        if(this.keepimg.length == 0){
                                            toastr.warning("该收藏夹已没有图片了,系统将在3妙后关闭窗口")
                                            setTimeout(function(){
                                                window.close()
                                            },3000)
                                            return false
                                        }
                                    }
                                }
                            }
                            toastr.info("删除成功")
                            $("#delete_img_all").css("display","none")
                        }else{
                            toastr.warning("删除失败")
                            $("#delete_img_all").css("display","none")
                        }
                    }
                })
            },
        },
    }
</script>
<style scoped>
    a{padding:0;margin:0;text-decoration:none}
    #keep_show{
        width:0px;
        height:0px;
        float: left;
        overflow: scroll;
        background-color: #4a4a4a8c;
        padding-left: 10px;
    }
    #keep_body{
        text-align: left;
        height:100%
    }
    .clearfix:after{
        display: block;
        content:'';
        clear: both;
        height:0;
    }
    .example-5{
        position: absolute;
        width: 130px;
        display: none;
        z-index: 999;
        margin-left: 5px;
    }
    .right_table{
        float: left;
        display: inline-block;
        width: 3%;
        position: absolute;
        bottom:0px
    }
    .icon_check{
        display: inline-block;
        width: 20px;
        position: absolute;
        height: 20px;
        right: 0;
        background-color: #ffffff;
        top: 0;
        text-align: center;
    }
    .edit_keep{
        cursor: pointer;
        display:inline-block;
        height:25px;
        width:110px;
        text-align: center;
        line-height: 30px;
        float: left;
        overflow: hidden;
    }
    .edit_keep1{
        cursor: pointer;
        display:inline-block;
        height:25px;
        width:80px;
        text-align: left;
        line-height: 30px;
    }
    .edit_logo{
        width: 20px;
        height: 20px;
        display: inline-block;
        text-align: center;
        line-height: 20px;
    }
    .edit_keep_div{
        width: 130px;
        position:absolute;
        z-index: 999;
        float:left;
        display:none;
        background-color: white;
        padding-left: 5px;
        left: 5px;
        top: 25px;
    }
    .keep_show_img{
        margin-right: 5px;
        display: inline-block;
        width: 150px;
        height: 150px;
        position: relative;
    }
    #icon{
        position: absolute;
        height: 150px;
        display:none;
        width:150px;
        text-align:left;
        border: 5px solid #fff;
        padding: 0px 0px 0px 5px;
        background-color: #000000BF;
        overflow: hidden;
    }
    .edit_btn{
        width: 45px;
        height:100%;
        font-size:5px;
        line-height: 25px;
        float: left;
        border: 1px solid #ccc;
        margin-left: -1px;
    }
    .edit_sele{
        font-size: 10px;
        height: 100%;
        line-height: 25px;
        float: left;
        width:65px;
    }
    .page_btn{
        background-color: #8c8c8c7a;
        display: inline-block;
        cursor: pointer;
    }
    .right_btn{
        float: right;
    }
    .left_btn{
        float: left;
    }
    ::-webkit-scrollbar
    {
        width: 16px;
        height: 16px;
        background-color: #F5F5F5;
    }
    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
</style>

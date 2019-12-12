<template>
    <div class="clearfix" style="font-size: 1.5vh">
        <HeadPage></HeadPage>
        <svg height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="temperature_svg">
                    <feColorMatrix id="temperatures_svg" :values="r +' 0 0 0 0  0 '+ g + ' 0 0 0  0 0 '+ b + ' 0 0  0 0 0 '+a+' 0'"/>
                </filter>
            </defs>
        </svg>
        <svg height="0" xmlns="http://www.w3.org/2000/svg">
            <filter :id="'exposure_svg'+table" filterUnits="objectBoundingBox">
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="gamma"  :amplitude = "table_b"  :exponent = 'table_a'  :offset = "table_c"/>
                    <feFuncG type="gamma"  :amplitude = "table_b"  :exponent = 'table_a'  :offset = "table_c"/>
                    <feFuncB type="gamma"  :amplitude = "table_b"  :exponent = 'table_a'  :offset = "table_c"/>
                    <!--<feFuncR type = "table" tableValues = "0 0.2 0.4 0.6 0.71 0.88 0.96 1.0 1.0 1.0 1.0" />-->
                    <!--<feFuncG type = "table" tableValues = "0 0.2 0.4 0.6 0.71 0.88 0.96 1.0 1.0 1.0 1.0" />-->
                    <!--<feFuncB type = "table" tableValues = "0 0.2 0.4 0.6 0.71 0.88 0.96 1.0 1.0 1.0 1.0" />-->
                </feComponentTransfer>
            </filter>
        </svg>
        <div class="clearfix" style="display:flex;justify-content: space-between;">
            <!--<div style="width: 500px;overflow-y: scroll;: scroll;float: left;height: 100%;">-->
                <!--<span>点击图片快速装裱</span>-->
                <!--<div :v-if="(index)" v-for="(item,index) in filter_info" style="margin: 10px;position: relative;">-->
                    <!--<a target="_blank" :href="'/#/Decoration?img='+item.filter_img+'&max_width='+max_info.max_width+'&max_height='+max_info.max_height+'&imgid='+item.imgid+''">-->
                            <!--<img :src="item.filter_img_url" alt="" v-b-tooltip.hover title="Tooltip content" width="400" class="img234">-->
                    <!--</a>-->
                <!--</div>-->
            <!--</div>-->
            <div id="decor" style="width:80%;display: flex;justify-content: center;">
                <div style="position:relative;">
                    <canvas id="myCanvas" style="display:none;max-width:100%;max-height:auto;"></canvas>
                    <img id="img2" class="img2" src="" alt="">
                    <div id="img_box" style="max-width: 900px;max-height: 600px;display: block;overflow: hidden;">
                        <img id="img" src="" alt="" width="auto" style="max-height: 600px;max-width: 900px;display:inline-block;">
                    </div>
                </div>
                <!--<img id="bgImg" src="" alt="" style="display:none">-->
                <!--<img id="dltImg" src="" alt="" style="display:none">-->
                <div style="display:inline-block;"class="canvas"></div>
            </div>
            <div style="max-height: 60vh;overflow-y: scroll;width:20%;height:100%;float: right;text-align: left;">
                <div>
                    <button class="filter_btn" @click="clockwise_rotate">顺时针旋转90°</button>
                    <button class="filter_btn" @click="horizontal_symmeentry">水平镜像</button>
                    <button  class="filter_btn" @mouseover="compared_in" @mouseout="compared_out">比较</button>
                </div>
                <div>
                    <button class="filter_btn" @click="anticlockwise_rotate">逆时针旋转90°</button>
                    <button class="filter_btn" @click="vertical_symmeentry">垂直镜像</button>
                    <button class="filter_btn" @click="reduction">重置</button>
                </div>
                <!--<button class="filter_btn" @click="horizontal_symmeentry">水平镜像</button>-->
                <!--<button class="filter_btn" @click="vertical_symmeentry">垂直镜像</button>-->

                <div class="filter_val">
                    <label class="filter_val_label">亮度：<span id="brightnessText">100%</span></label>
                    <input type="range" min="0" max="200" style="width:100%;background-size: 50% 100%;" value="100" id="brightness" @mousemove="changeValue(1)">
                </div>
                <div class="filter_val">
                    <label class="filter_val_label">对比度：<span id="contrastText">100%</span></label>
                    <input type="range" min="0" max="500" style="width:100%;background-size: 20% 100%;" value="100" id="contrast" @mousemove="changeValue(2)">
                </div>
                <div class="filter_val">
                    <label class="filter_val_label">灰度：<span id="grayscaleText">0%</span></label>
                    <input type="range" min="0" max="100" style="width:100%;background-size: 0% 100%;" value="0" id="grayscale" @mousemove="changeValue(3)">
                </div>
                <div class="filter_val">
                    <label class="filter_val_label">饱和度：<span id="saturateText">100%</span></label>
                    <input type="range" min="0" max="500" style="width:100%;background-size: 20% 100%;" value="100" id="saturate" @mousemove="changeValue(4)">
                </div>
                <div class="filter_val">
                    <label class="filter_val_label">模糊度：<span id="blurvalText">0px</span></label>
                    <input type="range" min="0" max="10" style="width:100%;background-size: 0% 100%;" value="0" id="blurval" @mousemove="changeValue(5)">
                </div>
                <div class="filter_val">
                    <label class="filter_val_label">不透明度：<span id="opacityText">100%</span></label>
                    <input type="range" min="0" max="100" style="width:100%;background-size: 100% 100%;" value="100" id="opacity" @mousemove="changeValue(6)">
                </div>
                <div class="filter_val">
                    <label class="filter_val_label">色调对调：<span id="hue-rotateText">0°</span></label>
                    <input type="range" min="0" max="360" style="width:100%;background-size: 0% 100%;" value="0" id="huerotate" @mousemove="changeValue(7)">
                </div>
                <div class="filter_val">
                    <label class="filter_val_label">反色：<span id="invertText">0%</span></label>
                        <input type="range" min="0" max="100" style="width:100%;background-size: 0% 100%;" value="0" id="invert" @mousemove="changeValue(8)">
                </div>
                <!--<div class="filter_val">-->
                    <!--<label class="filter_val_label">温度：<span id="temperatureText">100%</span></label>-->
                    <!--<input type="range" min="0" max="200" style="width:400px;background-size: 0% 100%;" value="100" id="temperature" @mousemove="changeValue(9)">-->
                <!--</div>-->
                <div class="filter_val">
                    <label class="filter_val_label">曝光：<span id="exposureText">100%</span></label>
                    <input type="range" min="0" max="200" style="width:100%;background-size: 50% 100%;" value="100" id="exposure" @mousemove="changeValue(10)">
                </div>
                <button class="filter_btn" style="display: inline-block;" @click="init_decoration">点击保存</button>
                <button class="filter_btn" style="display: inline-block;" @click="decoration_filter">前往装裱</button>
            </div>
        </div>
        <LabelLeft></LabelLeft>
        <Foot style="clear: both;position:absolute;bottom:0;width:100%;"></Foot>
    </div>
</template>
<script>
    import axios from 'axios'
    import HeadPage from "../../components/HeadPage"
    import LabelLeft from "../../components/LabelLeft"
    import Foot from "../../components/Foot"

    export default {
        name: 'Specialeffects',
        components: {
            HeadPage,LabelLeft,Foot
        },
        data () {
            return {
                show: true,
                telphone:null,
                img:null,
                max_info:null,
                imgid:null,
                default_width:null,
                default_height:null,
                image_url:null,
                img_width:0,
                img_height:0,
                filter_img:'',
                filter_info:[],
                rotate:0,
                symmeentry_X:false,
                symmeentry_Y:false,
                brightness:100,
                contrast:100,
                grayscale:0,
                saturate:100,
                blurval:0,
                opacity:100,
                huerotate:0,
                invert:0,
                temperature:0,
                exposure_svg:1,
                feColorMatrix:'-1 3 -1 0 0    0 1 0 0 0    0 0 1 0 0    0 0 0 1 0',
                r:-1,
                g:-1,
                b:-1,
                a:-1,
                table:1,
                table_a:1,
                table_b:1,
                table_c:0,
            }
        },
        watch: {
            '$route' () {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.initData();
                // this.init_decoration();
            }
        },
        mounted(){
            if(!this.getCookie('tel')){
                alert('请登录')
                window.location.href="/#/login";
            }else{
                this.telphone = this.getCookie('tel');
                this.initData()
            }
            // this.init_decoration()
        },
        methods:{
            initData(){
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
                this.img = arr2.img
                this.max_info = arr2
                this.imgid = arr2.imgid
                this.default_width = (Number(arr2.max_width)+206/30*2).toFixed(1)
                this.default_height = (Number(arr2.max_height)+206/30*2).toFixed(1)
                this.image_url = 'http://qiniu.zaoanart.com/'+arr2.img+'?t='+Math.random()
                $("#img").attr("src",'http://qiniu.zaoanart.com/'+arr2.img+'?t='+Math.random());
                $("#img").attr("width",800)
                $("#img2").attr("src",'http://qiniu.zaoanart.com/'+arr2.img+'?t='+Math.random());
                $("#img2").attr("width",800)
                var img=document.getElementById("img");
                this.img_width = img.naturalWidth
                this.img_height = img.naturalHeight
                var vm = this
                vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/getfilter',{params:{tel:vm.telphone,imgid:vm.imgid}}).then((response)=>{
                    for(var i=0;i<response.data.length;i++){
                        response.data[i].filter_img_url = 'http://qiniu.zaoanart.com/'+ response.data[i].filter_img+"?imageView2/2/w/500"
                    }
                    vm.filter_info = response.data
                })
            },
            // 数值调整
            changeValue(type){
                valBlock =  document.getElementById("brightnessText");
                val = document.getElementById("brightness").value;
                let valBlock,val;
                let brightness = document.getElementById("brightness").value,
                    contrast = document.getElementById("contrast").value,
                    grayscale = document.getElementById("grayscale").value,
                    saturate = document.getElementById("saturate").value,
                    blurval = document.getElementById("blurval").value,
                    opacity = document.getElementById("opacity").value,
                    huerotate = document.getElementById("huerotate").value,
                    invert = document.getElementById("invert").value;
                if(type === 1){
                    valBlock =  document.getElementById("brightnessText");
                    val = document.getElementById("brightness").value;
                    $('#brightnessText').html(val+'%')
                    let max = $('#brightness').attr('max')
                    $("#brightness").css("background-size",val/max*100+"% 100%")
                    brightness = val
                    this.brightness = brightness
                }else if(type === 2){
                    valBlock =  document.getElementById("contrastText");
                    val = document.getElementById("contrast").value;
                    $('#contrastText').html(val+'%')
                    let max = $('#contrast').attr('max')
                    $("#contrast").css("background-size",val/max*100+"% 100%")
                    contrast = val
                    this.contrast = contrast
                }else if(type === 3){
                    valBlock =  document.getElementById("grayscaleText");
                    val = document.getElementById("grayscale").value;
                    $('#grayscaleText').html(val+'%')
                    let max = $('#grayscale').attr('max')
                    $("#grayscale").css("background-size",val/max*100+"% 100%")
                    grayscale = val
                    this.grayscale = grayscale
                }else if(type === 4){
                    valBlock =  document.getElementById("saturateText");
                    val = document.getElementById("saturate").value;
                    $('#saturateText').html(val+'%')
                    let max = $('#saturate').attr('max')
                    $("#saturate").css("background-size",val/max*100+"% 100%")
                    saturate = val
                    this.saturate = saturate
                }else if(type === 5){
                    valBlock =  document.getElementById("blurvalText");
                    val = document.getElementById("blurval").value;
                    $('#blurvalText').html(val+'px')
                    let max = $('#blurval').attr('max')
                    $("#blurval").css("background-size",val/max*100+"% 100%")
                    blurval = val
                    this.blurval = blurval
                }else if(type === 6){
                    valBlock =  document.getElementById("opacityText");
                    val = document.getElementById("opacity").value;
                    $('#opacityText').html(val+'%')
                    let max = $('#opacity').attr('max')
                    $("#opacity").css("background-size",val/max*100+"% 100%")
                    opacity = val
                    this.opacity = opacity
                }else if(type === 7){
                    valBlock =  document.getElementById("hue-rotateText");
                    val = document.getElementById("huerotate").value;
                    $('#hue-rotateText').html(val+'°')
                    let max = $('#huerotate').attr('max')
                    $("#huerotate").css("background-size",val/max*100+"% 100%")
                    huerotate = val
                    this.huerotate = huerotate
                }else if(type === 8){
                    valBlock =  document.getElementById("invertText");
                    val = document.getElementById("invert").value;
                    $('#invertText').html(val+'%')
                    let max = $('#invert').attr('max')
                    $("#invert").css("background-size",val/max*100+"% 100%")
                    invert = val
                    this.invert = invert
                }else if(type ===9){
                    val = Number(document.getElementById("temperature").value);
                    $('#temperatureText').html(val+'%')
                    //冷色系
                    if(val > 100){
                        if(val > this.temperature){
                            var g = val/100
                            var b = val/100
                            this.g = g
                            this.b = b
                        }else if(val < this.temperature){
                            var g = val/100
                            var b = val/100
                            this.g = g
                            this.b = b
                        }
                    //暖色系
                    }else if(val < 100){
                        if(val > this.temperature){
                            var r = 2-val/100
                            var g = 2-val/100
                            this.r = r
                            this.g = g
                        }else if(val < this.temperature){
                            var r = 2.5-val/100
                            var g = 2-val/100
                            this.r = r
                            this.g = g
                        }
                    }
                    this.temperature = val
                }else if(type ===10){
                    val = Number(document.getElementById("exposure").value);
                    $('#exposureText').html(val+'%')
                    let max = $('#exposure').attr('max')
                    $("#exposure").css("background-size",val/max*100+"% 100%")
                    // this.table_a = Number(val/2)
                    if(val/100>1){
                        this.table_b = 1 + (val - 100)/200
                        this.table_a = 2-(1 + (val - 100)/400)
                        this.table_c = -(val-100)*150/100/1000
                        // if(val - this.table == 1){
                        //     this.table_b = 1 + (val - 100)/100
                        //     this.table_a = 2-this.table_b
                        //     this.table_c = -(val-100)*150/100/1000
                        // }else if(val - this.table == -1){
                        //     this.table_b = 1 + (val - 100)/100
                        //     this.table_a = 2-this.table_b
                        //     this.table_c = -(val-100)*150/100/1000
                        // }
                        // if(val - this.table == 1){
                        //     this.table_b = 1 + (val - 100)/200
                        //     this.table_a = 2-this.table_b
                        //     this.table_c = -(val-100)*150/100/1000
                        // }else if(val - this.table == -1){
                        //     this.table_b = 1 + (val - 100)/200
                        //     this.table_a = 2-this.table_b
                        //     this.table_c = -(val-100)*150/100/1000
                        // }
                    }else if(val/100<1){
                        this.table_a = 2-val/100
                    }else if(val/100 == 1){
                        this.table_a = 1
                        this.table_b = 1
                        this.table_c = 0
                    }
                    this.table = val
                }
                var img = document.getElementById("img");
                img.style.filter = "url(#exposure_svg"+this.table+") brightness("+brightness+"%) contrast("+contrast+"%) grayscale("+grayscale+"%) saturate("+saturate+"%) blur("+blurval+"px) opacity("+opacity+"%) hue-rotate("+huerotate+"deg) invert("+invert+"%)"
                img.style.webkitFilter = "url(#exposure_svg"+this.table+") brightness("+brightness+"%) contrast("+contrast+"%) grayscale("+grayscale+"%) saturate("+saturate+"%) blur("+blurval+"px) opacity("+opacity+"%) hue-rotate("+huerotate+"deg) invert("+invert+"%)"
            },
            // 保存带滤镜的图片
            init_decoration(){
                var imgNode = document.getElementById("img");
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = imgNode.src
                var bili = Number((imgNode.naturalWidth / imgNode.naturalHeight).toFixed(4))
                //获取填写数据
                //1为指定宽度2为指定高度
                var img_width = imgNode.naturalWidth
                var img_height = imgNode.naturalHeight
                //创建画布
                var c=document.getElementById("myCanvas");
                if(img_width/img_height > 1){
                    //设置面宽缩小比例
                    var small = img_width/1500
                    c.width = 1500
                    c.height = img_height/small
                }else if(img_width/img_height < 1){
                    //设置面宽缩小比例
                    var small = img_height/1500
                    c.height = 1500
                    c.width = img_width/small
                }else if(img_width/img_height == 1){
                    //设置面宽缩小比例
                    var small = img_width/1500
                    c.width = 1500
                    c.height = 1500
                }
                if(this.rotate == 90 || this.rotate == -90){
                    let width_ = c.width
                    let height_ = c.height
                    c.width = height_
                    c.height = width_
                }
                if(this.rotate != 0){
                    var x = c.width/2;
                    var y = c.height/2;
                }
                //缩小后的面宽
                var small_face = parseFloat(this.face_width*30/small);
                //获取画布
                var ctx=c.getContext("2d")
                ctx.filter = getComputedStyle(imgNode).filter;
                ctx.translate(x,y)
                ctx.rotate(this.rotate * Math.PI/180);
                ctx.translate(-x,-y);
                if(this.rotate == 90 || this.rotate == -90){
                    //判断是否有水平镜像
                    if(this.symmeentry_X){
                        //判断是否垂直镜像
                        if(this.symmeentry_Y == true){
                            ctx.translate(c.width,c.height)
                            ctx.scale(-1, -1)
                        }else{
                            ctx.translate(0,c.height)
                            ctx.scale(1, -1)
                        }
                    }else{
                        //判断是否垂直镜像
                        if(this.symmeentry_Y == true){
                            ctx.translate(c.width,0)
                            ctx.scale(-1, 1)
                        }else{

                        }
                    }
                }else{
                    //判断是否有水平镜像
                    if(this.symmeentry_X){
                        //判断是否垂直镜像
                        if(this.symmeentry_Y == true){
                            ctx.translate(c.width,c.height)
                            ctx.scale(-1, -1)
                        }else{
                            ctx.translate(c.width,0)
                            ctx.scale(-1, 1)
                        }
                    }else{
                        //判断是否垂直镜像
                        if(this.symmeentry_Y == true){
                            ctx.translate(0,c.height)
                            ctx.scale(1, -1)
                        }else{

                        }
                    }
                }
                var vm = this
                img.onload = function(){
                    ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width/small)/2,(c.height-img_height/small)/2,img_width/small,img_height/small);
                    console.log(c.toDataURL("image/png"))
                    vm.filter_img = c.toDataURL("image/png");
                    var img_size = vm.showSize(c.toDataURL("image/png"))
                    vm.upfilter_img(c.toDataURL("image/png"),img_size,img_width,img_height)
                }
            },
            // 保存带滤镜的图片
            upfilter_img(img_url,img_size,img_width,img_height){
                var vm = this
                this.$http.post(this.GLOBAL.baseurl + 'v1/goods/upfilterimg',{img_url:img_url,img_size:img_size,img_width:img_width,img_height:img_height},{emulateJSON: true}).then((response)=>{
                    let uptoken = response.data.uptoken
                    let img_name = response.data.img_name
                    let img_width = response.data.img_width
                    let img_height = response.data.img_height
                    vm.putb64(uptoken,img_url,img_size,img_name,img_width,img_height)
                })
            },
            //获取base64文件大小
            showSize(base64url) {
                //获取base64图片大小，返回MB数字
                var str = base64url.replace('data:image/png;base64,', '');
                var equalIndex = str.indexOf('=');
                if(str.indexOf('=')>0) {
                    str=str.substring(0, equalIndex);
                }
                var strLength=str.length;
                var fileLength=parseInt(strLength-(strLength/8)*2);
                return fileLength
            },
            //上传文件到七牛云
            putb64(uptoken,base64url,img_size,img_name,img_width,img_height){
                var vm = this
                var pic = base64url.split(",")[1];
                var url = "https://upload-z2.qiniup.com/putb64/"+img_size; //非华东空间需要根据注意事项 1 修改上传域名
                var xhr = new XMLHttpRequest();
                // xhr.onreadystatechange=function(){
                //     if (xhr.readyState==4){
                //         document.getElementById("myDiv").innerHTML=xhr.responseText;
                //     }
                // }
                vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/upfilterimg2',{params:{
                        tel:this.telphone,
                        imgid:vm.imgid,
                        img_name:img_name,
                        img_width:img_width,
                        img_height:img_height,
                        brightness:this.brightness,
                        contrast:this.contrast,
                        grayscale:this.grayscale,
                        saturate:this.saturate,
                        blurval:this.blurval,
                        opacity:this.opacity,
                        huerotate:this.huerotate,
                        invert:this.invert,
                        rotate:this.rotate,
                        symmeentry_X:this.symmeentry_X,
                        symmeentry_Y:this.symmeentry_Y
                }}).then((response)=>{
                    if(response.data == 1){
                        toastr.warning("保存失败")
                    }else if(response.data == 2){
                        toastr.info("保存成功")
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/getfilter',{params:{tel:vm.telphone,imgid:vm.imgid}}).then((response)=>{
                            for(var i=0;i<response.data.length;i++){
                                response.data[i].filter_img_url = 'http://qiniu.zaoanart.com/'+ response.data[i].filter_img
                            }
                            vm.filter_info = response.data
                        })
                    }
                })
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/octet-stream");
                xhr.setRequestHeader("Authorization", "UpToken "+uptoken);
                xhr.send(pic);
            },
            //保存带滤镜的图片结束
            // 保存带滤镜的图片,并跳转到装裱
            decoration_filter(){
                var imgNode = document.getElementById("img");
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = imgNode.src
                var bili = Number((imgNode.naturalWidth / imgNode.naturalHeight).toFixed(4))
                //获取填写数据
                //1为指定宽度2为指定高度
                var img_width = imgNode.naturalWidth
                var img_height = imgNode.naturalHeight
                //创建画布
                var c=document.getElementById("myCanvas");
                if(img_width/img_height > 1){
                    //设置面宽缩小比例
                    var small = img_width/1500
                    c.width = 1500
                    c.height = img_height/small
                }else if(img_width/img_height < 1){
                    //设置面宽缩小比例
                    var small = img_height/1500
                    c.height = 1500
                    c.width = img_width/small
                }else if(img_width/img_height == 1){
                    //设置面宽缩小比例
                    var small = img_width/1500
                    c.width = 1500
                    c.height = 1500
                }
                if(this.rotate == 90 || this.rotate == -90){
                    let width_ = c.width
                    let height_ = c.height
                    c.width = height_
                    c.height = width_
                }
                if(this.rotate != 0){
                    var x = c.width/2;
                    var y = c.height/2;
                }
                //缩小后的面宽
                var small_face = parseFloat(this.face_width*30/small);
                //获取画布
                var ctx=c.getContext("2d")
                ctx.filter = getComputedStyle(imgNode).filter;
                ctx.translate(x,y)
                ctx.rotate(this.rotate * Math.PI/180);
                ctx.translate(-x,-y);
                var vm = this
                img.onload = function(){
                    ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width/small)/2,(c.height-img_height/small)/2,img_width/small,img_height/small);
                    vm.filter_img = c.toDataURL("image/png");
                    var img_size = vm.showSize(c.toDataURL("image/png"))
                    vm.upfilter_img_(c.toDataURL("image/png"),img_size,img_width,img_height)
                }
            },
            //保存带滤镜的图片,并跳转到装裱
            upfilter_img_(img_url,img_size,img_width,img_height){
                var vm = this
                this.$http.post(this.GLOBAL.baseurl + 'v1/goods/upfilterimg',{img_url:img_url,img_size:img_size,img_width:img_width,img_height:img_height},{emulateJSON: true}).then((response)=>{
                    let uptoken = response.data.uptoken
                    let img_name = response.data.img_name
                    let img_width = response.data.img_width
                    let img_height = response.data.img_height
                    vm.putb64_(uptoken,img_url,img_size,img_name,img_width,img_height)
                })
            },
            //上传带滤镜的图片到七牛云,成功之后跳转装裱页面
            putb64_(uptoken,base64url,img_size,img_name,img_width,img_height){
                var vm = this
                var pic = base64url.split(",")[1];
                var url = "https://upload-z2.qiniup.com/putb64/"+img_size; //非华东空间需要根据注意事项 1 修改上传域名
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange=function(){
                    if (xhr.readyState==4){
                        var return_info = JSON.parse(xhr.responseText)
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/upfilterimg2',{params:{tel:vm.telphone,imgid:vm.imgid,img_name:return_info.key,img_width:img_width,img_height:img_height}}).then((response)=>{
                            if(response.data == 1){
                                toastr.warning("图片生成失败")
                            }else if(response.data == 2){
                                toastr.info("图片生成成功,正在前往装裱")
                                vm.$router.push({path:"/decoration?img="+return_info.key+"&max_width="+vm.max_info.max_width+"&max_height="+vm.max_info.max_height+"&imgid="+vm.max_info.imgid})
                            }
                        })
                    }
                }
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/octet-stream");
                xhr.setRequestHeader("Authorization", "UpToken "+uptoken);
                xhr.send(pic);
            },
            //顺时针旋转90度
            clockwise_rotate(){
                var symmeentry_X = 0
                var symmeentry_Y = 0
                if(this.symmeentry_X){
                    symmeentry_X = 180
                }
                if(this.symmeentry_Y){
                    symmeentry_Y = 180
                }
                $("#img").css("transform","rotate(90deg) rotateX("+symmeentry_X+"deg) rotateY("+symmeentry_Y+"deg)")
                this.rotate = 90
            },
            //逆时针旋转90度
            anticlockwise_rotate(){
                var symmeentry_X = 0
                var symmeentry_Y = 0
                if(this.symmeentry_X){
                    symmeentry_X = 180
                }
                if(this.symmeentry_Y){
                    symmeentry_Y = 180
                }
                $("#img").css("transform","rotate(-90deg) rotateX("+symmeentry_X+"deg) rotateY("+symmeentry_Y+"deg)")
                this.rotate = -90
            },
            //旋转180度
            reverse(){
                var symmeentry_X = 0
                var symmeentry_Y = 0
                if(this.symmeentry_X){
                    symmeentry_X = 180
                }
                if(this.symmeentry_Y){
                    symmeentry_Y = 180
                }
                var img = document.getElementById("img");
                var style_ = getComputedStyle(img).transform;
                if(style_ != 'none'){
                    // $("#img").css("transform","")
                    $("#img").css("transform","none")
                    this.rotate = 0
                }else{
                    $("#img").css("transform","rotate(180deg) rotateX("+symmeentry_X+"deg) rotateY("+symmeentry_Y+"deg)")
                    this.rotate = 180
                }
            },
            horizontal_symmeentry(){
                this.symmeentry_X = !this.symmeentry_X
                this.symmeentry()
            },
            vertical_symmeentry(){
                this.symmeentry_Y = !this.symmeentry_Y
                this.symmeentry()
            },
            //水平对称
            symmeentry(){
                if(this.rotate == 90 || this.rotate == -90){
                    //判断是否有水平镜像
                    if(this.symmeentry_X){
                        //判断是否垂直镜像
                        if(this.symmeentry_Y == true){
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(180deg) rotateY(180deg)")
                        }else{
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(180deg) rotateY(0deg)")
                        }
                    }else{
                        //判断是否垂直镜像
                        if(this.symmeentry_Y == true){
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg) rotateY(180deg)")
                        }else{
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg) rotateY(0deg)")
                        }
                    }
                }else{
                    //判断是否有水平镜像
                    if(this.symmeentry_X){
                        //判断是否垂直镜像
                        if(this.symmeentry_Y == true){
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(180deg) rotateY(180deg)")
                        }else{
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg) rotateY(180deg)")
                        }
                    }else{
                        //判断是否垂直镜像
                        if(this.symmeentry_Y == true){
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(180deg) rotateY(0deg)")
                        }else{
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg) rotateY(0deg)")
                        }
                    }
                }
            },
            //垂直对称
            vertical_symmeentry1(){
                if(this.rotate == 90 || this.rotate == -90){
                    if(this.symmeentry_Y == true){
                        if( this.symmeentry_X){
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg) rotateY(0deg)")
                            this.symmeentry_X = false
                        }else{
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg) rotateY(180deg)")
                            this.symmeentry_X = true
                        }
                        this.symmeentry_Y = false
                    }else{
                        if( this.symmeentry_X){
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg) rotateY(0deg)")
                            this.symmeentry_X = false
                        }else{
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg) rotateY(180deg)")
                            this.symmeentry_X = true
                        }
                        // $("#img").css("transform","rotate("+this.rotate+"deg) rotateY(180deg)")
                        this.symmeentry_Y = true
                    }
                }else{
                    console.log(this.symmeentry_X,this.symmeentry_Y)
                    if( this.symmeentry_Y){
                        if( this.symmeentry_X){
                            console.log(123)
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg) rotateY(0deg)")
                            this.symmeentry_X = false
                        }else{
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(180deg) rotateY(0deg)")
                            this.symmeentry_X = true
                        }
                        // $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(0deg)")
                        this.symmeentry_Y = false
                    }else{
                        if( this.symmeentry_X){
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(180deg) rotateY(0deg)")
                            this.symmeentry_X = false
                        }else{
                            $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(180deg) rotateY(180deg)")
                            this.symmeentry_X = true
                        }
                        // $("#img").css("transform","rotate("+this.rotate+"deg) rotateX(180deg)")
                        this.symmeentry_Y = true
                    }
                }
            },
            //对比原图
            compared_in(){
                $("#img2").css("display","inline-block")
            },
            //取消对比原图
            compared_out(){
                $("#img2").css("display","none")
            },
            //显示快捷装裱
            shows(e){
                $(e.target).next(".fast_decortion").css("display",'inline-block')
            },
            //隐藏快捷装裱
            hiddens(e){
                console.log($(e.target))
                $(e.target).next(".fast_decortion").css("display",'none')
            },
            //还原旋转特效
            reduction(){
                this.rotate = 0
                this.symmeentry_X = false
                this.symmeentry_Y = false
                var imgNode = document.getElementById("img");
                this.table_a = 1
                this.table_b = 1
                this.table_c = 0
                imgNode.style.filter = "brightness(100%) contrast(100%) grayscale(0%) saturate(100%) blur(0px) opacity(100%) hue-rotate(0deg) invert(0%) url(#exposures_svg)"
                $("#img").css("transform","none")
                document.getElementById("brightness").value = "100";
                document.getElementById("contrast").value = "100";
                document.getElementById("grayscale").value = "0";
                document.getElementById("saturate").value = "100";
                document.getElementById("blurval").value = "0";
                document.getElementById("opacity").value = "100";
                document.getElementById("huerotate").value = "0";
                document.getElementById("invert").value = "0";
                document.getElementById("exposure").value = "100";
                $("#brightnessText").html('100%')
                $("#contrastText").html('100%')
                $("#grayscaleText").html('0%')
                $("#saturateText").html('100%')
                $("#blurvalText").html('0%')
                $("#opacityText").html('100%')
                $("#huerotateText").html('0%')
                $("#invertText").html('0%')
                $("#exposureText").html('100%')
                $("#brightness").css("background-size","50% 100%")
                $("#contrast").css("background-size","20% 100%")
                $("#grayscale").css("background-size","0% 100%")
                $("#saturate").css("background-size","20% 100%")
                $("#blurval").css("background-size","0% 100%")
                $("#opacity").css("background-size","100% 100%")
                $("#huerotate").css("background-size","0% 100%")
                $("#invert").css("background-size","0% 100%")
                $("#exposure").css("background-size","50% 100%")

            }
        }
    }
</script>
<style>
    #img{
        width: auto;
                        /*亮度             对比度          灰度      饱和度      模糊度      透明度         色调对调        反色*/
            /*filter:brightness(100%) contrast(100%) grayscale(0%) saturate(100%) blur(0px) opacity(100%) hue-rotate(0deg) invert(0%);*/
    }
    #img{
        filter:brightness(100%) contrast(100%) grayscale(0%) saturate(100%) blur(0px) opacity(100%) hue-rotate(0deg) invert(0%) sepia(0);
        -webkit-filter:brightness(100%) contrast(100%) grayscale(0%) saturate(100%) blur(0px) opacity(100%) hue-rotate(0deg) invert(0%) sepia(0);
    }
    #img2{
        /*width: 50vw;*/
        max-width: 900px;
        max-height: 600px;
        display: none;
        position: absolute;
        /*left: 0px;*/
        z-index: 999999;
    }
    #compared{
        position: absolute;
        top: 10;
        width: 100px;
        height: 30px;
        line-height: 30px;
        background-color: #000;
        color: #fff;
        border-radius: 3px;
        top: 10px;
        cursor: default;
    }
    .filter_val{
        width: 100%;
        margin: 15px 0;
        text-align: left;
    }
    .filter_btn{
        display:inline-block;
        margin:2px 0px;
        color: #fff;
        background-color: #000;
        border: none;
        height: 35px;
        padding: 0px 15px;
        line-height: 35px;
        text-align: center;
        border-radius: 2px;
    }
    .filter_val_label{
        display:block
    }
    .fast_decortion{
        display: none;
        position: absolute;
        float: left;
        left: 35px;
        width: 100px;
        height: 30px;
        background: #fff;
        border-radius: 2px;
        line-height: 30px;
        margin: 10px;
    }
    /*横条样式*/
    input[type=range] {
        -webkit-appearance: none;/*清除系统默认样式*/
        width: 100%;
        background: -webkit-linear-gradient(#000, #000) no-repeat, #ddd;/*设置左边颜色为#61bd12，右边颜色为#ddd*/
        /*background-size: 75% 100%;!*设置左右宽度比例*!*/
        height: 3px;/*横条的高度*/
    }
    /*拖动块的样式*/
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none; /*清除系统默认样式*/
        height: 26px; /*拖动块高度*/
        width: 26px; /*拖动块宽度*/
        background: #fff; /*拖动块背景*/
        border-radius: 50%; /*外观设置为圆形*/
        border: solid 1px #ddd; /*设置边框*/
    }

</style>
<template>
    <div>
        <input type="hidden" value="艺术,早安,早安艺术,article,早安art,ZaoanArt,海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧">
        <h1 style="display: none;position: absolute;">艺术,早安,早安艺术,article,早安art,ZaoanArt,海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧</h1>
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
                <div id="decoration-bgi" style="display: none;float: left;width: 150px;margin-left: -100px;height: 550px;align-items: center;flex-direction: column;overflow-y: scroll;">
                    <img src="http://qiniu.zaoanart.com/BGI-1.jpg" alt="" width="150px" data-id="bgi1" data-height="320" data-width="533" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,1)">
                    <img src="http://qiniu.zaoanart.com/BGI-2.jpg" alt="" width="150px" data-id="bgi2" data-height="360" data-width="524" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,2)">
                    <img src="http://qiniu.zaoanart.com/BGI-3.jpg" alt="" width="150px" data-id="bgi3" data-height="360" data-width="473" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,3)">
                    <!--<img src="http://qiniu.zaoanart.com/BGI-4.jpg" alt="" width="150px" data-id="bgi4" data-height="320" data-width="320" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,4)">-->
                    <img src="http://qiniu.zaoanart.com/BGI-5.jpg" alt="" width="150px" data-id="bgi5" data-height="320" data-width="320" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,5)">
                    <img src="http://qiniu.zaoanart.com/BGI-6.jpg" alt="" width="150px" data-id="bgi6" data-height="320" data-width="276" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,6)">
                    <img src="http://qiniu.zaoanart.com/BGI-7.jpg" alt="" width="150px" data-id="bgi7" data-height="340" data-width="333" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,7)">
                    <img src="http://qiniu.zaoanart.com/BGI-8.jpg" alt="" width="150px" data-id="bgi8" data-height="360" data-width="360" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,8)">
                    <img src="http://qiniu.zaoanart.com/BGI-9.jpg" alt="" width="150px" data-id="bgi9" data-height="320" data-width="371" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,9)">
                    <img src="http://qiniu.zaoanart.com/BGI-10.jpg" alt="" width="150px" data-id="bgi10" data-height="320" data-width="320" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,10)">
                    <img src="http://qiniu.zaoanart.com/BGI-11.jpg" alt="" width="150px" data-id="bgi11" data-height="320" data-width="307" style="display: inline-block;margin-bottom:5px" @click="bgi_decoration($event,11)">
                </div>

                <div class="img-con" style="width:60%;float:left;border:none;margin-right: 5%;height: 550px;display: flex;justify-content: center;align-items: center;">
                    <canvas id="myCanvas" style="position: absolute;float: left;display:none;max-width:550px;max-height:550px;display: flex;justify-content: center;align-items: center;"></canvas>
                    <canvas id="BGI-Canvas" style="position: absolute;float: left;display:none;max-width:550px;max-height:550px;display: none;justify-content: center;align-items: center;"></canvas>
                    <div id="img_box">
                        <img :src="dataImageList.img" id="img" style="max-height:550px;max-width:100%" @click="show_()" alt="艺术,早安,早安艺术,article,早安art,ZaoanArt,海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧">
                    </div>
                    <img :src="dataImageList.img" id="img2" style="max-height:550px;max-width:60%;display:none">
                </div>
                <div class="img-info" style="width:30%;float:left;">
                    <!--图片信息-->
                    <div id="info_div" style="position: absolute;text-align:left;color:#999;" >
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

                        <div style="margin-top:30px;width:90px;text-align:center;margin-left: -5px;font-weight: bold;font-size: 15px;color: #000;">
                            <img :src="qrcode_img" width="90px" style=""></img><br>
                            微信扫一扫<br>
                            小程序查看
                        </div>
                        <div style="margin-top:30px;margin-bottom: 30px;height: 40px;line-height: 40px;">
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
                        <a style="cursor: pointer;color:#999;font-size:20px" target="_blank" @mouseenter="specialeffects_on()" @mouseleave="specialeffects_off()" @click="show_effect()">效果调整
                            <!--:href="'/#/Decoration/Specialeffects?img='+dataImageList.img2+'&max_width='+dataImageList.max_width+'&max_height='+dataImageList.max_length+'&imgid='+dataImageList.id+''"-->
                            <img src="../../assets/images/right2.png" alt="" id="specialeffects_1" width="25px" style="position: absolute;z-index: -999;">
                        </a>
                        <br>
                        <a style="cursor: pointer;color:#999;font-size:20px" target="_blank" @mouseenter="specialeffects_on2()" @mouseleave="specialeffects_off2()" @click="show_decoration()">智能装裱报价 beta1.0
                            <!--:href="'/#/Decoration?img='+dataImageList.img2+'&max_width='+dataImageList.max_width+'&max_height='+dataImageList.max_length+'&imgid='+dataImageList.id+''"-->
                            <img src="../../assets/images/right2.png" alt="" id="specialeffects_2" width="25px" style="position: absolute;z-index: -999;">
                        </a>
                    </div>
                    <!--图片信息结束-->
                    <!--效果调整-->
                    <div id="effect_div" style="justify-content: center;align-items: center;position: absolute;display:none">
                        <img src="../../assets/images/loading.gif" id="loading_gif" width="50px" style="position: absolute;display:none">

                        <div class="clearfix" style="font-size: 1.5vh">
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
                            <div class="clearfix" style="display:flex;justify-content: space-between;">
                                <!--<div style="width: 500px;overflow-y: scroll;: scroll;float: left;height: 100%;">-->
                                <!--<span>点击图片快速装裱</span>-->
                                <!--<div :v-if="(index)" v-for="(item,index) in filter_info" style="margin: 10px;position: relative;">-->
                                <!--<a target="_blank" :href="'/#/Decoration?img='+item.filter_img+'&max_width='+max_info.max_width+'&max_height='+max_info.max_height+'&imgid='+item.imgid+''">-->
                                <!--<img :src="item.filter_img_url" alt="" v-b-tooltip.hover title="Tooltip content" width="400" class="img234">-->
                                <!--</a>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--<div id="decor" style="width:80%;display: flex;justify-content: center;">-->
                                <!--<div style="position:relative;">-->
                                <!--<canvas id="myCanvas" style="display:none;max-width:100%;max-height:auto;"></canvas>-->
                                <!--<img id="img2" class="img2" src="" alt="">-->
                                <!--<div id="img_box" style="max-width: 900px;max-height: 600px;display: block;overflow: hidden;">-->
                                <!--<img id="img" src="" alt="" width="auto" style="max-height: 600px;max-width: 900px;display:inline-block;">-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--&lt;!&ndash;<img id="bgImg" src="" alt="" style="display:none">&ndash;&gt;-->
                                <!--&lt;!&ndash;<img id="dltImg" src="" alt="" style="display:none">&ndash;&gt;-->
                                <!--<div style="display:inline-block;"class="canvas"></div>-->
                                <!--</div>-->

                                <div style="max-height: 40vh;overflow-y: scroll;width:100%;height:100%;float: right;text-align: left;">
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

                                </div>

                            </div>
                            <div style="text-align: left;margin-top: 20px;">
                                <button class="filter_btn" style="display: inline-block;" @click="init_decoration">保存调整效果</button>
                                <button class="filter_btn" style="display: inline-block;" @click="decoration_filter">前往装裱</button>
                                <button class="filter_btn" style="display: inline-block;" @click="come_back">取消</button>
                            </div>
                        </div>
                    </div>
                    <!--效果调整结束-->
                    <!--装裱-->
                    <div id="main_info" data_id="1" style="position: absolute;display:none;max-width: 600px;margin-right:2%;width:100%;float:right;font-size: 15px;text-align: left;">
                        <!--第一步-->
                        <div id="first_step">
                            <div style="padding-left:20px;background-color:#000;height:40px">
                <span class="" style="font-weight: bold;margin-top:1px;line-height: 40px;background-color:#fff;height:40px;width:100px;text-align: center;display: inline-block;">
                    <img src="../../assets/images/cutting.png" alt="" height="40">裁切
                </span>
                                <button class="filter_btn" style="float: right;font-size: 17px;" @click="come_back_">
                                    <img src="../../assets/images/shutdown2.png" height="25">
                                    取消
                                </button>
                            </div>
                            <!--第一步-->
                            <!--<input type="radio" id="is_cuts" data_id="1" v-model="is_cut" @click="is_cutting($event)">裁切-->
                            <!--<button class="btn" @click="confirm()">确认</button>-->
                            <!--<br>-->
                            <!--剪切快捷-->
                            <div style="margin-top:10px;padding:30px;margin-top:20px;" id="first_step">
                                <div style="width: 40%;display: inline-block;">
                                    <div style="width: 120px;padding: 5px;text-align: center;cursor: pointer;" id="is_cuts" data_id="1" v-model="is_cut" @click="is_cutting($event)">
                                        <img src="../../assets/images/freecut.png" alt="" height="40">
                                        <div class="cut_text" :class="is_select==1?'selected_cut':'select_cut'">自由</div>
                                    </div>
                                </div>
                                <div style="width: 40%;display: inline-block;margin-top:20px;">
                                    <div style="width: 120px;padding: 5px;text-align: center;cursor: pointer;" id="is_cuts1" @click="proportiona1_1($event)">
                                        <img style="width:40px;height:40px;display: inline-block;border: 2px solid #000;"></img>
                                        <div class="cut_text" :class="is_select==2?'selected_cut':'select_cut'">1:1</div>
                                    </div>
                                </div>
                                <div style="width: 40%;display: inline-block;margin-top:20px;">
                                    <div style="width: 120px;padding: 5px;text-align: center;cursor: pointer;" id="is_cuts2" @click="proportiona2_3">
                                        <div style="width: 40px;display: inline-block;">
                                            <img style="width:26px;height:40px;margin-left: 14px;display: inline-block;border: 2px solid #000;"></img>
                                        </div>
                                        <div class="cut_text" :class="is_select==3?'selected_cut':'select_cut'">2:3</div>
                                    </div>
                                </div>
                                <div style="width: 40%;display: inline-block;margin-top:20px;">
                                    <div style="width: 120px;padding: 5px;text-align: center;cursor: pointer;" id="is_cuts3" @click="proportiona3_2">
                                        <img style="width:40px;height:26px;display: inline-block;border: 2px solid #000;"></img>
                                        <div class="cut_text" :class="is_select==4?'selected_cut':'select_cut'">3:2</div>
                                    </div>
                                </div>
                                <div style="width: 40%;display: inline-block;margin-top:20px;">
                                    <div style="width: 120px;padding: 5px;text-align: center;cursor: pointer;" id="is_cuts4" @click="proportiona1_2">
                                        <div style="width: 40px;display: inline-block;">
                                            <img style="width:20px;height:40px;margin-left: 20px;display: inline-block;border: 2px solid #000;"></img>
                                        </div>
                                        <div class="cut_text" :class="is_select==5?'selected_cut':'select_cut'">1:2</div>
                                    </div>
                                </div>
                                <div style="width: 40%;display: inline-block;margin-top:20px;">
                                    <div style="width: 120px;padding: 5px;text-align: center;cursor: pointer;" id="is_cuts5" @click="proportiona2_1">
                                        <img style="width:40px;height:20px;display: inline-block;border: 2px solid #000;"></img>
                                        <div class="cut_text" :class="is_select==6?'selected_cut':'select_cut'">2:1</div>
                                    </div>
                                </div>
                                <div style="width: 40%;display: inline-block;margin-top:20px;">
                                    <div style="width: 120px;padding: 5px;text-align: center;cursor: pointer;" id="is_cuts6" @click="proportiona1_3">
                                        <div style="width: 40px;display: inline-block;">
                                            <img style="width:13px;height:40px;margin-left: 27px;display: inline-block;border: 2px solid #000;"></img>
                                        </div>
                                        <div class="cut_text" :class="is_select==7?'selected_cut':'select_cut'">1:3</div>
                                    </div>
                                </div>
                                <div style="width: 40%;display: inline-block;margin-top:20px;">
                                    <div style="width: 120px;padding: 5px;text-align: center;cursor: pointer;" id="is_cuts7" @click="proportiona3_1">
                                        <img style="width:40px;height:13px;display: inline-block;border: 2px solid #000;"></img>
                                        <div class="cut_text" :class="is_select==8?'selected_cut':'select_cut'">3:1</div>
                                    </div>
                                </div>
                                <span style="display: block;font-weight: bold;margin-top: 40px;">自定义裁切</span>
                                <div style="margin-top:5px">
                                    宽:<input id="cut_width" type="text" style="width:100px" oninput="value=value.replace(/[^\d.]/g,'')">
                                    高:<input id="cut_height" type="text" style="width:100px" oninput="value=value.replace(/[^\d.]/g,'')">
                                </div>
                                <button class="filter_btn" style="margin-top:10px;display: block;" @click="customize_cut()">
                                    裁切
                                </button>
                            </div>
                            <!--确认-->
                            <div style="padding: 0px 40px 0px 20px;height:40px;text-align: right;">
                                <span id="prompt_text" style="display:none;color:#000;font-weight: bold;font-size: 13px;">如无需裁切,直接下一步</span>
                                <img src="../../assets/images/prompt.png" alt="" height="20" @mouseenter="show_prompt()" @mouseleave="hid_prompt()">
                                <span class="" style="font-weight: bold;line-height: 30px;background-color:#000;height:30px;width:100px;text-align: center;display: inline-block;color:#fff;cursor: pointer;" @click="confirm()">
                            下一步
                            <img src="../../assets/images/right_double.png" alt="" height="13">
                        </span>
                            </div>
                        </div>
                        <!--第二步-->
                        <div id="second_step" style="display:none">
                            <!--返回第一步-->
                            <div id="second_step_div" style="padding-left:20px;background-color:#000;height:40px;display:none">
                        <span class="second_span" style="font-weight: bold;margin-top:1px;line-height: 40px;background-color:#fff;height:40px;width:100px;text-align: center;display: inline-block;">
                    <img src="../../assets/images/fangkuang.png" alt="" height="30">装裱
                </span>
                                <button class="filter_btn" style="float: right;font-size: 17px;" @click="come_back_">
                                    <img src="../../assets/images/shutdown2.png" height="25">
                                    取消
                                </button>

                            </div>
                            <!--返回第二步-->
                            <div id="third_step_div" style="padding-left:20px;background-color:#000;height:40px;display:none">
                        <span class="second_span" style="font-weight: bold;margin-top:1px;line-height: 40px;background-color:#fff;height:40px;width:100px;text-align: center;display: inline-block;">
                    <img src="../../assets/images/detail.png" alt="" height="30">细节
                </span>
                                <button class="filter_btn" style="float: right;font-size: 17px;" @click="come_back_">
                                    <img src="../../assets/images/shutdown2.png" height="25">
                                    取消
                                </button>
                            </div>
                            <div style="width:100%;padding:20px;">
                                装裱方式
                                <button id="show_decoration_method" style="display:none;border:1px solid #ccc;width:200px;height: 40px;">满裱</button>
                                <br>
                                <ul id="decoration_method" class="row" style="height: 40px;">
                                    <li class=" decoration" @click="select_decoration(6,$event)">纯画芯</li>
                                    <li class=" decoration" @click="select_decoration(7,$event)">无框绷架</li>
                                    <li class=" decoration" @click="select_decoration(1,$event)">满裱</li>
                                    <li class=" decoration" @click="select_decoration(4,$event)">套框绷架</li>
                                    <li class=" decoration" @click="select_decoration(2,$event)">卡纸</li>
                                    <li class=" decoration" @click="select_decoration(3,$event)">盒子</li>
                                    <li class=" decoration" @click="select_decoration(5,$event)">单立体</li>
                                </ul>
                                <hr style="border-top: 1px solid #000;">
                                <div id="material_div" style="height: 40px;line-height: 40px;">
                                    <div style="vertical-align: middle;display:inline-block;height: 40px;font-size: 15px;">画芯材质</div>
                                    <select name="" id="material_select" v-model="material_val" class="btn" style="border:0px;padding:0px;font-size: 15px;color: #2c3e50;height: 40px;background-color:#EBEBEB">
                                        <option v-for="(item,index) in Material" v-if="status != 4 && status != 7" :value="item">{{item.name}} </option>
                                        <option v-else-if="item.id == 1 || item.id == 2" :value="item">{{item.name}}</option>
                                    </select>
                                    <!--<ul style="display: inline-block;margin-right:10px">-->
                                    <!--<li v-for="Material in Material">{{Material.name}}</li>-->
                                    <!--</ul>-->
                                    <img src="../../assets/images/prompt.png" alt="" height="25" @mouseenter="show_prompt2()" @mouseleave="hid_prompt2()">
                                    <span id="prompt2_text" style="vertical-align: middle;display:none;">无框绷架 套框绷架只能选择宣纸或者油画布</span>
                                </div>
                                <hr id="material_hr" style="border-top: 1px solid #000;">
                                <div id="huaxin" style="padding: 5px;">
                                    画芯: 宽<input type="text" id="img_width"  @input="assign_width($event)" oninput="value=value.replace(/[^\d.]/g,'')" style="width: 60px;height: 20px"> *
                                    高<input type="text" id="img_height"  @input="assign_height($event)" oninput="value=value.replace(/[^\d.]/g,'')" style="width: 60px;height: 20px">/cm
                                    (最大尺寸 : {{max_info.max_width}} * {{max_info.max_height}} /cm)<br>
                                </div>
                                <div style="padding: 5px;display:none;" id="box_img_w_h">
                                    画框: 宽<input type="text" id="box_img_width"  @input="assign_box_width($event)" oninput="value=value.replace(/[^\d.]/g,'')" style="width: 60px;height: 20px"> *
                                    高<input type="text" id="box_img_height"  @input="assign_box_height($event)" oninput="value=value.replace(/[^\d.]/g,'')" style="width: 60px;height: 20px">/cm
                                </div>
                                <div id="detail" style="display:none">
                                    <span id="prompt_text4" style="display:none;font-size: 12px;color: #888;">为了保证图片比例,我们将会对图片的高度稍作调整, <br>如有特殊要求请联系客服,为您带来的不便请您谅解.</span>
                                    <div id="drawing_core" style="padding: 5px;display:none;">
                                        画芯留边: <input type="text" id="drawing_core_input" @input="drawing_core($event)" oninput="value=value.replace(/[^\d.]/g,'')" style="width: 60px;height: 20px">cm
                                        留边偏移: <input type="text" id="core_shift_input" @input="core_shift($event)" oninput="value=value.replace(/[^\d.]/g,'')" style="width: 60px;height: 20px">cm
                                        方向:
                                        <select name="" id="core_shift_direction" >
                                            <option value="top">上</option>
                                            <option value="bottom">下</option>
                                            <option value="left">左</option>
                                            <option value="right">右</option>
                                        </select>
                                        <br>
                                        <div style="display:none" id="drawing_cores">
                                            画芯偏移: <input type="text" id="core_shift_inputs" @input="core_shifts($event)" oninput="value=value.replace(/[^\d.]/g,'')" style="width: 60px;height: 20px">cm
                                            <select name="" id="core_shift_directions" >
                                                <option value="top">上</option>
                                                <option value="bottom">下</option>
                                                <option value="left">左</option>
                                                <option value="right">右</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div data_id="1" id="color_tag_par2" style="display:none">
                                        <button class="btn" color_id="1" style="border:solid 1px #ccc;background-color:#fff" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="2" style="border:solid 1px #ccc;background-color:#efe9e0" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="3" style="border:solid 1px #ccc;background-color:#c9c3a3" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="4" style="border:solid 1px #ccc;background-color:#bbc9cd" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="5" style="border:solid 1px #ccc;background-color:#bcb4b1" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="6" style="border:solid 1px #ccc;background-color:#c1b0b0" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="7" style="border:solid 1px #ccc;background-color:#bdb18c" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="8" style="border:solid 1px #ccc;background-color:#6298b7" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="9" style="border:solid 1px #ccc;background-color:#807f75" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="10" style="border:solid 1px #ccc;background-color:#887953" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="11" style="border:solid 1px #ccc;background-color:#6b6d3f" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="12" style="border:solid 1px #ccc;background-color:#684d4c" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="13" style="border:solid 1px #ccc;background-color:#7b3c43" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="14" style="border:solid 1px #ccc;background-color:#614837" @click="color_tag2($event)"></button>
                                        <button class="btn" color_id="15" style="border:solid 1px #ccc;background-color:#2a2a2a" @click="color_tag2($event)"></button>
                                    </div>
                                    <div data_id="1" id="color_tag_par" style="display:none">
                                        <button class="btn" color_id="1" style="border:solid 1px #ccc;background-color:#fff" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="2" style="border:solid 1px #ccc;background-color:#efe9e0" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="3" style="border:solid 1px #ccc;background-color:#c9c3a3" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="4" style="border:solid 1px #ccc;background-color:#bbc9cd" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="5" style="border:solid 1px #ccc;background-color:#bcb4b1" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="6" style="border:solid 1px #ccc;background-color:#c1b0b0" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="7" style="border:solid 1px #ccc;background-color:#bdb18c" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="8" style="border:solid 1px #ccc;background-color:#6298b7" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="9" style="border:solid 1px #ccc;background-color:#807f75" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="10" style="border:solid 1px #ccc;background-color:#887953" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="11" style="border:solid 1px #ccc;background-color:#6b6d3f" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="12" style="border:solid 1px #ccc;background-color:#684d4c" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="13" style="border:solid 1px #ccc;background-color:#7b3c43" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="14" style="border:solid 1px #ccc;background-color:#614837" @click="color_tag($event)"></button>
                                        <button class="btn" color_id="15" style="border:solid 1px #ccc;background-color:#2a2a2a" @click="color_tag($event)"></button>
                                        <br>
                                        <button class="btn" data_id="1" id="is_pause" style="margin-top:15px" @click="pic_pause($event)">画面悬浮</button>
                                    </div>
                                </div>
                                <hr style="border-top: 1px solid #000;">
                                <div id="select_box" style="display:none">
                                    <span>选择画框</span>
                                    <select name="" id="" v-model="color_series_val" class="btn" style="border:0px;padding:0px;font-size: 15px;color: #2c3e50;height: 40px;background-color:#EBEBEB">
                                        <option  v-for="(color_series,index) in color_series" v-if="color_series.id == 6 && status == 4" :id="color_series.id" :value="color_series.id">{{color_series.series_name}}</option>
                                        <option v-else-if="color_series.id == 1 || color_series.id == 2 || color_series.id == 3 || color_series.id == 4 || color_series.id == 5" :value="color_series.id">{{color_series.series_name}}</option>
                                    </select>
                                    <span style="font-size: 12px;background-color: #fff;color: #797777;">{{border_info}}</span>
                                    <div style="height:150px;">
                                        <div style="display: inline-block;height: 125px;float: left;line-height: 125px;" @click="last_scroll()">
                                            <img src="../../assets/images/toleft.png" alt="" height="40">
                                        </div>
                                        <div id="border_img" style="white-space:nowrap;overflow-x: auto;height: 150px;width: 80%;display: inline-block;">
                                            <div v-for="border in border" :data="border.img_name" :data2="border.border_name2" v-if="border.sid == color_series_val" :face_width="border.face_width" style="display: inline-flex;justify-content:center ; position: relative;align-items:center;width:70px;height:125px;margin-right:10px;line-height: 100px;" >
                                                <img class="border_confirm" height="25" style="position: absolute;display:none;" src="../../assets/images/confirm.png" alt="">
                                                <img  :src="border.preview_imgs" alt="" height="100" @click="edit_border_status($event,border.img_name,border.price,border.face_width,border)" @mouseenter="border_info_show(border)">
                                            </div>
                                        </div>
                                        <div style="display: inline-block;height: 125px;float: right;line-height: 125px;" @click="next_scroll()">
                                            <img src="../../assets/images/toright.png" alt="" height="40">
                                        </div>
                                    </div>
                                </div>
                                <!--<span style="display:block">-->
                                <!--画芯价格: <span style="color:red;">{{core_price}}</span>元 <br>-->
                                <!--&lt;!&ndash;画框价格: <span style="color:red;">{{frame_total_price}}</span>元 <br>&ndash;&gt;-->
                                <!--&lt;!&ndash;留白价格: <span style="color:red;">{{margin_price}}</span>元 <br>&ndash;&gt;-->
                                <!--&lt;!&ndash;装裱方式价格: <span style="color:red;">{{decoration_price}}</span>元 <br>&ndash;&gt;-->
                                <!--装裱价格: <span style="color:red;">{{total_decoration_price_show}}</span>元 <br>-->
                                <!--总价格: <span style="color:red;">{{total_price}}</span>元 <br>-->
                                <!--</span>-->
                                <div style="height: 38px;line-height: 38px;margin-top:10px;">
                                    <button @click="crops()" class="btn" id="preview" style="display:inline-block">
                                        <img src="../../assets/images/eye.png" alt="" height="20">
                                        预览
                                    </button>
                                    <div style="float: right;height:38px;display: flex;align-items: center;">
                                        <span id="prompt3_text" style="height:38px;font-size: 15px;font-weight: bold;display:none">完成后请在我的购物车中查阅</span>
                                        <div id="Previous_div2" style="background-color: #000;width:38px;height:38px;display: none;justify-content: center;align-items: center;">
                                            <img src="../../assets/images/Previous.png" @click="last_step2()" height="20" style="float: right;" title="返回上一步">
                                        </div>
                                        <div id="Previous_div1" style="background-color: #000;width:38px;height:38px;display: flex;justify-content: center;align-items: center;">
                                            <img src="../../assets/images/Previous.png" @click="last_step1()" height="20" style="float: right;" title="返回上一步">
                                        </div>
                                        <img src="../../assets/images/prompt.png" alt="" style="margin: 0px 10px;" height="19" @mouseenter="show_prompt3()" @mouseleave="hid_prompt3()">
                                        <button @click="next_step2()" class="btn" id="preview2" style="color:#fff;background-color:#000;">
                                            下一步
                                            <img src="../../assets/images/right_double.png" alt="" height="20">
                                        </button>
                                        <button class="btn" id="preview3" data-toggle="modal" data-target="#confirm_info" style="color:#fff;background-color:#000;display:none;" @click="comfrim_end_info()">
                                            下一步
                                            <img src="../../assets/images/right_double.png" alt="" height="20">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--装裱结束-->
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
            <div class="modal fade"  id="confirm_info" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            确认订单信息
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body" id="modal_info">
                            <img :src="end_info.preview_img" alt="" width="100px">
                            <span>边框 : {{end_info.border_name}}</span>
                            <span>卡纸颜色:</span>
                            <span id="colorval" style="border:1px solid #ccc;width:50px;height:20px;"></span>
                            <span>图片宽 : {{end_info.img_width}}cm</span>
                            <span>图片高 : {{end_info.img_height}}cm</span>
                            <span>框宽 : {{end_info.box_img_width}}cm</span>
                            <span>框高 : {{end_info.box_img_height}}cm</span>
                            <span>装裱方式 : {{end_info.decoration_status}}</span>
                            <span>画芯名 : {{end_info.material_name}}</span>
                            <span v-if="end_info.drawing_core_val != 0">画芯留边值 : {{end_info.drawing_core_val}}cm</span>
                            <span v-else>画芯留边值 : 0cm</span>
                            <span v-if="end_info.core_offset != 0">画芯偏移值 : {{end_info.core_offset}}cm</span>
                            <span v-else>画芯偏移值 : 0cm</span>
                            <span>画芯偏移方向 : {{end_info.core_offset_direction}}</span>
                            <span v-if="end_info.core_shift != 0">留边偏移值 : {{end_info.core_shift}}cm</span>
                            <span v-else>留边偏移值 : 0cm</span>
                            <span>留边偏移方向 : {{end_info.core_shift_direction}}</span>
                            <span>画芯价格 : {{end_info.core_price}}元</span>
                            <span>装裱价格 : {{end_info.decoration_price}}元</span>
                            <span>总价 : {{end_info.total_price}}元</span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" class="btn btn-primary" @click="to_shopcar">确认</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
        </div>
        <!--<LabelLeft></LabelLeft>-->
        <Foot style=""></Foot>
    </div>
</template>
<script>
    import axios from 'axios'
    import HeadPage from "../../components/HeadPage";
    import LabelLeft from "../../components/LabelLeft";
    import Lanmu from "./lanmu";
    import ImgZoom from './imgZoom';
    import Xszt from './xszt';
    import Spxq from './spxq';
    import Foot from "../../components/Foot";
    import '../../../node_modules/cropper/dist/cropper.js'
    import '../../../node_modules/cropper/dist/cropper.css'

    export default {
        name: 'ImageList',
        components: {
            HeadPage,Foot,Lanmu,ImgZoom,Xszt,Spxq,LabelLeft
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
                img_offsetY:'',
                img_id:'',
                qrcode_img:'',
                //效果调整
                show: true,
                telphone:null,
                img:null,
                max_info:null,
                imgid:null,
                default_img:null,
                default_width:null,
                default_height:null,
                image_url:null,
                filter_img:'',
                filter_info:[],
                rotate:0,
                rotate_num:0,
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
                t1:null,
                t2:null,
                feColorMatrix:'-1 3 -1 0 0    0 1 0 0 0    0 0 1 0 0    0 0 0 1 0',
                r:-1,
                g:-1,
                b:-1,
                a:-1,
                table:1,
                table_a:1,
                table_b:1,
                table_c:0,
                //效果调整结束
                //装裱
                first_status:0,
                img:'',
                imgid:'',
                picked:'1',
                border_info:'',
                small_box:'',
                pxbi: 30,
                color_val:'',
                max_info:[],
                default_width:'',
                default_height:'',
                //卡纸默认留边
                default_margin:7,
                confirm_width:'',
                confirm_height:'',
                border:'',
                border_status:'',
                Material:'',
                color_series_val:'',
                last_border:'',
                //面宽
                face_width:0,
                //装裱方式
                status:'6',
                //是否裁切
                is_cut:'1',
                is_select:0,
                //图片地址
                img_url:'',
                box_width:0,
                box_height:0,
                image_width:0,
                image_height:0,
                drawing_core_val:0,
                //色系
                color_series:[],
                //画芯价格
                core_price:0,
                //画框单价
                frame_price:0,
                //画框总价
                frame_total_price:0,
                //总价
                total_price:0,
                //材质信息
                material_val:{
                    'id':0,
                    'margin_price':0,
                    'name':0,
                    'price':0
                },
                //画芯面积
                core_area:0,
                //周长
                perimeter:0,
                //留边价格
                margin_price:0,
                //装裱方式信息
                decoration_info:0,
                //装裱方式价格
                decoration_price:0,
                //装裱方式
                decoration_status:'',
                //总面积
                total_area:0,
                //总装裱价格
                total_decoration_price:0,
                //前台显示的总装裱价格
                total_decoration_price_show:0,
                //最后信息
                end_info:[],
                //最后框信息
                border_end_info:[],
                image_url:'',
                //装裱结束
                //装裱效果预览
                bgi_width:null,
                bgi_height:null,
                bgi_src:',',
                is_prev:true
            }
        },
        watch: {
            '$route' () {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.initData();
                this.get_qrcode();
            },
            'status' (){
                //盒子装裱
                if(this.status == '3'){
                    $("#color_tag_par").css('display','block')
                }else{
                    $("#color_tag_par").css('display','none')
                }
                //如果arr['bili']有数据就有裁切,否则没有裁切
                if(arr['bili']){
                    if(this.status == '1'){
                        $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        $("#img_height").val(($("#img_width").val()/arr['bili']) .toFixed(1))
                        $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                        $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                    }else if(this.status == '2'){
                        $("#img_width").val((Number(this.max_info.max_width)*Number(arr['cut_width'])).toFixed(1))
                        $("#img_height").val(($("#img_width").val()/arr['bili']) .toFixed(1))
                        if(this.default_margin != 0){
                            $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2 + this.default_margin*2).toFixed(1))
                            $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2 + this.default_margin*2).toFixed(1))
                        }
                    }else if(this.status == '3'){
                        $("#img_width").val((Number(this.max_info.max_width)*Number(arr['cut_width'])).toFixed(1))
                        $("#img_height").val(($("#img_width").val()/arr['bili']) .toFixed(1))
                        if(this.default_margin != 0){
                            $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2 + this.default_margin*2).toFixed(1))
                            $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2 + this.default_margin*2).toFixed(1))
                        }
                    }else if(this.status == '4'){
                        $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        $("#img_height").val(($("#img_width").val()/arr['bili']) .toFixed(1))
                        $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                        $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                    }else if(this.status == '5'){
                        $("#img_width").val((Number(this.max_info.max_width)*Number(arr['cut_width'])).toFixed(1))
                        $("#img_height").val(($("#img_width").val()/arr['bili']) .toFixed(1))
                    }
                }else{
                    var img = document.getElementById("img")
                    var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                    $("#img_width").val(Number(this.max_info.max_width).toFixed(1))
                    $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                    if(this.status == '2' || this.status == '3' || this.status == '5'){
                        $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2 + 8).toFixed(1))
                        $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2 + 8).toFixed(1))
                    }else{
                        $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                        $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                    }
                }
                //无框绷架
                if(this.status == '7'){
                    $("#box_img_width").attr('disablad','disablad')
                    $("#box_img_height").attr('disablad','disablad')
                    $("#box_img_width").val($("#img_width").val())
                    $("#box_img_height").val($("#img_height").val())
                }
                this.image_width = Number($("#img_width").val())
                this.image_height = Number($("#img_height").val())
                this.box_width = Number($("#box_img_width").val())
                this.box_height = Number($("#box_img_height").val())
                this.drawing_core_val = 0
                $('#core_shift_input').val('')
            },
            'material_val'(){
                this.generate_price()
            },
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
            this.get_qrcode()
        },
        methods:{
            initData(){
                window.arr = []
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
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
                this.img_id = arr2.id
                this.imgid = arr2.id
                this.$http.get(this.GLOBAL.baseurl + 'v1/goods/findgoodsall',{params:{id: arr2.id}}).then((response)=>{
                    this.dataImageList = response.data.info
                    for(var i=0;i<response.data.label_list.length;i++){
                        response.data.label_list[i].label_name2 = encodeURI(response.data.label_list[i].label_name)
                    }
                    this.dataLabelList = response.data.label_list
                    this.dataImageList.img = 'http://qiniu.zaoanart.com/'+response.data.info.image
                    this.dataImageList.img2 = 'http://qiniu.zaoanart.com/'+response.data.info.image
                    this.default_width = (Number(this.dataImageList.max_width)+206/30*2).toFixed(1)
                    this.default_height = (Number(this.dataImageList.max_length)+206/30*2).toFixed(1)
                    this.max_info.max_width = this.dataImageList.max_width
                    this.max_info.max_height = this.dataImageList.max_length
                    this.image_url = 'http://qiniu.zaoanart.com/'+response.data.info.image
                    this.img = response.data.info.image
                    this.default_img = response.data.info.image
                    var img_id = response.data.info.id
                    this.set_history(img_id)
                })
            },
            //获取跳转小程序3级页二维码
            get_qrcode(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/goods/get_qrcode',{params:{img_id: this.img_id}}).then((response)=>{
                    this.qrcode_img = response.data
                })
            },
            show_(){
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
                        var img = document.getElementById("img");
                        var mask_layer_img = document.getElementById("mask_layer_img");
                        mask_layer_img.style.filter =  img.style.filter
                        $("#mask_layer_img").attr('src',c.toDataURL('image/jpeg'))
                    }
                }
                $("#myCanvas").css('display','none')
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
            //效果调整获取焦点
            specialeffects_on(){
                this.t1 = setInterval(function(){
                    $('#specialeffects_1').fadeToggle(700)
                }, 0);
            },
            //效果调整失去焦点
            specialeffects_off(){
                clearInterval(this.t1);
                this.t1 = null;
            },
            //效果调整获取焦点2
            specialeffects_on2(){
                this.t2 = window.setInterval(function(){
                    $('#specialeffects_2').fadeToggle(700)
                }, 0);
            },
            //效果调整失去焦点2
            specialeffects_off2(){
                window.clearInterval(this.t2);
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
                        toastr.warning("该文件夹名已经存在")
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
            // reduction(){
            //     $('#mask_layer_img').attr('style','')
            //     $('#img').css('max-width','550px')
            //     $('#img').css('max-height','550px')
            //     // $('#img').css('max-width','100%')
            //     // $('#img').css('width','auto')
            // },
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
            },
            //隐藏三级页详情,显示效果调整页
            show_effect(){
                if(!this.getCookie('tel')){
                    alert('请登录')
                    window.location.href="/#/login";
                }else{
                    this.telphone = this.getCookie('tel');
                    this.initData()
                }
                $('#info_div').fadeOut()
                $('#effect_div').css('display','flex')
                $('#effect_div').fadeIn()
            },
            ////效果调整
            //隐藏效果调整页,显示三级页详情页
            come_back(){
                $('#mask_layer_img').attr('style','')
                var img = document.getElementById("img")
                img.style.filter = ''
                $('#info_div').fadeIn()
                $('#effect_div').fadeOut()
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
                        tel:vm.telphone,
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
                $('#loading_gif').css('display','')
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
                // xhr.onreadystatechange=function(){
                //     if (xhr.readyState==4){
                //         var return_info = JSON.parse(xhr.responseText)
                //
                //     }
                // }
                vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/upfilterimg2',{params:{
                        tel:vm.telphone,
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
                        toastr.warning("图片生成失败")
                    }else if(response.data == 2){
                        toastr.info("图片生成成功,正在前往装裱")
                        var time=2;
                        var timefun=setInterval(function(){
                            time--
                            if(time==0){
                                $('#loading_gif').css('display','none')
                                $('#img').attr('src','')
                                $('#img').attr('src','http://qiniu.zaoanart.com/'+img_name)
                                vm.image_url = 'http://qiniu.zaoanart.com/'+img_name
                                $('#img').css('filter','')
                                vm.img = img_name
                                clearInterval(timefun);
                                vm.show_decoration2()
                            }else{
                                console.log(time)
                            }
                        },1000);
                        // vm.$router.push({path:"/decoration?img="+return_info.key+"&max_width="+vm.max_info.max_width+"&max_height="+vm.max_info.max_height+"&imgid="+vm.max_info.imgid})
                    }
                })
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/octet-stream");
                xhr.setRequestHeader("Authorization", "UpToken "+uptoken);
                xhr.send(pic);
            },
            //顺时针旋转90度
            clockwise_rotate(){
                this.rotate_num = this.rotate_num + 1
                var rotate = this.rotate_num*90
                $('#img').css('max-width','550px')
                var symmeentry_X = 0
                var symmeentry_Y = 0
                if(this.symmeentry_X){
                    symmeentry_X = 180
                }
                if(this.symmeentry_Y){
                    symmeentry_Y = 180
                }
                $("#img").css("transform","rotate("+rotate+"deg) rotateX("+symmeentry_X+"deg) rotateY("+symmeentry_Y+"deg)")
                this.rotate = rotate
            },
            //逆时针旋转90度
            anticlockwise_rotate(){
                this.rotate_num = this.rotate_num - 1
                var rotate = this.rotate_num*90
                $('#img').css('max-width','550px')
                var symmeentry_X = 0
                var symmeentry_Y = 0
                if(this.symmeentry_X){
                    symmeentry_X = 180
                }
                if(this.symmeentry_Y){
                    symmeentry_Y = 180
                }
                $("#img").css("transform","rotate("+rotate+"deg) rotateX("+symmeentry_X+"deg) rotateY("+symmeentry_Y+"deg)")
                this.rotate = rotate
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
                $(e.target).next(".fast_decortion").css("display",'none')
            },
            //还原旋转特效
            reduction(){
                $('#img').css('max-width','100%')
                $('#img').css('width','auto')
                this.rotate = 0
                this.rotate_num = 0
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

            },
            ////效果调整结束
            //隐藏三级页详情,显示装裱页
            show_decoration(){
                if(!this.getCookie('tel')){
                    alert('请登录')
                    window.location.href="/#/login";
                }else{
                    this.telphone = this.getCookie('tel');
                    //获取画框素材
                    this.$http.get(this.GLOBAL.baseurl + 'v1/border/get_border').then((response)=>{
                        this.border = response.data
                        for(var i=0;i<response.data.length;i++){
                            this.border[i].preview_imgs = 'http://www.zaoanart.com:8000/test/preview/'+this.border[i].preview_img;
                            // this.border[i].preview_imgs = 'http://zaoanyishu.backends.com/test/preview/'+this.border[i].preview_img;
                        }
                        // this.border_status = this.border[0].img_name
                        console.log(this.border)
                    })
                    //获取画框色系
                    this.$http.get(this.GLOBAL.baseurl + 'v1/border/get_series').then((response)=>{
                        this.color_series = response.data
                        this.color_series_val = response.data[0]['id']
                    })
                    //获取画芯材质
                    this.$http.get(this.GLOBAL.baseurl + 'v1/border/get_material').then((response)=>{
                        this.Material = response.data
                    })
                    // $('#decoration-bgi').css('display','flex')
                    this.initData()
                }
                $('#info_div').fadeOut()
                $('#effect_div').fadeOut()
                $('#main_info').fadeIn()
            },
            //隐藏三级页详情,显示装裱页
            show_decoration2(){
                if(!this.getCookie('tel')){
                    alert('请登录')
                    window.location.href="/#/login";
                }else{
                    this.telphone = this.getCookie('tel');
                    //获取画框素材
                    this.$http.get(this.GLOBAL.baseurl + 'v1/border/get_border').then((response)=>{
                        this.border = response.data
                        for(var i=0;i<response.data.length;i++){
                            this.border[i].preview_imgs = 'http://www.zaoanart.com:8000/test/preview/'+this.border[i].preview_img;
                            // this.border[i].preview_imgs = 'http://zaoanyishu.backends.com/test/preview/'+this.border[i].preview_img;
                        }
                        // this.border_status = this.border[0].img_name
                    })
                    //获取画框色系
                    this.$http.get(this.GLOBAL.baseurl + 'v1/border/get_series').then((response)=>{
                        this.color_series = response.data
                        this.color_series_val = response.data[0]['id']
                    })
                    //获取画芯材质
                    this.$http.get(this.GLOBAL.baseurl + 'v1/border/get_material').then((response)=>{
                        this.Material = response.data
                    })
                    // $('#decoration-bgi').css('display','flex')
                }
                $('#info_div').fadeOut()
                $('#effect_div').fadeOut()
                $('#main_info').fadeIn()
            },
            //隐藏装裱页,显示三级页
            come_back_(){
                $('#img').cropper('destroy')
                $('#mask_layer_img').attr('style','')
                var img = document.getElementById("img")
                img.style.filter = ''
                $("#img").css("width",'auto')
                $("#img").css("max-height",'550px')
                $("#img").css("max-width",'100%')
                $("#img_box").css("display",'block')
                $("#myCanvas").css('display','none')
                $('#info_div').fadeIn()
                $('#main_info').fadeOut()
                $('#img').attr('src','http://qiniu.zaoanart.com/'+this.default_img)
                this.img_url = 'http://qiniu.zaoanart.com/'+this.default_img
                this.img = 'http://qiniu.zaoanart.com/'+this.default_img
                $("#img").css("transform","")
                $('#decoration-bgi').css('display','none')
                $('#BGI-Canvas').css('display','none')
                this.rotate = 0
                this.last_step2()
                this.last_step1()
            },
            ////装裱
            //生成价格
            generate_price(){
                //画芯面积(长*宽cm²)
                this.core_area = $('#img_width').val() * $('#img_height').val()
                //画芯价格(画芯面积cm²*材质单价cm²=画芯价格(元))
                this.core_price = this.core_area * this.material_val.price/10000
                //画框周长([(长+宽)*2]cm)
                this.perimeter = (Number($('#box_img_width').val()) + Number($('#box_img_height').val()))*2
                //画框总价 = 画框单价元/cm * 画框周长cm
                this.frame_total_price = this.frame_price/10000 * this.perimeter
                //留边面积
                this.margin_area = this.image_width * this.image_height - this.core_area
                //留边价格 = 留边面积cm² * 材质留边价格 元/cm²
                this.margin_price = this.margin_area * this.material_val.margin_price/10000
                //总面积
                this.total_area = $('#box_img_width').val() * $('#box_img_height').val()
                //装裱方式,1满裱,2卡纸,3盒子,4套框绷架,5单立体,6纯画芯,7无框绷架
                if(this.status == 1){
                    this.decoration_status = 1
                }else if(this.status == 2){
                    var color_num = Number($("#color_tag_par2").attr('data_id'))
                    //1为白卡,其他为色卡
                    if(color_num == 1){
                        this.decoration_status = 2
                    }else{
                        this.decoration_status = 3
                    }
                }else if(this.status == 3){
                    var data_id = Number($('#is_pause').attr('data_id'))
                    //1为不悬浮,2为悬浮
                    if(data_id == 1){
                        this.decoration_status = 5
                    }else{
                        this.decoration_status = 4
                    }
                }else if(this.status == 4){
                    this.decoration_status = 6
                }else if(this.status == 5){
                    this.decoration_status = 7
                }else if(this.status == 6){
                    this.decoration_status = 8
                }else if(this.status == 7){
                    this.decoration_status = 9
                }
                //获取装裱方式价格跟浮动比例
                this.$http.get(this.GLOBAL.baseurl + 'v1/border/get_decoration_price',{params:{decoration_status:this.decoration_status}}).then((response)=>{
                    this.decoration_info = response.data
                    //装裱方式价格 = 总面积cm² * 装裱方式价格 元/cm² * 浮动比例
                    this.decoration_price = this.total_area * this.decoration_info.price/10000 * this.decoration_info.float_scale
                    //总装裱价格 = 画框价格+留白价格+装裱方式价格
                    this.total_decoration_price = this.frame_total_price + this.margin_price + this.decoration_price
                    if(this.status == 6){
                        //前台显示的装裱价格
                        this.total_decoration_price_show = 0
                        total_price = parseInt(this.core_price)
                    }else{
                        //前台显示的装裱价格
                        this.total_decoration_price_show = Number(this.total_decoration_price)+10
                        //总价格 = 总装裱价格+画芯价格
                        this.total_price = this.total_decoration_price + this.core_price
                        //装裱方式价格
                        this.decoration_price = parseInt(this.decoration_price)
                        //前台显示装裱方式价格
                        this.total_decoration_price_show = parseInt(this.total_decoration_price_show)
                        var total_price = String(parseInt(this.total_price)/10)
                        total_price = total_price.split(".")
                        if(total_price['1'] >= 3){
                            total_price = parseInt(parseInt(this.total_price)/10)*10+8
                        }else{
                            total_price = (parseInt(parseInt(this.total_price)/10)-1)*10+8
                        }
                    }
                    //总价格
                    this.total_price = total_price
                })
                //画芯价格
                this.core_price = parseInt(this.core_price)
                //画框价格
                this.frame_total_price = parseInt(this.frame_total_price)
                //留边价格
                this.margin_price = parseInt(this.margin_price)
            },
            //如果选中裁切则裁切  否则删除
            is_cutting(e){
                if(this.is_cut == 1){
                    this.is_select = 1
                    $('#is_cuts').attr('data_id','2')
                    this.is_cut = 2
                    this.proportional()
                }else{
                    this.is_select = 0
                    $('#is_cuts').attr('data_id','1')
                    this.is_cut = 1
                    $('#img').cropper('destroy');
                }
            },
            //裁切
            proportional(){
                $("#img").attr("src",'http://qiniu.zaoanart.com/'+this.img+'?t='+Math.random());
                $("#img").attr("width",550)
                $('#img').cropper('destroy')
                //主图
                var img=document.getElementById("img")
                //输入的框宽
                var box_img_width1 = $("#box_img_width").val()
                //输入的框高
                var box_img_height1 = $("#box_img_height").val()
                //输入的画芯宽
                var img_width1 = $("#img_width").val()
                //输入的画芯高
                var img_height1 = $("#img_height").val()
                //图片的比例
                var bili = img.naturalWidth/img.naturalHeight
                //图片可定制最大宽高
                var max_width = this.max_info.max_width
                var max_height = this.max_info.max_height
                var vm = this
                //开始剪切
                $("#img").cropper({
                    guides:false,
                    zoomable:false,
                    background:false,
                    checkCrossOrigin:false,
                    responsive:true,
                    autoCropArea:0.7,
                    minCropBoxWidth:30,
                    minCropBoxHeight:30,
                    resizable:false,
                    viewMode:1,
                    //图片移动时执行
                    crop:function(){
                        var cut_box = $('#img').cropper('getData', true)
                        //剪切开始的x位置占图片的比例
                        arr['cut_left'] = (cut_box.x/img.naturalWidth).toFixed(4)
                        //剪切开始的y位置占图片的比例
                        arr['cut_top'] = (cut_box.y/img.naturalHeight).toFixed(4)
                        //剪切图片的宽度占图片的比例
                        arr['cut_width'] = (cut_box.width/img.naturalWidth).toFixed(4)
                        //剪切图片的高度占图片的比例
                        arr['cut_height'] = (cut_box.height/img.naturalHeight).toFixed(4)
                        //剪切图片的比例
                        arr['bili'] = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                    },
                })
            },
            //指定比例裁切
            customize_cut(){
                $("#img").attr("src",'http://qiniu.zaoanart.com/'+this.img+'?t='+Math.random());
                // $("#img").attr("width",550)
                $('#img').cropper('destroy')
                //主图
                var img=document.getElementById("img")
                //输入的框宽
                var box_img_width1 = $("#box_img_width").val()
                //输入的框高
                var box_img_height1 = $("#box_img_height").val()
                //输入的画芯宽
                var img_width1 = $("#img_width").val()
                //输入的画芯高
                var img_height1 = $("#img_height").val()
                //图片的比例
                var bili = img.naturalWidth/img.naturalHeight
                //指定裁切比例
                var cut_width = $("#cut_width").val()
                var cut_height = $("#cut_height").val()
                var vm = this
                //开始剪切
                $("#img").cropper({
                    aspectRatio:cut_width/cut_height,
                    guides:false,
                    zoomable:false,
                    background:false,
                    checkCrossOrigin:false,
                    responsive:true,
                    resizable:false,
                    viewMode:1,
                    //图片移动时执行
                    crop:function(){
                        var cut_box = $('#img').cropper('getData', true)
                        //剪切开始的x位置占图片的比例
                        arr['cut_left'] = (cut_box.x/img.naturalWidth).toFixed(4)
                        //剪切开始的y位置占图片的比例
                        arr['cut_top'] = (cut_box.y/img.naturalHeight).toFixed(4)
                        //剪切图片的宽度占图片的比例
                        arr['cut_width'] = (cut_box.width/img.naturalWidth).toFixed(4)
                        //剪切图片的高度占图片的比例
                        arr['cut_height'] = (cut_box.height/img.naturalHeight).toFixed(4)
                        //剪切图片的比例
                        arr['bili'] = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                    },
                })
                $("#is_cuts")[0].checked = true
                $('#is_cuts').attr('data_id','2')
                this.is_cut = 2
            },
            //裁切1/1
            proportiona1_1(e){
                this.is_select = 2
                // $("#img").attr("src",'http://qiniu.zaoanart.com/'+this.img+'?t='+Math.random());
                // $("#img").attr("width",550)
                $('#img').cropper('destroy')
                //主图
                var img=document.getElementById("img")
                //输入的框宽
                var box_img_width1 = $("#box_img_width").val()
                //输入的框高
                var box_img_height1 = $("#box_img_height").val()
                //输入的画芯宽
                var img_width1 = $("#img_width").val()
                //输入的画芯高
                var img_height1 = $("#img_height").val()
                //图片的比例
                var bili = img.naturalWidth/img.naturalHeight
                //图片可定制最大宽高
                var max_width = this.max_info.max_width
                var max_height = this.max_info.max_height
                var vm = this
                //开始剪切
                $("#img").cropper({
                    aspectRatio:1/1,
                    guides:false,
                    zoomable:false,
                    background:false,
                    checkCrossOrigin:false,
                    responsive:true,
                    minCropBoxWidth:60,
                    minCropBoxHeight:60,
                    resizable:false,
                    viewMode:1,
                    //图片移动时执行
                    crop:function(){
                        var cut_box = $('#img').cropper('getData', true)
                        //剪切开始的x位置占图片的比例
                        arr['cut_left'] = (cut_box.x/img.naturalWidth).toFixed(4)
                        //剪切开始的y位置占图片的比例
                        arr['cut_top'] = (cut_box.y/img.naturalHeight).toFixed(4)
                        //剪切图片的宽度占图片的比例
                        arr['cut_width'] = (cut_box.width/img.naturalWidth).toFixed(4)
                        //剪切图片的高度占图片的比例
                        arr['cut_height'] = (cut_box.height/img.naturalHeight).toFixed(4)
                        //剪切图片的比例
                        arr['bili'] = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                    },
                })
                $("#is_cuts")[0].checked = true
                $('#is_cuts').attr('data_id','2')
                this.is_cut = 2
            },
            //裁切1/2
            proportiona1_2(){
                this.is_select = 5
                $("#img").attr("src",'http://qiniu.zaoanart.com/'+this.img+'?t='+Math.random());
                // $("#img").attr("width",550)
                $('#img').cropper('destroy')
                $('#is_cuts').attr('data_id','2')
                this.is_cut = 2
                $("#is_cuts")[0].checked = true
                //主图
                var img=document.getElementById("img")
                //输入的框宽
                var box_img_width1 = $("#box_img_width").val()
                //输入的框高
                var box_img_height1 = $("#box_img_height").val()
                //输入的画芯宽
                var img_width1 = $("#img_width").val()
                //输入的画芯高
                var img_height1 = $("#img_height").val()
                //图片的比例
                var bili = img.naturalWidth/img.naturalHeight
                //图片可定制最大宽高
                var max_width = this.max_info.max_width
                var max_height = this.max_info.max_height
                var vm = this
                //开始剪切
                $("#img").cropper({
                    aspectRatio:1/2,
                    guides:false,
                    zoomable:false,
                    background:false,
                    checkCrossOrigin:false,
                    responsive:true,
                    minCropBoxHeight:60,
                    resizable:false,
                    viewMode:1,
                    //图片移动时执行
                    crop:function(){
                        var cut_box = $('#img').cropper('getData', true)
                        //剪切开始的x位置占图片的比例
                        arr['cut_left'] = (cut_box.x/img.naturalWidth).toFixed(4)
                        //剪切开始的y位置占图片的比例
                        arr['cut_top'] = (cut_box.y/img.naturalHeight).toFixed(4)
                        //剪切图片的宽度占图片的比例
                        arr['cut_width'] = (cut_box.width/img.naturalWidth).toFixed(4)
                        //剪切图片的高度占图片的比例
                        arr['cut_height'] = (cut_box.height/img.naturalHeight).toFixed(4)
                        //剪切图片的比例
                        arr['bili'] = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                    },
                })

            },
            //裁切1/3
            proportiona1_3(){
                this.is_select = 7
                this.is_cut = 2
                $("#img").attr("src",'http://qiniu.zaoanart.com/'+this.img+'?t='+Math.random());
                // $("#img").attr("width",550)
                $('#img').cropper('destroy')
                //主图
                var img=document.getElementById("img")
                //输入的框宽
                var box_img_width1 = $("#box_img_width").val()
                //输入的框高
                var box_img_height1 = $("#box_img_height").val()
                //输入的画芯宽
                var img_width1 = $("#img_width").val()
                //输入的画芯高
                var img_height1 = $("#img_height").val()
                //图片的比例
                var bili = img.naturalWidth/img.naturalHeight
                //图片可定制最大宽高
                var max_width = this.max_info.max_width
                var max_height = this.max_info.max_height
                var vm = this
                //开始剪切
                $("#img").cropper({
                    aspectRatio:1/3,
                    guides:false,
                    zoomable:false,
                    background:false,
                    checkCrossOrigin:false,
                    responsive:true,
                    minCropBoxHeight:60,
                    resizable:false,
                    viewMode:1,
                    //图片移动时执行
                    crop:function(){
                        var cut_box = $('#img').cropper('getData', true)
                        //剪切开始的x位置占图片的比例
                        arr['cut_left'] = (cut_box.x/img.naturalWidth).toFixed(4)
                        //剪切开始的y位置占图片的比例
                        arr['cut_top'] = (cut_box.y/img.naturalHeight).toFixed(4)
                        //剪切图片的宽度占图片的比例
                        arr['cut_width'] = (cut_box.width/img.naturalWidth).toFixed(4)
                        //剪切图片的高度占图片的比例
                        arr['cut_height'] = (cut_box.height/img.naturalHeight).toFixed(4)
                        //剪切图片的比例
                        arr['bili'] = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                    },
                })
            },
            //裁切2/3
            proportiona2_3(){
                this.is_select = 3
                $('#is_cuts').attr('data_id','2')
                this.is_cut = 2
                $("#img").attr("src",'http://qiniu.zaoanart.com/'+this.img+'?t='+Math.random());
                // $("#img").attr("width",550)
                $('#img').cropper('destroy')
                //主图
                var img=document.getElementById("img")
                //输入的框宽
                var box_img_width1 = $("#box_img_width").val()
                //输入的框高
                var box_img_height1 = $("#box_img_height").val()
                //输入的画芯宽
                var img_width1 = $("#img_width").val()
                //输入的画芯高
                var img_height1 = $("#img_height").val()
                //图片的比例
                var bili = img.naturalWidth/img.naturalHeight
                //图片可定制最大宽高
                var max_width = this.max_info.max_width
                var max_height = this.max_info.max_height
                var vm = this
                //开始剪切
                $("#img").cropper({
                    aspectRatio:2/3,
                    guides:false,
                    zoomable:false,
                    background:false,
                    checkCrossOrigin:false,
                    responsive:true,
                    minCropBoxWidth:40,
                    resizable:false,
                    viewMode:1,
                    //图片移动时执行
                    crop:function(){
                        var cut_box = $('#img').cropper('getData', true)
                        //剪切开始的x位置占图片的比例
                        arr['cut_left'] = (cut_box.x/img.naturalWidth).toFixed(4)
                        //剪切开始的y位置占图片的比例
                        arr['cut_top'] = (cut_box.y/img.naturalHeight).toFixed(4)
                        //剪切图片的宽度占图片的比例
                        arr['cut_width'] = (cut_box.width/img.naturalWidth).toFixed(4)
                        //剪切图片的高度占图片的比例
                        arr['cut_height'] = (cut_box.height/img.naturalHeight).toFixed(4)
                        //剪切图片的比例
                        arr['bili'] = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                    },
                })
            },
            //裁切2/1
            proportiona2_1(){
                this.is_select = 6
                $('#is_cuts').attr('data_id','2')
                this.is_cut = 2
                $("#img").attr("src",'http://qiniu.zaoanart.com/'+this.img+'?t='+Math.random());
                // $("#img").attr("width",550)
                $('#img').cropper('destroy')
                //主图
                var img=document.getElementById("img")
                //输入的框宽
                var box_img_width1 = $("#box_img_width").val()
                //输入的框高
                var box_img_height1 = $("#box_img_height").val()
                //输入的画芯宽
                var img_width1 = $("#img_width").val()
                //输入的画芯高
                var img_height1 = $("#img_height").val()
                //图片的比例
                var bili = img.naturalWidth/img.naturalHeight
                //图片可定制最大宽高
                var max_width = this.max_info.max_width
                var max_height = this.max_info.max_height
                var vm = this
                //开始剪切
                $("#img").cropper({
                    aspectRatio:2/1,
                    guides:false,
                    zoomable:false,
                    background:false,
                    checkCrossOrigin:false,
                    responsive:true,
                    minCropBoxWidth:60,
                    resizable:false,
                    viewMode:1,
                    //图片移动时执行
                    crop:function(){
                        var cut_box = $('#img').cropper('getData', true)
                        //剪切开始的x位置占图片的比例
                        arr['cut_left'] = (cut_box.x/img.naturalWidth).toFixed(4)
                        //剪切开始的y位置占图片的比例
                        arr['cut_top'] = (cut_box.y/img.naturalHeight).toFixed(4)
                        //剪切图片的宽度占图片的比例
                        arr['cut_width'] = (cut_box.width/img.naturalWidth).toFixed(4)
                        //剪切图片的高度占图片的比例
                        arr['cut_height'] = (cut_box.height/img.naturalHeight).toFixed(4)
                        //剪切图片的比例
                        arr['bili'] = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                    },
                })
            },
            //裁切3/1
            proportiona3_1(){
                this.is_select = 8
                $('#is_cuts').attr('data_id','2')
                this.is_cut = 2
                $("#img").attr("src",'http://qiniu.zaoanart.com/'+this.img+'?t='+Math.random());
                // $("#img").attr("width",550)
                $('#img').cropper('destroy')
                //主图
                var img=document.getElementById("img")
                //输入的框宽
                var box_img_width1 = $("#box_img_width").val()
                //输入的框高
                var box_img_height1 = $("#box_img_height").val()
                //输入的画芯宽
                var img_width1 = $("#img_width").val()
                //输入的画芯高
                var img_height1 = $("#img_height").val()
                //图片的比例
                var bili = img.naturalWidth/img.naturalHeight
                //图片可定制最大宽高
                var max_width = this.max_info.max_width
                var max_height = this.max_info.max_height
                var vm = this
                //开始剪切
                $("#img").cropper({
                    aspectRatio:3/1,
                    guides:false,
                    zoomable:false,
                    background:false,
                    checkCrossOrigin:false,
                    responsive:true,
                    minCropBoxWidth:60,
                    resizable:false,
                    viewMode:1,
                    //图片移动时执行
                    crop:function(){
                        var cut_box = $('#img').cropper('getData', true)
                        //剪切开始的x位置占图片的比例
                        arr['cut_left'] = (cut_box.x/img.naturalWidth).toFixed(4)
                        //剪切开始的y位置占图片的比例
                        arr['cut_top'] = (cut_box.y/img.naturalHeight).toFixed(4)
                        //剪切图片的宽度占图片的比例
                        arr['cut_width'] = (cut_box.width/img.naturalWidth).toFixed(4)
                        //剪切图片的高度占图片的比例
                        arr['cut_height'] = (cut_box.height/img.naturalHeight).toFixed(4)
                        //剪切图片的比例
                        arr['bili'] = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                    },
                })
            },
            //裁切3/2
            proportiona3_2(){
                this.is_select = 4
                $('#is_cuts').attr('data_id','2')
                this.is_cut = 2
                $("#img").attr("src",'http://qiniu.zaoanart.com/'+this.img+'?t='+Math.random());
                // $("#img").attr("width",550)
                $('#img').cropper('destroy')
                //主图
                var img=document.getElementById("img")
                //输入的框宽
                var box_img_width1 = $("#box_img_width").val()
                //输入的框高
                var box_img_height1 = $("#box_img_height").val()
                //输入的画芯宽
                var img_width1 = $("#img_width").val()
                //输入的画芯高
                var img_height1 = $("#img_height").val()
                //图片的比例
                var bili = img.naturalWidth/img.naturalHeight
                //图片可定制最大宽高
                var max_width = this.max_info.max_width
                var max_height = this.max_info.max_height
                var vm = this
                //开始剪切
                $("#img").cropper({
                    aspectRatio:3/2,
                    guides:false,
                    zoomable:false,
                    background:false,
                    checkCrossOrigin:false,
                    responsive:true,
                    minCropBoxHeight:40,
                    resizable:false,
                    viewMode:1,
                    //图片移动时执行
                    crop:function(){
                        var cut_box = $('#img').cropper('getData', true)
                        //剪切开始的x位置占图片的比例
                        arr['cut_left'] = (cut_box.x/img.naturalWidth).toFixed(4)
                        //剪切开始的y位置占图片的比例
                        arr['cut_top'] = (cut_box.y/img.naturalHeight).toFixed(4)
                        //剪切图片的宽度占图片的比例
                        arr['cut_width'] = (cut_box.width/img.naturalWidth).toFixed(4)
                        //剪切图片的高度占图片的比例
                        arr['cut_height'] = (cut_box.height/img.naturalHeight).toFixed(4)
                        //剪切图片的比例
                        arr['bili'] = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                    },
                })
            },
            //如果没有裁切则跳过,有则锁定裁切并获取裁切数据
            confirm(){
                $('#img').css('width',0)
                $('#decoration-bgi').css('display','flex')
                this.first_status = 1
                var vm = this
                $(window).on('click',function(){
                    var click_ = window.event.target.id
                    if(click_ !== 'box_img_w_h'){
                        var img_width_  = Number($("#img_width").val())
                        var img_height_ = Number($("#img_height").val())
                        var box_width_  = Number($("#box_img_width").val())
                        var box_height_  = Number($("#box_img_height").val())
                        if(box_width_ < img_width_+vm.face_width*2 || box_height_ < img_height_+vm.face_width*2){
                            $("#box_img_width").val((img_width_+vm.face_width*2).toFixed(1))
                            $("#box_img_height").val((img_height_+vm.face_width*2).toFixed(1))
                        }
                        if(vm.status == '7'){
                            $("#box_img_width").val(Number($("#img_width").val()))
                            $("#box_img_height").val(Number($("#img_height").val()))
                        }
                    }
                    if(click_ !== 'box_img_w_h' && 'huaxin'){
                        if(Number($("#img_width").val()) < 10){
                            $("#img_width").val(10)
                            //没有裁切
                            if(vm.is_cut == 1){
                                var img = document.getElementById("img")
                                var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                                $("#img_height").val((Number($("#img_width").val())/bili).toFixed(1))
                                $("#box_img_width").val((Number($("#img_width").val())+vm.face_width*2).toFixed(1))
                                $("#box_img_height").val((Number($("#img_height").val())+vm.face_width*2).toFixed(1))
                                //有裁切
                            }else{
                                var bili = arr['bili']
                                $("#img_height").val((Number($("#img_width").val())/bili).toFixed(1))
                                $("#box_img_width").val((Number($("#img_width").val())+vm.face_width*2).toFixed(1))
                                $("#box_img_height").val((Number($("#img_height").val())+vm.face_width*2).toFixed(1))
                            }
                        }
                        if(vm.status == '7'){
                            $("#box_img_width").val(Number($("#img_width").val()))
                            $("#box_img_height").val(Number($("#img_height").val()))
                        }
                    }
                })
                $('#img_box').css('display','none')
                $('#first_step').css('display','none')
                $('#second_step_div').css('display','block')
                $('#third_step_div').css('display','none')
                $('#myCanvas').css('display','inline-block')
                $('#detail').css('display','none')
                $('#second_step').css('display','block')
                if(this.is_cut ==1){
                    var max_width = Number(this.max_info.max_width)
                    var max_height = Number(this.max_info.max_height)
                    $("#img_width").val(max_width)
                    $("#img_height").val(max_height)
                    $("#box_img_width").val((max_width+this.face_width*2).toFixed(1))
                    $("#box_img_height").val((max_height+this.face_width*2).toFixed(1))
                }else{
                    $('#img').cropper('disable')
                    var max_width = this.max_info.max_width
                    var max_height = this.max_info.max_height
                    var cut_max_width = Number((arr['cut_width']*max_width).toFixed(1))
                    var cut_max_height = Number((arr['cut_height']*max_height).toFixed(1))
                    $("#img_width").val(cut_max_width)
                    $("#img_height").val(cut_max_height)
                    $("#box_img_width").val((cut_max_width+this.face_width*2).toFixed(1))
                    $("#box_img_height").val((cut_max_height+this.face_width*2).toFixed(1))
                }
                //如果arr['bili']有数据就有裁切,否则没有裁切
                if(arr['bili']){
                    if(this.status == '1' || this.status == '6' || this.status == '7'){
                        $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        $("#img_height").val(($("#img_width").val()/arr['bili']) .toFixed(1))
                        $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                        $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                    }else if(this.status == '2'){
                        $("#img_width").val((Number(this.max_info.max_width)*Number(arr['cut_width'])).toFixed(1))
                        $("#img_height").val(($("#img_width").val()/arr['bili']) .toFixed(1))
                    }else if(this.status == '3'){
                        $("#img_width").val((Number(this.max_info.max_width)*Number(arr['cut_width'])).toFixed(1))
                        $("#img_height").val(($("#img_width").val()/arr['bili']) .toFixed(1))
                    }else if(this.status == '4'){
                        $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        $("#img_height").val(($("#img_width").val()/arr['bili']) .toFixed(1))
                        $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                        $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                    }
                }else{
                    var img = document.getElementById("img")
                    var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                    $("#img_width").val(Number(this.max_info.max_width).toFixed(1))
                    $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                    $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                    $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                }
                this.image_width = Number($("#img_width").val())
                this.image_height = Number($("#img_height").val())
                this.box_width = Number($("#box_img_width").val())
                this.box_height = Number($("#box_img_height").val())
                this.crops()
            },
            //下一步    装裱方式,1满裱,2卡纸,3盒子,4套框绷架,5单立体,6纯画芯,7无框绷架
            next_step2(){
                if(this.material_val.id == 0){
                    alert('请选择画芯材质')
                    return false
                }
                if(this.status == 6 || this.status == 7){

                }else{
                    if(this.border_status == ''){
                        alert('请选择画框')
                        return false
                    }
                }
                if(this.status == 1){
                    $('#show_decoration_method').text('满裱')
                }else if(this.status == 2){
                    $('#show_decoration_method').text('卡纸')
                }else if(this.status == 3){
                    $('#show_decoration_method').text('盒子')
                }else if(this.status == 4){
                    $('#show_decoration_method').text('套框绷架')
                }else if(this.status == 5){
                    $('#show_decoration_method').text('单立体')
                }else if(this.status == 6){
                    $('#show_decoration_method').text('纯画芯')
                }else if(this.status == 7){
                    $('#show_decoration_method').text('无框绷架')
                }
                $('#select_box').css('display','none')
                $('#show_decoration_method').css('display','block')
                $('#decoration_method').css('display','none')
                $('#img').css('display','none')
                $('#detail').css('display','inline-block')
                $('#second_step_div').css('display','none')
                $('#third_step_div').css('display','block')
                $('#img_width').attr('disabled','disabled')
                $('#img_height').attr('disabled','disabled')
                $('#box_img_width').attr('disabled','disabled')
                $('#box_img_height').attr('disabled','disabled')
                $('#preview2').css('display','none')
                $('#preview3').css('display','inline-block')
                $('#material_div').css('display','none')
                $('#material_hr').css('display','none')
                $('#Previous_div1').css('display','none')
                $('#Previous_div2').css('display','flex')
            },
            //选择装裱方式,1满裱,2卡纸,3盒子,4套框绷架,5单立体,6纯画芯,7无框绷架
            select_decoration(id,e){
                $('#drawing_core_input').val('')
                var el = $('#decoration_method li')
                for(var k = el .length - 1; k >= 0; k--) {
                    el[k].style.border = '';
                }
                $(e.target).css('border','2px solid #000')
                switch(id){
                    case 1:
                        this.status = 1;
                        $('#select_box').css('display','block');
                        $('#color_tag_par').css('display','none');
                        $('#color_tag_par2').css('display','none');
                        $('#drawing_cores').css('display','none');
                        $('#drawing_core').css('display','inline-block');
                        $('#box_img_w_h').css('display','inline-block');
                        $('#box_img_width').attr('disabled','disabled');
                        $('#box_img_height').attr('disabled','disabled');
                        break;
                    case 2:
                        this.status = 2;
                        this.default_margin = 7;
                        $('#color_tag_par').css('display','none');
                        $('#select_box').css('display','block');
                        $('#color_tag_par2').css('display','inline-block');
                        $('#drawing_cores').css('display','inline-block');
                        $('#drawing_core').css('display','inline-block');
                        $('#box_img_w_h').css('display','inline-block');
                        $('#box_img_width').removeAttr("disabled");
                        $('#box_img_height').removeAttr("disabled");
                        break;
                    case 3:
                        this.status = 3;
                        $('#select_box').css('display','block');
                        $('#color_tag_par').css('display','inline-block');
                        $('#color_tag_par2').css('display','none');
                        $('#drawing_cores').css('display','inline-block');
                        $('#drawing_core').css('display','inline-block');
                        $('#box_img_w_h').css('display','inline-block');
                        $('#box_img_width').removeAttr("disabled");
                        $('#box_img_height').removeAttr("disabled");
                        break;
                    case 4:
                        this.status = 4;
                        $('#select_box').css('display','block');
                        $('#color_tag_par').css('display','none');
                        $('#color_tag_par2').css('display','none');
                        $('#drawing_cores').css('display','none');
                        $('#drawing_core').css('display','inline-block');
                        $('#box_img_w_h').css('display','inline-block');
                        $('#box_img_width').attr('disabled','disabled');
                        $('#box_img_height').attr('disabled','disabled');
                        break;
                    case 5:
                        this.status = 5;
                        $('#select_box').css('display','block');
                        $('#color_tag_par').css('display','none');
                        $('#color_tag_par2').css('display','none');
                        $('#drawing_cores').css('display','inline-block');
                        $('#drawing_core').css('display','inline-block');
                        $('#box_img_w_h').css('display','inline-block');
                        $('#box_img_width').removeAttr("disabled");
                        $('#box_img_height').removeAttr("disabled");
                        break;
                    case 6:
                        this.status = 6;
                        $('#select_box').css('display','none');
                        $('#color_tag_par').css('display','none');
                        $('#color_tag_par2').css('display','none');
                        $('#drawing_cores').css('display','none');
                        $('#drawing_core').css('display','none');
                        $('#box_img_w_h').css('display','none');
                        break;
                    case 7:
                        this.status = 7;
                        $('#select_box').css('display','none');
                        $('#color_tag_par').css('display','none');
                        $('#color_tag_par2').css('display','none');
                        $('#drawing_cores').css('display','none');
                        $('#drawing_core').css('display','none');
                        $('#box_img_w_h').css('display','none');
                        $('#box_img_w_h').css('display','inline-block');
                        $("#box_img_width").attr('disabled','disabled')
                        $("#box_img_height").attr('disabled','disabled')
                        break;
                }
            },
            //返回第一步
            last_step1(){
                $('#img_box').css('display','inline-block')
                $('#img').css('display','block')
                $('#img').css('width','auto')
                $('#img').css('max-width','100%')
                $('#img').css('max-height','550px')
                $('#img').cropper('destroy')
                $('#first_step').css('display','block')
                $('#second_step').css('display','none')
                $('#detail').css('display','none')
                $('#img_box').css('float','')
                $('#myCanvas').css('display','none')
                this.is_cut = 1
                window.arr = []
            },
            //返回第二步
            last_step2(){
                if(this.status == 6 || this.status == 7){

                }else{
                    $('#select_box').css('display','block')
                }
                $('#show_decoration_method').css('display','none')
                $('#decoration_method').css('display','')
                $('#third_step_div').css('display','none')
                $('#second_step_div').css('display','block')
                // $('#first_step').css('display','block')
                // $('#second_step').css('display','none')
                $('#detail').css('display','none')
                $('#img_width').removeAttr('disabled')
                $('#img_height').removeAttr('disabled')
                if(this.status == 7 || this.status == 1 || this.status == 4){

                }else{
                    $('#box_img_width').removeAttr('disabled')
                    $('#box_img_height').removeAttr('disabled')
                }
                $('#drawing_core_input').val('')
                this.drawing_core_val = 0
                $('#core_shift_input').val('')
                $('#core_shift_inputs').val('')
                $('#img_width').val(this.image_width)
                $('#img_height').val(this.image_height)
                $('#box_img_width').val(this.box_width)
                $('#color_tag_par2').attr('data_id',1)
                $('#color_tag_par').attr('data_id',1)
                $('#is_pause').attr('id',1)
                $('#box_img_height').val(this.box_height)
                $('#preview2').css('display','inline-block')
                $('#preview3').css('display','none')
                $('#material_div').css('display','inline-block')
                $('#material_hr').css('display','block')
                $('#Previous_div2').css('display','none')
                $('#Previous_div1').css('display','flex')
            },
            //修改尺寸(宽)
            assign_width(e){
                //满裱
                if(this.status == 1 || this.status == 6){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_width)).toFixed(1)) {
                            $("#img_width").val((Number(this.max_info.max_width)).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_width))*this.max_info.max_width).toFixed(1)) {
                            $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                    }
                    $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                    $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                    //卡纸
                }else if(this.status == 2){
                    this.default_margin = 0
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_width)).toFixed(1)) {
                            $("#img_width").val((Number(this.max_info.max_width)).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_width))*this.max_info.max_width).toFixed(1)) {
                            $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                    }
                    //盒子
                }else if(this.status == 3){
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_width)).toFixed(1)) {
                            $("#img_width").val((Number(this.max_info.max_width)).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_width))*this.max_info.max_width).toFixed(1)) {
                            $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                    }
                    //套框绷架
                }else if(this.status == 4){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_width)).toFixed(1)) {
                            $("#img_width").val((Number(this.max_info.max_width)).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_width))*this.max_info.max_width).toFixed(1)) {
                            $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                    }
                    $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                    $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                    //单立体
                }else if(this.status == 5){
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_width)).toFixed(1)) {
                            $("#img_width").val((Number(this.max_info.max_width)).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_width))*this.max_info.max_width).toFixed(1)) {
                            $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                    }
                    //无框绷架
                }else if(this.status == 7){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_width)).toFixed(1)) {
                            $("#img_width").val((Number(this.max_info.max_width)).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_width))*this.max_info.max_width).toFixed(1)) {
                            $("#img_width").val(((Number(arr.cut_width))*this.max_info.max_width).toFixed(1))
                        }
                        $("#img_height").val(($("#img_width").val()/bili).toFixed(1))
                    }
                    $("#box_img_width").val(Number($("#img_width").val()).toFixed(1))
                    $("#box_img_height").val(Number($("#img_height").val()).toFixed(1))
                }
                this.image_width = Number($("#img_width").val())
                this.image_height = Number($("#img_height").val())
                this.box_width = Number($("#box_img_width").val())
                this.box_height = Number($("#box_img_height").val())
                this.drawing_core_val = 0
                $('#drawing_core_input').val('')
                $('#core_shift_input').val('')
            },
            //修改尺寸(高)
            assign_height(e){
                //满裱
                if(this.status == 1 || this.status == 6){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_height)).toFixed(1)) {
                            $("#img_height").val((Number(this.max_info.max_height)).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_height))*this.max_info.max_height).toFixed(1)) {
                            $("#img_height").val(((Number(arr.cut_height))*this.max_info.max_height).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                    }
                    $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                    $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                    //卡纸
                }else if(this.status == 2){
                    this.default_margin = 0
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_height)).toFixed(1)) {
                            $("#img_height").val((Number(this.max_info.max_height)).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_height))*this.max_info.max_height).toFixed(1)) {
                            $("#img_height").val(((Number(arr.cut_height))*this.max_info.max_height).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                    }
                    //盒子
                }else if(this.status == 3){
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_height)).toFixed(1)) {
                            $("#img_height").val((Number(this.max_info.max_height)).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_height))*this.max_info.max_height).toFixed(1)) {
                            $("#img_height").val(((Number(arr.cut_height))*this.max_info.max_height).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                    }
                    //套框绷架
                }else if(this.status == 4){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_height)).toFixed(1)) {
                            $("#img_height").val((Number(this.max_info.max_height)).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_height))*this.max_info.max_height).toFixed(1)) {
                            $("#img_height").val(((Number(arr.cut_height))*this.max_info.max_height).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                    }
                    $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                    $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                    //单立体
                }else if(this.status == 5){
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_height)).toFixed(1)) {
                            $("#img_height").val((Number(this.max_info.max_height)).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_height))*this.max_info.max_height).toFixed(1)) {
                            $("#img_height").val(((Number(arr.cut_height))*this.max_info.max_height).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                    }
                    //无框绷架
                }else if(this.status == 7){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        if (Number(e.target.value) > (Number(this.max_info.max_height)).toFixed(1)) {
                            $("#img_height").val((Number(this.max_info.max_height)).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        if (Number(e.target.value) > ((Number(arr.cut_height))*this.max_info.max_height).toFixed(1)) {
                            $("#img_height").val(((Number(arr.cut_height))*this.max_info.max_height).toFixed(1))
                        }
                        $("#img_width").val(($("#img_height").val()*bili) .toFixed(1))
                    }
                    $("#box_img_width").val((Number($("#img_width").val())).toFixed(1))
                    $("#box_img_height").val((Number($("#img_height").val())).toFixed(1))
                }
                this.image_width = Number($("#img_width").val())
                this.image_height = Number($("#img_height").val())
                this.box_width = Number($("#box_img_width").val())
                this.box_height = Number($("#box_img_height").val())
                this.drawing_core_val = 0
                $('#drawing_core_input').val('')
                $('#core_shift_input').val('')
            },
            //修改尺寸框(宽)
            assign_box_width(e){
                //满裱
                if(this.status == 1 || this.status == 6 || this.status == 7){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(4)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(4)
                        if (Number(e.target.value) > max_box_width) {
                            $("#box_img_width").val(Number(max_box_width).toFixed(1))
                        }
                        $("#box_img_height").val(((($("#box_img_width").val()-this.face_width*2)/bili)+this.face_width*2) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        if (Number(e.target.value) > max_box_width) {
                            $("#box_img_width").val(max_box_width)
                        }
                        $("#box_img_height").val(((($("#box_img_width").val()-this.face_width*2)/bili)+this.face_width*2) .toFixed(1))
                    }
                    $("#img_width").val((Number($("#box_img_width").val()) - this.face_width*2).toFixed(1))
                    $("#img_height").val((Number($("#box_img_height").val()) - this.face_width*2).toFixed(1))
                    //卡纸
                }else if(this.status == 2){
                    this.default_margin = 0
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(4)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(4)
                        //bili超过1是宽图,不超过是长图
                        if(bili>1){
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        if(bili>1){
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                    }
                    //盒子
                }else if(this.status == 3){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(4)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(4)
                        //bili超过1是宽图,不超过是长图
                        if(bili>1){
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        if(bili>1){
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                    }
                    //套框绷架
                }else if(this.status == 4){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(4)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(4)
                        if (Number(e.target.value) > max_box_width) {
                            $("#box_img_width").val(Number(max_box_width).toFixed(1))
                        }
                        $("#box_img_height").val(((($("#box_img_width").val()-this.face_width*2)/bili)+this.face_width*2) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        if (Number(e.target.value) > max_box_width) {
                            $("#box_img_width").val(max_box_width)
                        }
                        $("#box_img_height").val(((($("#box_img_width").val()-this.face_width*2)/bili)+this.face_width*2) .toFixed(1))
                    }
                    $("#img_width").val((Number($("#box_img_width").val()) - this.face_width*2).toFixed(1))
                    $("#img_height").val((Number($("#box_img_height").val()) - this.face_width*2).toFixed(1))
                    //单立体
                }else if(this.status == 5){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(4)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(4)
                        //bili超过1是宽图,不超过是长图
                        if(bili>1){
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        if(bili>1){
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                    }
                }
                this.image_width = Number($("#img_width").val())
                this.image_height = Number($("#img_height").val())
                this.box_width = Number($("#box_img_width").val())
                this.box_height = Number($("#box_img_height").val())
                // this.drawing_core_val = 0
                // $('#drawing_core_input').val('')
            },
            //修改尺寸框(高)
            assign_box_height(e){
                //满裱
                if(this.status == 1 || this.status == 6 || this.status == 7){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(1)
                        if (Number(e.target.value) > max_box_height) {
                            $("#box_img_height").val(max_box_height)
                        }
                        $("#box_img_width").val(((($("#box_img_height").val()-this.face_width*2)*bili)+this.face_width*2) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        if (Number(e.target.value) > max_box_height) {
                            $("#box_img_height").val(max_box_height)
                        }
                        $("#box_img_width").val(((($("#box_img_height").val()-this.face_width*2)*bili)+this.face_width*2) .toFixed(1))
                    }
                    $("#img_width").val((Number($("#box_img_width").val()) - this.face_width*2).toFixed(1))
                    $("#img_height").val((Number($("#box_img_height").val()) - this.face_width*2).toFixed(1))
                    //卡纸
                }else if(this.status == 2){
                    this.default_margin = 0
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(1)
                        //bili超过1是宽图,不超过���长图
                        if(bili>1){
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        //bili超过1是宽图,不超过是长图
                        if(bili>1){
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                    }
                    //盒子
                }else if(this.status == 3){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(1)
                        //bili超过1是宽图,不超过是长图
                        if(bili>1){
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        //bili超过1是宽图,不超过是长图
                        if(bili>1){
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                    }
                    //套框绷架
                }else if(this.status == 4){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(1)
                        if (Number(e.target.value) > max_box_height) {
                            $("#box_img_height").val(max_box_height)
                        }
                        $("#box_img_width").val(((($("#box_img_height").val()-this.face_width*2)*bili)+this.face_width*2) .toFixed(1))
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        if (Number(e.target.value) > max_box_height) {
                            $("#box_img_height").val(max_box_height)
                        }
                        $("#box_img_width").val(((($("#box_img_height").val()-this.face_width*2)*bili)+this.face_width*2) .toFixed(1))
                    }
                    $("#img_width").val((Number($("#box_img_width").val()) - this.face_width*2).toFixed(1))
                    $("#img_height").val((Number($("#box_img_height").val()) - this.face_width*2).toFixed(1))
                    //单立体
                }else if(this.status == 5){
                    //没有裁切
                    if(this.is_cut == 1){
                        var img = document.getElementById("img")
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                        //最大框宽
                        var max_box_width = (Number(this.max_info.max_width)+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(this.max_info.max_height)+this.face_width*2).toFixed(1)
                        //bili超过1是宽图,不超过是长图
                        if(bili>1){
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填���的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                        //有裁切
                    }else{
                        var bili = arr['bili'];
                        //最大框宽
                        var max_box_width = (Number(arr.cut_width)*this.max_info.max_width+this.face_width*2).toFixed(1)
                        //最大框高
                        var max_box_height = (Number(arr.cut_height)*this.max_info.max_height+this.face_width*2).toFixed(1)
                        //bili超过1是宽图,不超过是长图
                        if(bili>1){
                            if (Number(e.target.value) > 110) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)160*110将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }else{
                            if (Number(e.target.value) > 160) {
                                $('#prompt').css('display','block')
                                $('#prompt').text('您填写的尺寸如超过(宽*高)110*160将会拼接')
                            }else{
                                $('#prompt').css('display','none')
                                $('#prompt').text('')
                            }
                        }
                    }
                }
                this.image_width = Number($("#img_width").val())
                this.image_height = Number($("#img_height").val())
                this.box_width = Number($("#box_img_width").val())
                this.box_height = Number($("#box_img_height").val())
                // this.drawing_core_val = 0
                // $('#drawing_core_input').val('')
            },
            //初始化裁切框
            generate(){
                let vm = this
                var img=document.getElementById("img")
                if(this.is_cut == 1){
                    var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                }else{
                    var bili = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                }
                var box_img_width = $("#box_img_width").val()
                var box_img_height = $("#box_img_height").val()
                var img_width = $("#img_width").val()
                var img_height = $("#img_height").val()
                if($("#img_width").val() < 10){
                    $("#img_width").val(10)
                    $("#img_height").val((Number($("#img_width").val())/bili).toFixed(2))
                    $("#box_img_width").val((Number($("#img_width").val())+vm.face_width*2).toFixed(2))
                    $("#box_img_height").val((Number($("#box_img_width").val())/bili).toFixed(2))
                }
                vm.proportional()
            },
            //画芯留边
            drawing_core(e){
                $('#core_shift_input').val('')
                if( $('#drawing_core_input').val() == ''){
                    $('#prompt_text4').css('display','none')
                }else{
                    $('#prompt_text4').css('display','block')
                }
                //画芯留边大小
                var value = Number($(e.target).val())*2
                //最大画芯留边大小
                var max_leave = (this.image_width-10)/2
                var img=document.getElementById("img")
                if(this.is_cut == 1){
                    var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                }else{
                    var bili = ((window.arr.cut_width*img.naturalWidth) / (window.arr.cut_height*img.naturalHeight)).toFixed(4)
                }
                //如果超过最大留边大小就等于最大
                if(Number($(e.target).val()) > max_leave){
                    $(e.target).val(max_leave)
                    $("#img_width").val((this.image_width-max_leave*2).toFixed(1))
                    $("#img_height").val(($("#img_width").val()/bili).toFixed(1))
                    //如果为满裱和套框绷架则同时修改画框大小,为卡纸/盒子/单立体的时候不变
                    if(this.status == 1 || this.status == 4){
                        $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2 + max_leave*2).toFixed(1))
                        $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2 + max_leave*2).toFixed(1))
                    }else{
                        $("#box_img_height").val((Number($("#img_height").val())+(this.box_height-this.image_height)+value).toFixed(1))
                        // $("#box_img_width").val(this.box_width)
                        // $("#box_img_height").val(this.box_height)
                    }
                    //$("#box_img_width").val((Number($("#img_width").val()) + this.face_width/30*2 + max_leave*2).toFixed(1))
                    //$("#box_img_height").val((Number($("#img_height").val()) + this.face_width/30*2 + max_leave*2).toFixed(1))
                }else{
                    $("#img_width").val((this.image_width-value).toFixed(1))
                    $("#img_height").val(($("#img_width").val()/bili).toFixed(1))
                    if(this.status == 1 || this.status == 4){
                        $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2 + value).toFixed(1))
                        $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2 + value).toFixed(1))
                    }else{
                        $("#box_img_height").val((Number($("#img_height").val())+(this.box_height-this.image_height)+value).toFixed(1))
                        // //如果框宽不够则补够
                        // if(Number($("#box_img_width").val()) < Number($("#img_width").val()) + this.face_width/30*2 + value){
                        //     $("#box_img_width").val((Number($("#img_width").val()) + this.face_width/30*2 + value).toFixed(1))
                        // }else{
                        //     $("#box_img_width").val(this.box_width)
                        // }
                        // //如果框高不够则补够
                        // if(Number($("#box_img_height").val()) < Number($("#img_height").val()) + this.face_width/30*2 + value){
                        //     $("#box_img_height").val((Number($("#img_height").val()) + this.face_width/30*2 + value).toFixed(1))
                        // }else{
                        //     $("#box_img_height").val(this.box_height)
                        // }
                    }
                }
                this.drawing_core_val = Number($(e.target).val())
            },
            //留边偏移
            core_shift(e){
                if($(e.target).val() > this.drawing_core_val){
                    $(e.target).val(this.drawing_core_val)
                }
            },
            //画芯偏移
            core_shifts(e){
                //画芯偏移方向
                var directions = $("#core_shift_directions").val()
                //画芯偏移数值
                var num_value = $(e.target).val()
                //如果方向为left和right则为横向,top和bottom为纵向
                if(directions == 'left' || directions == 'right'){
                    //如果大于最大偏移就等于最大偏移(宽)
                    if(num_value >= (this.box_width-this.image_width-this.face_width*2)/2){
                        $(e.target).val(((this.box_width-this.image_width-this.face_width*2)/2).toFixed(0))
                    }
                }else{
                    //如果大于最大偏移就等于最大偏移(高)
                    if(num_value >= (this.box_height-this.image_height-this.face_width*2)/2){
                        $(e.target).val(((this.box_height-this.image_height-this.face_width*2)/2).toFixed(0))
                    }
                }
            },
            //挑选框
            edit_border_status(e,data,frame_price,face_width,border){
                this.face_width = face_width
                if(this.status == 1 || this.status == 4){
                    $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2).toFixed(1))
                    $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2).toFixed(1))
                }else if(this.status == 7){
                    $("#box_img_width").val(Number($("#img_width").val()))
                    $("#box_img_height").val(Number($("#img_height").val()))
                }else if(this.status == 2 || this.status == 3 || this.status == 5){
                    if(this.default_margin != 0){
                        $("#box_img_width").val((Number($("#img_width").val()) + this.face_width*2+this.default_margin*2).toFixed(1))
                        $("#box_img_height").val((Number($("#img_height").val()) + this.face_width*2+this.default_margin*2).toFixed(1))
                    }
                }
                var el = document.getElementsByClassName('border_confirm');
                for(var k = el .length - 1; k >= 0; k--) {
                    el[k].style.display = 'none';
                }
                //画框图片名
                this.border_status = data
                //画框信息
                this.border_end_info = border
                //画框单价
                this.frame_price = Number(frame_price)
                $(e.target).prev().css('display','inline-flex')
                this.crops()
            },
            //切换边框信息(滑入)
            border_info_show(border){
                if(border.border_name2 == null){
                    var border_name = '空'
                }else{
                    var border_name = border.border_name2
                }
                if(border.face_width == null){
                    var face_width = 0
                }else{
                    var face_width = border.face_width
                }
                if(border.Thickness == null){
                    var Thickness = 0
                }else{
                    var Thickness = border.Thickness
                }
                this.border_info = border_name + ' 面宽 : ' + face_width + ' 侧厚 : ' + Thickness
            },
            //如果有裁切则装裱裁切图  否则装裱其他
            crops(){
                //记录装裱
                this.$http.post(this.GLOBAL.baseurl + 'v1/goods/record_decoration',{goods_id:this.imgid},{emulateJSON: true}).then((response)=>{
                })
                if(this.status == 6 || this.status == 7){

                }else{
                    if(this.border_status == ''){
                        alert('请选择画框')
                        return false
                    }
                }
                $("#myCanvas").css('display','flex')
                $("#BGI-Canvas").css('display','none')
                this.generate_price()
                if(this.is_cut ==1){
                    this.decoration()
                }else{
                    this.crop1()
                }
            },
            //1是满裱,2是卡纸,3是盒子,4是套框绷架,5是单立体,6是纯画芯,7是无框绷架
            decoration(){
                if(this.status == 1){
                    this.show1()
                }else if(this.status == 2){
                    this.show2()
                }else if(this.status == 3){
                    this.show3()
                }else if(this.status == 4){
                    this.show4()
                }else if(this.status == 5){
                    this.show5()
                }else if(this.status == 6){
                    this.show6()
                }else if(this.status == 7){
                    this.show7()
                }
            },
            //取消裁切
            end(){
                $('#img').cropper('destroy');
            },
            //装裱裁切图
            crop1(){
                toastr.info("装裱中,请稍候")
                //画芯留边
                var drawing_core_val = $("#drawing_core_input").val()*30
                //获取图片
                //主图
                // var img=document.getElementById("img");
                //画框图
                // var bgImg=document.getElementById("bgImg");
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                var vm = this
                img.onload = function(){
                    //图片比例
                    if(vm.is_cut == 1){
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                    }else{
                        var bili = window.arr['bili']
                    }
                    //设置图片跨域
                    //img.crossOrigin = 'Anonymous'
                    //bgImg.crossOrigin = 'Anonymous'
                    //获取被裁切的图片数据
                    var being_cut = $('#img').cropper('getImageData', )
                    //获取裁切框的数据
                    var cut_box = $('#img').cropper('getData', true)
                    //图片名
                    var imgname = vm.img
                    //框宽
                    var box_img_width1 = $("#box_img_width").val()*30
                    //框高
                    var box_img_height1 = $("#box_img_height").val()*30
                    //图片宽
                    var img_width1 = $("#img_width").val()*30
                    //图片高
                    var img_height1 = $("#img_height").val()*30
                    //创建画布
                    var c=document.getElementById("myCanvas")
                    if(box_img_width1/box_img_height1 > 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = box_img_height1/small
                    }else if(box_img_width1/box_img_height1 < 1){
                        //设置面宽缩小比例
                        var small = box_img_height1/550
                        c.height = 550
                        c.width = box_img_width1/small
                    }else if(box_img_width1/box_img_height1 == 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = 550
                    }
                    //缩小后的面宽
                    var small_face = parseFloat(vm.face_width*30/small);
                    //获取画布
                    var ctx=c.getContext("2d")
                    //填充盒子底板卡纸颜色
                    ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 5; // 阴影X轴偏移
                    ctx.shadowBlur = 5; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    ctx.fillStyle="#fff";
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    var direction_val_x = 0
                    var direction_val_y = 0
                    if(this.drawing_core_val != 0){
                        //画芯留边偏移方向
                        var direction = $("#core_shift_direction").val()
                        //画芯留边偏移数值
                        var num_value = $("#core_shift_input").val()*30
                        //纵坐标偏移
                        if(direction == 'top' || direction == 'bottom'){
                            //如果偏移为上则为负值,为下则为正值
                            if(direction == 'top'){
                                direction_val_y = 0 - num_value
                            }else if(direction == 'bottom'){
                                direction_val_y = num_value
                            }
                        }
                        //横坐标偏移
                        if(direction == 'left' || direction == 'right'){
                            //如果偏移为左则为负值,为右则为正值
                            if(direction == 'left'){
                                direction_val_x = 0 - num_value
                            }else if(direction == 'right'){
                                direction_val_x = num_value
                            }
                        }
                    }
                    //画芯偏移方向
                    var directions = $("#core_shift_directions").val()
                    //画芯偏移数值
                    var num_values = $("#core_shift_inputs").val()*30
                    var direction_val_xs = 0
                    var direction_val_ys = 0
                    //纵坐标偏移
                    if(directions == 'top' || directions == 'bottom'){
                        //如果偏移为上则为负值,为下则为正值
                        if(directions == 'top'){
                            direction_val_ys = 0 - num_values
                        }else if(directions == 'bottom'){
                            direction_val_ys = num_values
                        }
                    }
                    //横坐标偏移
                    if(directions == 'left' || directions == 'right'){
                        //如果偏移为左则为负值,为右则为正值
                        if(directions == 'left'){
                            direction_val_xs = 0 - num_values
                        }else if(directions == 'right'){
                            direction_val_xs = num_values
                        }
                    }
                    //满裱
                    if(vm.status == 1){
                        //绘制图片
                        ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2+direction_val_x/small-2,(c.height-img_height1/small)/2+direction_val_y/small-2,img_width1/small-10+4,img_height1/small-10+4)
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:vm.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:vm.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                            vm.img_url = response.data
                            bgImg.src = vm.img_url
                            // $("#bgImg").attr("src",this.img_url);
                        })
                        bgImg.onload = function(){
                            ctx.shadowOffsetX = 3; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 3; // 阴影X轴偏移
                            ctx.shadowBlur = 5; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                        //卡纸
                    }else if(vm.status == 2){
                        //获取盒子卡纸颜色
                        var color_num = Number($("#color_tag_par2").attr('data_id'))
                        switch(color_num)
                        {
                            case 1: var color_val = '#fff'; break;//白色
                            case 2: var color_val = '#efe9e0'; break;//米白色
                            case 3: var color_val = '#c9c3a3'; break;//米绿色
                            case 4: var color_val = '#bbc9cd'; break;//菘蓝绿松石色
                            case 5: var color_val = '#bcb4b1'; break;//米灰色
                            case 6: var color_val = '#c1b0b0'; break;//浅褐色
                            case 7: var color_val = '#bdb18c'; break;//芦荟绿
                            case 8: var color_val = '#6298b7'; break;//淡蓝色
                            case 9: var color_val = '#807f75'; break;//灰色
                            case 10: var color_val = '#887953'; break;//橄榄黄色
                            case 11: var color_val = '#6b6d3f'; break;//橄榄绿色
                            case 12: var color_val = '#684d4c'; break;//桃花心木褐
                            case 13: var color_val = '#7b3c43'; break;//枣红色
                            case 14: var color_val = '#614837'; break;//褐灰色
                            case 15: var color_val = '#2a2a2a'; break;//黑色
                        }
                        // //填充盒子底板卡纸颜色
                        ctx.fillStyle=color_val;
                        ctx.fillRect(0,0,c.width-10,c.height-10);
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 0; // 阴影X轴偏移
                        ctx.shadowBlur = 0; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                        // //填充画芯留边颜色
                        ctx.fillStyle='#fff';
                        ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width1/small+vm.drawing_core_val*30/small*2-10,img_height1/small+vm.drawing_core_val*30/small*2-10);
                        //绘制图片
                        ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height1/small)/2+direction_val_y/small+direction_val_ys/small,img_width1/small-10,img_height1/small-10)
                        //绘制模拟阴影条(上)
                        // var grd=ctx.createLinearGradient((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+5+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(250,250,250,0.3)");
                        // ctx.fillStyle=grd;
                        ctx.fillStyle='#aaaaaa';
                        ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1,(img_width1+vm.drawing_core_val*30*2)/small+2-10,3);
                        //绘制模拟阴影条(左)
                        // var grd=ctx.createLinearGradient((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+5+direction_val_xs/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(250,250,250,0.3)");
                        // ctx.fillStyle=grd;
                        ctx.fillStyle='#aaaaaa';
                        ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1,3,img_height1/small+vm.drawing_core_val*30/small*2-10+2);
                        //绘制模拟阴影条(右)
                        // var grd=ctx.createLinearGradient((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small,(c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_ys/small,(c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small-3+direction_val_xs/small,(c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(250,250,250,0.3)");
                        // ctx.fillStyle=grd;
                        // ctx.fillStyle='#ebebeb';
                        // ctx.fillRect((c.width-img_width1/small)/2+img_width1/small-2+vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,2,(img_height1+vm.drawing_core_val*30*2)/small);
                        //绘制模拟阴影条(下)
                        // var grd=ctx.createLinearGradient((c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_xs/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_xs/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small-3+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(250,250,250,0.3)");
                        // ctx.fillStyle=grd;
                        // ctx.fillStyle='#ebebeb';
                        // ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small-2+direction_val_ys/small,(img_width1+vm.drawing_core_val*30*2)/small,2);
                        //绘制不规则四边形(下)
                        //开始一个新的绘制路径
                        ctx.beginPath();
                        //设置线条颜色
                        ctx.strokeStyle ="#ebebeb";
                        ctx.lineWidth=0.1;
                        //设置路径起点坐标
                        ctx.moveTo((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                        //绘制直线线段到坐标点
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-2-10);
                        ctx.lineTo((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small+2,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-2-10);
                        ctx.fillStyle='#ebebeb';
                        ctx.fill();
                        //先关闭绘制路径。
                        ctx.closePath();
                        //最后，按照绘制路径画出直线
                        ctx.stroke();
                        //绘制不规则四边形(右)
                        //开始一个新的绘制路径
                        ctx.beginPath();
                        //设置线条颜色
                        ctx.strokeStyle ="#ebebeb";
                        ctx.lineWidth=0.1;
                        //设置路径起点坐标
                        ctx.moveTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1);
                        //绘制直线线段到坐标点(20, 100)
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small-1-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-10);
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small-1-10,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small+2);
                        ctx.fillStyle='#ebebeb';
                        ctx.fill();
                        //先关闭绘制路径。
                        ctx.closePath();
                        //最后，按照绘制路径画出直线
                        ctx.stroke();
                        //如果宽高有变化则后台生成边框素材,没有变化则直接获取
                        if(vm.last_border == vm.border_status && vm.confirm_width == $("#box_img_width").val() && vm.confirm_height == $("#box_img_height").val()){
                            // $("#bgImg").attr("src",this.img_url);
                            bgImg.src = vm.img_url
                        }else{
                            vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:vm.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:vm.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                                vm.img_url = response.data
                                bgImg.src = vm.img_url
                                // $("#bgImg").attr("src",this.img_url);
                            })
                        }
                        bgImg.onload = function(){
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                        //盒子
                    }else if(vm.status == 3){
                        var color_num = Number($("#color_tag_par").attr('data_id'))
                        switch(color_num)
                        {
                            case 1: var color_val = '#fff'; break;//白色
                            case 2: var color_val = '#efe9e0'; break;//米白色
                            case 3: var color_val = '#c9c3a3'; break;//米绿色
                            case 4: var color_val = '#bbc9cd'; break;//菘蓝绿松石色
                            case 5: var color_val = '#bcb4b1'; break;//米灰色
                            case 6: var color_val = '#c1b0b0'; break;//浅褐色
                            case 7: var color_val = '#bdb18c'; break;//芦荟绿
                            case 8: var color_val = '#6298b7'; break;//淡蓝色
                            case 9: var color_val = '#807f75'; break;//灰色
                            case 10: var color_val = '#887953'; break;//橄榄黄色
                            case 11: var color_val = '#6b6d3f'; break;//橄榄绿色
                            case 12: var color_val = '#684d4c'; break;//桃花心木褐
                            case 13: var color_val = '#7b3c43'; break;//枣红色
                            case 14: var color_val = '#614837'; break;//褐灰色
                            case 15: var color_val = '#2a2a2a'; break;//黑色
                        }
                        // //填充盒子底板卡纸颜色
                        ctx.fillStyle=color_val;
                        ctx.fillRect(0,0,c.width-10,c.height-10);
                        var is_pause = $('#is_pause').attr('data_id')
                        if(is_pause == 2){
                            //画阴影
                            ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 5; // 阴影X轴偏移
                            ctx.shadowBlur = 5; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        }else{
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        }
                        // //填充画芯留边颜色
                        ctx.fillStyle='#fff';
                        ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width1/small+vm.drawing_core_val*30/small*2-10,img_height1/small+vm.drawing_core_val*30/small*2-10);
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 0; // 阴影X轴偏移
                        ctx.shadowBlur = 0; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        //绘制图片
                        ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height1/small)/2+direction_val_y/small+direction_val_ys/small,img_width1/small-10,img_height1/small-10)
                        //如果宽高有变化则后台生成边框素材,没有变化则直接获取
                        if(vm.last_border == vm.border_status && vm.confirm_width == $("#box_img_width").val() && vm.confirm_height == $("#box_img_height").val()){
                            bgImg.src = vm.img_url
                            // $("#bgImg").attr("src",this.img_url);
                        }else{
                            vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:vm.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:vm.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                                vm.img_url = response.data
                                bgImg.src = vm.img_url
                                // $("#bgImg").attr("src",this.img_url);
                            })
                        }
                        bgImg.onload = function(){
                            //画阴影
                            ctx.shadowOffsetX = 2; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 2; // 阴影X轴偏移
                            ctx.shadowBlur = 5; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                        //套框绷架
                    }else if(vm.status == 4){
                        //套框绷架宽度
                        var Frame_width = 0.7*30
                        //画芯留边
                        var drawing_core_val = $("#drawing_core_input").val()*30
                        //填充盒子底板卡纸颜色
                        ctx.fillStyle='#000';
                        ctx.fillRect(0,0,c.width-10,c.height-10);
                        //填充画芯留边颜色
                        ctx.fillStyle='#fff';
                        ctx.fillRect((c.width-img_width1/small)/2+Frame_width/small-drawing_core_val/small,(c.height-img_height1/small)/2+Frame_width/small-drawing_core_val/small,c.width-vm.face_width*30/small*2-Frame_width/small*2-10,c.height-vm.face_width*30/small*2-Frame_width/small*2-10);
                        //绘制画芯
                        ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2+Frame_width/small+direction_val_x/small,(c.height-img_height1/small)/2+Frame_width/small+direction_val_y/small,img_width1/small-Frame_width/small*2-10,img_height1/small-Frame_width/small*2-10);
                        //生成画框
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:vm.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:vm.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                            vm.img_url = response.data
                            bgImg.src = vm.img_url
                            // $("#bgImg").attr("src",this.img_url);
                        })
                        //绘制画框
                        bgImg.onload = function(){
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                        //单立体
                    }else if(vm.status == 5){
                        //单立体宽
                        var stereo_width = 25
                        //获取素材图
                        // var dltImg=document.getElementById("dltImg")
                        var dltImg = new Image;
                        dltImg.crossOrigin = 'Anonymous'
                        if(box_img_width1/box_img_height1 > 1){
                            //设置面宽缩小比例
                            var small = box_img_width1/550
                            c.width = 550+stereo_width/small+30
                            c.height = box_img_height1/small+30
                        }else if(box_img_width1/box_img_height1 < 1){
                            //设置面宽缩小比例
                            var small = box_img_height1/550
                            c.height = 550+stereo_width/small+30
                            c.width = box_img_width1/small+30
                        }else if(box_img_width1/box_img_height1 == 1){
                            //设置面宽缩小比例
                            var small = box_img_width1/550
                            c.width = 550+stereo_width/small+30
                            c.height = 550+stereo_width/small+30
                        }
                        //缩小后的面宽
                        small_face = parseFloat(vm.face_width*30/small)+15/small;
                        var img_width2 = img_width1/small
                        var img_height2 = img_width2/bili
                        // ctx.shadowOffsetX = 7; // 阴影Y轴偏移
                        // ctx.shadowOffsetY = 7; // 阴影X轴偏移
                        // ctx.shadowBlur = 5; // 模糊尺寸
                        // ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        //生成单立体图
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/singlestereo',{params:{box_img_width1:box_img_width1+vm.drawing_core_val*30,box_img_height1:box_img_height1+vm.drawing_core_val*30,img_width1:img_width1,img_height1:img_height1,face_width:stereo_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                            dltImg.src = dltImg.src = vm.GLOBAL.imgurl+'singlestereo.jpg?t='+Math.random()
                            // $("#dltImg").attr("src",'http://localhost/yii-application/backend/web/test/singlestereo.jpg?t='+Math.random());
                        })
                        //如果宽高有变化则后台生成边框素材,没有变化则直接获取
                        if(vm.last_border == vm.border_status && vm.confirm_width == $("#box_img_width").val() && vm.confirm_height == $("#box_img_height").val()){
                            bgImg.src = vm.img_url
                            // $("#bgImg").attr("src",this.img_url);
                        }else{
                            vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:vm.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:vm.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                                vm.img_url = response.data
                                bgImg.src = vm.img_url
                                // $("#bgImg").attr("src",this.img_url);
                            })
                        }
                        //绘制画框
                        bgImg.onload = function(){
                            ctx.shadowOffsetX = 3; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 3; // 阴影X轴偏移
                            ctx.shadowBlur = 5; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                        //绘制单立体
                        dltImg.onload = function() {
                            ctx.shadowOffsetX = 3; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 3; // 阴影X轴偏移
                            ctx.shadowBlur = 5; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            ctx.drawImage(dltImg,0,0,dltImg.naturalWidth,dltImg.naturalHeight,(c.width-img_width2-stereo_width/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2-stereo_width/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+stereo_width/small+vm.drawing_core_val*30/small*2-10,img_height2+stereo_width/small+vm.drawing_core_val*30/small*2-10);
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            //填充画芯留边
                            ctx.fillStyle='#fff';
                            ctx.fillRect((c.width-img_width2)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+vm.drawing_core_val*30/small*2-10,img_height2+vm.drawing_core_val*30/small*2-10);
                            //绘制图片
                            ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height1/small)/2+direction_val_y/small+direction_val_ys/small,img_width1/small-10,img_height1/small-10)
                        }
                        //纯画芯
                    }else if(vm.status == 6){
                        //绘制图片
                        ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2,(c.height-img_height1/small)/2,c.width-vm.face_width/small*2,c.height-vm.face_width/small*2)
                        //无框绷架
                    }else if(vm.status == 7){
                        ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        //绘制图片
                        ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2,(c.height-img_height1/small)/2,c.width-vm.face_width/small*2,c.height-vm.face_width/small*2)
                    }
                    //最后生效框宽
                    vm.confirm_width = $("#box_img_width").val()
                    //最后生效框高
                    vm.confirm_height = $("#box_img_height").val()
                    //最后生效框
                    vm.last_border = vm.border_status
                }
            },
            //满裱
            show1(){
                toastr.info("装裱中,请稍候")
                $("#img").attr("width",0)
                // var img=document.getElementById("img");
                // var bgImg=document.getElementById("bgImg");
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                var bili = Number((img.naturalWidth / img.naturalHeight).toFixed(4))
                //获取填写数据
                //1为指定宽度2为指定高度
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                var img_width1 = $("#img_width").val()*30
                var img_height1 = $("#img_height").val()*30
                //创建画布
                var c=document.getElementById("myCanvas");
                if(box_img_width1/box_img_height1 > 1){
                    //设置面宽缩小比例
                    var small = box_img_width1/550
                    c.width = 550
                    c.height = box_img_height1/small
                }else if(box_img_width1/box_img_height1 < 1){
                    //设置面宽缩小比例
                    var small = box_img_height1/550
                    c.height = 550
                    c.width = box_img_width1/small
                }else if(box_img_width1/box_img_height1 == 1){
                    //设置面宽缩小比例
                    var small = box_img_width1/550
                    c.width = 550
                    c.height = 550
                }
                //缩小后的面宽
                var small_face = parseFloat(this.face_width*30/small);
                //获取画布
                var ctx=c.getContext("2d")
                //填充盒子底板卡纸颜色
                ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                ctx.shadowOffsetY = 5; // 阴影X轴偏移
                ctx.shadowBlur = 5; // 模糊尺寸
                ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                ctx.fillStyle="#fff";
                ctx.fillRect(0,0,c.width-10,c.height-10);
                var direction_val_x = 0
                var direction_val_y = 0
                if(this.drawing_core_val != 0){
                    //画芯偏移方向
                    var direction = $("#core_shift_direction").val()
                    //画芯偏移数值
                    var num_value = $("#core_shift_input").val()*30
                    //纵坐标偏移
                    if(direction == 'top' || direction == 'bottom'){
                        //如果偏移为上则为负值,为下则为正值
                        if(direction == 'top'){
                            direction_val_y = 0 - num_value
                        }else if(direction == 'bottom'){
                            direction_val_y = num_value
                        }
                    }
                    //横坐标偏移
                    if(direction == 'left' || direction == 'right'){
                        //如果偏移为左则为负值,为右则为正值
                        if(direction == 'left'){
                            direction_val_x = 0 - num_value
                        }else if(direction == 'right'){
                            direction_val_x = num_value
                        }
                    }
                }
                this.$http.get(this.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:this.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:this.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                    this.img_url = response.data
                    bgImg.src = this.img_url
                })
                //绘制画芯
                img.onload = function(){
                    ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width1/small)/2+direction_val_x/small-2,(c.height-img_height1/small)/2+direction_val_y/small-2,img_width1/small-10+4,img_height1/small-10+4);
                    bgImg.onload = function(){
                        ctx.shadowOffsetX = 3; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 3; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                    }
                }
            },
            //卡纸
            show2(){
                toastr.info("装裱中,请稍候")
                $("#img").attr("width",0)
                //获取填写数据
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                var img_width1 = $("#img_width").val()*30
                var img_height1 = $("#img_height").val()*30
                //画芯留边
                var drawing_core_val = $("#drawing_core_input").val()*30
                // var img=document.getElementById("img")
                // var bgImg=document.getElementById("bgImg")
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                //绘制图片
                var vm = this
                img.onload = function(){
                    //图片比例
                    var bili = img.naturalWidth/img.naturalHeight
                    //创建画布
                    var c=document.getElementById("myCanvas")
                    //获取画布
                    var ctx=c.getContext("2d")
                    if(box_img_width1/box_img_height1 > 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = box_img_height1/small
                    }else if(box_img_width1/box_img_height1 < 1){
                        //设置面宽缩小比例
                        var small = box_img_height1/550
                        c.height = 550
                        c.width = box_img_width1/small
                    }else if(box_img_width1/box_img_height1 == 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = 550
                    }
                    ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 5; // 阴影X轴偏移
                    ctx.shadowBlur = 5; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    // //填充盒子底板卡纸颜色
                    ctx.fillStyle="#ff6700";
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    //获取盒子卡纸颜色
                    var color_num = Number($("#color_tag_par2").attr('data_id'))
                    switch(color_num)
                    {
                        case 1: var color_val = '#fff'; break;//白色
                        case 2: var color_val = '#efe9e0'; break;//米白色
                        case 3: var color_val = '#c9c3a3'; break;//米绿色
                        case 4: var color_val = '#bbc9cd'; break;//菘蓝绿松石色
                        case 5: var color_val = '#bcb4b1'; break;//米灰色
                        case 6: var color_val = '#c1b0b0'; break;//浅褐色
                        case 7: var color_val = '#bdb18c'; break;//芦荟绿
                        case 8: var color_val = '#6298b7'; break;//淡蓝色
                        case 9: var color_val = '#807f75'; break;//灰色
                        case 10: var color_val = '#887953'; break;//橄榄黄色
                        case 11: var color_val = '#6b6d3f'; break;//橄榄绿色
                        case 12: var color_val = '#684d4c'; break;//桃花心木褐
                        case 13: var color_val = '#7b3c43'; break;//枣红色
                        case 14: var color_val = '#614837'; break;//褐灰色
                        case 15: var color_val = '#2a2a2a'; break;//黑色
                    }
                    // //填充盒子底板卡纸颜色
                    ctx.fillStyle=color_val;
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    //缩小后的面宽
                    var small_face = parseFloat(vm.face_width*30/small);
                    var img_width2 = img_width1/small
                    var img_height2 = img_width2/bili
                    //画芯偏移方向
                    var directions = $("#core_shift_directions").val()
                    //画芯偏移数值
                    var num_values = $("#core_shift_inputs").val()*30
                    var direction_val_xs = 0
                    var direction_val_ys = 0
                    //纵坐标偏移
                    if(directions == 'top' || directions == 'bottom'){
                        //如果偏移为上则为负值,为下则为正值
                        if(directions == 'top'){
                            direction_val_ys = 0 - num_values
                        }else if(directions == 'bottom'){
                            direction_val_ys = num_values
                        }
                    }
                    //横坐标偏移
                    if(directions == 'left' || directions == 'right'){
                        //如果偏移为左则为负值,为右则为正值
                        if(directions == 'left'){
                            direction_val_xs = 0 - num_values
                        }else if(directions == 'right'){
                            direction_val_xs = num_values
                        }
                    }
                    ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 0; // 阴影X轴偏移
                    ctx.shadowBlur = 0; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    //填充画芯留边颜色
                    ctx.fillStyle='#fff';
                    ctx.fillRect((c.width-img_width2)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+vm.drawing_core_val*30/small*2-10,img_height2+vm.drawing_core_val*30/small*2-10);
                    var direction_val_x = 0
                    var direction_val_y = 0
                    if(vm.drawing_core_val != 0){
                        //画芯留白偏移方向
                        var direction = $("#core_shift_direction").val()
                        //画芯留白偏移数值
                        var num_value = $("#core_shift_input").val()*30
                        //纵坐标偏移
                        if(direction == 'top' || direction == 'bottom'){
                            //如果偏移为上则为负值,为下则为正值
                            if(direction == 'top'){
                                direction_val_y = 0 - num_value
                            }else if(direction == 'bottom'){
                                direction_val_y = num_value
                            }
                        }
                        //横坐标偏移
                        if(direction == 'left' || direction == 'right'){
                            //如果偏移为左则为负值,为右则为正值
                            if(direction == 'left'){
                                direction_val_x = 0 - num_value
                            }else if(direction == 'right'){
                                direction_val_x = num_value
                            }
                        }
                    }
                    ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width2)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height2)/2+direction_val_y/small+direction_val_ys/small,img_width2-10,img_height2-10);
                    // //绘制模拟阴影条(上)
                    ctx.fillStyle='#aaaaaa';
                    ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1,(img_width1+vm.drawing_core_val*30*2)/small+2-10,3);
                    // //绘制模拟阴影条(左)
                    ctx.fillStyle='#aaaaaa';
                    ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1,3,img_height1/small+vm.drawing_core_val*30/small*2-10+2);
                    //开始一个新的绘制路径(下)
                    ctx.beginPath();
                    //设置线条颜色
                    // ctx.strokeStyle ="#ebebeb";
                    ctx.strokeStyle ="#ff6700";
                    ctx.lineWidth=0.1;
                    //设置路径起点坐标
                    ctx.moveTo((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                    //绘制直线线段到坐标点
                    ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                    ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-2-10);
                    ctx.lineTo((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small+2,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-2-10);
                    ctx.fillStyle='#ebebeb';
                    ctx.fill();
                    //先关闭绘制路径。
                    ctx.closePath();
                    //最后，按照绘制路径画出直线
                    ctx.stroke();
                    //绘制不规则四边形(右)
                    //开始一个新的绘制路径
                    ctx.beginPath();
                    //设置线条颜色
                    ctx.strokeStyle ="#ebebeb";
                    ctx.lineWidth=0.1;
                    //设置路径起点坐标
                    ctx.moveTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1);
                    //绘制直线线段到坐标点(20, 100)
                    ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                    ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small-1-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-10);
                    ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small-1-10,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small+2);
                    ctx.fillStyle='#ebebeb';
                    ctx.fill();
                    //先关闭绘制路径。
                    ctx.closePath();
                    //最后，按照绘制路径画出直线
                    ctx.stroke();
                    //如果宽高有变化则后台生成边框素材,没有变化则直接获取
                    if(vm.last_border == vm.border_status && vm.confirm_width == $("#box_img_width").val() && vm.confirm_height == $("#box_img_height").val()){
                        // $("#bgImg").attr("src",this.img_url);
                        bgImg.src = vm.img_url
                        bgImg.onload = function(){
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width,c.height);
                        }
                    }else{
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:vm.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:vm.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                            vm.img_url = response.data
                            // $("#bgImg").attr("src",this.img_url);
                            bgImg.src = vm.img_url
                        })
                        bgImg.onload = function(){
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                    }
                    //最后生效框宽
                    vm.confirm_width = $("#box_img_width").val()
                    //最后生效框高
                    vm.confirm_height = $("#box_img_height").val()
                    //最后生效框
                    vm.last_border = vm.border_status
                }
            },
            //盒子
            show3(){
                toastr.info("装裱中,请稍候")
                $("#img").attr("width",0)
                //获取填写数据
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                var img_width1 = $("#img_width").val()*30
                var img_height1 = $("#img_height").val()*30
                // var img=document.getElementById("img");
                // var bgImg=document.getElementById("bgImg");
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                var vm = this
                img.onload = function(){
                    //获取盒子卡纸颜色
                    var color_num = Number($("#color_tag_par").attr('data_id'))
                    switch(color_num)
                    {
                        case 1: var color_val = '#fff'; break;//白色
                        case 2: var color_val = '#efe9e0'; break;//米白色
                        case 3: var color_val = '#c9c3a3'; break;//米绿色
                        case 4: var color_val = '#bbc9cd'; break;//菘蓝绿松石色
                        case 5: var color_val = '#bcb4b1'; break;//米灰色
                        case 6: var color_val = '#c1b0b0'; break;//浅褐色
                        case 7: var color_val = '#bdb18c'; break;//芦荟绿
                        case 8: var color_val = '#6298b7'; break;//淡蓝色
                        case 9: var color_val = '#807f75'; break;//灰色
                        case 10: var color_val = '#887953'; break;//橄榄黄色
                        case 11: var color_val = '#6b6d3f'; break;//橄榄绿色
                        case 12: var color_val = '#684d4c'; break;//桃花心木褐
                        case 13: var color_val = '#7b3c43'; break;//枣红色
                        case 14: var color_val = '#614837'; break;//褐灰色
                        case 15: var color_val = '#2a2a2a'; break;//黑色
                    }
                    //图片比例
                    var bili = img.naturalWidth/img.naturalHeight
                    //创建画布
                    var c=document.getElementById("myCanvas")
                    //获取画布
                    var ctx=c.getContext("2d")
                    if(box_img_width1/box_img_height1 > 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = box_img_height1/small
                    }else if(box_img_width1/box_img_height1 < 1){
                        //设置面宽缩小比例
                        var small = box_img_height1/550
                        c.height = 550
                        c.width = box_img_width1/small
                    }else if(box_img_width1/box_img_height1 == 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = 550
                    }
                    ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 5; // 阴影X轴偏移
                    ctx.shadowBlur = 5; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    // //填充盒子底板卡纸颜色
                    ctx.fillStyle="#ff6700";
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    //缩小后的面宽
                    var small_face = parseFloat(vm.face_width*30/small);
                    var img_width2 = img_width1/small
                    var img_height2 = img_width2/bili
                    var direction_val_x = 0
                    var direction_val_y = 0
                    if(vm.drawing_core_val != 0){
                        //画芯留边偏移方向
                        var direction = $("#core_shift_direction").val()
                        //画芯留边偏移数值
                        var num_value = $("#core_shift_input").val()*30
                        //纵坐标偏移
                        if(direction == 'top' || direction == 'bottom'){
                            //如果偏移为上则为负值,为下则为正值
                            if(direction == 'top'){
                                direction_val_y = 0 - num_value
                            }else if(direction == 'bottom'){
                                direction_val_y = num_value
                            }
                        }
                        //横坐标偏移
                        if(direction == 'left' || direction == 'right'){
                            //如果偏移为左则为负值,为右则为正值
                            if(direction == 'left'){
                                direction_val_x = 0 - num_value
                            }else if(direction == 'right'){
                                direction_val_x = num_value
                            }
                        }
                    }
                    // //填充盒子底板卡纸颜色
                    ctx.fillStyle=color_val;
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    //获取是否悬浮,1为不悬浮,2为悬浮
                    var is_pause = $('#is_pause').attr('data_id')
                    if(is_pause == 2){
                        ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                    }else{
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 0; // 阴影X轴偏移
                        ctx.shadowBlur = 0; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                    }
                    //画芯偏移方向
                    var directions = $("#core_shift_directions").val()
                    //画芯偏移数值
                    var num_values = $("#core_shift_inputs").val()*30
                    var direction_val_xs = 0
                    var direction_val_ys = 0
                    //纵坐标偏移
                    if(directions == 'top' || directions == 'bottom'){
                        //如果偏移为上则为负值,为下则为正值
                        if(directions == 'top'){
                            direction_val_ys = 0 - num_values
                        }else if(directions == 'bottom'){
                            direction_val_ys = num_values
                        }
                    }
                    //横坐标偏移
                    if(directions == 'left' || directions == 'right'){
                        //如果偏移为左则为负值,为右则为正值
                        if(directions == 'left'){
                            direction_val_xs = 0 - num_values
                        }else if(directions == 'right'){
                            direction_val_xs = num_values
                        }
                    }
                    // //填充画芯留边颜色
                    ctx.fillStyle='#fff';
                    ctx.fillRect((c.width-img_width2)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+vm.drawing_core_val*30/small*2-10,img_height2+vm.drawing_core_val*30/small*2-10);
                    ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 0; // 阴影X轴偏移
                    ctx.shadowBlur = 0; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                    //绘制图片
                    ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width1/small)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height1/small)/2+direction_val_y/small+direction_val_ys/small,img_width1/small-10,img_height1/small-10)
                    //如果宽高有变化则后台生成边框素材,没有变化则直接获取
                    if(vm.last_border == vm.border_status && vm.confirm_width == $("#box_img_width").val() && vm.confirm_height == $("#box_img_height").val()){
                        // $("#bgImg").attr("src",this.img_url);
                        bgImg.src = vm.img_url
                        bgImg.onload = function(){
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                    }else{
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:vm.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:vm.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                            vm.img_url = response.data
                            // $("#bgImg").attr("src",this.img_url);
                            bgImg.src = vm.img_url
                        })
                        bgImg.onload = function(){
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                    }
                    ctx.shadowOffsetX = 2; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 2; // 阴影X轴偏移
                    ctx.shadowBlur = 5; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                    //最后生效框宽
                    vm.confirm_width = $("#box_img_width").val()
                    //最后生效框高
                    vm.confirm_height = $("#box_img_height").val()
                    //最后生效框
                    vm.last_border = vm.border_status
                }
            },
            //套框绷架
            show4(){
                toastr.info("装裱中,请稍候")
                $("#img").attr("width",0)
                // var img=document.getElementById("img");
                // var bgImg=document.getElementById("bgImg");
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                var vm = this
                img.onload = function(){
                    var bili = Number((img.naturalWidth / img.naturalHeight).toFixed(4))
                    //获取填写数据
                    //1为指定宽度2为指定高度
                    var box_img_width1 = $("#box_img_width").val()*30
                    var box_img_height1 = $("#box_img_height").val()*30
                    var img_width1 = $("#img_width").val()*30
                    var img_height1 = $("#img_height").val()*30
                    //画芯留边
                    var drawing_core_val = $("#drawing_core_input").val()*30
                    //创建画布
                    var c=document.getElementById("myCanvas");
                    //套框绷架宽度
                    var Frame_width = 0.7*30
                    if(box_img_width1/box_img_height1 > 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = box_img_height1/small
                    }else if(box_img_width1/box_img_height1 < 1){
                        //设置面宽缩小比例
                        var small = box_img_height1/550
                        c.height = 550
                        c.width = box_img_width1/small
                    }else if(box_img_width1/box_img_height1 == 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = 550
                    }
                    //缩小后的面宽
                    var small_face = vm.face_width*30/small;
                    //获取画布
                    var ctx=c.getContext("2d")
                    //填充盒子底板卡纸颜色
                    ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 5; // 阴影X轴偏移
                    ctx.shadowBlur = 5; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    //填充盒子底板卡纸颜色
                    ctx.fillStyle='#000';
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    var direction_val_x = 0
                    var direction_val_y = 0
                    if(vm.drawing_core_val != 0){
                        //画芯偏移方向
                        var direction = $("#core_shift_direction").val()
                        //画芯偏移数值
                        var num_value = $("#core_shift_input").val()*30
                        //纵坐标偏移
                        if(direction == 'top' || direction == 'bottom'){
                            //如果偏移为上则为负值,为下则为正值
                            if(direction == 'top'){
                                direction_val_y = 0 - num_value
                            }else if(direction == 'bottom'){
                                direction_val_y = num_value
                            }
                        }
                        //横坐标偏移
                        if(direction == 'left' || direction == 'right'){
                            //如果偏移为左则为负值,为右则为正值
                            if(direction == 'left'){
                                direction_val_x = 0 - num_value
                            }else if(direction == 'right'){
                                direction_val_x = num_value
                            }
                        }
                    }
                    //填充画芯留边颜色
                    ctx.fillStyle='#fff';
                    ctx.fillRect((c.width-img_width1/small)/2+Frame_width/small-vm.drawing_core_val*30/small,(c.height-img_height1/small)/2+Frame_width/small-vm.drawing_core_val*30/small,img_width1/small-Frame_width/small*2+vm.drawing_core_val*30/small*2-10,img_height1/small-Frame_width/small*2+vm.drawing_core_val*30/small*2-10);
                    //绘画芯
                    ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width1/small)/2+Frame_width/small+direction_val_x/small,(c.height-img_height1/small)/2+Frame_width/small+direction_val_y/small,img_width1/small-Frame_width/small*2+1-10,img_height1/small-Frame_width/small*2+1-10);
                    vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:vm.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:vm.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                        vm.img_url = response.data
                        // $("#bgImg").attr("src",this.img_url);
                        bgImg.src = vm.img_url
                    })
                    bgImg.onload = function(){
                        ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                    }
                }
            },
            //单立体
            show5(){
                toastr.info("装裱中,请稍候")
                $("#img").attr("width",0)
                //获取填写数据
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                var img_width1 = $("#img_width").val()*30
                var img_height1 = $("#img_height").val()*30
                //单立体宽
                var stereo_width = 25
                // var img=document.getElementById("img")
                // var bgImg=document.getElementById("bgImg")
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                var dltImg = new Image;
                dltImg.crossOrigin = 'Anonymous'
                var vm = this
                img.onload = function(){
                    // var dltImg=document.getElementById("dltImg")
                    //图片比例
                    var bili = img.naturalWidth/img.naturalHeight
                    //创建画布
                    var c=document.getElementById("myCanvas")
                    //获取画布
                    var ctx=c.getContext("2d")
                    if(box_img_width1/box_img_height1 > 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550+stereo_width/small+30
                        c.height = box_img_height1/small+30
                    }else if(box_img_width1/box_img_height1 < 1){
                        //设置面宽缩小比例
                        var small = box_img_height1/550
                        c.height = 550+stereo_width/small+30
                        c.width = box_img_width1/small+30
                    }else if(box_img_width1/box_img_height1 == 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550+stereo_width/small+30
                        c.height = 550+stereo_width/small+30
                    }
                    ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 5; // 阴影X轴偏移
                    ctx.shadowBlur = 5; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    // //填充盒子底板卡纸颜色
                    ctx.fillStyle="#fff";
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    //缩小后的面宽
                    var small_face = parseFloat(vm.face_width*30/small)+15/small;
                    var img_width2 = img_width1/small
                    var img_height2 = img_width2/bili
                    // ctx.shadowOffsetX = 7; // 阴影Y轴偏移
                    // ctx.shadowOffsetY = 7; // 阴影X轴偏移
                    // ctx.shadowBlur = 5; // 模糊尺寸
                    // ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                    var direction_val_x = 0
                    var direction_val_y = 0
                    if(vm.drawing_core_val != 0){
                        //画芯偏移方向
                        var direction = $("#core_shift_direction").val()
                        //画芯偏移数值
                        var num_value = $("#core_shift_input").val()*30
                        //纵坐标偏移
                        if(direction == 'top' || direction == 'bottom'){
                            //如果偏移为上则为负值,为下则为正值
                            if(direction == 'top'){
                                direction_val_y = 0 - num_value
                            }else if(direction == 'bottom'){
                                direction_val_y = num_value
                            }
                        }
                        //横坐标偏移
                        if(direction == 'left' || direction == 'right'){
                            //如果偏移为左则为负值,为右则为正值
                            if(direction == 'left'){
                                direction_val_x = 0 - num_value
                            }else if(direction == 'right'){
                                direction_val_x = num_value
                            }
                        }
                    }
                    //画芯偏移方向
                    var directions = $("#core_shift_directions").val()
                    //画芯偏移数值
                    var num_values = $("#core_shift_inputs").val()*30
                    var direction_val_xs = 0
                    var direction_val_ys = 0
                    //纵坐标偏移
                    if(directions == 'top' || directions == 'bottom'){
                        //如果偏移为上则为负值,为下则为正值
                        if(directions == 'top'){
                            direction_val_ys = 0 - num_values
                        }else if(directions == 'bottom'){
                            direction_val_ys = num_values
                        }
                    }
                    //横坐标偏移
                    if(directions == 'left' || directions == 'right'){
                        //如果偏移为左则为负值,为右则为正值
                        if(directions == 'left'){
                            direction_val_xs = 0 - num_values
                        }else if(directions == 'right'){
                            direction_val_xs = num_values
                        }
                    }
                    //生成单立体图
                    vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/singlestereo',{params:{box_img_width1:img_width1+stereo_width+vm.drawing_core_val*30,box_img_height1:img_height1+stereo_width+vm.drawing_core_val*30,img_width1:img_width1,img_height1:img_height1,face_width:stereo_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                    })
                    //如果宽高有变化则后台生成边框素材,没有变化则直接获取
                    if(vm.last_border == vm.border_status && vm.confirm_width == $("#box_img_width").val() && vm.confirm_height == $("#box_img_height").val()){
                        // $("#bgImg").attr("src",this.img_url);
                        bgImg.src = vm.img_url
                        dltImg.src = vm.GLOBAL.imgurl+'singlestereo.jpg?t='+Math.random()
                        // dltImg.src = 'http://localhost/test/singlestereo.jpg?t='+Math.random()
                    }else{
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/goods/decoration',{params:{img_name:vm.border_status,box_img_width1:box_img_width1,box_img_height1:box_img_height1,img_width1:img_width1,img_height1:img_height1,face_width:vm.face_width,small_face:small_face,need_width:c.width,need_height:c.height}}).then((response)=>{
                            vm.img_url = response.data
                            // $("#bgImg").attr("src",this.img_url);
                            bgImg.src = vm.img_url
                            dltImg.src = vm.GLOBAL.imgurl+'singlestereo.jpg?t='+Math.random()
                            // dltImg.src = 'http://localhost/test/singlestereo.jpg?t='+Math.random()
                        })
                    }
                    bgImg.onload = function(){
                        ctx.shadowOffsetX = 3; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 3; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                    }
                    //绘制单立体
                    dltImg.onload = function() {
                        ctx.shadowOffsetX = 3; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 3; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        ctx.drawImage(dltImg,0,0,dltImg.naturalWidth,dltImg.naturalHeight,(c.width-img_width2-stereo_width/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2-stereo_width/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+stereo_width/small+vm.drawing_core_val*30/small*2-10,img_height2+stereo_width/small+vm.drawing_core_val*30/small*2-10);
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 0; // 阴影X轴偏移
                        ctx.shadowBlur = 0; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        //填充画芯留边
                        ctx.fillStyle='#fff';
                        ctx.fillRect((c.width-img_width2)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+vm.drawing_core_val*30/small*2-10,img_height2+vm.drawing_core_val*30/small*2-10);
                        //绘制图片
                        ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width2)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height2)/2+direction_val_y/small+direction_val_ys/small,img_width2-10,img_height2-10);
                    }
                    //最后生效框宽
                    vm.confirm_width = $("#box_img_width").val()
                    //最后生效框高
                    vm.confirm_height = $("#box_img_height").val()
                    //最后生效框
                    vm.last_border = vm.border_status
                }
            },
            //纯画芯
            show6(){
                $("#img").attr("width",0)
                // var img=document.getElementById("img");
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bili = Number((img.naturalWidth / img.naturalHeight).toFixed(4))
                //获取填写数据
                //1为指定宽度2为指定高度
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                var img_width1 = $("#img_width").val()*30
                var img_height1 = $("#img_height").val()*30
                //创建画布
                var c=document.getElementById("myCanvas");
                if(box_img_width1/box_img_height1 > 1){
                    //设置面宽缩小比例
                    var small = box_img_width1/550
                    c.width = 550
                    c.height = box_img_height1/small
                }else if(box_img_width1/box_img_height1 < 1){
                    //设置面宽缩小比例
                    var small = box_img_height1/550
                    c.height = 550
                    c.width = box_img_width1/small
                }else if(box_img_width1/box_img_height1 == 1){
                    //设置面宽缩小比例
                    var small = box_img_width1/550
                    c.width = 550
                    c.height = 550
                }
                //缩小后的面宽
                var small_face = parseFloat(this.face_width*30/small);
                //获取画布
                var ctx=c.getContext("2d")
                img.onload = function(){
                    ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width1/small)/2,(c.height-img_height1/small)/2,img_width1/small,img_height1/small);
                }
            },
            //无框绷架
            show7(){
                $("#img").attr("width",0)
                // var img=document.getElementById("img");
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bili = Number((img.naturalWidth / img.naturalHeight).toFixed(4))
                //获取填写数据
                //1为指定宽度2为指定高度
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                var img_width1 = $("#img_width").val()*30
                var img_height1 = $("#img_height").val()*30
                //创建画布
                var c=document.getElementById("myCanvas");
                if(box_img_width1/box_img_height1 > 1){
                    //设置面宽缩小比例
                    var small = box_img_width1/550
                    c.width = 550
                    c.height = box_img_height1/small
                }else if(box_img_width1/box_img_height1 < 1){
                    //设置面宽缩小比例
                    var small = box_img_height1/550
                    c.height = 550
                    c.width = box_img_width1/small
                }else if(box_img_width1/box_img_height1 == 1){
                    //设置面宽缩小比例
                    var small = box_img_width1/550
                    c.width = 550
                    c.height = 550
                }
                //缩小后的面宽
                var small_face = parseFloat(this.face_width*30/small);
                //获取画布
                var ctx=c.getContext("2d")
                ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                ctx.shadowOffsetY = 5; // 阴影X轴偏移
                ctx.shadowBlur = 5; // 模糊尺寸
                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                img.onload = function(){
                    ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width1/small)/2,(c.height-img_height1/small)/2,c.width-10,c.height-10);
                }
            },
            //盒子装裱切换底板卡纸颜色
            color_tag(e){
                var color_num = Number($(e.target).attr('color_id'))
                switch(color_num)
                {
                    case 1: var color_val = '#fff'; $('#color_tag_par').attr('data_id','1'); break;//白色
                    case 2: var color_val = '#efe9e0'; $('#color_tag_par').attr('data_id','2'); break;//米白色
                    case 3: var color_val = '#c9c3a3'; $('#color_tag_par').attr('data_id','3'); break;//米绿色
                    case 4: var color_val = '#bbc9cd'; $('#color_tag_par').attr('data_id','4'); break;//菘蓝绿松石色
                    case 5: var color_val = '#bcb4b1'; $('#color_tag_par').attr('data_id','5'); break;//米灰色
                    case 6: var color_val = '#c1b0b0'; $('#color_tag_par').attr('data_id','6'); break;//浅褐色
                    case 7: var color_val = '#bdb18c'; $('#color_tag_par').attr('data_id','7'); break;//芦荟绿
                    case 8: var color_val = '#6298b7'; $('#color_tag_par').attr('data_id','8'); break;//淡蓝色
                    case 9: var color_val = '#807f75'; $('#color_tag_par').attr('data_id','9'); break;//灰色
                    case 10: var color_val = '#887953'; $('#color_tag_par').attr('data_id','10'); break;//橄榄黄色
                    case 11: var color_val = '#6b6d3f'; $('#color_tag_par').attr('data_id','11'); break;//橄榄绿色
                    case 12: var color_val = '#684d4c'; $('#color_tag_par').attr('data_id','12'); break;//桃花心木褐
                    case 13: var color_val = '#7b3c43'; $('#color_tag_par').attr('data_id','13'); break;//枣红色
                    case 14: var color_val = '#614837'; $('#color_tag_par').attr('data_id','14'); break;//褐灰色
                    case 15: var color_val = '#2a2a2a'; $('#color_tag_par').attr('data_id','15'); break;//黑色
                }
                $("#img").attr("width",0)
                //获取填写数据
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                var img_width1 = $("#img_width").val()*30
                var img_height1 = $("#img_height").val()*30
                // var img=document.getElementById("img")
                // var bgImg=document.getElementById("bgImg")
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                var vm = this
                img.onload = function(){
                    //画框图
                    // var bgImg=document.getElementById("bgImg");
                    //图片比例
                    if(vm.is_cut == 1){
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                    }else{
                        var bili = window.arr['bili']
                    }
                    //创建画布
                    var c=document.getElementById("myCanvas")
                    //获取画布
                    var ctx=c.getContext("2d")
                    //放小比例
                    if(box_img_width1/box_img_height1 > 1){
                        //设置缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = box_img_height1/small
                    }else if(box_img_width1/box_img_height1 < 1){
                        //设置面宽缩小比例
                        var small = box_img_height1/550
                        c.height = 550
                        c.width = box_img_width1/small
                    }else if(box_img_width1/box_img_height1 == 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = 550
                    }
                    ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 5; // 阴影X轴偏移
                    ctx.shadowBlur = 5; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    // //填充盒子底板卡纸颜色
                    ctx.fillStyle="#ff6700";
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    //缩小后的面宽
                    var small_face = parseFloat(vm.face_width*30/small);
                    var img_width2 = img_width1/small
                    var img_height2 = img_width2/bili
                    // //填充盒子底板卡纸颜色
                    ctx.fillStyle=color_val;
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    //获取是否悬浮,1为不悬浮,2为悬浮
                    var is_pause = $('#is_pause').attr('data_id')
                    if(is_pause == 2){
                        ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                    }else{
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 0; // 阴影X轴偏移
                        ctx.shadowBlur = 0; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                    }
                    //画芯偏移方向
                    var directions = $("#core_shift_directions").val()
                    //画芯偏移数值
                    var num_values = $("#core_shift_inputs").val()*30
                    var direction_val_xs = 0
                    var direction_val_ys = 0
                    //纵坐标偏移
                    if(directions == 'top' || directions == 'bottom'){
                        //如果偏移为上则为负值,为下则为正值
                        if(directions == 'top'){
                            direction_val_ys = 0 - num_values
                        }else if(directions == 'bottom'){
                            direction_val_ys = num_values
                        }
                    }
                    //横坐标偏移
                    if(directions == 'left' || directions == 'right'){
                        //如果偏移为左则为负值,为右则为正值
                        if(directions == 'left'){
                            direction_val_xs = 0 - num_values
                        }else if(directions == 'right'){
                            direction_val_xs = num_values
                        }
                    }
                    //填充画芯留边颜色
                    ctx.fillStyle='#fff';
                    ctx.fillRect((c.width-img_width2)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+vm.drawing_core_val*30/small*2-10,img_height2+vm.drawing_core_val*30/small*2-10);
                    ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 0; // 阴影X轴偏移
                    ctx.shadowBlur = 0; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                    var direction_val_x = 0
                    var direction_val_y = 0
                    if(vm.drawing_core_val != 0){
                        //画芯偏移方向
                        var direction = $("#core_shift_direction").val()
                        //画芯偏移数值
                        var num_value = $("#core_shift_input").val()*30
                        //纵坐标偏移
                        if(direction == 'top' || direction == 'bottom'){
                            //如果偏移为上则为负值,为下则为正值
                            if(direction == 'top'){
                                direction_val_y = 0 - num_value
                            }else if(direction == 'bottom'){
                                direction_val_y = num_value
                            }
                        }
                        //横坐标偏移
                        if(direction == 'left' || direction == 'right'){
                            //如果偏移为左则为负值,为右则为正值
                            if(direction == 'left'){
                                direction_val_x = 0 - num_value
                            }else if(direction == 'right'){
                                direction_val_x = num_value
                            }
                        }
                    }
                    if(vm.is_cut ==1){
                        //绘制图片
                        ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width2)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height2)/2+direction_val_y/small+direction_val_ys/small,img_width2-10,img_height2-10);
                        //打开边框素材
                        // $("#bgImg").attr("src",this.img_url);
                        bgImg.src = vm.img_url
                        bgImg.onload = function(){
                            ctx.shadowOffsetX = 2; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 2; // 阴影X轴偏移
                            ctx.shadowBlur = 5; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                    }else{
                        //获取被裁切的图片数据
                        var being_cut = $('#img').cropper('getImageData', )
                        //获取裁切框的数据
                        var cut_box = $('#img').cropper('getData', true)
                        //绘制图片
                        ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height1/small)/2+direction_val_y/small+direction_val_ys/small,img_width1/small-10,img_height1/small-10)
                        // $("#bgImg").attr("src",this.img_url);
                        bgImg.src = vm.img_url
                        bgImg.onload = function(){
                            ctx.shadowOffsetX = 2; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 2; // 阴影X轴偏移
                            ctx.shadowBlur = 5; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                    }
                }
            },
            //卡纸颜色
            color_tag2(e){
                var color_num = Number($(e.target).attr('color_id'))
                switch(color_num)
                {
                    case 1: var color_val = '#fff'; $('#color_tag_par2').attr('data_id','1'); break;//白色
                    case 2: var color_val = '#efe9e0'; $('#color_tag_par2').attr('data_id','2'); break;//米白色
                    case 3: var color_val = '#c9c3a3'; $('#color_tag_par2').attr('data_id','3'); break;//米绿色
                    case 4: var color_val = '#bbc9cd'; $('#color_tag_par2').attr('data_id','4'); break;//菘蓝绿松石色
                    case 5: var color_val = '#bcb4b1'; $('#color_tag_par2').attr('data_id','5'); break;//米灰色
                    case 6: var color_val = '#c1b0b0'; $('#color_tag_par2').attr('data_id','6'); break;//浅褐色
                    case 7: var color_val = '#bdb18c'; $('#color_tag_par2').attr('data_id','7'); break;//芦荟绿
                    case 8: var color_val = '#6298b7'; $('#color_tag_par2').attr('data_id','8'); break;//淡蓝色
                    case 9: var color_val = '#807f75'; $('#color_tag_par2').attr('data_id','9'); break;//灰色
                    case 10: var color_val = '#887953'; $('#color_tag_par2').attr('data_id','10'); break;//橄榄黄色
                    case 11: var color_val = '#6b6d3f'; $('#color_tag_par2').attr('data_id','11'); break;//橄榄绿色
                    case 12: var color_val = '#684d4c'; $('#color_tag_par2').attr('data_id','12'); break;//桃花心木褐
                    case 13: var color_val = '#7b3c43'; $('#color_tag_par2').attr('data_id','13'); break;//枣红色
                    case 14: var color_val = '#614837'; $('#color_tag_par2').attr('data_id','14'); break;//褐灰色
                    case 15: var color_val = '#2a2a2a'; $('#color_tag_par2').attr('data_id','15'); break;//黑色
                }
                $("#img").attr("width",0)
                //获取填写数据
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                var img_width1 = $("#img_width").val()*30
                var img_height1 = $("#img_height").val()*30
                //画芯留边
                var drawing_core_val = $("#drawing_core_input").val()*30
                // var img=document.getElementById("img")
                // var bgImg=document.getElementById("bgImg")
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                var vm = this
                img.onload = function(){
                    //画框图
                    // var bgImg=document.getElementById("bgImg");
                    //图片比例
                    if(vm.is_cut == 1){
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                    }else{
                        var bili = window.arr['bili']
                    }
                    //创建画布
                    var c=document.getElementById("myCanvas")
                    //获取画布
                    var ctx=c.getContext("2d")
                    //放小比例
                    if(box_img_width1/box_img_height1 > 1){
                        //设置缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = box_img_height1/small
                    }else if(box_img_width1/box_img_height1 < 1){
                        //设置面宽缩小比例
                        var small = box_img_height1/550
                        c.height = 550
                        c.width = box_img_width1/small
                    }else if(box_img_width1/box_img_height1 == 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = 550
                    }
                    ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 5; // 阴影X轴偏移
                    ctx.shadowBlur = 5; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    // //填充盒子底板卡纸颜色
                    ctx.fillStyle="#ff6700";
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    var direction_val_x = 0
                    var direction_val_y = 0
                    if(vm.drawing_core_val != 0){
                        //画芯偏移方向
                        var direction = $("#core_shift_direction").val()
                        //画芯偏移数值
                        var num_value = $("#core_shift_input").val()*30
                        //纵坐标偏移
                        if(direction == 'top' || direction == 'bottom'){
                            //如果偏移为上则为负值,为下则为正值
                            if(direction == 'top'){
                                direction_val_y = 0 - num_value
                            }else if(direction == 'bottom'){
                                direction_val_y = num_value
                            }
                        }
                        //横坐标偏移
                        if(direction == 'left' || direction == 'right'){
                            //如果偏移为左则为负值,为右则为正值
                            if(direction == 'left'){
                                direction_val_x = 0 - num_value
                            }else if(direction == 'right'){
                                direction_val_x = num_value
                            }
                        }
                    }
                    //画芯偏移方向
                    var directions = $("#core_shift_directions").val()
                    //画芯偏移数值
                    var num_values = $("#core_shift_inputs").val()*30
                    var direction_val_xs = 0
                    var direction_val_ys = 0
                    //纵坐标偏移
                    if(directions == 'top' || directions == 'bottom'){
                        //如果偏移为上则为负值,为下则为正值
                        if(directions == 'top'){
                            direction_val_ys = 0 - num_values
                        }else if(directions == 'bottom'){
                            direction_val_ys = num_values
                        }
                    }
                    //横坐标偏移
                    if(directions == 'left' || directions == 'right'){
                        //如果偏移为左则为负值,为右则为正值
                        if(directions == 'left'){
                            direction_val_xs = 0 - num_values
                        }else if(directions == 'right'){
                            direction_val_xs = num_values
                        }
                    }
                    //缩小后的面宽
                    var small_face = parseFloat(vm.face_width*30/small);
                    var img_width2 = img_width1/small
                    var img_height2 = img_width2/bili
                    //填充盒子底板卡纸颜色
                    ctx.fillStyle=color_val;
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 0; // 阴影X轴偏移
                    ctx.shadowBlur = 0; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    //填充画芯留边颜色
                    ctx.fillStyle='#fff';
                    ctx.fillRect((c.width-img_width2)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+vm.drawing_core_val*30/small*2-10,img_height2+vm.drawing_core_val*30/small*2-10);
                    if(vm.is_cut ==1){
                        //绘制图片
                        ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width2)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height2)/2+direction_val_y/small+direction_val_ys/small,img_width2-10,img_height2-10);
                        //绘制模拟阴影条(上)
                        // var grd=ctx.createLinearGradient((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+5+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(200,200,200,0.3)");
                        // ctx.fillStyle=grd;
                        ctx.fillStyle='#aaaaaa';
                        ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1,(img_width1+vm.drawing_core_val*30*2)/small+2-10,2+1);
                        //绘制模拟阴影条(左)
                        // var grd=ctx.createLinearGradient((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+5+direction_val_xs/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(200,200,200,0.3)");
                        // ctx.fillStyle=grd;
                        ctx.fillStyle='#aaaaaa';
                        ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1,2+1,img_height1/small+vm.drawing_core_val*30/small*2+2-10);
                        //绘制模拟阴影条(右)
                        // var grd=ctx.createLinearGradient((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small,(c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_ys/small,(c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small-3+direction_val_xs/small,(c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(200,200,200,0.3)");
                        // ctx.fillStyle=grd;
                        // ctx.fillStyle='#ebebeb';
                        // ctx.fillRect((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small-2,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small+2,2,(img_height1+vm.drawing_core_val*30*2)/small-2);
                        //绘制模拟阴影条(下)
                        // var grd=ctx.createLinearGradient((c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_xs/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_xs/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small-3+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(200,200,200,0.3)");
                        // ctx.fillStyle=grd;
                        // ctx.fillStyle='#ebebeb';
                        // ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small+2,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-2,(img_width1+vm.drawing_core_val*30*2)/small-2,2);
                        //绘制不规则四边形(下)
                        //开始一个新的绘制路径
                        ctx.beginPath();
                        //设置线条颜色
                        ctx.strokeStyle ="#ebebeb";
                        ctx.lineWidth=0.1;
                        //设置路径起点坐标
                        ctx.moveTo((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                        //绘制直线线段到坐标点
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-2-10);
                        ctx.lineTo((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small+2,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-2-10);
                        ctx.fillStyle='#ebebeb';
                        ctx.fill();
                        //先关闭绘制路径。
                        ctx.closePath();
                        //最后，按照绘制路径画出直线
                        ctx.stroke();
                        //绘制不规则四边形(右)
                        //开始一个新的绘制路径
                        ctx.beginPath();
                        //设置线条颜色
                        ctx.strokeStyle ="#ebebeb";
                        ctx.lineWidth=0.1;
                        //设置路径起点坐标
                        ctx.moveTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1);
                        //绘制直线线段到坐标点(20, 100)
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small-1-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-10);
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small-1-10,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small+2);
                        ctx.fillStyle='#ebebeb';
                        ctx.fill();
                        //先关闭绘制路径。
                        ctx.closePath();
                        //最后，按照绘制路径画出直线
                        ctx.stroke();
                        // ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width2)/2,(c.height-img_height2)/2,img_width2,img_height2);
                        // $("#bgImg").attr("src",this.img_url);
                        bgImg.src = vm.img_url
                        bgImg.onload = function(){
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                    }else{
                        //获取裁切框的数据
                        var cut_box = $('#img').cropper('getData', true)
                        //绘制图片
                        ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height1/small)/2+direction_val_y/small+direction_val_ys/small,img_width1/small-10,img_height1/small-10)
                        //绘制模拟阴影条(上)
                        // var grd=ctx.createLinearGradient((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+5+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(200,200,200,0.3)");
                        // ctx.fillStyle=grd;
                        ctx.fillStyle='#aaaaaa';
                        ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1,(img_width1+vm.drawing_core_val*30*2)/small+2-10,3);
                        //绘制模拟阴影条(左)
                        // var grd=ctx.createLinearGradient((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+5+direction_val_xs/small,(c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(200,200,200,0.3)");
                        // ctx.fillStyle=grd;
                        ctx.fillStyle='#aaaaaa';
                        ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1,3,img_height1/small+vm.drawing_core_val*30/small*2+2-10);
                        //绘制模拟阴影条(右)
                        // var grd=ctx.createLinearGradient((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small,(c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_ys/small,(c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small-3+direction_val_xs/small,(c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(200,200,200,0.3)");
                        // ctx.fillStyle=grd;
                        // ctx.fillStyle='#ebebeb';
                        // ctx.fillRect((c.width-img_width1/small)/2+img_width1/small-2+vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small,2,(img_height1+vm.drawing_core_val*30*2)/small);
                        //绘制模拟阴影条(下)
                        // var grd=ctx.createLinearGradient((c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_xs/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_xs/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small-3+direction_val_ys/small);
                        // grd.addColorStop(0,"rgba(150,150,150,0.6)");
                        // grd.addColorStop(1,"rgba(200,200,200,0.3)");
                        // ctx.fillStyle=grd;
                        // ctx.fillStyle='#ebebeb';
                        // ctx.fillRect((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small-2+direction_val_ys/small,(img_width1+vm.drawing_core_val*30*2)/small,2);
                        //绘制不规则四边形(下)
                        //开始一个新的绘制路径
                        ctx.beginPath();
                        //设置线条颜色
                        ctx.strokeStyle ="#ebebeb";
                        ctx.lineWidth=0.1;
                        //设置路径起点坐标
                        ctx.moveTo((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small-1,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                        //绘制直线线段到坐标点
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-2-10);
                        ctx.lineTo((c.width-img_width1/small)/2-vm.drawing_core_val*30/small+direction_val_xs/small+2,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-2-10);
                        ctx.fillStyle='#ebebeb';
                        ctx.fill();
                        //先关闭绘制路径。
                        ctx.closePath();
                        //最后，按照绘制路径画出直线
                        ctx.stroke();
                        //绘制不规则四边形(右)
                        //开始一个新的绘制路径
                        ctx.beginPath();
                        //设置线条颜色
                        ctx.strokeStyle ="#ebebeb";
                        ctx.lineWidth=0.1;
                        //设置路径起点坐标
                        ctx.moveTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small-1);
                        //绘制直线线段到坐标点(20, 100)
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small+2-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small+1-10);
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small-1-10,(c.height-img_height1/small)/2+vm.drawing_core_val*30/small+img_height1/small+direction_val_ys/small-10);
                        ctx.lineTo((c.width-img_width1/small)/2+img_width1/small+vm.drawing_core_val*30/small+direction_val_xs/small-1-10,(c.height-img_height1/small)/2-vm.drawing_core_val*30/small+direction_val_ys/small+2);
                        ctx.fillStyle='#ebebeb';
                        ctx.fill();
                        //先关闭绘制路径。
                        ctx.closePath();
                        //最后，按照绘制路径画出直线
                        ctx.stroke();
                        // $("#bgImg").attr("src",this.img_url);
                        bgImg.src = vm.img_url
                        bgImg.onload = function(){
                            ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                        }
                    }
                }
            },
            //盒子装裱画面悬浮
            pic_pause(e){
                var data_id = Number($(e.target).attr('data_id'))
                var color_num = Number($("#color_tag_par").attr('data_id'))
                switch(color_num)
                {
                    case 1: var color_val = '#fff'; break;//白色
                    case 2: var color_val = '#efe9e0'; break;//米白色
                    case 3: var color_val = '#c9c3a3'; break;//米绿色
                    case 4: var color_val = '#bbc9cd'; break;//菘蓝绿松石色
                    case 5: var color_val = '#bcb4b1'; break;//米灰色
                    case 6: var color_val = '#c1b0b0'; break;//浅褐色
                    case 7: var color_val = '#bdb18c'; break;//芦荟绿
                    case 8: var color_val = '#6298b7'; break;//淡蓝色
                    case 9: var color_val = '#807f75'; break;//灰色
                    case 10: var color_val = '#887953'; break;//橄榄黄色
                    case 11: var color_val = '#6b6d3f'; break;//橄榄绿色
                    case 12: var color_val = '#684d4c'; break;//桃花心木褐
                    case 13: var color_val = '#7b3c43'; break;//枣红色
                    case 14: var color_val = '#614837'; break;//褐灰色
                    case 15: var color_val = '#2a2a2a'; break;//黑色
                }
                $("#img").attr("width",0)
                //获取填写数据
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                var img_width1 = $("#img_width").val()*30
                var img_height1 = $("#img_height").val()*30
                // var img=document.getElementById("img")
                // var bgImg=document.getElementById("bgImg")
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.image_url
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                var vm = this
                img.onload = function(){
                    //图片比例
                    if(vm.is_cut == 1){
                        var bili = (img.naturalWidth / img.naturalHeight).toFixed(4)
                    }else{
                        var bili = window.arr['bili']
                    }
                    //创建画布
                    var c=document.getElementById("myCanvas")
                    //获取画布
                    var ctx=c.getContext("2d")
                    if(box_img_width1/box_img_height1 > 1){
                        //设置缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = box_img_height1/small
                    }else if(box_img_width1/box_img_height1 < 1){
                        //设置面宽缩小比例
                        var small = box_img_height1/550
                        c.height = 550
                        c.width = box_img_width1/small
                    }else if(box_img_width1/box_img_height1 == 1){
                        //设置面宽缩小比例
                        var small = box_img_width1/550
                        c.width = 550
                        c.height = 550
                    }
                    ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                    ctx.shadowOffsetY = 5; // 阴影X轴偏移
                    ctx.shadowBlur = 5; // 模糊尺寸
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
                    // //填充盒子底板卡纸颜色
                    ctx.fillStyle="#fff";
                    ctx.fillRect(0,0,c.width-10,c.height-10);
                    //缩小后的面宽
                    var small_face = parseFloat(vm.face_width*30/small);
                    var img_width2 = img_width1/small
                    var img_height2 = img_width2/bili
                    var direction_val_x = 0
                    var direction_val_y = 0
                    if(this.drawing_core_val != 0){
                        //画芯偏移方向
                        var direction = $("#core_shift_direction").val()
                        //画芯偏移数值
                        var num_value = $("#core_shift_input").val()*30
                        //纵坐标偏移
                        if(direction == 'top' || direction == 'bottom'){
                            //如果偏移为上则为负值,为下则为正值
                            if(direction == 'top'){
                                direction_val_y = 0 - num_value
                            }else if(direction == 'bottom'){
                                direction_val_y = num_value
                            }
                        }
                        //横坐标偏移
                        if(direction == 'left' || direction == 'right'){
                            //如果偏移为左则为负值,为右则为正值
                            if(direction == 'left'){
                                direction_val_x = 0 - num_value
                            }else if(direction == 'right'){
                                direction_val_x = num_value
                            }
                        }
                    }
                    //画芯偏移方向
                    var directions = $("#core_shift_directions").val()
                    //画芯偏移数值
                    var num_values = $("#core_shift_inputs").val()*30
                    var direction_val_xs = 0
                    var direction_val_ys = 0
                    //纵坐标偏移
                    if(directions == 'top' || directions == 'bottom'){
                        //如果偏移为上则为负值,为下则为正值
                        if(directions == 'top'){
                            direction_val_ys = 0 - num_values
                        }else if(directions == 'bottom'){
                            direction_val_ys = num_values
                        }
                    }
                    //横坐标偏移
                    if(directions == 'left' || directions == 'right'){
                        //如果偏移为左则为负值,为右则为正值
                        if(directions == 'left'){
                            direction_val_xs = 0 - num_values
                        }else if(directions == 'right'){
                            direction_val_xs = num_values
                        }
                    }
                    //如果为1则切换为悬浮否则切换为不悬浮
                    if(data_id == 1){
                        $(e.target).attr('data_id',2)
                        $(e.target).css('border','solid 1px')
                        // //填充盒子底板卡纸颜色
                        ctx.fillStyle=color_val;
                        ctx.fillRect(0,0,c.width-10,c.height-10);
                        ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        // //填充画芯留边颜色
                        ctx.fillStyle='#fff';
                        ctx.fillRect((c.width-img_width2)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+vm.drawing_core_val*30/small*2-10,img_height2+vm.drawing_core_val*30/small*2-10);
                        if(vm.is_cut ==1){
                            ctx.shadowOffsetX = 2; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 2; // 阴影X轴偏移
                            ctx.shadowBlur = 5; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            //绘制图片
                            ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width2)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height2)/2+direction_val_y/small+direction_val_ys/small,img_width2-10,img_height2-10);
                            // $("#bgImg").attr("src",this.img_url);
                            bgImg.src = vm.img_url
                            bgImg.onload = function(){
                                ctx.shadowOffsetX = 2; // 阴影Y轴偏移
                                ctx.shadowOffsetY = 2; // 阴影X轴偏移
                                ctx.shadowBlur = 5; // 模糊尺寸
                                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                                ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                            }
                        }else{
                            ctx.shadowOffsetX = 2; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 2; // 阴影X轴偏移
                            ctx.shadowBlur = 5; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            //获取被裁切的图片数据
                            var being_cut = $('#img').cropper('getImageData', )
                            //获取裁切框的数据
                            var cut_box = $('#img').cropper('getData', true)
                            //绘制图片
                            ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height1/small)/2+direction_val_y/small+direction_val_ys/small,img_width1/small-10,img_height1/small-10)
                            // $("#bgImg").attr("src",this.img_url);
                            bgImg.src = vm.img_url
                            bgImg.onload = function(){
                                ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                            }
                        }
                    }else{
                        $(e.target).attr('data_id',1)
                        $(e.target).css('border','')
                        //填充盒子底板卡纸颜色
                        ctx.fillStyle=color_val;
                        ctx.fillRect(0,0,c.width-10,c.height-10);
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 0; // 阴影X轴偏移
                        ctx.shadowBlur = 0; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        // //填充画芯留边颜色
                        ctx.fillStyle='#fff';
                        ctx.fillRect((c.width-img_width2)/2-vm.drawing_core_val*30/small+direction_val_xs/small,(c.height-img_height2)/2-vm.drawing_core_val*30/small+direction_val_ys/small,img_width2+vm.drawing_core_val*30/small*2-10,img_height2+vm.drawing_core_val*30/small*2-10);
                        if(vm.is_cut ==1){
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            //绘制图片
                            ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,(c.width-img_width2)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height2)/2+direction_val_y/small+direction_val_ys/small,img_width2-10,img_height2-10);
                            // $("#bgImg").attr("src",this.img_url);
                            bgImg.src = vm.img_url
                            bgImg.onload = function(){
                                ctx.shadowOffsetX = 2; // 阴影Y轴偏移
                                ctx.shadowOffsetY = 2; // 阴影X轴偏移
                                ctx.shadowBlur = 5; // 模糊尺寸
                                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                                ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                            }
                        }else{
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                            //获取被裁切的图片数据
                            var being_cut = $('#img').cropper('getImageData', )
                            //获取裁切框的数据
                            var cut_box = $('#img').cropper('getData', true)
                            //绘制图片
                            ctx.drawImage(img,cut_box.x,cut_box.y,cut_box.width,cut_box.height,(c.width-img_width1/small)/2+direction_val_x/small+direction_val_xs/small,(c.height-img_height1/small)/2+direction_val_y/small+direction_val_ys/small,img_width1/small-10,img_height1/small-10)
                            // $("#bgImg").attr("src",this.img_url);
                            bgImg.src = vm.img_url
                            bgImg.onload = function(){
                                ctx.shadowOffsetX = 2; // 阴影Y轴偏移
                                ctx.shadowOffsetY = 2; // 阴影X轴偏移
                                ctx.shadowBlur = 5; // 模糊尺寸
                                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                                ctx.drawImage(bgImg,0,0,bgImg.naturalWidth,bgImg.naturalHeight,0,0,c.width-10,c.height-10);
                            }
                        }
                    }
                }
            },
            //装裱好的图片预览
            bgi_decoration(e,bgi_id){
                this.bgi_width = Number($(e.target).attr('data-width'))*30
                this.bgi_height = Number($(e.target).attr('data-height'))*30
                this.bgi_src = $(e.target).attr('src')
                this.bgi_decorations(bgi_id)
            },
            //装裱好的图片预览
            bgi_decorations(bgi_id){
                $("#myCanvas").css('display','none')
                $("#BGI-Canvas").css('display','flex')
                toastr.info("装裱中,请稍候")
                var img = new Image;
                img.crossOrigin = 'Anonymous'
                img.src = this.bgi_src
                var bgImg = new Image;
                bgImg.crossOrigin = 'Anonymous'
                // var bili = Number((img.naturalWidth / img.naturalHeight).toFixed(4))
                //获取填写数据
                //1为指定宽度2为指定高度
                var box_img_width1 = $("#box_img_width").val()*30
                var box_img_height1 = $("#box_img_height").val()*30
                //背景图片宽高
                var bgi_width = this.bgi_width
                var bgi_height = this.bgi_height
                //创建画布
                var c=document.getElementById("BGI-Canvas")
                var canvas=document.getElementById("myCanvas")
                if(bgi_width/bgi_height > 1){
                    //设置面宽缩小比例
                    var small = bgi_width/550
                    c.width = 550
                    c.height = bgi_height/small
                }else if(bgi_width/bgi_height < 1){
                    //设置面宽缩小比例
                    var small = bgi_height/550
                    c.height = 550
                    c.width = bgi_width/small
                }else if(bgi_width/bgi_height == 1){
                    //设置面宽缩小比例
                    var small = bgi_width/550
                    c.width = 550
                    c.height = 550
                }
                var data_id = $(e.target).attr('data-id')
                //获取画布
                var ctx=c.getContext("2d")
                img.onload = function(){
                    ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,0,0,c.width,c.height);
                    if(bgi_id == 1){
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 2; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,c.height-box_img_height1/small-80,box_img_width1/small,box_img_height1/small);
                    }else if(bgi_id == 2){
                        ctx.shadowOffsetX = -5; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        var img2 = new Image;
                        img2.crossOrigin = 'Anonymous'
                        img2.src = 'http://qiniu.zaoanart.com/BGI-2-1.png'
                        img2.onload = function(){
                            ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-40-box_img_width1/small)/2,(c.height-100-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.drawImage(img2,0,0,img2.naturalWidth,img2.naturalHeight,0,0,c.width,c.height);
                        }
                    }else if(bgi_id == 3){
                        ctx.shadowOffsetX = -5; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        if(box_img_height1/small>c.height-220){
                            ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,c.height-box_img_height1/small-200,box_img_width1/small,box_img_height1/small);
                        }else{
                            ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,(c.height-200-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                        }
                    }else if(bgi_id == 4){
                        ctx.shadowOffsetX = -5; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 2; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small-100)/2,(c.height-245-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                    }else if(bgi_id == 5){
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        var img5 = new Image;
                        img5.crossOrigin = 'Anonymous'
                        img5.src = 'http://qiniu.zaoanart.com/BGI-5-1.png'
                        img5.onload = function(){
                            if(box_img_height1/small>c.height-120){
                                console.log(1,box_img_height1/small,c.height-120)
                                ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,c.height-250-box_img_height1/small,box_img_width1/small,box_img_height1/small);
                            }else{
                                console.log(2,box_img_height1/small,c.height-120)
                                ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,(c.height-250-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                            }
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.drawImage(img5,0,0,img5.naturalWidth,img5.naturalHeight,0,0,c.width,c.height);
                        }
                    }else if(bgi_id == 6){
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        var img6 = new Image;
                        img6.crossOrigin = 'Anonymous'
                        img6.src = 'http://qiniu.zaoanart.com/BGI-6-1.png'
                        img6.onload = function(){
                            ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,(c.height-90-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.drawImage(img6,0,0,img6.naturalWidth,img6.naturalHeight,0,0,c.width,c.height);
                        }
                    }else if(bgi_id == 7){
                        ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        var img7 = new Image;
                        img7.crossOrigin = 'Anonymous'
                        img7.src = 'http://qiniu.zaoanart.com/BGI-7-1.png'
                        img7.onload = function(){
                            ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,(c.height-90-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.drawImage(img7,0,0,img7.naturalWidth,img7.naturalHeight,0,0,c.width,c.height);
                        }
                    }else if(bgi_id == 8){
                        ctx.shadowOffsetX = -2; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        var img8 = new Image;
                        img8.crossOrigin = 'Anonymous'
                        img8.src = 'http://qiniu.zaoanart.com/BGI-8-1.png'
                        img8.onload = function(){
                            ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,(c.height-110-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.drawImage(img8,0,0,img8.naturalWidth,img8.naturalHeight,0,0,c.width,c.height);
                        }
                    }else if(bgi_id == 9){
                        ctx.shadowOffsetX = -2; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        var img9 = new Image;
                        img9.crossOrigin = 'Anonymous'
                        img9.src = 'http://qiniu.zaoanart.com/BGI-9-1.png'
                        img9.onload = function(){
                            ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,(c.height-70-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.drawImage(img9,0,0,img9.naturalWidth,img9.naturalHeight,0,0,c.width,c.height);
                        }
                    }else if(bgi_id == 10){
                        ctx.shadowOffsetX = 5; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        var img10 = new Image;
                        img10.crossOrigin = 'Anonymous'
                        img10.src = 'http://qiniu.zaoanart.com/BGI-10-1.png'
                        img10.onload = function(){
                            ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,(c.height-90-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.drawImage(img10,0,0,img10.naturalWidth,img10.naturalHeight,0,0,c.width,c.height);
                        }
                    }else if(bgi_id == 11){
                        ctx.shadowOffsetX = -5; // 阴影Y轴偏移
                        ctx.shadowOffsetY = 5; // 阴影X轴偏移
                        ctx.shadowBlur = 5; // 模糊尺寸
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
                        var img11 = new Image;
                        img11.crossOrigin = 'Anonymous'
                        img11.src = 'http://qiniu.zaoanart.com/BGI-11-1.png'
                        img11.onload = function(){
                            ctx.drawImage(canvas,0,0,canvas.width,canvas.height,(c.width-box_img_width1/small)/2,(c.height-90-box_img_height1/small)/2,box_img_width1/small,box_img_height1/small);
                            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
                            ctx.shadowOffsetY = 0; // 阴影X轴偏移
                            ctx.shadowBlur = 0; // 模糊尺寸
                            ctx.drawImage(img11,0,0,img11.naturalWidth,img11.naturalHeight,0,0,c.width,c.height);
                        }
                    }
                }
            },
            //显示prompt_text
            show_prompt(){
                $("#prompt_text").css('display','inline-block')
            },
            //隐藏prompt_text
            hid_prompt(){
                $("#prompt_text").css('display','none')
            },
            //显示prompt_text2
            show_prompt2(){
                $("#prompt2_text").css('display','inline-block')
            },
            //隐藏prompt_text2
            hid_prompt2(){
                $("#prompt2_text").css('display','none')
            },
            //显示prompt_text3
            show_prompt3(){
                $("#prompt3_text").css('display','inline-block')
            },
            //隐藏prompt_text3
            hid_prompt3(){
                $("#prompt3_text").css('display','none')
            },
            //画框盒子滑动(左)
            last_scroll(){
                // document.getElementById('border_img').scrollLeft = Number(document.getElementById('border_img').scrollLeft)-70
                $('#border_img').animate({scrollLeft:Number(document.getElementById('border_img').scrollLeft)-200})
            },
            //画框盒子滑动(右)
            next_scroll(){
                $('#border_img').animate({scrollLeft:Number(document.getElementById('border_img').scrollLeft)+200})
            },
            //确认最后信息
            comfrim_end_info(){
                var img_width = $('#img_width').val()
                var img_height = $('#img_height').val()
                var box_img_width = $('#box_img_width').val()
                var box_img_height = $('#box_img_height').val()
                //留边偏移数值
                var num_value = $("#core_shift_input").val()
                //画芯偏移数值
                var num_values = $("#core_shift_inputs").val()
                //画芯留边数值
                this.drawing_core_val
                //画芯名
                var material_name = this.material_val.name
                //画芯偏移方向
                var directions = ''
                switch($("#core_shift_directions").val()){
                    case 'top' : directions = '上' ;break;
                    case 'bottom' : directions = '下' ;break;
                    case 'left' : directions = '左' ;break;
                    case 'right' : directions = '右' ;break;
                }
                //留边偏移方向
                var direction = ''
                switch($("#core_shift_direction").val()){
                    case 'top' : direction = '上' ;break;
                    case 'bottom' : direction = '下' ;break;
                    case 'left' : direction = '左' ;break;
                    case 'right' : direction = '右' ;break;
                }
                //装裱方式,1满裱,2卡纸,3盒子,4套框绷架,5单立体,6纯画芯,7无框绷架
                var status_ = ''
                switch(this.status){
                    case 1 : status_ = '满裱'; break;
                    case 2 : status_ = '卡纸'; break;
                    case 3 : status_ = '盒子'; break;
                    case 4 : status_ = '套框绷架'; break;
                    case 5 : status_ = '单立体'; break;
                    case 6 : status_ = '纯画芯'; break;
                    case 7 : status_ = '无框绷架'; break;
                }
                //卡纸颜色
                var color_val = ''
                var color_num = ''
                if(this.status == 2){
                    //获取盒子卡纸颜色
                    color_num = Number($("#color_tag_par2").attr('data_id'))
                    switch(color_num)
                    {
                        case 1: color_val = '#fff'; break;//白色
                        case 2: color_val = '#efe9e0'; break;//米白色
                        case 3: color_val = '#c9c3a3'; break;//米绿色
                        case 4: color_val = '#bbc9cd'; break;//菘蓝绿松石色
                        case 5: color_val = '#bcb4b1'; break;//米灰色
                        case 6: color_val = '#c1b0b0'; break;//浅褐色
                        case 7: color_val = '#bdb18c'; break;//芦荟绿
                        case 8: color_val = '#6298b7'; break;//淡蓝色
                        case 9: color_val = '#807f75'; break;//灰色
                        case 10: color_val = '#887953'; break;//橄榄黄色
                        case 11: color_val = '#6b6d3f'; break;//橄榄绿色
                        case 12: color_val = '#684d4c'; break;//桃花心木褐
                        case 13: color_val = '#7b3c43'; break;//枣红色
                        case 14: color_val = '#614837'; break;//褐灰色
                        case 15: color_val = '#2a2a2a'; break;//黑色
                    }
                }
                if(this.status == 3){
                    color_num = Number($("#color_tag_par").attr('data_id'))
                    switch(color_num)
                    {
                        case 1: color_val = '#fff'; break;//白色
                        case 2: color_val = '#efe9e0'; break;//米白色
                        case 3: color_val = '#c9c3a3'; break;//米绿色
                        case 4: color_val = '#bbc9cd'; break;//菘蓝绿松石色
                        case 5: color_val = '#bcb4b1'; break;//米灰色
                        case 6: color_val = '#c1b0b0'; break;//浅褐色
                        case 7: color_val = '#bdb18c'; break;//芦荟绿
                        case 8: color_val = '#6298b7'; break;//淡蓝色
                        case 9: color_val = '#807f75'; break;//灰色
                        case 10: color_val = '#887953'; break;//橄榄黄色
                        case 11: color_val = '#6b6d3f'; break;//橄榄绿色
                        case 12: color_val = '#684d4c'; break;//桃花心木褐
                        case 13: color_val = '#7b3c43'; break;//枣红色
                        case 14: color_val = '#614837'; break;//褐灰色
                        case 15: color_val = '#2a2a2a'; break;//黑色
                    }
                }else{
                    color_val = '#fff';
                }
                //创建画布
                var canvas = document.getElementById("myCanvas")
                var dataURL = canvas.toDataURL("image/png");
                this.end_info = {
                    'img_width' : img_width,//图片宽
                    'img_height' : img_height,//图片高
                    'box_img_width' : box_img_width,//框宽
                    'box_img_height' : box_img_height,//框高
                    'decoration_status' : status_,//装裱方式
                    'material_name' : material_name,//画芯名
                    'color_val' : color_val,//卡纸颜色
                    'border_name' : this.border_end_info.border_name2,//框名
                    'preview_img' : dataURL,//预览图片路径
                    // 'preview_img' : this.border_end_info.preview_imgs,//预览图片路径
                    'drawing_core_val' : this.drawing_core_val,//画芯留边值
                    'core_offset' : num_values,//画芯偏移值
                    'core_offset_direction' : directions,//画芯偏移方向
                    'core_shift' : num_value,//留边偏移值
                    'core_shift_direction' : direction,//留边偏移方向
                    'core_price' : this.core_price,//画芯价格
                    'decoration_price' : this.total_decoration_price_show,//装裱价格
                    'total_price' : this.total_price,//总价
                }
                $('#colorval').css('background-color',color_val)
                // console.log('图片宽:'+img_width,'图片高:'+img_height,'框宽'+box_img_width,'框高'+box_img_height,'装裱方式:'+status_,'画芯名:'+material_name,'卡纸颜色:'+color_val,'画框名:'+this.border_end_info.border_name2,'画框图片路径:'+this.border_end_info.preview_imgs,'画芯留边数值'+this.drawing_core_val,'画芯偏移数值:'+num_values,'画芯偏移方向:'+directions,'留边偏移数值:'+num_value,'留边偏移方向:'+direction,'画芯价格:'+this.core_price,'装裱价格:'+this.total_decoration_price_show,'总价:'+this.total_price)
            },
            //添加购物车
            to_shopcar(){
                if(!this.getCookie('tel')){
                    alert('请登录')
                }else{
                    this.end_info.user_tel = this.getCookie('tel')
                    this.end_info.imgid = this.imgid
                    this.$http.post(this.GLOBAL.baseurl + 'v1/goods/to_shopcar',{end_info: this.end_info},{emulateJSON: true}).then((response)=>{
                        if(response.data == 1){
                            alert('添加成功,请到购物车下单')
                            location.reload()
                        }else if(response.data == 0){
                            alert('添加失败')
                        }else if(response.data == 99){
                            alert('信息不完整')
                        }else if(response.data == 100){
                            alert('装框预览图生成失败')
                        }
                    })
                }
            }

            ////装裱结束
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
    /*ul,li{*/
    /*float:none;*/
    /*margin-left:0px;*/
    /*}*/
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
        padding-right: 5px;
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
    ul li{
        list-style:none
    }
    .crop_point{
        width:7px;
        height:7px;
        display:inline-block
    }
    #top_left{
        left: -1%;
        top: -1%;
        position: absolute;
        background-color: #fff;
        cursor: nw-resize;
        border: 1px solid black;
    }
    #top{
        left: 50%;
        top: -1%;
        position: absolute;
        cursor: n-resize;
        background-color: #fff;
        border: 1px solid black;
    }
    #top_right{
        right: -1%;
        top: -1%;
        position: absolute;
        background-color: #fff;
        border: 1px solid black;
        cursor: sw-resize;
    }
    #left_middle{
        left: -1%;
        top: 50%;
        position: absolute;
        background-color: #fff;
        border: 1px solid black;
        cursor: e-resize;
    }
    #right_middle{
        right: -1%;
        top: 50%;
        position: absolute;
        background-color: #fff;
        border: 1px solid black;
        cursor: e-resize;
    }
    #left_bottom{
        left: -1%;
        bottom: -1%;
        position: absolute;
        background-color: #fff;
        border: 1px solid black;
        cursor: sw-resize;
    }
    .select_cut{
        background-color: #fff;
        color:black;
    }
    .selected_cut{
        background-color: #000;
        color:#fff;
    }
    #bottom{
        left: 50%;
        bottom: -1%;
        position: absolute;
        background-color: #fff;
        border: 1px solid black;
        cursor: no-resize;
    }
    #right_bottom{
        right: -1%;
        bottom: -1%;
        position: absolute;
        background-color: #fff;
        border: 1px solid black;
        cursor: nw-resize;
    }
    #box{
        box-sizing: border-box;
        border:1px solid transparent;
    }
    .btn1{
        background: #2d2d2d26;
        border: 1px solid #2d2d2d26;
        font-size: 15px;
    }
    .btn1:hover{
        background-color: #b7b7b700;
    }
    .clearfix:after{
        display: block;
        content:'';
        clear: both;
        height:0;
    }
    .cut_text{
        display: inline-block;
        width: 40px;
        height: 25px;
        border: 2px solid #000;
        text-align: center;
        font-weight: bold;
    }
    .decoration{
        padding:0px 10px;
        /*border-right:1px solid #ccc;*/
        line-height:40px;
        text-align:center;
        height:40px;
        cursor: pointer;
    }
    .decoration:hover{
        background-color:#ccc;
    }
    #modal_info span{
        display:block
    }
    #modal_info{
        text-align: left;
        margin-left: 50px;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar{
        width: 5px;
        height: 5px;
        background-color: #F5F5F5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 50px;
        background-color: #F5F5F5;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb{
        border-radius:50px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }

</style>
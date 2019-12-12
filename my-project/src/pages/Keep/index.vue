<template>
    <div style="height:100%">
        <input type="hidden" value="早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧">
        <h1 style="display: none;position: absolute;">早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧</h1>
        <HeadPage></HeadPage>
        <div style="min-height: 100%;">
            <div class="lanmu clearfix">
                <div style="text-align: left;display: inline-block;float: left;">
                    <div class="name_span" style="width: 80%;">
                        <span style="text-align: left;font-size: 40px;">{{user_name.username}}</span>
                    </div>
                    <a style="color:#000" target="_blank" :href="'/#/keep/attentionkeep?id='+user_name.uid">
                        <div style="display:inline-block;text-align: left;">
                            <div style="font-size: 30px;">{{user_name.my_attention}}</div>
                            <p style="display:inline-block;font-size: 13px;">我关注的收藏夹</p>
                        </div>
                    </a>
                    <a style="color:#000" target="_blank" :href="'/#/keep/attentionuser?id='+user_name.uid">
                        <div style="display:inline-block;text-align: left;">
                            <div style="font-size: 30px;">{{user_name.attention_user_num}}</div>
                            <p style="display:inline-block;font-size: 13px;">我关注的人</p>
                        </div>
                    </a>
                </div>
                <div style="display: inline-block;float: right;">
                    <div style="width:100px;height:100px;overflow: hidden;border-radius: 50%;">
                        <img :src="user_name.icon" alt="" width="100px" height="auto">
                    </div>
                </div>
            </div>
            <div style="text-align: left;width:1200px;margin: 0px auto;min-height: -webkit-fill-available;" class="clearfix">
                <div class="add_keeps" @click="Mask_layer_show()">
                    <div class="keep" style="background-color:#77696917;text-align: center;line-height: 200px;"><img src="../../assets/images/add.png" alt="" width="70px"></div>
                    <span>添加文件夹</span>
                </div>
                <div :id="'keep'+keep[0].id" class="keeps" v-for="keep in keepinfo" @mouseenter="shows($event)" @mouseleave="hiddens($event)">
                    <template v-if="(keep[0].img_ratio == 1)">
                        <div>
                            <div id="example-5" style="margin-top:30px">
                                <input class="input2" type="text" v-model="add_keep_name">
                                <button class="button2" @click="up_keep_name($event)">修改</button>
                            </div>
                            <div id="keep_edit">
                                <img src="../../assets/images/delete.png" alt="" width="30px" style="cursor: pointer;" @click="del_keep_show($event)">
                                <img src="../../assets/images/edit.png" alt="" width="30px" style="cursor: pointer;" @click="show_hidden($event)">
                            </div>
                            <a :href="'/#/keep/keepimg?id='+keep[0].id" target="_blank">
                                <div class="keep gallery1" :id="keep[0].id">
                                    <div id="gallery_id">
                                        <img v-if="(keep[0])" :src="keep[0].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                        <img v-if="(keep[1])" :src="keep[1].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                        <img v-if="(keep[2])" :src="keep[2].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                        <img v-if="(keep[3])" :src="keep[3].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                    </div>
                                </div>
                                <span class="keeps_name name_span" style="color:black">{{keep[0].keep_name}}</span>
                                <div>
                                    <span style="color:#000;">{{keep[0].attention_num}}个收藏</span>
                                    <span style="color:#000;">{{keep[0].heat}}热度</span>
                                </div>
                            </a>
                        </div>
                    </template>
                    <template v-if="(keep[0].img_ratio == 2)">
                        <div id="example-5" style="margin-top:30px">
                            <input class="input2" type="text" v-model="add_keep_name">
                            <button class="button2" @click="up_keep_name($event)">修改</button>
                        </div>
                        <div id="keep_edit">
                            <img src="../../assets/images/delete.png" alt="" width="30px" style="cursor: pointer;" @click="del_keep_show($event)">
                            <img src="../../assets/images/edit.png" alt="" width="30px" style="cursor: pointer;" @click="show_hidden($event)">
                        </div>
                        <a :href="'/#/keep/keepimg?id='+keep[0].id" target="_blank">
                            <div class="keep gallery1" :id="keep[0].id">
                                <div id="gallery_id">
                                    <img v-if="(keep[0])" :src="keep[0].image+'?imageView2/1/w/400/h/250'" style="margin: 2px;float: left;width:200px;height:130px;">
                                    <img v-if="(keep[1])" :src="keep[1].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:63px;height:65x;">
                                    <img v-if="(keep[2])" :src="keep[2].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:63px;height:65px;">
                                    <img v-if="(keep[3])" :src="keep[3].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:63px;height:65px;">
                                </div>
                            </div>
                            <span class="keeps_name name_span" style="color:black">{{keep[0].keep_name}}</span>
                            <div>
                                <span style="color:#000;">{{keep[0].attention_num}}个收藏</span>
                                <span style="color:#000;">{{keep[0].heat}}热度</span>
                            </div>
                        </a>
                    </template>
                    <template v-if="(keep[0].img_ratio == 3)">
                        <div id="example-5" style="margin-top:30px">
                            <input class="input2" type="text" v-model="add_keep_name">
                            <button class="button2" @click="up_keep_name($event)">修改</button>
                        </div>
                        <div id="keep_edit">
                            <img src="../../assets/images/delete.png" alt="" width="30px" style="cursor: pointer;" @click="del_keep_show($event)">
                            <img src="../../assets/images/edit.png" alt="" width="30px" style="cursor: pointer;" @click="show_hidden($event)">
                        </div>
                        <a :href="'/#/keep/keepimg?id='+keep[0].id" target="_blank">
                            <div class="keep gallery1" :id="keep[0].id">
                                <div id="gallery_id">
                                    <img v-if="(keep[0])" :src="keep[0].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:121px;height:100px;">
                                    <img v-if="(keep[1])" :src="keep[1].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:71px;height:100px;">
                                    <img v-if="(keep[2])" :src="keep[2].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:71px;height:100px;">
                                    <img v-if="(keep[3])" :src="keep[3].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:121px;height:100px;">
                                </div>
                            </div>
                            <span class="keeps_name name_span" style="color:black">{{keep[0].keep_name}}</span>
                            <div>
                                <span style="color:#000;">{{keep[0].attention_num}}个收藏</span>
                                <span style="color:#000;">{{keep[0].heat}}热度</span>
                            </div>
                        </a>
                    </template>
                </div>
            </div>
        </div>
        <div id="Mask_layers">
            <div class="addkeep_Mask_layers">
                <img src="../../assets/images/closes.png" width="25px" alt="" style="float: right;margin: -40px 20px 0px 0px;cursor: pointer;" @click="Mask_layers_hidden()">
                <span style="display: block;margin-bottom: 50px;">删除此文件夹将会删除文件夹里的所有图片,<br>您确定要删除吗?</span>
                <button class="button" style="background: #000;" @click="delete_keep($event)">确认</button>
            </div>
        </div>
        <div id="Mask_layer">
            <div class="addkeep_Mask_layer">
                <img src="../../assets/images/closes.png" width="25px" alt="" style="float: right;margin: -40px 20px 0px 0px;cursor: pointer;" @click="Mask_layer_hidden()">
                <input type="text" class="input" v-model="keep_name" placeholder="请输入收藏夹名">
                <button class="button" @click="add_keep()">确认</button>
            </div>
        </div>
        <LabelLeft></LabelLeft>
        <Foot style="margin-top:30px;clear: both;"></Foot>

    </div>
</template>
<script>
    import axios from 'axios'
    import HeadPage from "../../components/HeadPage"
    import LabelLeft from "../../components/LabelLeft"
    import Foot from "../../components/Foot"
    export default {
        name: 'Keep',
        data(){
            return{
                telphone:'',
                keepinfo:[],
                user_name:[],
                keepimg:[],
                keep_name:'',
                add_keep_name:''
            }
        },
        components: {
            HeadPage,LabelLeft,Foot
        },
        watch: {
            '$route' () {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.initData();
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
        },
        methods:{
            initData(){
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.$http.get(this.GLOBAL.baseurl + 'v1/site/up_pv_count5').then((response)=>{
                })
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/getusername',{params:{tel: this.telphone}}).then((response)=>{
                    this.user_name = response.data
                    console.log(response.data)
                })
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/findkeep',{params:{tel: this.telphone}}).then((response)=>{
                    this.keepinfo = response.data
                    console.log(response.data)
                })
            },
            //点击查看收藏夹
            sele_keep(event){
                this.$router.push({name: 'keepimg',params:{id:event.currentTarget.id}});
            },
            Mask_layer_show(){
                $("#Mask_layer").css('display','block')
            },
            Mask_layer_hidden(){
                $("#Mask_layer").css('display','none')
            },
            add_keep(){
                if(!this.keep_name){
                    toastr.warning("请填写收藏夹名")
                }
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/addkeep',{params:{tel: this.telphone,keep_name:this.keep_name}}).then((response)=>{
                    if(response.data == 1){
                        toastr.warning("该文件夹名已经存在")
                    }else{
                        toastr.info("添加成功")
                        location.reload()
                    }
                })
            },
            shows(e){
                $(e.target).children("#keep_edit").css({height:'30px','z-index':999})
            },
            hiddens(e){
                $(e.target).children("#keep_edit").css({height:'0px'})
            },
            show_hidden(e){
                $(e.target).parent("#keep_edit").prev("#example-5").animate({height:'toggle',width:'toggle','z-index':'999'})
            },
            up_keep_name(e){
                var id = $(e.target).parent("#example-5").next().next().children().attr("id")
                if(!this.add_keep_name){
                    toastr.warning("请填写收藏夹名")
                }else{
                    this.$http.get(this.GLOBAL.baseurl + 'v1/home/upkeepname',{params:{tel: this.telphone,keep_name:this.add_keep_name,id:id}}).then((response)=>{
                        if(response.data){
                            toastr.info("修改成功")
                            $(e.target).parent("#example-5").next().next().children().next().html(this.add_keep_name)
                            $(e.target).parent("#example-5").animate({height:'hide',width:'hide'})
                        }else{
                            toastr.warning("修改失败")
                        }
                    })
                }
            },
            del_keep_show(e){
                var id = $(e.target).parent("#keep_edit").next().children().attr("id")
                $("#Mask_layers").css('display','block')
                $("#Mask_layers").attr('data_id',id)
            },
            Mask_layers_hidden(){
                $("#Mask_layers").css('display','none')
            },
            delete_keep(e){
                var id = $(e.target).parent(".addkeep_Mask_layers").parent("#Mask_layers").attr("data_id")
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/delete_keep',{params:{tel: this.telphone,kid:id}}).then((response)=>{
                    if(response.data){
                        toastr.info("删除成功")
                        $("#keep"+id+"").remove()
                        $("#Mask_layers").css('display','none')
                    }
                })
            }
        }
    }
</script>
<style>
    html,body{height: 100%;margin:0px;padding:0px;margin: 0 auto}
    a{padding:0;margin:0;text-decoration:none}
    a:hover{text-decoration:none}
    .name_span{
        width: 80%;
        display: block;
        text-decoration:none;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        white-space:nowrap;
    }
    .lanmu{
        width:700px;
        margin:10px auto;
        color:#333;
    }
    .keep{
        display: inline-block;
        /*background-color:#77696917;*/
        width: 200px;
        height: 200px;
        float: left;
        margin-bottom: 5px;
        overflow: hidden;
        cursor: pointer;
    }
    .keeps{
        display: inline-block;
        width: 210px;
        margin-right:20px;
        float: left;
        overflow:hidden;
    }
    .add_keeps{
        display: inline-block;
        width: 210px;
        margin-right:20px;
        float: left;
        cursor: pointer;
    }
    .clearfix:after{
        display: block;
        content:'';
        clear: both;
        height:0;
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
    .input2{
        width: 130px;
        height: 30px;
        background: rgba(76, 76, 76, 0.77);
        border: 1px solid rgba(255,255,255,.15);
        -moz-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        -webkit-transition: all .2s;
    }
    input::-webkit-input-placeholder {
        color: rgb(0,0,0);
        font-size: 12px;
        text-align: left;
    }
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
    .button2{
        cursor: pointer;
        width: 50px;
        height: 30px;
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
    #keep_edit{
        background-color: #50505091;
        width:210px;
        height: 0px;
        overflow:hidden;
        padding-left: 10px;
        position: absolute;
    }
    #example-5{
        position: absolute;
        width: 200px;
        display:none;
        margin-left: 5px;
    }

    /*列表布局*/
    .gallery1{
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start
    }
    .gallery1 #gallery_id{
        flex-grow: 1;
        position: relative;
    }
    .gallery1:after {
        content: "";
        flex-grow:2;
        flex-basis:50%;
        flex-shrink:1;
    }
    /*结束*/
</style>
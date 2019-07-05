<template>
    <div style="height:100%">
        <HeadPage></HeadPage>
        <div class="lanmu">收藏夹</div>
        <div style="text-align: left;padding-left: 20%;min-height: -webkit-fill-available;" class="clearfix">
            <div class="add_keeps" @click="Mask_layer_show()">
                <div class="keep" style="text-align: center;line-height: 200px;"><img src="../../assets/images/add.png" alt="" width="70px"></div>
                <span>添加文件夹</span>
            </div>
            <div :id="'keep'+keep[0].id" class="keeps" v-for="keep in keepinfo" @mouseenter="shows($event)" @mouseleave="hiddens($event)">
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
                        <div v-for="keep_img in keep" id="gallery_id">
                            <img  :src="keep_img.image" id="img" alt="" style="float: left;" height="30px">
                        </div>
                    </div>
                    <span class="keeps_name" style="color:black">{{keep[0].keep_name}}</span>
                </a>
            </div>
        </div>
        <div id="Mask_layers">
            <div class="addkeep_Mask_layers">
                <img src="../../assets/images/closes.png" width="25px" alt="" style="float: right;margin: -40px 20px 0px 0px;cursor: pointer;" @click="Mask_layers_hidden()">
                <span style="display: block;margin-bottom: 50px;">删除此文件夹将会删除文件夹里的所有图片,<br>您确定要删除吗?</span>
                <button class="button" style="background: #fb8c29;" @click="delete_keep($event)">确认</button>
            </div>
        </div>
        <div id="Mask_layer">
            <div class="addkeep_Mask_layer">
                <img src="../../assets/images/closes.png" width="25px" alt="" style="float: right;margin: -40px 20px 0px 0px;cursor: pointer;" @click="Mask_layer_hidden()">
                <input type="text" class="input" v-model="keep_name" placeholder="请输入收藏夹名">
                <button class="button" @click="add_keep()" style="background: rgb(251, 140, 41);">确认</button>
            </div>
        </div>
        <Foot style="margin-top:30px;clear: both;"></Foot>
    </div>

</template>
<script>
    import axios from 'axios'
    import HeadPage from "../../components/HeadPage"
    import Foot from "../../components/Foot"
    export default {
        name: 'Keep',
        data(){
            return{
                telphone:'',
                keepinfo:[],
                keepimg:[],
                keep_name:'',
                add_keep_name:''
            }
        },
        components: {
            HeadPage,Foot
        },
        watch: {
            '$route' () {
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
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/findkeep',{params:{tel: this.telphone}}).then((response)=>{
                    this.keepinfo = response.data
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
                        toastr.info("该文件夹名已经存在")
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
    .lanmu{
        margin-top: 30px;
        width:1200px;
        height:30px;
        line-height:30px;
        margin:10px auto;
        font-size:15px;
        color:#333;
    }
    .keep{
        display: inline-block;
        background-color:#77696917;
        width: 210px;
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
    .button2{
        cursor: pointer;
        width: 50px;
        height: 30px;
        padding: 0;
        background: rgba(76, 76, 76, 0.77);
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
        margin-left: 5px;
        align-content: flex-start
    }
    .gallery1 #gallery_id{
        flex-grow: 1;
        margin:2px 2px 0px 0px;
        position: relative;
    }
    .gallery1 #img{
        object-fit: cover;
        min-height:50px;
        max-width: 100%;
        min-width: 100%;
        vertical-align: bottom;
    }
    .gallery1:after {
        content: "";
        flex-grow:2;
        flex-basis:50%;
        flex-shrink:1;
    }
    /*结束*/
</style>
<template>
    <div id="history">
        <HeadPage></HeadPage>
        <div id="history_info" style="min-height: -webkit-fill-available;padding: 0 100px;">
            <div id="Mask_layer">
                <div class="addkeep_Mask_layer">
                    <img src="../../assets/images/closes.png" width="25px" alt="" style="float: right;margin: -40px 20px 0px 0px;cursor: pointer;" @click="Mask_layer_hidden()">
                    <input type="text" class="input" v-model="keep_name" placeholder="请输入收藏夹名">
                    <button class="button" style="background:#000;color:#fff;" @click="add_keep()">确认</button>
                </div>
            </div>
                <div id="history_data" v-for="(history_infos,date_arr) in history_info">
                    <span style="border-bottom: 1px solid #8c8585;display: block;">{{date_arr}}</span>
                    <div style="display:inline-block;padding: 30px;" >
                        <div v-for="(history_infos,img_arr) in history_infos" class="history_img" @mouseenter="shows($event)" @mouseleave="hiddens($event)" >
                            <div id="example-5" >
                                <select class="form-control" v-model="keep_option" style="float: left;width:60%;" @mouseenter="show_hidden($event)" @change="Mask_layer_show()">
                                    <option v-for="keep_info in keep_info">{{keep_info.keep_name}}</option>
                                    <option value="add" style="color:#000">添加</option>
                                </select>
                                <button type="button" class="btn btn-warning" style="background-color:#000;color:#fff;border:1px solid #000;float: right;width: 40%;" @click="addto_keep($event,img_arr)">收藏</button>
                            </div>
                            <div id="icon" @click="to_sanji(img_arr)" style="position: absolute;height: 0px;width:100%;text-align:left;padding: 0px 0px 0px 5px;background-color: #0000007d;overflow: hidden;">
                            </div>
                            <img :src="history_infos" alt=""  style="width:100%;margin: 10px;min-width: 250px;">
                        </div>
                    </div>
                </div>
        </div>
        <Foot style="margin-top:30px;clear: both;"></Foot>
    </div>
</template>
<script>
    import HeadPage from "../../components/HeadPage";
    import Foot from "../../components/Foot";
    import axios from 'axios';
    export default {
        name: 'History',
        data(){
            return{
                login_phone:'',
                new_pwd:'',
                telphone_model:'',
                user_info:[],
                keep_info:[],
                keep_option:'',
                history_info:[],
                keep_name:'',
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
            $('#personal').addClass("show");
            var reg = new RegExp("(^| )tel=([^;]*)(;|$)")
            var arr = document.cookie.match(reg)
            if(!arr){
                alert('请登录')
                window.location.href="/#/login";
            }else{
                this.login_phone = arr[2]
                this.initData()
            }
        },
        methods:{
            initData(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/site/up_pv_count10').then((response)=>{
                })
                if(this.login_phone){
                    this.$http.post(this.GLOBAL.baseurl + 'v1/home/homeinfo',{username:this.login_phone},{emulateJSON: true}).then((response)=>{
                        this.user_info = response.data
                    })
                    this.show_history()
                }else{
                    alert('请登录')
                    window.location.href="/#/login";
                }
            },
            //显示添加收藏夹
            Mask_layer_show(){
                if(!this.login_phone){
                    toastr.warning("请先登录")
                    return false
                }else{
                    if(this.keep_option == 'add'){
                        $("#Mask_layer").css('display','block')
                        this.keep_option = ''
                    }
                }
            },
            show_history(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/get_history',{params:{tel:this.login_phone}}).then((response)=>{
                    this.history_info = response.data
                })
            },
            shows(e){
                $(e.target).children("#icon").css({height:'100%'})
                $(e.target).children("#icon").prev("#example-5").css({height:'50px','display':'block','z-index':'999'})
            },
            hiddens(e){
                $(e.target).children("#icon").css({height:'0px'})
                $(e.target).children("#icon").prev("#example-5").css({height:'0px','display':'none'})
            },
            show_hidden(e){
                if(!this.login_phone){
                    toastr.warning("请先登录")
                    return false
                }
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/select_keep',{params:{tel:this.login_phone}}).then((response)=>{
                    this.keep_info = response.data
                })
            },
            //隐藏添加收藏夹
            Mask_layer_hidden(){
                $("#Mask_layer").css('display','none')
            },
            add_keep(){
                if(!this.keep_name){
                    toastr.warning("请填写收藏夹名")
                }
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/addkeep',{params:{tel: this.login_phone,keep_name:this.keep_name}}).then((response)=>{
                    if(response.data == 1){
                        toastr.info("该文件夹名已经存在")
                    }else{
                        toastr.info("添加成功")
                        $("#Mask_layer").css('display','none')
                    }
                })
            },
            to_sanji(id){
                let routeData = this.$router.resolve({path:"/sanjiye?id="+id})
                window.open(routeData.href, '_blank');
            },
            addto_keep(e,img_id){
                if(!this.login_phone){
                    toastr.warning("请先登录")
                    return false
                }
                if(!this.keep_option){
                    toastr.warning("请选择要添加的收藏夹")
                    return false
                }
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/addto_keep',{params:{tel:this.login_phone,keep_name:this.keep_option,img_id:img_id}}).then((response)=>{
                    if(response.data == 1){
                        toastr.warning("该图片已经存在此收藏夹")
                        return false
                    }else if(response.data == 2){
                        toastr.warning("添加失败")
                    }else if(response.data == 0){
                        toastr.info("添加成功")
                        $(e.target).parent("#example-5").animate({height:'hide',width:'hide'})
                    }
                })
            },
        }
    }
</script>
<style scoped>
    html body{margin:0px;padding:0px;height:100%}
    ul li{list-style:none;}
    /*div{width:100%;height:40px;background:#f2f2f2;line-height:40px;text-align:left;padding-left:30px;margin-bottom:20px;font-size:14px;color:#333;}*/
    a:hover{text-decoration:none;}
    a{color:black}
    #history_info{
        margin-top:15px;
    }
    .btn{
        border-radius: 0px;
    }
    .form-control{
        border-radius: 0px;
    }
    .personal_title{
        text-align: left;
        padding-left: 60px;
        padding-right: 60px;
    }
    #personal li{
    }
    #personal ul{
        text-align: left;
        padding-left: 150px;
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
    .update{
        cursor: pointer;
    }
    #history_data{
        width:100%;
        text-align: left;
        padding-left: 50px;
    }
    .history_img{
        display: inline-block;
        width: 250px;
        height: 250px;
        text-align: center;
        position: relative;
        overflow: hidden;
        line-height: 250px;
    }
    #example-5{
        position: absolute;
        width: 150px;
        display:none;
    }
    .info_td:hover{
        background-color: #ea8010;
    }
    .info_td{
        cursor: inherit;
    }

</style>
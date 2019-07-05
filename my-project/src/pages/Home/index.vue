<template>
    <div id="home">
        <HeadPage></HeadPage>
        <div id="home_info" style="min-height: -webkit-fill-available;padding: 0 100px;">
            <div style="text-align: left;padding-left: 300px;">
                <ul>
                    <li>用户名&nbsp:&nbsp<input id="username_input" class="input" type="text" v-model="username" :placeholder=user_info.username><a href=""></a><img src="../../assets/images/update.png" alt="" height="30px" class="update" data-toggle="modal" data-target="#up_username_modal"></li>
                    <li>微  &nbsp&nbsp&nbsp信&nbsp:&nbsp<input id="wechat_input" class="input" type="text" v-model="wechat" :placeholder=user_info.weixin><img src="../../assets/images/update.png" alt="" height="30px" class="update"  data-toggle="modal" data-target="#up_wechat_modal"></li>
                    <li>地  &nbsp&nbsp&nbsp址&nbsp:&nbsp<input id="address_input" class="input" type="text" v-model="address" :placeholder=user_info.position><img src="../../assets/images/update.png" alt="" height="30px" class="update"  data-toggle="modal" data-target="#up_address_modal"></li>
                    <li>生  &nbsp&nbsp&nbsp日&nbsp:&nbsp<input id="birthday_input" class="input laydate-icon" type="text" v-model="birthday" :placeholder=user_info.birthday @focus="calendar()"><img src="../../assets/images/update.png" alt="" height="30px" class="update"  data-toggle="modal" data-target="#up_birthday_modal"></li>
                    <li>密  &nbsp&nbsp&nbsp码&nbsp:&nbsp<button class="button" data-toggle="modal" data-target="#up_password_modal">修改密码</button></li>
                    <li>类  &nbsp&nbsp&nbsp型&nbsp:&nbsp<button class="button">修改为企业用户</button></li>
                </ul>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="up_username_modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <p>您确定要修改用户名吗</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="up_username">确认修改</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <div class="modal fade" tabindex="-1" role="dialog" id="up_wechat_modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <p>您确定要修改微信号码吗</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="up_wechat">确认修改</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <div class="modal fade" tabindex="-1" role="dialog" id="up_address_modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <p>您确定要修改地址吗</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="up_address">确认修改</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <div class="modal fade" tabindex="-1" role="dialog" id="up_birthday_modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <p>您确定要修改生日吗</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="up_birthday">确认修改</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <div class="modal fade" tabindex="-1" role="dialog" id="up_password_modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">修改密码</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li>手机号 : <input type="text" class="input" v-model="telphone_model"></li>
                            <li>验证码 :
                                <div style="width:300px;display: inline-block;">
                                    <input class="input" v-model="code" placeholder="请输入验证码" style="width:69%">
                                    <button style="width:29%" @click="sendcode()" class="button">获取验证码</button>
                                </div>
                            </li>
                            <li>新密码 : <input type="password" class="input" v-model="new_pwd"></li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="up_newpwd()">确认修改</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <Foot style="margin-top:30px;clear: both;"></Foot>
    </div>
</template>
<script>
    import HeadPage from "../../components/HeadPage";
    import Foot from "../../components/Foot";
    import axios from 'axios';
    export default {
        name: 'Home',
        data(){
            return{
                username:'',
                telphone:'',
                wechat:'',
                address:'',
                birthday:'',
                login_phone:'',
                new_pwd:'',
                telphone_model:'',
                code:'',
                user_info:[],
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
                if(this.login_phone){
                    this.$http.post(this.GLOBAL.baseurl + 'v1/home/homeinfo',{username:this.login_phone},{emulateJSON: true}).then((response)=>{
                        this.user_info = response.data
                    })
                }else{
                    alert('请登录')
                    window.location.href="/#/login";
                }
            },
            up_username(){
                if(!this.username){
                    toastr.warning("请输入用户名")
                }else{
                    this.$http.post(this.GLOBAL.baseurl + 'v1/home/up_username',{tel:this.login_phone,username:this.username},{emulateJSON: true}).then((response)=>{
                        if(response.data){
                            $("#username_input").attr("placeholder",this.username)
                            toastr.info("修改成功")
                        }else{
                            toastr.warning("修改失败")
                        }
                    })
                }
            },
            up_wechat(){
                if(!this.wechat){
                    toastr.warning("请输入微信号码")
                }else{
                    this.$http.post(this.GLOBAL.baseurl + 'v1/home/up_wechat',{tel:this.login_phone,wechat:this.wechat},{emulateJSON: true}).then((response)=>{
                        if(response.data){
                            $("#wechat_input").attr("placeholder",this.wechat)
                            toastr.info("修改成功")
                        }else{
                            toastr.warning("修改失败")
                        }
                    })
                }
            },
            up_address(){
                if(!this.address){
                    toastr.warning("请输入地址")
                }else{
                    this.$http.post(this.GLOBAL.baseurl + 'v1/home/up_address',{tel:this.login_phone,address:this.address},{emulateJSON: true}).then((response)=>{
                        if(response.data){
                            $("#address_input").attr("placeholder",this.address)
                            toastr.info("修改成功")
                        }else{
                            toastr.warning("修改失败")
                        }
                    })
                }
            },
            up_birthday(){
                if(!$("#birthday_input").val()){
                    toastr.warning("请选择出生日期")
                }else{
                    this.$http.post(this.GLOBAL.baseurl + 'v1/home/up_birthday',{tel:this.login_phone,birthday:$("#birthday_input").val()},{emulateJSON: true}).then((response)=>{
                        if(response.data){
                            $("#birthday_input").attr("placeholder",$("#birthday_input").val())
                            toastr.info("修改成功")
                        }else{
                            toastr.warning("修改失败")
                        }
                    })
                }
            },
            sendcode(){
                if(this.telphone_model){
                    var reg=/^1[3456789]\d{9}$/;
                    if(!reg.test(this.telphone_model)){
                        toastr.warning('请输入正确的手机号码');
                    }
                    this.$http.get(this.GLOBAL.baseurl + 'v1/code/codetel',{params:{telephone: this.telphone_model}}).then((response)=>{
                        if(response.data == 1){
                            this.$http.get(this.GLOBAL.baseurl + 'v1/code/sendcode',{params:{username: this.telphone_model}}).then((response)=>{

                            })
                        }else if(response.data == 2){
                            toastr.warning('暂无该用户');
                        }
                    })
                }else{
                    toastr.warning('请输入手机号码')
                }
            },
            up_newpwd(){
                if(this.code){
                    this.$http.get(this.GLOBAL.baseurl + 'v1/code/vercode',{params:{telephone: this.telphone_model,code:this.code}}).then((response)=>{
                        if(response.data){
                            if(!this.new_pwd){
                                toastr.warning('请输入新密码')
                            }else{
                                this.$http.post(this.GLOBAL.baseurl + 'v1/home/up_newpwd',{telephone: this.telphone_model,newpwd:this.new_pwd},{emulateJSON: true}).then((response)=>{
                                    if(response.data == 1){
                                        toastr.warning("不能设置同样的密码")
                                    }else if(response.data == 2){
                                        toastr.info("修改成功")
                                    }else{
                                        toastr.warning("修改失败")
                                    }
                                })
                            }
                        }else{
                            toastr.warning('验证码错误')
                        }
                    })
                }
            },
        }
    }
</script>
<style scoped>
    html body{margin:0px;padding:0px;height:100%}
    ul li{list-style:none;}
    /*div{width:100%;height:40px;background:#f2f2f2;line-height:40px;text-align:left;padding-left:30px;margin-bottom:20px;font-size:14px;color:#333;}*/
    .zhongjian{width:1200px;height:30px;margin:0 auto;}
    a:hover{text-decoration:none;}
    a{color:black}
    #home_info{
        margin-top:15px;
    }
    .home_tab{
        width:1200px;
        margin:50px auto;
        min-height: -webkit-fill-available;
        overflow-y: scroll;
    }
    .home_ul{
        /*border:1px solid #ccc;*/
    }
    .btn{
        border-radius: 0px;
    }
    .tab-content{
        /*border: 1px solid #ccc;*/
        border-top: hidden;
        padding-top: 50px;
    }
    #personal{
        height:600px;
    }
    #history{
        height:600px;
    }
    #shopcar{
        height:600px;
    }
    #address{
        height:600px;
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
        background: #ff8402d1;
        border: 1px solid #00a0efbd;
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
    #history{
        overflow-y: scroll;
    }
    #history_data{
        width:100%;
        text-align: left;
        padding-left: 50px;
    }
    .history_img{
        display: inline-block;
        width: 250px;
        height: 200px;
        text-align: center;
        position: relative;
        overflow: hidden;
        line-height: 200px;
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
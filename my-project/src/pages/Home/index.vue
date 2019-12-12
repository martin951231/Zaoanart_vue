<template>
    <div id="home" style="height: 100%;">
        <input type="hidden" value="艺术,早安,早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧">
        <h1 style="display: none;position: absolute;">艺术,早安,早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧</h1>
        <HeadPage></HeadPage>
        <div id="home_info" style="min-height: 100%;padding: 0 100px;">
            <div style="text-align: left;padding-left: 300px;">
                <ul style="display: inline-block;">
                    <li style="height: 200px;line-height: 200px;margin-top: 25px;">
                        <span style="position: absolute;">用户头像:&nbsp</span>
                        <div class="keep gallery1" style="overflow: hidden; border-radius: 50%;">
                            <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
                            <img :src="icon" @click.stop="uploadHeadImg" alt="" width="200px" height="auto" style="max-width: 200px;max-height: 200px;border-radius:50%;">
                        </div>
                    </li>
                    <li style="height: 50px;line-height: 50px;margin-top: 25px;">
                        账  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp号:&nbsp
                        <span>{{user_info.phone}}</span>
                    </li>
                    <li>昵  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp称:&nbsp<input id="username_input" class="input" type="text" v-model="username"><a href=""></a><img src="../../assets/images/update.png" alt="" height="30px" class="update" data-toggle="modal" data-target="#up_username_modal"></li>
                    <!--<li>微  &nbsp&nbsp&nbsp信&nbsp:&nbsp<input id="wechat_input" class="input" type="text" v-model="wechat" :placeholder=user_info.weixin><img src="../../assets/images/update.png" alt="" height="30px" class="update"  data-toggle="modal" data-target="#up_wechat_modal"></li>-->
                    <li style="height: 50px;line-height: 50px;margin-top: 25px;">
                        性  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别:&nbsp
                        <input type="radio" id="man" value="1" v-model="sex">
                        <label for="man">男</label>
                        <input type="radio" id="woman" value="2" v-model="sex">
                        <label for="woman">女</label>
                    </li>
                    <li>地  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp址:&nbsp<input id="address_input" class="input" type="text" v-model="address"><img src="../../assets/images/update.png" alt="" height="30px" class="update"  data-toggle="modal" data-target="#up_address_modal"></li>
                    <!--<li>生  &nbsp&nbsp&nbsp日&nbsp:&nbsp<input id="birthday_input" class="input laydate-icon" type="text" v-model="birthday" :placeholder=user_info.birthday @focus="calendar()"><img src="../../assets/images/update.png" alt="" height="30px" class="update"  data-toggle="modal" data-target="#up_birthday_modal"></li>-->
                    <li style="height: 50px;line-height: 50px;margin-top: 25px;">
                        出生日期:&nbsp<DateSelect style="display: inline-block;"  />
                    </li>
                    <li>密  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码:&nbsp<button style="background-color: #000;color:#fff;border: 1px solid #000;" class="button" data-toggle="modal" data-target="#up_password_modal">修改密码</button></li>
                    <hr style="border:1px dashed #ccc;margin-top: 40px;">
                    <button style="width: 150px;background-color: #000;color:#fff;border: 1px solid #000;" class="button" data-toggle="modal" data-target="#up_all_modal">保存</button>
                    <!--<li>类  &nbsp&nbsp&nbsp型&nbsp:&nbsp<button style="background-color: #000;color:#fff;" class="button">修改为企业用户</button></li>-->
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
                        <button type="button" style="background-color: #000;color:#fff;border: 1px solid #000;" class="btn btn-primary" data-dismiss="modal" @click="up_username">确认修改</button>
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
                        <button type="button" style="background-color: #000;color:#fff;border: 1px solid #000;" class="btn btn-primary" data-dismiss="modal" @click="up_wechat">确认修改</button>
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
                        <button type="button" style="background-color: #000;color:#fff;border: 1px solid #000;" class="btn btn-primary" data-dismiss="modal" @click="up_address">确认修改</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <div class="modal fade" tabindex="-1" role="dialog" id="up_all_modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <p>您确定要修改信息吗?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" style="background-color: #000;color:#fff;border: 1px solid #000;" class="btn btn-primary" data-dismiss="modal" @click="up_allinfo">确认修改</button>
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
                                    <button style="background-color:#000;color:#fff;width:29%;border: 1px solid #000;" @click="sendcode()" class="button">获取验证码</button>
                                </div>
                            </li>
                            <li>新密码 : <input type="password" class="input" v-model="new_pwd"></li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" style="background-color: #000;color:#fff;border: 1px solid #000;" class="btn btn-primary" data-dismiss="modal" @click="up_newpwd()">确认修改</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <LabelLeft></LabelLeft>
        <Foot style="margin-top:30px;clear: both;"></Foot>
    </div>
</template>
<script>
    import HeadPage from "../../components/HeadPage";
    import LabelLeft from "../../components/LabelLeft"
    import Foot from "../../components/Foot";
    import axios from 'axios';
    import DateSelect from './Dateselect'
    import qs from 'qs';
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
                sex:'1',
                date:'',
                userinfo:null,
                icon:''

            }
        },
        components: {
            HeadPage,LabelLeft,Foot,DateSelect
        },
        watch: {
            '$route' () {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.initData();
            },
            'sex'(e){
                this.sex = e
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
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                // var myDate = new Date;
                // var year = myDate.getFullYear();//获取当前年
                // var month = myDate.getMonth()+1;//获取当前月
                // var day = myDate.getDate();//获取当前日
                // this.date = year+'-'+month+'-'+day
                this.$http.get(this.GLOBAL.baseurl + 'v1/site/up_pv_count11').then((response)=>{
                })
                if(this.login_phone){
                    this.$http.post(this.GLOBAL.baseurl + 'v1/home/homeinfo',{username:this.login_phone},{emulateJSON: true}).then((response)=>{
                        var info = response.data.birthday.split(' ')
                        var brithday_arr = info[0].split('-')
                        if(brithday_arr){
                            $("#years").val(Number(brithday_arr[0]))
                            $("#months").val(Number(brithday_arr[1]))
                            $("#days").val(Number(brithday_arr[2]))
                            this.date = year+'-'+month+'-'+day
                        }else{
                            var myDate = new Date;
                            var year = myDate.getFullYear();//获取当前年
                            var month = myDate.getMonth()+1;//获取当前月
                            var day = myDate.getDate();//获取当前日
                            $("#years").val(year)
                            $("#months").val(month)
                            $("#days").val(day)
                            this.date = year+'-'+month+'-'+day
                        }
                        this.user_info = response.data
                        this.icon = 'http://118.178.89.229/resource/userIcon/'+response.data.icon+'?'+Math.random()*1000
                        this.username = response.data.username
                        this.address = response.data.position
                        this.sex = response.data.sex
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
            //修改用户信息
            up_allinfo(){
                this.$http.post(this.GLOBAL.baseurl + 'v1/home/up_allinfo',{tel:this.login_phone,username: this.username,address:this.address,sex:this.sex,date:this.date},{emulateJSON: true}).then((response)=>{
                    if(response.data){
                        toastr.info('修改成功')
                    }else{
                        toastr.warning('修改失败')
                    }
                })
            },
            //获取日期
            dateChange(obj){
                this.date = obj.year+'-'+obj.month+'-'+obj.day
                console.log(this.date);
            },
            // 打开图片上传
            uploadHeadImg: function () {
                this.$el.querySelector('.hiddenInput').click()
            },
            // 上传头像
            handleFile: function (e) {
                // let $target = e.target || e.srcElement
                // let file = $target.files[0]
                // let url = this.getObjectURL(file)
                let formData = new FormData();
                formData.append('file', e.target.files[0]);
                formData.append('tel', this.login_phone);
                let url = this.GLOBAL.baseurl + 'v1/home/upicon'
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                this.$http.post(url,formData,config).then(function (response) {
                    if(response.data == 1){
                        toastr.info('上传头像成功')
                        window.location.reload()
                    }else if(response.data == 3){
                        toastr.warning('图片过大')
                    }else if(response.data == 2){
                        toastr.warning('上传头像失败')
                    }
                    console.log(response.data)
                })
                // this.$http.post(this.GLOBAL.baseurl + 'v1/home/upicon',{tel:this.login_phone,up_tmp_path: url,file:file},{emulateJSON: true}).then((response)=>{
                //     if(response.data){
                //         toastr.info('修改成功')
                //     }else{
                //         toastr.warning('修改失败')
                //     }
                // })
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
    .keep{
        margin-left: 100px;
        display: inline-block;
        /*background-color:#77696917;*/
        width: 200px;
        height: 200px;
        /*float: left;*/
        margin-bottom: 5px;
        overflow: hidden;
        cursor: pointer;
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
    .hiddenInput{
        display: none;
    }

</style>
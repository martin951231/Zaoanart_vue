<template>
    <div>
        <div class="back-img">
            <img  style="" :src="img_info" alt="">
        </div>
        <div class="page-container">
            <a href="/"><img src="../assets/images/logo.png" alt="" width="146px"></a>
            <h1 style="color:rgb(255,255,255)">登录</h1>
            <button class="user_login" style="width:150px;background: rgba(45,45,45,.15);border: 1px solid rgba(45, 45, 45, 0.15);" @click="tel_login()">手机验证码登录</button>
            <button class="tel_login" style="width:150px;background: rgba(45,45,45,.15);border: 1px solid rgba(45, 45, 45, 0.15);" @click="user_login()">密码登录</button>
            <!--手机验证码登录-->
            <div class="page-container-div" id="tel_login">
                <input class="input" v-model="telephone" placeholder="请输入手机号码" v-on:input ="inputfunc()"><br>
                <div style="width:300px;display: inline-block;">
                    <input class="input" v-model="code" placeholder="请输入验证码" style="width:69%">
                    <button style="width:29%" @click="sendcode()">获取验证码</button>
                </div>
                <br>
                <button @click="tel_logins()">登录</button>
            </div>
            <!--密码登录-->
            <div class="page-container-div" id="user_login" style="display:none">
                <input class="input" v-model="username" placeholder="请输入手机号码"><br>
                <input class="input" type="password" v-model="password" placeholder="请输入密码"><br>
                <br>
                <div style="width:300px;display: inline-block;margin-top: 20px;">
                    <input type="checkbox" id="checkbox" v-model="checked"><span style="color:rgb(255,255,255)">记住密码?</span>
                </div>
                <br>
                <button @click="user_logins()">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    const baseurl = 'http://118.178.89.229/';
    export default {
        name: 'Login',
        data(){
            return{
                checked : '',
                username : '',
                password : '',
                code : '',
                telephone : '',
                img_info:[]
            }
        },
        watch: {
            '$route' () {
                this.initData();
            }
        },
        mounted(){
            this.$http.get(baseurl + 'v1/goods/getloginimg').then((response)=>{
                response.data.img_name = 'http://qiniu.zaoanart.com/'+response.data.img_name
                // for(var i=0;i<response.data.length;i++){
                //     response.data[i].login_img = 'http://qiniu.zaoanart.com/'+response.data[i].login_img
                // }
                var width = response.data.width
                var height = response.data.height
                if(width >= height){
                    $(".back-img img").css('min-height','100%')
                }else{
                    $(".back-img img").css('min-width','100%')
                }
                this.img_info = response.data.img_name
                    //淡入淡出特效
                    // this.$nextTick(function(){
                    //     var i=0
                    //     setInterval(function(){
                    //         if($(".back-img img").length > (i+1)){
                    //             $(".back-img img").eq(i).fadeOut(1000).next("img").fadeIn(1000);
                    //             i++;
                    //         }
                    //         else{
                    //             $(".back-img img").eq(i).fadeOut(1000).siblings("img").eq(0).fadeIn(1000);
                    //             i = 0;
                    //         }
                    //     },5000);
                    // });
                })
        },
        methods:{
            initData(){
            },
            //点击验证码登录显示验证码
            tel_login(){
                $("#user_login").css({'display':'none'})
                $("#tel_login").css({'display':'block'})
                $(".user_login").css({'background':'rgba(255, 212, 212, 0.33)'})
                $(".tel_login").css({'background':'rgba(45, 45, 45, 0.15)'})
            },
            //点击密码登录显示密码
            user_login(){
                $("#tel_login").css({'display':'none'})
                $("#user_login").css({'display':'block'})
                $(".tel_login").css({'background':'rgba(255, 212, 212, 0.33)'})
                $(".user_login").css({'background':'rgba(45, 45, 45, 0.15)'})
            },
            //验证码登录
            tel_logins(){
                if(this.telephone && this.code){
                    this.$http.get(baseurl + 'v1/register/login',{params:{username: this.telephone,code:this.code}}).then((response)=>{
                        if(response.data == 1){
                            toastr.warning('该用户不存在')
                        }else if(response.data == 2){
                            toastr.warning('验证码输入错误')
                        }else if(response.data == 0){
                            document.cookie = "tel=" + this.telephone + "; ";
                            window.location.href="/";
                        }
                    })
                }else{
                    toastr.warning('请填写正确信息')
                }
            },
            //密码登录
            user_logins(){
                if(this.username && this.password){
                    this.$http.post(baseurl + 'v1/register/loginuser',{username: this.username,password:this.password,checked:this.checked},{emulateJSON: true}).then((response)=>{
                        if(response.data == 1){
                            toastr.warning('该用户不存在')
                        }else if(response.data == 2){
                            toastr.warning('密码错误')
                        }else if(response.data == 3){
                            toastr.warning('请不要重复登录')
                        }else if(response.data == 10){
                            var d = new Date();
                            d.setTime(d.getTime() + (1000 * 60 * 60 * 24 * 7));
                            var expires = "expires=" + d.toUTCString();
                            document.cookie = "tel=" + this.username + "; " + expires;
                            window.location.href="/";
                        }else if(response.data == 11){
                            document.cookie = "tel=" + this.username + "; ";
                            window.location.href="/";
                        }
                    })
                }else{
                    toastr.warning('请填写正确信息')
                }
            },
            //验证手机号码
            inputfunc(){
                var reg=/^1[3456789]\d{9}$/;
                if(!reg.test(this.telephone)){
                    console.log('请输入正确的手机号码');
                }
            },
            //发送验证码
            sendcode(){
                if(this.telephone){
                    var reg=/^1[3456789]\d{9}$/;
                    if(!reg.test(this.telephone)){
                        alert('请输入正确的手机号码');
                    }
                    this.$http.get(baseurl + 'v1/code/codetel',{params:{telephone: this.telephone}}).then((response)=>{
                        if(response.data == 1){
                            this.$http.get(baseurl + 'v1/code/sendcode',{params:{username: this.telephone}}).then((response)=>{

                            })
                        }else if(response.data == 2){
                            alert('暂无该用户');
                        }
                    })
                }else{
                    alert('请输入手机号码')
                }
            },
        }
    }
</script>
<style scoped>
    html body{margin:0px;padding:0px}
    .back-img{
        width:100%;
        height:100%;
        position:fixed;
        background-repeat: no-repeat;
        background-size:100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .page-container{
        width:100%;
        height:100%;
        position:fixed;
        background-repeat: no-repeat;
        background-size:100% 100%;
        padding-top:10%;
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
        color: #fff;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        -webkit-transition: all .2s;
    }
    input::-webkit-input-placeholder {
        color: rgb(255,255,255);
        font-size: 12px;
        text-align: left;
    }
    button{
        cursor: pointer;
        width: 300px;
        height: 44px;
        margin-top: 25px;
        padding: 0;
        background: #ef4300;
        border: 1px solid #ff730e;
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
</style>
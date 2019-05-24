<template>
    <div>
        <div class="back-img">
            <img  style="" :src="img_info" alt="">
        </div>
        <div class="page-container">
            <div class="page-container-div">
                <a href="/"><img src="../assets/images/logo.png" alt="" width="146px"></a>
                <h1 style="color:rgb(255,255,255)">注册</h1>
                <input class="input" v-model="username" placeholder="请输入手机号码"><br>
                <input class="input" type="password" v-model="password" placeholder="请输入密码"><br>
                <div style="width:300px;display: inline-block;">
                    <input class="input" v-model="code" placeholder="请输入验证码" style="width:69%">
                    <button style="width:29%" @click="sendcode()">获取验证码</button>
                </div>
                <br>
                <div style="width:300px;display: inline-block;margin-top: 20px;">
                    <input type="checkbox" id="checkbox" v-model="checked"><span style="color:rgb(255,255,255)">记住密码?</span>
                </div>
                <br>
                <button @click="sign()">注册/登录</button>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    const baseurl = 'https://api.zaoanart.com/';
    export default {
        name: 'Sign',
        data(){
            return{
                username : '',
                password : '',
                code : '',
                checked : '',
                img_info:[]
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
            sendcode(){
                if(this.username){
                    var reg=/^1[3456789]\d{9}$/;
                    if(!reg.test(this.username)){
                        toastr.warning('请输入正确的手机号码');
                    }
                    this.$http.get(baseurl + 'v1/code/sendcode',{params:{username: this.username}}).then((response)=>{

                    })
                }else{
                    toastr.warning('请输入手机号码')
                }
            },
            sign(){
                this.$http.get(baseurl + 'v1/register/register',{params:{username: this.username,password:this.password,code: this.code,checked: this.checked}}).then((response)=>{
                    if(response.data == 0){
                        //用户创建成功,跳转个人中心
                        window.location.href="/#/home";
                    }else if(response.data == 1){
                        toastr.warning('手机号码已经注册')
                    }else if(response.data == 2){
                        toastr.warning('验证码输入错误')
                    }
                })
            }
        }
    }
</script>
<style scoped>
    html,body{height: 100%;margin:0px;padding:0px;margin: 0 auto}
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
        padding-top:10%
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
</style scoped>
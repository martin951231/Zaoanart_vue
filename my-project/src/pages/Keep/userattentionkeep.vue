<template>
    <div style="height:100%">
        <HeadPage></HeadPage>
        <div class="lanmu clearfix">
            <div style="display: inline-block;float: left;">
                <h1 style="text-align: left;">{{user_name.username}}</h1>
                <div style="display:inline-block;text-align: left;">
                    <div style="font-size: 30px;">{{user_name.my_attention}}</div>
                    <p style="display:inline-block;font-size: 13px;">TA关注的收藏夹</p>
                </div>
                <a :href="'/#/keep/userattentionuser?id='+user_name.uid">
                    <div style="display:inline-block;text-align: left;color:#000">
                        <div style="font-size: 30px;">{{user_name.attention_user_num}}</div>
                        <p style="display:inline-block;font-size: 13px;">TA关注的人</p>
                    </div>
                </a>
            </div>
            <div style="display: inline-block;float: right;">
                <div style="width:100px;height:100px;overflow: hidden;border-radius: 50%;">
                    <img :src="user_name.icon" alt="" width="100px" height="auto">
                </div>
            </div>
        </div>
        <div style="text-align: left;width:1200px;margin: 10px auto;font-size: 25px;">TA关注的收藏夹</div>
        <div style="text-align: left;width:1200px;margin: 0px auto;min-height: -webkit-fill-available;" class="clearfix">
            <div :id="'keep'+keep[0].id" class="keeps" v-for="keep in keepinfo">
                <template v-if="(keep[0].img_ratio == 1)">
                    <div>
                        <a :href="'/#/keep/keepimg?id='+keep[0].keep_id" target="_blank">
                            <div class="keep gallery1" :id="keep[0].id">
                                <div id="gallery_id">
                                    <img v-if="(keep[0])" :src="keep[0].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                    <img v-if="(keep[1])" :src="keep[1].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                    <img v-if="(keep[2])" :src="keep[2].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                    <img v-if="(keep[3])" :src="keep[3].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:96px;height:96px;">
                                </div>
                            </div>
                        </a>
                        <span class="keeps_name">{{keep[0].keep_name}}</span>
                            <div style="color: #ccc;display: flex;align-items: center;">
                                {{keep[0].attention_num}}个收藏
                                <div v-if="(keep[0].is_attention==2)" class="attention_btn" @click="del_attention(keep[0].keep_id)" >已关注</div>
                                <div v-if="(keep[0].is_attention==1)" @click="add_attention(keep[0].keep_id)" style="cursor: pointer;color:#000;border:1px solid #000;margin:2px 10px;float:right;font-size: 13px;padding: 2px 10px;background-color: #fff;">+关注</div>
                            </div>
                    </div>
                </template>
                <template v-if="(keep[0].img_ratio == 2)">
                    <a :href="'/#/keep/keepimg?id='+keep[0].keep_id" target="_blank" style="'text-decoration:none;">
                        <div class="keep gallery1" :id="keep[0].id">
                            <div id="gallery_id">
                                <img v-if="(keep[0])" :src="keep[0].image+'?imageView2/1/w/400/h/250'" style="margin: 2px;float: left;width:200px;height:130px;">
                                <img v-if="(keep[1])" :src="keep[1].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:63px;height:65x;">
                                <img v-if="(keep[2])" :src="keep[2].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:63px;height:65px;">
                                <img v-if="(keep[3])" :src="keep[3].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:63px;height:65px;">
                            </div>
                        </div>
                    </a>
                    <span class="keeps_name">{{keep[0].keep_name}}</span>
                        <div style="color: #ccc;display: flex;align-items: center;">
                            {{keep[0].attention_num}}个收藏
                            <div v-if="(keep[0].is_attention==2)" class="attention_btn" @click="del_attention(keep[0].keep_id)">已关注</div>
                            <div v-if="(keep[0].is_attention==1)" @click="add_attention(keep[0].keep_id)" style="cursor: pointer;color:#000;border:1px solid #000;margin:2px 10px;float:right;font-size: 13px;padding: 2px 10px;background-color: #fff;">+关注</div>
                        </div>
                </template>
                <template v-if="(keep[0].img_ratio == 3)">
                    <a :href="'/#/keep/keepimg?id='+keep[0].keep_id" target="_blank">
                        <div class="keep gallery1" :id="keep[0].id">
                            <div id="gallery_id">
                                <img v-if="(keep[0])" :src="keep[0].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:121px;height:100px;">
                                <img v-if="(keep[1])" :src="keep[1].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:71px;height:100px;">
                                <img v-if="(keep[2])" :src="keep[2].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:71px;height:100px;">
                                <img v-if="(keep[3])" :src="keep[3].image+'?imageView2/1/w/500/h/500'" style="margin: 2px;float: left;width:121px;height:100px;">
                            </div>
                        </div>
                    </a>
                    <span class="keeps_name">{{keep[0].keep_name}}</span>
                        <div style="color: #ccc;display: flex;align-items: center;">
                            {{keep[0].attention_num}}个收藏
                            <div v-if="(keep[0].is_attention==2)" class="attention_btn" @click="del_attention(keep[0].keep_id)" >已关注</div>
                            <div v-if="(keep[0].is_attention==1)" @click="add_attention(keep[0].keep_id)" style="cursor: pointer;color:#000;border:1px solid #000;margin:2px 10px;float:right;font-size: 13px;padding: 2px 10px;background-color: #fff;">+关注</div>
                        </div>
                </template>
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
        name: 'Userattentionkeep',
        data(){
            return{
                telphone:'',
                keepinfo:[],
                user_name:[],
                keepimg:[],
                keep_name:'',
                add_keep_name:'',
                info:''
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
                this.info = arr2
                if(arr2){
                    this.$http.get(this.GLOBAL.baseurl + 'v1/home/getusername1',{params:{uid: arr2['id']}}).then((response)=>{
                        this.user_name = response.data
                        console.log(response.data)
                    })
                    this.$http.get(this.GLOBAL.baseurl + 'v1/home/userattenkeep',{params:{tel: this.telphone,uid: arr2['id']}}).then((response)=>{
                        this.keepinfo = response.data
                        console.log(response.data)
                    })
                }
            },
            //取消关注收藏夹
            del_attention(keep_id){
                var vm = this
                vm.$http.get(vm.GLOBAL.baseurl + 'v1/home/del_attention_keep',{params:{keep_id:keep_id,tel: vm.telphone}}).then((response)=>{
                    if(response.data == 1){
                        toastr.info("取消关注成功")
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/home/userattenkeep',{params:{tel: vm.telphone,uid: vm.info.id}}).then((response)=>{
                            vm.keepinfo = response.data
                        })
                    }else if(response.data == 2){
                        toastr.warning("取消关注失败")
                    }else if(response.data == 3){
                        toastr.warning("该收藏夹没有关注")
                    }
                })
            },
            //关注收藏夹
            add_attention(keep_id){
                var vm = this
                vm.$http.get(vm.GLOBAL.baseurl + 'v1/home/add_attention_keep',{params:{keep_id:keep_id,tel: vm.telphone}}).then((response)=>{
                    if(response.data == 1){
                        toastr.info("关注成功")
                        vm.$http.get(vm.GLOBAL.baseurl + 'v1/home/userattenkeep',{params:{tel:vm.telphone,uid: vm.info.id}}).then((response)=>{
                            vm.keepinfo = response.data
                        })
                    }else if(response.data == 2){
                        toastr.warning("关注失败")
                    }else if(response.data == 3){
                        toastr.warning("该收藏夹已经关注了")
                    }
                })
            }
        }
    }
</script>
<style>
    html,body{height: 100%;margin:0px;padding:0px;margin: 0 auto}
    a{padding:0;margin:0;text-decoration:none}
    a:hover {
        color: #000;
        text-decoration: none;
    }
    span{text-decoration:none}
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
    .attention_btn{
        cursor: pointer;
        color:#fff;
        border:1px solid #000;
        margin:2px 10px;
        float:right;
        font-size: 13px;
        padding: 2px 10px;
        background-color: #000;
    }
    .keeps_name{
        color: black;
        font-size: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        display: inline-block;
        overflow: hidden;
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
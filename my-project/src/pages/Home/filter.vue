<template>
    <div id="history" style="height: 100%;">
        <input type="hidden" value="艺术,早安,早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧">
        <h1 style="display: none;position: absolute;">艺术,早安,早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧</h1>
        <HeadPage></HeadPage>
        <h3 style="text-align: left;padding-left: 150px">保存的效果</h3>
        <div id="history_info" style="min-height: 100%;padding: 0 100px;">
                <div id="history_data" v-for="(filter_infos,date_arr) in filter_info">
                    <span style="border-bottom: 1px solid #8c8585;display: block;">{{date_arr}}</span>
                    <div style="display:inline-block;padding: 30px;" class="filter_div">
                        <div v-for="(filter_infos,img_arr) in filter_infos" class="history_img" @mouseenter="shows($event)" @mouseleave="hiddens($event)" >
                            <img src="../../assets/images/del_filter.png" width="35" class="del_filter_img" style="position: absolute;right: 0;display:none" @click="del_filter($event,filter_infos.id)">
                            <a target="_blank" :href="'/#/Decoration?img='+filter_infos.image+'&max_width='+filter_infos.max_width+'&max_height='+filter_infos.max_height+'&imgid='+filter_infos.imgid+''">
                                <img :src="filter_infos.filter_img" alt="艺术,早安,早安艺术,article,早安art,ZaoanArt,专业软装装饰画方案解决，海量图库供您挑选,更有强大的自助装裱功能,找图,装裱快来早安艺术吧"  style="width:100%;margin: 10px;min-width: 250px;">
                            </a>
                        </div>
                    </div>
                </div>
        </div>
        <LabelLeft></LabelLeft>
        <Foot style="clear: both;"></Foot>
    </div>
</template>
<script>
    import HeadPage from "../../components/HeadPage";
    import LabelLeft from "../../components/LabelLeft"
    import Foot from "../../components/Foot";
    import axios from 'axios';
    export default {
        name: 'Filter',
        data(){
            return{
                login_phone:'',
                new_pwd:'',
                telphone_model:'',
                user_info:[],
                keep_info:[],
                keep_option:'',
                filter_info:[],
                keep_name:'',
            }
        },
        components: {
            HeadPage,LabelLeft,Foot
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
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
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
            show_history(){
                this.$http.get(this.GLOBAL.baseurl + 'v1/home/get_filter',{params:{tel:this.login_phone}}).then((response)=>{
                    this.filter_info = response.data
                })
            },
            to_sanji(id){
                let routeData = this.$router.resolve({path:"/sanjiye?id="+id})
                window.open(routeData.href, '_blank');
            },
            shows(e){
                $(e.target).children('.del_filter_img').fadeIn(50)
            },
            hiddens(e){
                $(e.target).children('.del_filter_img').fadeOut(50)
            },
            del_filter(e,id){
                if(this.login_phone){
                    this.$http.post(this.GLOBAL.baseurl + 'v1/home/del_filter_img',{tel:this.login_phone,id:id},{emulateJSON: true}).then((response)=>{
                        if(response.data){
                            $(e.target).parent('.history_img').remove()
                            toastr.info("删除成功")
                        }
                    })
                }else{
                    alert('请登录')
                    window.location.href="/#/login";
                }
            }
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
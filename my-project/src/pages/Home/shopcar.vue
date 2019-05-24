<template>
    <div id="shopcar_div">
        <HeadPage></HeadPage>
        <div id="shopcar_info"  style="min-height: -webkit-fill-available;padding: 0 100px;">
            <div id="shopcar" >
                <table class="table table-hover">
                    <tr>
                        <td>id</td>
                        <td>图片ID</td>
                        <td>卡纸颜色</td>
                        <td>边框</td>
                        <td>预览图</td>
                        <td>图片宽(cm)</td>
                        <td>图片高(cm)</td>
                        <td>框宽(cm)</td>
                        <td>框高(cm)</td>
                        <td>装裱方式</td>
                        <td>画芯材质</td>
                        <td>画芯留边值(cm)</td>
                        <td>画芯偏移值(cm)</td>
                        <td>画芯偏移方向</td>
                        <td>留边偏移值(cm)</td>
                        <td>留边偏移方向</td>
                        <td>画芯价格(元)</td>
                        <td>装裱价格(元)</td>
                        <td>总价(元)</td>
                        <td>状态</td>
                        <td>操作</td>
                    </tr>
                    <tbody>
                    <tr v-for="shopcar_info in shopcar_info">
                        <td class="info_td">{{shopcar_info.id}}</td>
                        <td class="info_td">{{shopcar_info.goods_id}}</td>
                        <td class="info_td">{{shopcar_info.color}}</td>
                        <td class="info_td">{{shopcar_info.box_name}}</td>
                        <td class="info_td">
                            <img :src="shopcar_info.img_url" alt="" width="50px">
                        </td>
                        <td class="info_td">{{shopcar_info.img_width}}</td>
                        <td class="info_td">{{shopcar_info.img_height}}</td>
                        <td class="info_td">{{shopcar_info.box_width}}</td>
                        <td class="info_td">{{shopcar_info.box_height}}</td>
                        <td class="info_td">{{shopcar_info.decoration_status}}</td>
                        <td class="info_td">{{shopcar_info.core_material}}</td>
                        <td class="info_td">{{shopcar_info.drawing_core_val}}</td>
                        <td class="info_td">{{shopcar_info.core_offset}}</td>
                        <td class="info_td">{{shopcar_info.core_offset_direction}}</td>
                        <td class="info_td">{{shopcar_info.core_shift_val}}</td>
                        <td class="info_td">{{shopcar_info.core_shift_direction}}</td>
                        <td class="info_td">{{shopcar_info.core_price}}</td>
                        <td class="info_td">{{shopcar_info.decoration_price}}</td>
                        <td class="info_td">{{shopcar_info.total_price}}</td>
                        <td class="info_td" v-if="shopcar_info.status == 0">待下单</td>
                        <td class="info_td" v-if="shopcar_info.status == 1">已下单</td>
                        <td class="info_td">
                            <button class="excel_btn" style="padding:5px;background-color:#ccc;border: none;cursor: pointer;margin-bottom:5px" @click="to_excel($event,shopcar_info)">下单</button>
                            <button class="excel_btn" style="padding:5px;background-color:#ccc;border: none;cursor: pointer;"@click="download_excel(shopcar_info.excel_name)">下载</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Foot style="margin-top:30px;clear: both;"></Foot>
    </div>
</template>
<script>
    import HeadPage from "../../components/HeadPage";
    import Foot from "../../components/Foot";
    import axios from 'axios';
    const baseurl = 'https://api.zaoanart.com/';
    const excelurl = 'https://www.zaoanart.com/resource/excel/'
    // const excelurl = 'http://zaoanyishu.backends.com/excel/'
    export default {
        name: 'shopcar',
        data(){
            return{
                login_phone:'',
                user_info:[],
                shopcar_info:[],
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
                    this.$http.post(baseurl + 'v1/home/homeinfo',{username:this.login_phone},{emulateJSON: true}).then((response)=>{
                        this.user_info = response.data
                    })
                    this.find_car()
                }else{
                    alert('请登录')
                    window.location.href="/#/login";
                }
            },
            show_hidden(e){
                if(!this.login_phone){
                    toastr.warning("请先登录")
                    return false
                }
                this.$http.get(baseurl + 'v1/home/select_keep',{params:{tel:this.login_phone}}).then((response)=>{
                    this.keep_info = response.data
                })
            },
            //查询购物车数据
            find_car(){
                this.$http.get(baseurl + 'v1/home/find_car',{params:{tel:this.login_phone}}).then((response)=>{
                    this.shopcar_info = response.data
                })
            },
            //生成表格
            to_excel(e,data){
                this.$http.post(baseurl + 'v1/home/to_excel',{data:data},{emulateJSON: true}).then((response)=>{
                    if(response.data == 1){
                        alert('订单已生成,请直接下载')
                    }else{
                        alert('订单生成成功')
                    }
                    // $(e.target).next().attr('href','http://localhost/yii-application/backend/web/excel/'+response.data)
                })
            },
            //下载表格
            download_excel(excel_name){
                if(excel_name){
                    window.open(excelurl+excel_name)
                }else{
                    alert('请先生成订单再点击下载')
                }
            }
        }
    }
</script>
<style scoped>
    html body{margin:0px;padding:0px;height:100%}
    ul li{list-style:none;}
    a:hover{text-decoration:none;}
    a{color:black}
    #shopcar_info{
        margin-top:15px;
    }
    .info_td:hover{
        background-color: #ea8010;
    }
    .info_td{
        cursor: inherit;
    }

</style>
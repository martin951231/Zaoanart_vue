<template >
    <div>
        <div class="carousel" @mouseenter="enter" @mouseleave="leave">
            <transition-group id='tansi' tag="ul" name="image" enter-active-class="lightSpeedIn image-enter-active" leave-active-class="lightSpeedOut image-leave-active">
                <li v-for='(image,index) in img' :key='index' v-show="index === mark">
                    <a href="javascript:;">
                        <img :src="image" style="width:100%;">
                    </a>
                </li>
            </transition-group>
            <div class="bullet">
                <span v-for="(item,index) in img.length" :class="{'active':index === mark}"
                      @click="change(index)" :key="index"></span>
            </div>
            <div class="switch">
                <span class="prev" @click="prev">&lt;</span>
                <span class="next" @click="next">&gt;</span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                mark:0,
                img:[
                    // 'http://118.178.89.229/resource/ad/2017-05-22/5922b94b71204.jpg',
                    // 'http://118.178.89.229/resource/ad/2017-05-22/5922b97ef1ddc.jpg',
                    // 'http://118.178.89.229/resource/ad/2017-05-22/5922b973b8329.jpg',
                    // 'http://118.178.89.229/resource/ad/2017-05-22/5922bbfbed433.jpg'
                ],
                time:null,
            }
        },
        mounted(){
            this.$http.get(this.GLOBAL.baseurl + 'v1/home/findlunbotu').then((response)=>{
                for(var i=0;i<response.data.length;i++){
                    response.data[i] = 'http://qiniu.zaoanart.com/'+response.data[i]
                }
                this.img = response.data
            })
        },
        methods:{
            change(i){
                this.mark = i;
            },
            prev(){
                this.mark--;
                if(this.mark === -1){
                    this.mark = 3;
                    return
                }
            },
            next(){
                this.mark++;
                if(this.mark === 4){
                    this.mark = 0;
                    return
                }
            },
            autoPlay(){
                this.mark++;
                if(this.mark === 4){
                    this.mark = 0;
                    return
                }
            },
            play(){
                this.time = setInterval(this.autoPlay,3000);
            },
            enter(){
                clearInterval(this.time);
            },
            leave(){
                this.play();
            }
        },
        created(){
            this.play()
        },
    }
</script>
<style scoped>
    /*@import '../../assets/css/animate.min.css';*/
    body{width:100%;padding:0;mergin:0;}
    ul li{padding:0;mergin:0;list-style:none;}
    .carousel{
        height: 518px;
        overflow: hidden;
        margin: 100px auto;
        position: relative;
        margin-top:12px;
        z-index:1;
    }
    .carousel ul{
        width:1200px;
        height: 100%;padding:0;margin:0;
    }
    .carousel ul li{
        /*margin-left: -600px;*/
        width:100%;
        position: absolute;
    }
    .carousel ul li a img{
    }
    .bullet{
        position: absolute;
        font-size: 0;
        bottom: 20px;
        left: 50%;
        margin-left: -42px;
    }
    .bullet span{
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #ffffff;
        margin-left: 15px;
    }
    .bullet span:first-child{
        margin-left: 0;
    }
    .switch span{
        position: absolute;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: rgba(0,0,0,.1);
        font-size: 20px;
        color: #ffffff;
        top: 50%;
        margin-top: -25px;
        cursor: pointer;
        font-family: "宋体";
    }
    .switch span:hover{

        background-color: rgba(0,0,0,.5);

    }
    .prev{
        left: 0;
    }
    .next{
        right: 0;
    }
    .active{
        background-color: red !important;
    }
    .image-enter-active{
        transform:translateX(0);
        transition:all 1s ease;
    }
    .image-leave-active{
        transform:translateX(-100%);
        transition:all 1s ease
    }
    .image-enter-active-r{
        transform:translateX(100%);
        transition:all 1s ease;
    }
    .image-leave-active-r{
        transform:translateX(0);
        transition:all 1s ease
    }
    .image-enter{
        transform:translateX(100%);
    }
    .image-leave{
        transform:translateX(0);
    }
</style>
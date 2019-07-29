<template>
  <div>
     <div style="height:120px;background:#000;text-align:center;">
         <img src="../assets/images/zaoanart_logo_en_big.png" alt="" height="60" style="margin-top:30px">
         <img src="../assets/images/wechat_app.png" alt="" height="100" style="margin-top:10px;position: absolute;right: 20px;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
*{padding:0;margin:0;}
body{font-family:"微软雅黑";}
.container{width:1200px;margin:0 auto;position:relative;z-index:999;}
.xiala1,.xiala2,.xiala3,.xiala4{
	display:none;position:absolute;top:40px;left:0px;width:100px;padding:10px 0;
	border:1px solid #333;background:#000;color:#fff;opacity:0.8;
}
ul,li{
	list-style:none;
}
 .xiala1 li,.xiala2 li,.xiala3 li,.xiala4 li{
	margin-left:10px;float:left;margin-left:10px;padding:3px 0;
} 
.nav1,.nav2,.nav3,.nav4{float:left;margin-top:18px;position:relative;font-size:16px;}

@media (min-width:100px) {
	
}
 
@media (min-width:700px) {
	
 } 
 
@media (min-width:1200px) {
	.nav1,.nav2,.nav3,.nav4{padding-right:40px;}
}
</style>

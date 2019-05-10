
<template>
    <div style="widht:1200px;margin:0 auto;">
        <div class="tabs" style="width:1200px;border:1px solid #e6e6e6;margin:0 auto;height:40px;line-height:40px;font-size:14px;">
            <div class="tab" @click="toggleTab('prince')"><a>商品详情</a></div>
            <div class="tab" @click="toggleTab('rose')"><a>相关商品</a></div>
            <div class="tab" @click="toggleTab('fox')"><a>物流与包装</a></div>
        </div>
        <prince :is="currentTab" keep-alive style="width:1200px;margin:0 auto;text-align:left;border:1px solid #e6e6e6;"></prince>
    </div>
</template>

<script>
    import prince from './tab/prince';
    import rose from './tab/rose';
    import fox from './tab/fox';
    export default {
        data () {
            return {
                currentTab: 'prince'  // currentTab 用于标识当前触发的子组件
            };
        },
        components: {  // 声明子组件
            prince,
            rose,
            fox
        },
        methods: {
            toggleTab: function(tab) {
                this.currentTab = tab;  // tab 为当前触发标签页的组件名
            }
        }
    }
</script>
<style scoped>
    .tab{float:left;margin:0 10px;text-align:center;padding-left:5px;padding-right:5px;}
    a:not([href]):not([tabindex]):hover{color:red;border-top:2px solid red;padding-top:12px;}
    @media (min-width:700px) {
        .shangpingxiangq{width:700px;margin-left:0;}
    }

    @media (min-width:1200px) {
        .shangpingxiangq{width:1200px;margin:0 auto;}
    }
</style>
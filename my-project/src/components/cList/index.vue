<template>
    <div class="twolist-page">
        <div class="list-item-wrap" v-for="(item,index) in listContData" :key="index">
            <router-link class="list-item navigator" :to="'/pages/product/detail/detail?productId=' + item.id">
                <div class="list-img">
                    <div class="list-num" v-if="!item.storeNum||item.storeNum==0">售罄</div>
                    <img class="image" mode="widthFix" :src="item.mobilePicture"></img>
                </div>                
                <div class="list-cont">
                    <div class="list-tit">{{item.longName}}</div>
                    <div class="list-price">
                        <div class="list-saleprice">￥{{item.salePrice}}</div>
                        <div class="list-discount" v-if="item.discount!=10&&item.discount!=0">{{item.discount}}折</div>
                    </div>
                    <div class="list-orignprice" :class="item.discount<10?'':'no-list-orignprice'">¥{{item.originPrice}}</div>
                </div>
            </router-link>
        </div>
        <zanLoadmore class="loading" v-bind:style="{display: hidden?'none':'',}" >
            <div class="text loading-font" style="font-size:30px;">加载中...</div>
        </zanLoadmore>
        <div class="zan-loadmore zan-loadmore--nodata" v-if="!listContData">
            <div class="zan-loadmore__tips">暂无数据</div>
        </div>
    </div>
</template>
<script>
  import { create } from '../utils'
  export default create({
        name: 'twolist',
        props: {
          listContData:Array,
          hidden:Boolean
        }
    })
</script>
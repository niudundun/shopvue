<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-jianhao" v-show="food.count" @click="updateCount(false)"></div>
    </transition>
    <div class="cart-count" v-show="food.count" >{{food.count}}</div>
    <div class="iconfont icon-iconfontadd" @click="updateCount(true)"></div>
  </div>
</template>

<script>
import {ADD_SHOPCOUNT, DEL_SHOPCOUNT} from '../../store/mutation-types'
  export default {
    props:{
      food:{
        type:Object,
        required:true
      }
    },
    methods:{
      updateCount(move){
        if(move){
          this.$store.commit(ADD_SHOPCOUNT,{food:this.food})
        }else{
          this.$store.commit(DEL_SHOPCOUNT,{food:this.food})
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .icon-jianhao
      padding 4px
      color $green
      transform translateX(0px)
      &.move-enter-active,&.move-leave-active
        transition all 1s
      &.move-enter,&.move-leave-to
        opacity 0
        transform translateX(20px) rotate(180deg)
    .cart-count
      display: inline-block
      width: 14px
      text-align: center
      font-size: 14px
      color: rgb(147, 153, 159)
      margin 0 8px
    .icon-iconfontadd
      padding: 4px
      color $green
    .iconfont
      display: inline-block
      border 2px solid $green
      border-radius 50%
      font-size 10px

 
</style>

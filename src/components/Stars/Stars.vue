<template>
  <div class="star star-24">
    <span class="star-item" :class="star" v-for="(star,index) in starsArr" :key="index"></span>
  </div>
</template>

<script >
export default {
  props:{
    rating:{
      type:Number,
      required:true
    }
  },
  computed:{
    starsArr(){
      let {rating} = this
      let starArr=[]
      let onCount = Math.floor(rating)
      for (var i = 0; i < onCount; i++) {
        starArr.push('on')
      }
      rating - onCount !== 0 && starArr.push('half')
      while(starArr.length<5){
        starArr.push('off')
      }
      return starArr
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.star { // 2x图 3x图
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('../../common/images/stars/star48_on');
      }

      &.half {
        bg-image('../../common/images/stars/star48_half');
      }

      &.off {
        bg-image('../../common/images/stars/star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('../../common/images/stars/star36_on');
      }

      &.half {
        bg-image('../../common/images/stars/star36_half');
      }

      &.off {
        bg-image('../../common/images/stars/star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('../../common/images/stars/star24_on');
      }

      &.half {
        bg-image('../../common/images/stars/star24_half');
      }

      &.off {
        bg-image('../../common/images/stars/star24_off');
      }
    }
  }
}
</style>

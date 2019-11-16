import Vue from "vue";
import { getShopDatas } from "../../api";
import { SAVE_SHOPDATAS,ADD_SHOPCOUNT,DEL_SHOPCOUNT,CLEAR_SHOPCAR,SAVE_SHOPCAR } from "../mutation-types";

export default {
  state:{
    shopDatas:{},
    shopCar:[]
  },
  mutations:{
    [SAVE_SHOPDATAS](state,{shopDatas}){
      state.shopDatas = shopDatas
    },
    [SAVE_SHOPCAR](state,{shopCar}){
      state.shopCar = shopCar
    },
    [ADD_SHOPCOUNT](state,{food}){
      if(food.count){
        food.count++
      }else{
        Vue.set(food,'count',1)
        state.shopCar.push(food)
      }
    },
    [DEL_SHOPCOUNT](state,{food}){
      if(food.count){
        food.count--
        if(!food.count){
          state.shopCar.splice(state.shopCar.indexOf(food),1)
        }
      }
    },
    [CLEAR_SHOPCAR](state){
      state.shopCar.forEach(food => food.count = 0)
      state.shopCar = []
    }
  },
  actions:{
    async getShopDatas ({commit}){
      let result = await getShopDatas()
      if(result.code === 0 ){
        commit(SAVE_SHOPDATAS,{shopDatas:result.data})
      }
    }
  },
  getters:{
    totalCount(state){
      return state.shopCar.reduce((pre,food)=>{
        return pre += food.count
      },0)
    },
    totalPrice(state){
      return state.shopCar.reduce((pre,food)=>{
        return pre += food.count * food.price
      },0)
    }
  }
}
import Vue from "vue";
import { getShopDatas } from "../../api";
import { SAVE_SHOPDATAS,ADD_SHOPCOUNT,DEL_SHOPCOUNT } from "../mutation-types";

export default {
  state:{
    shopDatas:{}
  },
  mutations:{
    [SAVE_SHOPDATAS](state,{shopDatas}){
      state.shopDatas = shopDatas
    },
    [ADD_SHOPCOUNT](state,{food}){
      if(food.count){
        food.count++
      }else{
        Vue.set(food,'count',1)
      }
    },
    [DEL_SHOPCOUNT](state,{food}){
      if(food.count){
        food.count--
      }
    },
  },
  actions:{
    async getShopDatas ({commit}){
      let result = await getShopDatas()
      if(result.code === 0 ){
        commit(SAVE_SHOPDATAS,{shopDatas:result.data})
      }
    }
  },
  getters:{}
}
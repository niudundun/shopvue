import { getAddress, getCategorys,getShops } from "../api";
import { SAVE_ADDRESS,SAVE_CATEGORYS,SAVE_SHOPS } from "./mutation-types";

export default{
  async getAddressAction({commit,state}){
    let result = await getAddress(state.latitude,state.longitude)
    if(result.code === 0 ){
      commit(SAVE_ADDRESS,{address:result.data})
    }
  },
  async getCategorysAction({commit},fn){
    let result = await getCategorys()
    if(result.code ===0 ){
      commit(SAVE_CATEGORYS,{categorys:result.data})
      typeof fn === 'function' && fn() 
    }
  },
  async getShopsAction({commit,state}){
    let result = await getShops(state.latitude,state.longitude)
    if(result.code === 0 ){
      commit(SAVE_SHOPS,{shops:result.data})
    }
  }
}
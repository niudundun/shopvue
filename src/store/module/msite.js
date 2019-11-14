import{ SAVE_ADDRESS,SAVE_CATEGORYS }from './mutation-types'
import { getAddress, getCategorys } from "../api";

export default{
  state:{
    address:{},
    categorys:[],
  },
  mutations:{
    [SAVE_ADDRESS](state,{address}){
      state.address = address
    },
    [SAVE_CATEGORYS](state,{categorys}){
      state.categorys = categorys
    },
  },
  actions:{

  },
  getters:{}
}
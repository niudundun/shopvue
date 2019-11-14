import{ SAVE_USER,SAVE_TOKEN }from './mutation-types'
import { autoLogin } from "../api";


export default{
  state:{
    user:{},
    token:''
  },
  mutations:{
    [SAVE_USER](state,{user}){
      state.user = user
    },
    [SAVE_TOKEN](state,{token}){
      localStorage.setItem('token_key',token)
      state.token = token
    },
  },
  actions:{

  },
  getters:{}
}
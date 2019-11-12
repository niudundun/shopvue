import{
  SAVE_ADDRESS,
  SAVE_CATEGORYS,
  SAVE_SHOPS,
  SAVE_USER,
  SAVE_TOKEN,
  LOGOUT
}from './mutation-types'

export default{
  [SAVE_ADDRESS](state,{address}){
    state.address = address
  },
  [SAVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [SAVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [SAVE_USER](state,{user}){
    state.user = user
  },
  [SAVE_TOKEN](state,{token}){
    localStorage.setItem('token_key',token)
    state.token = token
  },
  [LOGOUT](state){
    localStorage.removeItem('token_key')
    state.user = {}
    state.token = ''
  },
}
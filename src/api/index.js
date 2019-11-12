import ajax from "./ajax";

export const getAddress = (latitude,longitude) => ajax({
  url:`/position/${latitude},${longitude}`
})

export const getCategorys = () => ajax({
  url:'/index_category',
  headers:{
    needToken:true
  }
})

export const getShops = (latitude,longitude) => ajax({
  url:'/shops',
  paramas:{
    latitude,
    longitude
  },
  headers:{
    needToken:true
  }
})

export const loginWithPwd = (name,pwd,captcha) => ajax({
  url:'/login_pwd',
  method:'POST',
  data:{
    name,
    pwd,
    captcha
  }
})

export const loginWithSms = (phone,code) => ajax({
  url:'/login_sms',
  method:'POST',
  data:{
    phone,
    code
  }
})

export const getSendCode = (phone) => ajax({
  url:'/sendcode',
  params:{
    phone
  }
})

export const autoLogin = () => ajax({
  url:'/auto_login',
  headers:{
    needToken:true
  }
})
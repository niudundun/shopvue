import ajax from "./ajax";

export const getAddress = (latitude,longitude) => ajax({
  url:`/position/${latitude},${longitude}`
})

export const getCategorys = () => ajax('/index_category')

export const getShops = (latitude,longitude) => ajax({
  url:'/shops',
  paramas:{
    latitude,
    longitude
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
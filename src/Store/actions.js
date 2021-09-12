import {NEW_USER, LOGIN_USER, LOGOUT} from './actionsTypeConst'

export const actionNewUser = (userName)=>(dispatch)=>{
  dispatch( {type: NEW_USER, userName})
  dispatch(actionLogin(userName))
}

export const actionLogin = (userName)=>(dispatch)=>{
  dispatch( {type: LOGIN_USER, userName})
}

export const actionLogOut = ()=>({type: LOGOUT})


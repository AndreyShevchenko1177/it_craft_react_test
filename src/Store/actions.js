import moment from "moment";
import {
  NEW_USER,
  LOGIN_USER,
  LOGOUT,
  NEW_NOTE,
  RESTORE_NOTES,
  SAVE_NOTE,
} from './actionsTypeConst'

export const actionNewUser = (userName)=>(dispatch)=>{
  dispatch( {type: NEW_USER, userName})
  dispatch(actionLogin(userName))
}

export const actionLogin = (userName)=>(dispatch)=>{
  dispatch( {type: LOGIN_USER, userName})
  dispatch( {type: RESTORE_NOTES, userName})

}

export const actionLogOut = () => ({type: LOGOUT});

export const actionNewNote = () => ({
  type: NEW_NOTE,
  payload: {
    id: moment().format("YYYY/MM/DD_HH:mm:ss.SSS"),
    date: moment(),
    title: 'NO_TITLE__' + moment().format("YYYY/MM/DD_HH:mm:ss"),
    msg: ''
  }
});


export const actionSaveNote = (payload) => ({type: SAVE_NOTE, payload});



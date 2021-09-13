import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {
  NEW_USER,
  LOGIN_USER,
  LOGOUT,
  NEW_NOTE,
  RESTORE_NOTES,
} from './actionsTypeConst';




const userListReducer = (state, action) => {

  console.log('--ACTION--', action);

  if (state === undefined) {
    if (!localStorage.noteUsers || localStorage.noteUsers.length === 0) {
      localStorage.noteUsers = JSON.stringify([]);
      return [];
    }
    return JSON.parse(localStorage.noteUsers);
  }

  if (action.type === NEW_USER) {
    localStorage[action.userName] = JSON.stringify([]);
    let newState = [...state, action.userName.trim()];
    newState = newState.sort((a, b) => a > b ? 1 : -1);
    localStorage.noteUsers = JSON.stringify(newState);
    return newState;
  }

  return state;
};


const currentUserReducer = (state, action) => {

  if (state === undefined) {
    if (localStorage.currentUser) {
      return localStorage.currentUser;
    }
    return '';
  }

  if (action.type === LOGIN_USER) {
    localStorage.currentUser = action.userName;
    return action.userName;
  }

  if (action.type === LOGOUT) {
    localStorage.currentUser = '';
    return '';
  }

  return state;
};



const notesReducer = (state, action) => {

  if (state === undefined) {
    if (localStorage.currentUser) {
      action.type = RESTORE_NOTES;
      action.userName = localStorage.currentUser;
    } else return [];
  }

  if (action.type === NEW_NOTE) {
    let newState = [action.payload, ...state];
    localStorage[localStorage.currentUser] = JSON.stringify(newState);
    return newState;
  }

  if (action.type === RESTORE_NOTES) {
    let newState = [];
    try {
      newState = JSON.parse(localStorage[action.userName]);
    } catch (error) {
      console.log(error);
    }
    return newState;
  }

  if (action.type === LOGOUT) {
    return [];
  }

  return state
};


export const store = createStore(
  combineReducers({
    userList: userListReducer,
    currentUser: currentUserReducer,
    notes: notesReducer,
  }),
  applyMiddleware(thunk)
);

store.subscribe(() => {
  console.log('--STORE--', store.getState());
});

console.log('--STORE--', store.getState());

import { combineReducers, createStore } from 'redux';
import profileReduser                   from './profileReduser';
import dialogsReduser                   from './dialgosReduser';
import usersReducer                     from './usersReduser';
import authReduser                      from './authReduser';

let reducers = combineReducers(
  {
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage  : usersReducer,
    auth       : authReduser,
  });

let store = createStore(reducers);
window.store = store;
export default store;
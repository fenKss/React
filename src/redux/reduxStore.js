import {combineReducers, createStore} from 'redux';
import profileReduser                 from './profileReduser';
import dialogsReduser                 from './dialgosReduser';
import usersReducer                   from './usersReduser';

let reducers = combineReducers(
    {
      profilePage: profileReduser,
      dialogsPage: dialogsReduser,
      usersPage  : usersReducer,
    });

let store = createStore(reducers);
window.store = store;
export default store;
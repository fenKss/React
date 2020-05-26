import {combineReducers, createStore} from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialgosReduser';

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
});

let store = createStore(reducers);

export default store;
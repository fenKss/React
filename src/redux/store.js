import profileReduser from './profileReduser';
import dialogsReduser from './dialgosReduser';

let store = {
  _state: {
    profilePage: {
      newPostText: '',
      posts      : [
        {id: 1, message: `Hi, how are you`, likesCount: 0},
        {id: 2, message: `Hi, yo`, likesCount: 23},
      ],
    },
    dialogsPage: {
      newMessageBody: ``,
      dialogs       : [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera'},
      ],
      messages      : [
        {id: 1, message: `Hi Dima`},
        {id: 2, message: `Hi, how are you?`},
        {id: 3, message: `Hi from fenK`},
        {id: 4, message: `Hi bitch`},
        {id: 5, message: `Hi yo`},
      ],

    },
  },
  _callSubscriber() {
    return undefined;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },
  dispatch(action) { //{type:'ADD-POST'}

    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
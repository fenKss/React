const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

let store = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: `Hi, how are you`, likesCount: 0},
                {id: 2, message: `Hi, yo`, likesCount: 23},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Valera'},
            ],
            messages: [
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
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case CHANGE_TEXT_POST:
                this._changeTextPost(action.message);
                break;
            default:
                console.error('Invalid action type');
        }
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _changeTextPost(text) {
        this.getState().profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
}
export const addPostActionCreator = () => ({type: ADD_POST});

export const changeTextPostActionCreator = (message) => ({
    type: CHANGE_TEXT_POST,
    message: message,
})

export default store;
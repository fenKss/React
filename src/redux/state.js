import {rendererEntireTree} from '../render'

let state = {
    profilePage: {
        newPostText:"12s3",
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rendererEntireTree(state);
}
export const changeTextPost = (text) => {
    state.profilePage.newPostText = text;
    rendererEntireTree(state);
};
export default state;
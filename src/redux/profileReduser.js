const ADD_POST = 'ADD-POST',
    CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

let initState =  {
    newPostText: '',
        posts: [
        {id: 1, message: `Hi, how are you`, likesCount: 0},
        {id: 2, message: `Hi, yo`, likesCount: 23},
    ],
}

const profileReduser = (state = initState, action) => {
    const _addPost = () => {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
        },
        _changeTextPost = (text) => {
            state.newPostText = text;
        };

    switch (action.type) {
        case ADD_POST:
            _addPost();
            return state;
        case CHANGE_TEXT_POST:
            _changeTextPost(action.message);
            return state;
        default:
            return state;
    }
}

export default profileReduser;

export const addPostCreator = () => ({type: ADD_POST});
export const changeTextPostCreator = (message) => ({
    type: CHANGE_TEXT_POST,
    message: message,
});
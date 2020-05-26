const ADD_POST = 'ADD-POST',
    CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const profileReduser = (state, action) => {
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
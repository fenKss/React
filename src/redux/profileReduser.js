const ADD_POST = 'ADD-POST',
    CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

let initState =  {
    newPostText: '',
        posts: [
        {id: 1, message: `Hi, how are you`, likesCount: 0},
        {id: 2, message: `Hi, yo`, likesCount: 23},
    ],
}

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                newPostText: ``,
                posts: [...state.posts, newPost],
            }

        case CHANGE_TEXT_POST:
            return {
                ...state,
                newPostText: action.message,
            }
        default:
            return state;
    }
}

export default profileReducer;

export const addPostCreator = () => ({type: ADD_POST});
export const changeTextPostCreator = (message) => ({
    type: CHANGE_TEXT_POST,
    message: message,
});
import React from 'react';
import {addPostCreator, changeTextPostCreator} from '../../../redux/profileReduser';
import Posts from './Posts';


const PostsContainer = (props) => {
    let state = props.store.getState();

    const addPost = () => {
        let action = addPostCreator();
        props.store.dispatch(action);
    };

    const updateNewPostText = (text) => {
        let action = changeTextPostCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Posts onUpdateNewPostText={updateNewPostText} onAddPost={addPost} posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}/>
    )
};

export default PostsContainer;
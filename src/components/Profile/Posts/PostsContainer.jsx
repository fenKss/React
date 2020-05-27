import React from 'react';
import {addPostCreator, changeTextPostCreator} from '../../../redux/profileReduser';
import Posts from './Posts';
import StoreContext from '../../../StoreContext';


const PostsContainer = () => {


    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState();

            const addPost = () => {
                let action = addPostCreator();
                store.dispatch(action);
            };

            const updateNewPostText = (text) => {
                let action = changeTextPostCreator(text);
                store.dispatch(action);
            }
            return <Posts onUpdateNewPostText={updateNewPostText}
                          onAddPost={addPost}
                          posts={state.profilePage.posts}
                          newPostText={state.profilePage.newPostText}
            />

        }
        }

        </StoreContext.Consumer>
    )
};

export default PostsContainer;
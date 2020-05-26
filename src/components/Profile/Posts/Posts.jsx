import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'

const Posts = (props) => {
    let newPostElement = React.createRef();
    const addPost = (e) => {
        e.preventDefault();
        props.dispatch({
            type:"ADD-POST"
        });
    };

    let postsElements = props.posts.map(e => <Post message={e.message} likesCount={e.likesCount}/>);

    const onPostChange = () => {
        let value = newPostElement.current.value;
        props.dispatch({
            type:"CHANGE-TEXT-POST",
            message:value
        });
    }
    return (
        <div className={s.posts}>
            <div className={s.add_post}>
                <span>Posts</span>
                <form action="" onSubmit={addPost}>
                    <textarea ref={newPostElement} name="post[text]" id="post[text]" cols="30" rows="10"
                              value={props.newPostText} onChange={onPostChange}/>
                    <button>Add post</button>
                </form>
            </div>
            <div className={s.posts_items}>
                {postsElements}
            </div>
        </div>
    )
};

export default Posts;
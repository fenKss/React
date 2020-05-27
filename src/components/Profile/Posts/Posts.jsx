import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'


const Posts = (props) => {
    let newPostElement = React.createRef();
    let postsElements = props.posts.map(e => <Post message={e.message} likesCount={e.likesCount}/>);

    const onUpdateNewPostText = () =>{
        let text = newPostElement.current.value;
        props.onUpdateNewPostText(text);
    }
    const onAddPost = (e) =>{
        e.preventDefault();
        props.onAddPost();
    }
    return (
        <div className={s.posts}>
            <div className={s.add_post}>
                <span>Posts</span>
                <form action="" onSubmit={onAddPost}>
                    <textarea ref={newPostElement} name="post[text]" id="post[text]" cols="30" rows="10"
                              value={props.newPostText} onChange={onUpdateNewPostText}/>
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
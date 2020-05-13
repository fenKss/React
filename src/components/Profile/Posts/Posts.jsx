import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css"
const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.add_post}>
                <span>Posts</span>
                <form action="">
                    <textarea name="post[text]" id="post[text]" cols="30" rows="10"/>
                    <button>Add post</button>
                </form>
            </div>
            <div className={s.posts_items}>
                <Post text="Hi, how are you" likesCount="0"/>
                <Post text="Hi, yo" likesCount="23"/>
            </div>
        </div>
    )
};

export default Posts;
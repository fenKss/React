import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css"
const Posts = () => {
    let postsData = [
        {id:1, message:`Hi, how are you`, likesCount:0},
        {id:2, message:`Hi, yo`, likesCount:23},
    ]
    let postsElements = postsData.map(e => <Post message={e.message} likesCount={e.likesCount}/>);
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
                {postsElements}
            </div>
        </div>
    )
};

export default Posts;
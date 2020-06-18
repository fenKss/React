import React from 'react';
import s     from './Post.module.css';

const Post = (props) => {
  return (
      <div className={s.post}>
        <div className={s.avatar}>
          <img
              src="https://avatars1.githubusercontent.com/u/53806694?s=460&u=906e3b51f8b5a196c21664b36d8314d081a842a7&v=4"
              width="100px" height="100px" alt=""/>
        </div>
        <div className={s.text}>{props.message}</div>
        <div className={s.likes}>Likes: {props.likesCount}</div>
      </div>
  );
};
export default Post;
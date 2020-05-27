import {addPostCreator, changeTextPostCreator} from '../../../redux/profileReduser';
import Posts from './Posts';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) =>{
    const addPost = () => {
        let action = addPostCreator();
        dispatch(action);
    };

    const updateNewPostText = (text) => {
        let action = changeTextPostCreator(text);
        dispatch(action);
    }

    return {
        onUpdateNewPostText:updateNewPostText,
        onAddPost:addPost
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);
export default PostsContainer;
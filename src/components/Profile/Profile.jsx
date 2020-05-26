import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.state.posts}
                   dispatch={props.dispatch}
                   newPostText={props.state.newPostText}
            />
        </div>
    )
}
export default Profile;
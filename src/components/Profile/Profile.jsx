import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.state.posts}/>
        </div>
    )
}
export default Profile;
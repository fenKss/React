import React from "react";
import s from "./ProfileInfo.module.css"
const ProfileInfo = () =>{
    return (
        <div className={s.profile_info}>
            <div>
                <img src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" width="50%" alt=""/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;
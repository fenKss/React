import React     from 'react';
import s         from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader/>;

  return (
    <div className={s.profile_info}>
      <div>
        <img
          src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
          width="50%" alt=""/>
      </div>
      <div>
        <div>{props.profile.name}</div>
        <img src={props.profile.photoUrl} width="200px" alt=""/>
        <div>{props.profile.status}</div>
        <div>{props.profile.country}, {props.profile.city}</div>
      </div>
      </div>
  );
};

export default ProfileInfo;
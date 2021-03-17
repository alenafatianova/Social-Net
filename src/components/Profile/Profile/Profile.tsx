import React from "react";
import style from "../../../styles/Profile.module.css";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {UserProfileType} from '../../../redux/profile-reducer'


type ProfilePropsType = {
  profile: UserProfileType
  isAuth: boolean
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
}

export const Profile = React.memo((props: ProfilePropsType) => {

  return (
    <div className={style.mainContent}>
      <ProfileInfo 
          savePhoto={props.savePhoto} 
          isOwner={props.isOwner} 
          profile={props.profile} 
          status={props.status}  
          updateStatus={props.updateStatus} 
          />
      <MyPostsContainer  />
    </div>
  );
})

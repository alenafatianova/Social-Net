import React from "react";
import style from "../../../styles/Profile.module.css";
import { UserProfileType } from "../../../types/types";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";



type ProfilePropsType = {
  profile: UserProfileType
  isAuth: boolean
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
  saveProfile: (profile: UserProfileType) => Promise<any>
  savePhoto: (file: File) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={style.mainContent}>
      <ProfileInfo 
          saveProfile={props.saveProfile}
          savePhoto={props.savePhoto} 
          isOwner={props.isOwner} 
          profile={props.profile} 
          status={props.status}  
          updateStatus={props.updateStatus} 
          />
      <MyPostsContainer  />
    </div>
  );
}

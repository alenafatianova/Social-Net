import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {UserProfileType} from '../../../redux/profile-reducer'


type ProfilePropsType = {
  profile: UserProfileType
  isAuth: boolean
  status: string
  updateStatus: (status: string) => void
}

export const Profile = React.memo((props: ProfilePropsType) => {

  return (
    
    <div className={classes.mainContent}>
      <ProfileInfo profile={props.profile} status={props.status}  updateStatus={props.updateStatus} />
      <MyPostsContainer  />
    </div>
  );
})

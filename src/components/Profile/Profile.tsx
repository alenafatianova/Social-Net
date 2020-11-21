import React from "react";
import classes from "./Profile.module.scss";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {UserProfileType} from '../../redux/ProfileReducer'

export type ProfileTypeProps = {
  profile: UserProfileType
}


export function Profile (props: ProfileTypeProps) {
  
  return (
    
    <div className={classes.mainContent}>
      
    <ProfileInfo profile={props.profile}/>
    
    <MyPostsContainer  />
    </div>
  );
}
